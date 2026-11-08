// Proves the calculator in script.js gives the same numbers as the original single-file page.
// Run with:  node tests/check-calculator.js
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const assert = require("assert");

const root = path.join(__dirname, "..");

// New model: the region between the "#region model" markers in script.js.
const src = fs.readFileSync(path.join(root, "script.js"), "utf8");
const region = src.match(/\/\/ #region model([\s\S]*?)\/\/ #endregion model/);
if (!region) throw new Error("Model region markers not found in script.js");
const next = vm.runInNewContext(region[1] + "\n;({ K, model, acScale, ACTIONS, rankActions, planSavings })");

// Original model, plus the ranking and plan logic copied from the original update().
const ref = vm.runInNewContext(fs.readFileSync(path.join(__dirname, "reference-model.js"), "utf8") + "\n;({ K, model, acScale, ACTIONS })");
function originalRank(s) {
  const base = ref.model(s);
  const list = ref.ACTIONS.filter(a => a.show(s)).map(a => {
    const t = { ...s }; a.apply(t); const m = ref.model(t);
    return { ...a, w: base.water - m.water, e: base.kwh - m.kwh, c: base.co2 - m.co2 };
  }).filter(a => a.c > 0.05 || a.w > 1).sort((x, y) => y.c - x.c || y.w - x.w);
  return { base, list };
}
function originalPlan(s, chosen) {
  const base = ref.model(s);
  const t = { ...s }; ref.ACTIONS.filter(a => chosen.has(a.id)).forEach(a => a.apply(t));
  const m = ref.model(t);
  return { w: base.water - m.water, e: base.kwh - m.kwh, c: base.co2 - m.co2 };
}

// Values come from separate vm contexts, so compare their exact JSON form (doubles round-trip losslessly).
const same = (a, b, msg) => assert.strictEqual(JSON.stringify(a), JSON.stringify(b), msg);

// 1. Constants are identical.
same(next.K, ref.K, "K constants differ");
same(next.ACTIONS.map(a => a.id), ref.ACTIONS.map(a => a.id), "Action list differs");

// 2. The default example family gives the expected baseline and plan.
const example = { people: 5, heater: "electric", shower: 8, showers: 1, laundry: 5, ac: 2, acHours: 6, acTemp: 22, bulbs: 12, led: 0.5, price: 1.6, tap: true, lowFlow: false, laundryCold: false };
const round = n => Math.round(n);
const base = next.model(example);
const plan = next.planSavings(example, base, new Set(["solar", "lowflow", "tap"]));
console.log(`Example family baseline: ${round(base.water).toLocaleString("en-US")} L, ${round(base.kwh)} kWh, ${round(base.co2)} kg CO2 per month`);
console.log(`Example plan (solar heater + low-flow heads + tap off) saves: ${round(plan.w).toLocaleString("en-US")} L, ${round(plan.e)} kWh, ${round(plan.c)} kg CO2 per month`);
assert.deepStrictEqual([round(base.water), round(base.kwh), round(base.co2)], [24836, 838, 394], "Baseline differs from 24,836 L / 838 kWh / 394 kg");
assert.deepStrictEqual([round(plan.w), round(plan.e), round(plan.c)], [6900, 213, 100], "Plan differs from 6,900 L / 213 kWh / 100 kg");

// 3. Thousands of random households: baseline, every ranked action and random plans match exactly.
let seed = 42;
const rand = () => ((seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648);
const pick = arr => arr[Math.floor(rand() * arr.length)];
const N = 5000;
for (let i = 0; i < N; i++) {
  const s = {
    people: 1 + Math.floor(rand() * 20), heater: pick(["electric", "gas", "solar"]),
    shower: Math.floor(rand() * 26), showers: pick([0, 0.5, 1, 1.5, 2, 3]),
    laundry: Math.floor(rand() * 31), ac: Math.floor(rand() * 11), acHours: Math.floor(rand() * 25),
    acTemp: 16 + Math.floor(rand() * 15), bulbs: Math.floor(rand() * 61), led: Math.floor(rand() * 11) / 10,
    price: Math.round(rand() * 400) / 100, tap: rand() < 0.5, lowFlow: false, laundryCold: false
  };
  const o = originalRank(s);
  const nb = next.model(s);
  same(nb, o.base, `Baseline differs for ${JSON.stringify(s)}`);
  const nl = next.rankActions(s, nb);
  same(nl.map(a => [a.id, a.w, a.e, a.c]), o.list.map(a => [a.id, a.w, a.e, a.c]), `Ranking differs for ${JSON.stringify(s)}`);
  const ids = new Set(o.list.filter(() => rand() < 0.5).map(a => a.id));
  same(next.planSavings(s, nb, ids), originalPlan(s, ids), `Plan differs for ${JSON.stringify(s)}`);
}
console.log(`${N} random households: baseline, ranked actions and plans are identical to the original.`);
console.log("PASS");
