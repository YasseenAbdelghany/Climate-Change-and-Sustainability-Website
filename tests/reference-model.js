/* Verbatim copy of the calculator model from the original single-file aquawatt.html, kept only as a reference for tests/check-calculator.js. */
const K = {
  flow: 9, lowFlow: 6, hotFrac: 0.6,
  kwhPerHotL: 4.186 * 25 / 3600 / 0.9,       // electric heater
  co2PerHotLGas: 4.186 * 25 / 3600 / 0.8 * 0.2, // gas heater, kg
  brushOn: 24, brushOff: 2, toilet: 36, kitchen: 25,
  laundryL: 60, laundryKwh: 0.9, laundryKwhCold: 0.4,
  acKw: 1.1, bulbHours: 5, led: 9, oldBulb: 25, base: 120,
  supplyKwhPerL: 0.0006, grid: 0.47, days: 30
};

function read(){
  const v = id => parseFloat(document.getElementById(id).value);
  const clamp = (x, lo, hi) => isFinite(x) ? Math.min(hi, Math.max(lo, x)) : lo;
  return {
    people: clamp(v("people"), 1, 20), heater: document.getElementById("heater").value,
    shower: clamp(v("shower"), 0, 60), showers: clamp(v("showers"), 0, 5),
    laundry: clamp(v("laundry"), 0, 50), ac: clamp(v("ac"), 0, 20), acHours: clamp(v("acHours"), 0, 24),
    acTemp: clamp(v("acTemp"), 16, 30), bulbs: clamp(v("bulbs"), 0, 100), led: clamp(v("led"), 0, 100) / 100,
    price: clamp(v("price"), 0, 100), tap: document.getElementById("tap").checked,
    lowFlow: false, laundryCold: false
  };
}

function model(s){
  const d = K.days;
  const showerL = s.people * s.showers * s.shower * (s.lowFlow ? K.lowFlow : K.flow);
  const brushL = s.people * (s.tap ? K.brushOn : K.brushOff);
  const loadsWeek = s.laundry * (s.laundryCold ? 0.8 : 1);
  const laundryLday = loadsWeek * K.laundryL / 7;
  const waterDay = showerL + brushL + s.people * (K.toilet + K.kitchen) + laundryLday;
  const water = waterDay * d;

  const hotL = showerL * K.hotFrac * d;
  const heatKwh = s.heater === "electric" ? hotL * K.kwhPerHotL : 0;
  const gasCo2 = s.heater === "gas" ? hotL * K.co2PerHotLGas : 0;
  const acKwh = s.ac * s.acHours * K.acKw * d * acScale(s.acTemp);
  const lightKwh = s.bulbs * K.bulbHours * d * (s.led * K.led + (1 - s.led) * K.oldBulb) / 1000;
  const laundryKwh = loadsWeek * (d / 7) * (s.laundryCold ? K.laundryKwhCold : K.laundryKwh);
  const supplyKwh = water * K.supplyKwhPerL;
  const kwh = heatKwh + acKwh + lightKwh + laundryKwh + supplyKwh + K.base;
  const co2 = kwh * K.grid + gasCo2;
  return { water, kwh, co2 };
}
// AC energy relative to a 25 °C setpoint: about 4% more per degree colder.
function acScale(t){ return 1 + 0.04 * Math.max(0, 25 - t); }

const ACTIONS = [
  { id: "lowflow", t: "Fit low-flow shower heads", why: "Cuts flow from about 9 to 6 L/min with the same feel.", apply: s => (s.lowFlow = true), show: s => s.shower > 0 && s.showers > 0 },
  { id: "shorter", t: "Shower 2 minutes shorter", why: "Less hot water means less heating energy.", apply: s => (s.shower = Math.max(1, s.shower - 2)), show: s => s.shower > 3 && s.showers > 0 },
  { id: "tap", t: "Turn the tap off while brushing", why: "Saves about 22 L per person every day.", apply: s => (s.tap = false), show: s => s.tap },
  { id: "ac", t: "Set the AC to 25 °C", why: "Each degree warmer saves about 4% of cooling energy.", apply: s => (s.acTemp = 25), show: s => s.ac > 0 && s.acHours > 0 && s.acTemp < 25 },
  { id: "led", t: "Switch every bulb to LED", why: "LEDs use roughly a third of the power of older bulbs.", apply: s => (s.led = 1), show: s => s.bulbs > 0 && s.led < 1 },
  { id: "laundry", t: "Wash full loads in cold water", why: "Fewer loads and no water heating in the machine.", apply: s => (s.laundryCold = true), show: s => s.laundry > 0 },
  { id: "solar", t: "Install a solar water heater", why: "Egypt's sunshine can heat almost all household hot water.", apply: s => (s.heater = "solar"), show: s => s.heater !== "solar" }
];
