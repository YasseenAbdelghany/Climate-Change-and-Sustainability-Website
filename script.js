/* ==== Edit team details here ==== */
const TEAM = {
  number: "__",
  members: [
    { name: { ar: "الطالب ١", en: "Student 1" }, role: "researchAnalysis" },
    { name: { ar: "الطالب ٢", en: "Student 2" }, role: "contentDevelopment" },
    { name: { ar: "الطالب ٣", en: "Student 3" }, role: "deployingAI" },
    { name: { ar: "الطالب ٤", en: "Student 4" }, role: "digitalPublishing" },
    { name: { ar: "الطالب ٥", en: "Student 5" }, role: "finalOutput" }
  ]
};

const SITE_URL = "https://yasseenabdelghany.github.io/Climate-Change-and-Sustainability-Website/";

/* ==== Translations: one entry per string, { key: { ar, en } } ==== */
const I18N = {
  "skip": { ar: "تخطَّ إلى المحتوى", en: "Skip to content" },
  "nav.label": { ar: "أقسام الصفحة", en: "Sections" },
  "nav.menu": { ar: "القائمة", en: "Menu" },
  "nav.problem": { ar: "المشكلة", en: "Problem" },
  "nav.research": { ar: "الأبحاث", en: "Research" },
  "nav.calculator": { ar: "الحاسبة", en: "Calculator" },
  "nav.team": { ar: "الفريق", en: "Team" },
  "nav.references": { ar: "المراجع", en: "References" },
  "lang.other": { ar: "English", en: "العربية" },
  "lang.switch": { ar: "Switch to English", en: "التبديل إلى العربية" },
  "theme.toDark": { ar: "التبديل إلى الوضع الداكن", en: "Switch to dark mode" },
  "theme.toLight": { ar: "التبديل إلى الوضع الفاتح", en: "Switch to light mode" },
  "storage.blocked": { ar: "متصفحك يمنع التخزين المحلي، لذلك لن يُحفظ تقدّمك بعد إغلاق الصفحة. كل شيء آخر يعمل كالمعتاد.", en: "Your browser is blocking local storage, so your progress will not be kept after you close this page. Everything else still works." },
  "storage.dismiss": { ar: "حسنًا", en: "OK" },

  "tag.6": { ar: "الهدف ٦ · المياه النظيفة", en: "SDG 6 · Clean water" },
  "tag.7": { ar: "الهدف ٧ · الطاقة النظيفة", en: "SDG 7 · Clean energy" },
  "tag.13": { ar: "الهدف ١٣ · العمل المناخي", en: "SDG 13 · Climate action" },
  "hero.title": { ar: 'كل لتر مياه توفّره يوفّر معه <span class="e">الكهرباء</span> ويقلّل <span class="c">انبعاثات الكربون</span>.', en: 'Every litre you save also saves <span class="e">energy</span> and cuts <span class="c">CO₂</span>.' },
  "hero.lead": { ar: "المياه والكهرباء والمناخ مشكلة واحدة مترابطة. تسخين المياه وضخّها ومعالجتها يحتاج إلى كهرباء، ومعظم الكهرباء في مصر ما زال يُنتَج من الوقود الأحفوري. يوضّح AquaWatt لكل أسرة حجم استهلاكها، وأيّ التغييرات الصغيرة توفّر أكثر.", en: "Water, electricity and climate are one connected problem. Heating, pumping and treating water uses power, and in Egypt most power still comes from fossil fuels. AquaWatt shows a household how much it uses and which small changes save the most." },
  "hero.cta": { ar: "احسب بصمة بيتك ←", en: "Calculate your home's footprint →" },
  "facts.label": { ar: "حقائق رئيسية من تقرير الأمم المتحدة لأهداف التنمية المستدامة ٢٠٢٦", en: "Key facts from the UN SDG Report 2026" },
  "fact1.big": { ar: "+٧٥٪", en: ">75%" },
  "fact1.text": { ar: "نسبة الإجهاد المائي في شمال أفريقيا وغرب آسيا، وهما أكثر مناطق العالم إجهادًا مائيًا", en: "water stress in Northern Africa and Western Asia, the most water-stressed regions on Earth" },
  "fact1.src": { ar: "تقرير أهداف التنمية المستدامة ٢٠٢٦ · الهدف ٦", en: "UN SDG REPORT 2026 · GOAL 6" },
  "fact2.big": { ar: "٦٥٥ مليون", en: "655M" },
  "fact2.text": { ar: "شخص ظلّوا بلا كهرباء في ٢٠٢٤، ولم تتجاوز الطاقة المتجددة ١٨٪ من استهلاك الطاقة في العالم", en: "people still had no electricity in 2024, and renewables were only 18% of global energy use" },
  "fact2.src": { ar: "تقرير أهداف التنمية المستدامة ٢٠٢٦ · الهدف ٧", en: "UN SDG REPORT 2026 · GOAL 7" },
  "fact3.big": { ar: "٥٧٫٧ غيغاطن", en: "57.7 Gt" },
  "fact3.text": { ar: "من مكافئ ثاني أكسيد الكربون انبعثت في ٢٠٢٤، وهو رقم قياسي. وكانت الفترة ٢٠١٥–٢٠٢٥ أشدّ ١١ عامًا حرارةً منذ بدء التسجيل", en: "CO₂-equivalent emitted in 2024, a record. 2015–2025 was the hottest 11-year stretch on record" },
  "fact3.src": { ar: "تقرير أهداف التنمية المستدامة ٢٠٢٦ · الهدف ١٣", en: "UN SDG REPORT 2026 · GOAL 13" },

  "problem.eyebrow": { ar: "المشكلة", en: "The problem" },
  "problem.title": { ar: "ثلاثة أهداف، ومشكلة واحدة في كل بيت", en: "Three goals, one household problem" },
  "problem.lead": { ar: "يُظهر تقرير الأمم المتحدة لأهداف التنمية المستدامة ٢٠٢٦ أن الإجهاد المائي لا يتحسّن، وأن الطاقة النظيفة تنمو ببطء شديد، وأن الانبعاثات ما زالت ترتفع. والبيوت في الدول التي تعاني شحّ المياه، مثل مصر، تقع في قلب المشكلات الثلاث.", en: "The UN Sustainable Development Goals Report 2026 shows that water stress is not improving, clean energy is growing too slowly, and emissions are still rising. Households in water-scarce countries like Egypt sit where all three meet." },
  "goal6.num": { ar: "الهدف ٦", en: "SDG 6" },
  "goal6.title": { ar: "المياه النظيفة والصرف الصحي", en: "Clean water and sanitation" },
  "goal6.1": { ar: "٢٫١ مليار شخص لا يحصلون على مياه شرب مُدارة بأمان.", en: "2.1 billion people lack safely managed drinking water." },
  "goal6.2": { ar: "الإجهاد المائي العالمي ثابت عند ١٨٪، تقريبًا كما كان في ٢٠١٥.", en: "Global water stress is stuck at 18%, nearly the same as 2015." },
  "goal6.3": { ar: "ويتجاوز ٧٥٪ في شمال أفريقيا وغرب آسيا.", en: "In Northern Africa and Western Asia it is above 75%." },
  "goal7.num": { ar: "الهدف ٧", en: "SDG 7" },
  "goal7.title": { ar: "طاقة نظيفة وبأسعار معقولة", en: "Affordable and clean energy" },
  "goal7.1": { ar: "الطاقة المتجددة تغطي ١٨٪ فقط من الاستهلاك النهائي للطاقة.", en: "Renewables supply only 18% of final energy use." },
  "goal7.2": { ar: "قطاع الكهرباء في المقدمة، بحصة متجددة تزيد قليلًا على ٣٠٪.", en: "Electricity is the leading sector, at just over 30% renewable." },
  "goal7.3": { ar: "تباطأ تحسّن كفاءة استخدام الطاقة إلى ١٫٥٪ في ٢٠٢٣، أقل من المستهدف.", en: "Energy-intensity gains slowed to 1.5% in 2023, below target." },
  "goal13.num": { ar: "الهدف ١٣", en: "SDG 13" },
  "goal13.title": { ar: "العمل المناخي", en: "Climate action" },
  "goal13.1": { ar: "وصل عام ٢٠٢٤ إلى ١٫٥٥ درجة مئوية فوق مستويات ما قبل الثورة الصناعية.", en: "2024 reached 1.55 °C above pre-industrial levels." },
  "goal13.2": { ar: "التعهدات الحالية ما زالت تقود إلى احترار بين ٢٫٣ و٢٫٥ درجة مئوية.", en: "Current pledges still lead to 2.3–2.5 °C of warming." },
  "goal13.3": { ar: "مناخ أكثر حرارة يعني موجات جفاف أكثر وطلبًا أعلى على المياه.", en: "A hotter climate means more droughts and higher water demand." },
  "loop.title": { ar: "حلقة المياه والطاقة والمناخ", en: "The water-energy-climate loop" },
  "loop.water": { ar: "استخدام المياه", en: "Water use" },
  "loop.waterSub": { ar: "الاستحمام، الحنفيات، الغسيل", en: "showers, taps, laundry" },
  "loop.energy": { ar: "الكهرباء", en: "Electricity" },
  "loop.energySub": { ar: "التسخين، الضخ، المعالجة", en: "heating, pumping, treating" },
  "loop.co2": { ar: "انبعاثات CO₂", en: "CO₂ emissions" },
  "loop.co2Sub": { ar: "معظمها من محطات تعمل بالغاز", en: "mostly gas-fired power" },
  "loop.back": { ar: "الاحترار ← جفاف وحرّ ← طلب أكبر على المياه والتبريد", en: "warming → drought and heat → more water and cooling demand" },
  "loop.cap": { ar: "لهذا نتعامل مع الأهداف ٦ و٧ و١٣ معًا. توفير المياه الساخنة هو الأكثر أثرًا، لأن تسخين المياه يحتاج إلى طاقة أكبر بكثير من ضخّها.", en: "This loop is why we treat SDG 6, 7 and 13 together. Saving hot water saves the most, because heating water takes far more energy than pumping it." },

  "research.eyebrow": { ar: "ماذا تقول الأبحاث", en: "What the research says" },
  "research.title": { ar: "معرفة الاستهلاك تغيّر السلوك، بشرط أن تكون محددة", en: "Feedback changes behaviour, if it is specific" },
  "research.lead": { ar: "راجعنا دراسات علمية محكّمة عن استهلاك المياه والطاقة في البيوت، وعن أدوات متابعة الاستهلاك، وعن الوضع المائي في مصر. هذه أهم النتائج التي بنينا عليها تصميمنا.", en: "We reviewed peer-reviewed studies on household water and energy use, feedback tools and Egypt's water situation. These are the findings that shaped our design." },
  "f1.big": { ar: "٨٪", en: "8%" },
  "f1.text": { ar: "<strong>توفير دائم في المياه بفضل متابعة العدّادات الذكية.</strong> نحو ٤٧٪ من ٣٣٤ أسرة في فالنسيا استمرّت في استهلاك مياه أقل بنسبة ٨٪ بعد أكثر من عامين.", en: "<strong>Lasting water savings from smart-meter feedback.</strong> About 47% of 334 households in Valencia kept using 8% less water more than two years later." },
  "f2.big": { ar: "≈١٠٪", en: "~10%" },
  "f2.text": { ar: "<strong>بصمة كربونية أقل بعد استخدام حاسبة.</strong> خفّض المستخدمون انبعاثاتهم بنحو ١٠٪ في الأسابيع الأولى، ثم تلاشى الأثر دون متابعة.", en: "<strong>Lower carbon footprint after using a calculator.</strong> Users cut emissions about 10% in the first weeks, then the effect faded without follow-up." },
  "f3.big": { ar: "٤٢", en: "42" },
  "f3.text": { ar: "<strong>دراسة شملها تحليل تجميعي عن أثر متابعة الاستهلاك.</strong> المتابعة تقلّل استهلاك الطاقة عمومًا، وأفضل النتائج تأتي من متابعة متكررة مع أهداف واضحة.", en: "<strong>Studies in a feedback meta-analysis.</strong> Feedback reduces energy use overall. Frequent feedback combined with goals works best." },
  "f4.big": { ar: "٦٫٣٪", en: "6.3%" },
  "f4.text": { ar: "<strong>توفير لدى الأعلى استهلاكًا</strong> عندما قُورن استهلاكهم باستهلاك جيرانهم، مقابل ٢٫٠٪ في المتوسط.", en: "<strong>Savings for the highest users</strong> when they were compared with their neighbours, versus 2.0% on average." },
  "f5.big": { ar: "٢٣٪", en: "23%" },
  "f5.text": { ar: "<strong>فقط من مستخدمي حاسبات البصمة شعروا أنهم يعرفون ماذا يفعلون.</strong> ٩١٪ تعلّموا شيئًا جديدًا و٧٨٪ شعروا بالحماس، لكن معظمهم افتقد خطوات عملية واضحة.", en: "<strong>Of footprint-calculator users felt they knew how to act.</strong> 91% learned something and 78% felt motivated, but most lacked concrete steps." },
  "f6.big": { ar: "١٠٪", en: "10%" },
  "f6.text": { ar: "<strong>انخفاض محتمل في تدفّق النيل إلى بحيرة ناصر بحلول ٢٠٩٥</strong> وفق أحد التوقعات، مع اختلاف النماذج. وصعيد مصر يعاني بالفعل من شحّ المياه.", en: "<strong>Possible drop in Nile inflow to Lake Nasser by 2095</strong> in one projection, though models disagree. Upper Egypt is already water-scarce." },
  "gap.text": { ar: "<strong>الفجوة التي نستهدفها:</strong> معظم الحاسبات تخبر الناس ببصمتهم، لكنها لا تقول لهم ماذا يفعلون بعد ذلك. يحوّل AquaWatt أرقامك إلى قائمة إجراءات مرتّبة، لكلٍّ منها توفيره في المياه والطاقة وCO₂ والمال، ويساعدك على بناء خطة خاصة بأسرتك.", en: "<strong>The gap we target:</strong> most calculators tell people their footprint but not what to do next. AquaWatt turns your numbers into a ranked list of actions, each with its own water, energy, CO₂ and money savings, and lets you build a personal plan." },

  "calc.eyebrow": { ar: "حلّنا", en: "Our solution" },
  "calc.title": { ar: "حاسبة AquaWatt المنزلية", en: "AquaWatt household calculator" },
  "calc.lead": { ar: "أدخل عادات أسرتك، وستتغيّر الأرقام فورًا. لا يغادر أي شيء تكتبه متصفحك. تبدأ الحاسبة بمثال لأسرة من خمسة أفراد.", en: "Enter your household's habits. The numbers update instantly, and nothing you type leaves your browser. The form starts with an example family of five." },
  "calc.formTitle": { ar: "أسرتك", en: "Your household" },
  "calc.reset": { ar: "العودة إلى مثال الأسرة", en: "Reset to the example family" },
  "calc.people": { ar: "عدد أفراد البيت", en: "People at home" },
  "calc.heater": { ar: "سخّان المياه", en: "Water heater" },
  "calc.heaterElectric": { ar: "كهربائي", en: "Electric" },
  "calc.heaterGas": { ar: "غاز", en: "Gas" },
  "calc.heaterSolar": { ar: "شمسي", en: "Solar" },
  "calc.shower": { ar: "متوسط مدة الاستحمام:", en: "Average shower length:" },
  "unit.min": { ar: "دقيقة", en: "min" },
  "calc.showers": { ar: "مرّات الاستحمام لكل فرد يوميًا", en: "Showers per person per day" },
  "calc.laundry": { ar: "غسلات الغسالة في الأسبوع", en: "Laundry loads per week" },
  "calc.ac": { ar: "عدد أجهزة التكييف المستخدمة", en: "Air conditioners used" },
  "calc.acHours": { ar: "ساعات التكييف يوميًا (في الصيف)", en: "AC hours per day (summer)" },
  "calc.acTemp": { ar: "درجة حرارة التكييف (°م)", en: "AC temperature (°C)" },
  "calc.bulbs": { ar: "عدد لمبات الإضاءة في البيت", en: "Light bulbs at home" },
  "calc.led": { ar: "نسبة لمبات LED:", en: "Share of bulbs that are LED:" },
  "calc.price": { ar: "سعر الكهرباء (جنيه لكل ك.و.س)", en: "Electricity price (EGP/kWh)" },
  "calc.priceHint": { ar: "راجع فاتورتك، فالسعر يختلف حسب الشريحة.", en: "Check your bill; prices vary by tier." },
  "calc.tap": { ar: "الحنفية مفتوحة أثناء غسل الأسنان", en: "Tap runs while brushing teeth" },
  "calc.resultsTitle": { ar: "بصمة أسرتك الشهرية", en: "Your monthly footprint" },
  "meter.water": { ar: "المياه", en: "Water" },
  "meter.waterUnit": { ar: "لتر / شهر", en: "litres / month" },
  "meter.energy": { ar: "الكهرباء", en: "Electricity" },
  "meter.energyUnit": { ar: "ك.و.س / شهر", en: "kWh / month" },
  "meter.co2": { ar: "CO₂", en: "CO₂" },
  "meter.co2Unit": { ar: "كجم / شهر", en: "kg / month" },
  "calc.actionsTitle": { ar: "إجراءات مرتّبة حسب توفير CO₂", en: "Actions ranked by CO₂ saved" },
  "calc.actionsHint": { ar: "اختر ما ستلتزم به أسرتك لتبني خطتك.", en: "Tick the ones your family will do to build your plan." },
  "calc.allDone": { ar: "أسرتك تطبّق بالفعل كل ما في قائمتنا. أحسنتم.", en: "Your household already does everything on our list. Well done." },
  "act.lowflow.t": { ar: "ركّب رؤوس دُش موفّرة للمياه", en: "Fit low-flow shower heads" },
  "act.lowflow.why": { ar: "تقلّل التدفق من نحو ٩ إلى ٦ لترات في الدقيقة بنفس الإحساس.", en: "Cuts flow from about 9 to 6 L/min with the same feel." },
  "act.shorter.t": { ar: "قلّل مدة الاستحمام دقيقتين", en: "Shower 2 minutes shorter" },
  "act.shorter.why": { ar: "مياه ساخنة أقل تعني طاقة تسخين أقل.", en: "Less hot water means less heating energy." },
  "act.tap.t": { ar: "اقفل الحنفية أثناء غسل الأسنان", en: "Turn the tap off while brushing" },
  "act.tap.why": { ar: "يوفّر نحو ٢٢ لترًا لكل فرد كل يوم.", en: "Saves about 22 L per person every day." },
  "act.ac.t": { ar: "اضبط التكييف على ٢٥ درجة", en: "Set the AC to 25 °C" },
  "act.ac.why": { ar: "كل درجة أعلى توفّر نحو ٤٪ من طاقة التبريد.", en: "Each degree warmer saves about 4% of cooling energy." },
  "act.led.t": { ar: "غيّر كل اللمبات إلى LED", en: "Switch every bulb to LED" },
  "act.led.why": { ar: "لمبات LED تستهلك نحو ثلث كهرباء اللمبات القديمة.", en: "LEDs use roughly a third of the power of older bulbs." },
  "act.laundry.t": { ar: "اغسل بحمولة كاملة وماء بارد", en: "Wash full loads in cold water" },
  "act.laundry.why": { ar: "غسلات أقل، ولا تسخين للمياه داخل الغسالة.", en: "Fewer loads and no water heating in the machine." },
  "act.solar.t": { ar: "ركّب سخّانًا شمسيًا", en: "Install a solar water heater" },
  "act.solar.why": { ar: "شمس مصر قادرة على تسخين كل مياه البيت الساخنة تقريبًا.", en: "Egypt's sunshine can heat almost all household hot water." },
  "chip.money": { ar: "≈ {n} جنيه / شهر", en: "≈ {n} EGP / month" },
  "plan.title": { ar: "خطتك", en: "Your plan" },
  "plan.empty": { ar: "اختر إجراءً من الأعلى لترى ما توفّره أسرتك.", en: "Tick an action above to see what your family saves." },
  "plan.count": {
    ar: { one: "إجراء واحد", two: "إجراءان", few: "{n} إجراءات", many: "{n} إجراءً", other: "{n} إجراء" },
    en: { one: "{n} action", other: "{n} actions" }
  },
  "plan.saves": { ar: "توفّر {w} لتر مياه و{e} ك.و.س و{c} كجم CO₂ كل شهر.", en: "Saves {w} L of water, {e} kWh and {c} kg of CO₂ every month." },
  "plan.year": { ar: "خلال سنة: نحو {m3} م³ من المياه و{c} كجم CO₂ و{egp} جنيه. أي مياه أقل بنسبة {pw}٪ وCO₂ أقل بنسبة {pc}٪.", en: "Over a year: about {m3} m³ of water, {c} kg of CO₂ and {egp} EGP. That is {pw}% less water and {pc}% less CO₂." },
  "unit.L": { ar: "لتر", en: "L" },
  "unit.kWh": { ar: "ك.و.س", en: "kWh" },
  "unit.kgCO2": { ar: "كجم CO₂", en: "kg CO₂" },

  "unit.kg": { ar: "كجم", en: "kg" },
  "impact.title": { ar: "ما وفّره بيتنا", en: "Our home's savings" },
  "impact.note": { ar: "تقديرات من الحاسبة، وليست قياسات فعلية.", en: "Estimates from the calculator, not measured savings." },
  "impact.water": { ar: "مياه موفّرة", en: "Water saved" },
  "impact.energy": { ar: "كهرباء موفّرة", en: "Electricity saved" },
  "impact.co2": { ar: "CO₂ تجنّبناه", en: "CO₂ avoided" },
  "impact.months": { ar: "أشهر مسجّلة", en: "Months tracked" },
  "impact.empty": { ar: "ابنِ خطة في الحاسبة، ثم سجّل كل شهر تلتزم فيه أسرتك بها.", en: "Build a plan in the calculator, then mark each month your family follows it." },
  "impact.go": { ar: "اذهب إلى خطتك", en: "Go to your plan" },
  "track.mark": { ar: "طبّقنا خطتنا هذا الشهر", en: "We did our plan this month" },
  "track.done": { ar: "✓ سُجّل شهر {month}", en: "✓ Added for {month}" },
  "track.undo": { ar: "تراجع", en: "Undo" },
  "track.needPlan": { ar: "اختر إجراءً واحدًا على الأقل لتسجّل شهرك.", en: "Choose at least one action to record your month." },
  "track.ready": { ar: "يضيف توفير خطتك الشهري إلى إجمالي بيتك لشهر {month}. مرة واحدة كل شهر.", en: "Adds your plan's monthly savings to your home's totals for {month}. Once per month." },
  "track.added": { ar: "أُضيف توفير شهر {month} إلى إجمالي بيتك.", en: "{month}'s savings were added to your home's totals." },
  "track.undone": { ar: "أُلغي تسجيل شهر {month}.", en: "{month} was removed from your totals." },
  "track.again": { ar: "يمكنك التسجيل مرة أخرى الشهر القادم. لتغيير ما سُجّل، تراجع ثم سجّل من جديد.", en: "You can record again next month. To change this month, undo and record again." },
  "nav.quiz": { ar: "اختبار العادات", en: "Habits quiz" },
  "quiz.eyebrow": { ar: "فحص العادات", en: "Habits check" },
  "quiz.title": { ar: "ما مدى حرص بيتكم على المياه والطاقة؟", en: "How water- and energy-wise is your home?" },
  "quiz.lead": { ar: "سبعة أسئلة سريعة عن العادات اليومية، تحصلون بعدها على ملف عاداتكم وأهم ثلاث نصائح تفيد بيتكم.", en: "Seven quick questions about everyday habits. You get a habit profile and the three tips that would help your home most." },
  "quiz.count": { ar: "السؤال {n} من {total}", en: "Question {n} of {total}" },
  "quiz.back": { ar: "السابق", en: "Back" },
  "quiz.next": { ar: "التالي", en: "Next" },
  "quiz.finish": { ar: "اعرض نتيجتي", en: "See my result" },
  "quiz.retake": { ar: "أعيدوا الاختبار", en: "Retake the quiz" },
  "quiz.yourProfile": { ar: "ملف عاداتكم", en: "Your habit profile" },
  "quiz.score": { ar: "{score} من {max} نقطة", en: "{score} of {max} points" },
  "quiz.tipsTitle": { ar: "أهم النصائح لبيتكم", en: "Your top tips" },
  "quiz.noTips": { ar: "لا نقاط ضعف: حصلت كل إجاباتكم على الدرجة الكاملة.", en: "No weak spots: every answer scored full points." },
  "quiz.tipMeta": { ar: "إجابتكم: {n} من ٣ نقاط", en: "Your answer: {n} of 3 points" },
  "quiz.showCalc": { ar: "اعرضه في الحاسبة", en: "Show it in the calculator" },
  "quiz.showBills": { ar: "افتح متتبّع الفواتير", en: "Open the bill tracker" },
  "quiz.howTitle": { ar: "كيف تُحسب النقاط", en: "How the points work" },
  "quiz.how1": { ar: "كل إجابة تعطي من ٠ إلى ٣ نقاط. ٣ نقاط هي العادة الأكثر توفيرًا للمياه والطاقة، و٠ هي الأقل.", en: "Each answer gives 0 to 3 points. 3 points is the most water- and energy-wise habit, 0 is the least." },
  "quiz.how2": { ar: "مجموعكم من ٢١ نقطة يحدّد ملفكم:", en: "Your total out of 21 sets your profile:" },
  "quiz.how3": { ar: "النصائح تأتي من أقل إجاباتكم نقاطًا. وعند التعادل، تتقدّم العادة التي توفّر طاقة أكثر في حاسبتنا.", en: "Tips come from your lowest-scoring answers. When two answers tie, the habit that saves more energy in our calculator comes first." },
  "quiz.saved": { ar: "إجاباتكم محفوظة على هذا الجهاز فقط.", en: "Your answers are saved on this device only." },
  "quiz.band": { ar: "{from}–{to} نقطة: ", en: "{from}–{to} points: " },
  "q.shower": { ar: "كم تستغرق مدة الاستحمام المعتادة في بيتكم؟", en: "How long is a typical shower in your home?" },
  "q.shower.0": { ar: "أقل من ٥ دقائق", en: "Under 5 minutes" },
  "q.shower.1": { ar: "من ٥ إلى ٨ دقائق", en: "5 to 8 minutes" },
  "q.shower.2": { ar: "من ٩ إلى ١٢ دقيقة", en: "9 to 12 minutes" },
  "q.shower.3": { ar: "أكثر من ١٢ دقيقة", en: "More than 12 minutes" },
  "q.tap": { ar: "هل تقفلون الحنفية أثناء غسل الأسنان أو تصبين الأطباق؟", en: "Do you turn the tap off while brushing your teeth or soaping dishes?" },
  "q.tap.0": { ar: "دائمًا", en: "Always" },
  "q.tap.1": { ar: "غالبًا", en: "Usually" },
  "q.tap.2": { ar: "أحيانًا", en: "Sometimes" },
  "q.tap.3": { ar: "نادرًا", en: "Rarely" },
  "q.ac": { ar: "في الصيف، على أي درجة تضبطون التكييف عادةً؟", en: "In summer, what temperature is your AC usually set to?" },
  "q.ac.0": { ar: "لا نستخدم التكييف", en: "We do not use AC" },
  "q.ac.1": { ar: "٢٥ درجة أو أعلى", en: "25 °C or warmer" },
  "q.ac.2": { ar: "من ٢٣ إلى ٢٤ درجة", en: "23 to 24 °C" },
  "q.ac.3": { ar: "من ٢٠ إلى ٢٢ درجة", en: "20 to 22 °C" },
  "q.ac.4": { ar: "أقل من ٢٠ درجة", en: "Below 20 °C" },
  "q.lights": { ar: "أي وصف ينطبق على الإضاءة في بيتكم؟", en: "Which best describes your lighting?" },
  "q.lights.0": { ar: "كلها LED، ونطفئ الأنوار في الغرف الفارغة", en: "All LED, and we switch off lights in empty rooms" },
  "q.lights.1": { ar: "معظمها LED", en: "Mostly LED" },
  "q.lights.2": { ar: "خليط من LED ولمبات قديمة", en: "A mix of LED and older bulbs" },
  "q.lights.3": { ar: "معظمها لمبات قديمة، وتبقى مضاءة كثيرًا", en: "Mostly older bulbs, often left on" },
  "q.laundry": { ar: "كيف تشغّلون الغسالة عادةً؟", en: "How do you usually run the washing machine?" },
  "q.laundry.0": { ar: "حمولة كاملة بماء بارد", en: "Full loads in cold water" },
  "q.laundry.1": { ar: "حمولة كاملة بماء دافئ أو ساخن", en: "Full loads in warm or hot water" },
  "q.laundry.2": { ar: "حمولة غير كاملة في أحيان كثيرة", en: "Often half loads" },
  "q.laundry.3": { ar: "حمولات صغيرة بماء ساخن عدة مرات في الأسبوع", en: "Small hot-water loads several times a week" },
  "q.heater": { ar: "كيف تُسخَّن المياه في بيتكم؟", en: "How is your hot water heated?" },
  "q.heater.0": { ar: "سخّان شمسي", en: "Solar water heater" },
  "q.heater.1": { ar: "سخّان غاز", en: "Gas heater" },
  "q.heater.2": { ar: "سخّان كهربائي نشغّله عند الحاجة فقط", en: "Electric heater, switched on only when needed" },
  "q.heater.3": { ar: "سخّان كهربائي يعمل طوال اليوم", en: "Electric heater left on all day" },
  "q.bills": { ar: "كم مرة تراجعون فواتير الكهرباء والمياه؟", en: "How often do you check your electricity and water bills?" },
  "q.bills.0": { ar: "كل شهر، ونقارنها بالشهر السابق", en: "Every month, and we compare with last month" },
  "q.bills.1": { ar: "كل شهر", en: "Every month" },
  "q.bills.2": { ar: "فقط عندما تبدو الفاتورة مرتفعة", en: "Only when a bill looks high" },
  "q.bills.3": { ar: "نادرًا أو لا نراجعها", en: "Rarely or never" },
  "tip.shower.t": { ar: "قصّروا الاستحمام دقيقتين", en: "Shorten showers by 2 minutes" },
  "tip.shower.why": { ar: "مياه الاستحمام الساخنة هي أكبر استهلاك للطاقة مرتبط بالمياه في البيت، ورؤوس الدُش الموفّرة تساعد أيضًا.", en: "Hot shower water is the biggest water-related energy use at home, and low-flow heads help too." },
  "tip.tap.t": { ar: "اقفلوا الحنفية أثناء غسل الأسنان", en: "Turn the tap off while brushing" },
  "tip.tap.why": { ar: "توفير نحو ٢٢ لترًا لكل فرد يوميًا، دون أي تكلفة.", en: "About 22 L saved per person every day, at no cost." },
  "tip.ac.t": { ar: "اضبطوا التكييف على ٢٥ درجة", en: "Set the AC to 25 °C" },
  "tip.ac.why": { ar: "كل درجة أعلى توفّر نحو ٤٪ من طاقة التبريد.", en: "Each degree warmer saves about 4% of cooling energy." },
  "tip.lights.t": { ar: "استبدلوا اللمبات بـ LED وأطفئوا الغرف الفارغة", en: "Switch to LED and turn off lights in empty rooms" },
  "tip.lights.why": { ar: "لمبات LED تستهلك نحو ثلث كهرباء اللمبات القديمة.", en: "LEDs use roughly a third of the power of older bulbs." },
  "tip.laundry.t": { ar: "اغسلوا حمولة كاملة بماء بارد", en: "Wash full loads in cold water" },
  "tip.laundry.why": { ar: "غسلات أقل، ولا تسخين للمياه داخل الغسالة.", en: "Fewer loads and no water heating in the machine." },
  "tip.heater.t": { ar: "فكّروا في سخّان شمسي", en: "Consider a solar water heater" },
  "tip.heater.why": { ar: "شمس مصر قادرة على تسخين كل مياه البيت الساخنة تقريبًا.", en: "Egypt's sunshine can heat almost all household hot water." },
  "tip.bills.t": { ar: "تابعوا فواتيركم كل شهر", en: "Track your bills every month" },
  "tip.bills.why": { ar: "المتابعة المتكررة مع أهداف واضحة تحقق أكبر توفير في الطاقة (Karlin et al., 2015).", en: "Frequent feedback with clear goals saves the most energy (Karlin et al., 2015)." },
  "profile.0": { ar: "جاهزون للبداية", en: "Ready to start" },
  "profile.0.text": { ar: "تغييرات صغيرة ستُحدث فرقًا كبيرًا في بيتكم. ابدؤوا بالنصائح التالية.", en: "Small changes will make a big difference in your home. Start with the tips below." },
  "profile.1": { ar: "في منتصف الطريق", en: "Halfway there" },
  "profile.1.text": { ar: "لديكم بالفعل عادات جيدة، وبعض التغييرات ستأخذ بيتكم أبعد بكثير.", en: "You already have some good habits. A few changes will take your home much further." },
  "profile.2": { ar: "موفّرون حريصون", en: "Careful savers" },
  "profile.2.text": { ar: "بيتكم يستخدم المياه والطاقة بحكمة. بقيت لمسات أخيرة على بعض العادات.", en: "Your home already uses water and energy wisely. Fine-tune the last few habits." },
  "profile.3": { ar: "أبطال التوفير", en: "Home champions" },
  "profile.3.text": { ar: "عادات ممتازة. شاركوها مع العائلة والجيران، فالمقارنة مع الآخرين تشجّع على التوفير (Allcott, 2011).", en: "Excellent habits. Share them with family and neighbours: comparing with others helps people save (Allcott, 2011)." },
  "nav.bills": { ar: "الفواتير", en: "Bills" },
  "bills.eyebrow": { ar: "متتبّع الفواتير", en: "Bill tracker" },
  "bills.title": { ar: "تابِع فواتيرك الحقيقية شهرًا بشهر", en: "Track your real bills, month by month" },
  "bills.lead": { ar: "أدخل استهلاك كل شهر من الكهرباء (ك.و.س) والمياه (م³) كما في فواتيرك. سترى الاتجاه، والتغيّر عن الشهر السابق، ورقمًا تقريبيًا لانبعاثات CO₂. كل شيء يبقى على هذا الجهاز.", en: "Enter each month's electricity (kWh) and water (m³) from your bills. You will see the trend, the change from the month before and an approximate CO₂ figure. Everything stays on this device." },
  "bills.add": { ar: "أضف شهرًا", en: "Add a month" },
  "bills.edit": { ar: "تعديل {month}", en: "Edit {month}" },
  "bills.month": { ar: "الشهر", en: "Month" },
  "bills.year": { ar: "السنة", en: "Year" },
  "bills.kwh": { ar: "الكهرباء (ك.و.س)", en: "Electricity (kWh)" },
  "bills.m3": { ar: "المياه (م³)", en: "Water (m³)" },
  "bills.co2": { ar: "CO₂ (≈ كجم)", en: "CO₂ (≈ kg)" },
  "bills.actions": { ar: "إجراءات", en: "Actions" },
  "bills.save": { ar: "أضف الشهر", en: "Add month" },
  "bills.saveEdit": { ar: "احفظ التعديل", en: "Save changes" },
  "bills.cancel": { ar: "إلغاء", en: "Cancel" },
  "bills.editBtn": { ar: "تعديل", en: "Edit" },
  "bills.deleteBtn": { ar: "حذف", en: "Delete" },
  "bills.editLabel": { ar: "تعديل {month}", en: "Edit {month}" },
  "bills.deleteLabel": { ar: "حذف {month}", en: "Delete {month}" },
  "bills.confirmDelete": { ar: "هل تريد حذف بيانات {month}؟", en: "Delete the entry for {month}?" },
  "bills.tableCaption": { ar: "الأشهر المسجّلة", en: "Your entries" },
  "bills.noRows": { ar: "لم تُضِف أي شهر بعد.", en: "No months added yet." },
  "bills.errFuture": { ar: "هذا الشهر لم يأتِ بعد. اختر هذا الشهر أو شهرًا سابقًا.", en: "That month has not happened yet. Choose this month or an earlier one." },
  "bills.errDup": { ar: "لديك بالفعل بيانات {month}. استخدم «تعديل» في صفّه لتغييرها.", en: "You already have {month}. Use Edit on that row to change it." },
  "bills.errKwh": { ar: "أدخل استهلاك الكهرباء رقمًا موجبًا بالكيلوواط ساعة.", en: "Enter electricity use as a positive number of kWh." },
  "bills.errM3": { ar: "أدخل استهلاك المياه رقمًا موجبًا بالمتر المكعب.", en: "Enter water use as a positive number of m³." },
  "bills.errBig": { ar: "هذا الرقم يبدو كبيرًا جدًا لبيت واحد. راجع الفاتورة.", en: "That number looks too large for one home. Check the bill." },
  "bills.co2Note": { ar: "رقم CO₂ تقريبي: (ك.و.س + م³ × ٠٫٦) × ٠٫٤٧ كجم، باستخدام معامل الشبكة وطاقة إمداد المياه من الحاسبة.", en: "CO₂ is approximate: (kWh + m³ × 0.6) × 0.47 kg, using the calculator's grid factor and water-supply energy." },
  "bills.chartEmpty": { ar: "أضف شهرًا واحدًا على الأقل لترى الرسم، وشهرين لترى الاتجاه.", en: "Add at least one month to see the chart, and two to see a trend." },
  "bills.chartLabel": { ar: "رسمان خطيان لاستهلاك الكهرباء والمياه خلال {n} شهر. الأرقام نفسها في الجدول أسفله.", en: "Line charts of electricity and water use over {n} months. The same numbers are in the table below." },
  "bills.latest": { ar: "آخر شهر: {v} {unit}", en: "Latest: {v} {unit}" },
  "bills.change": { ar: "{pct} عن {month}", en: "{pct} vs {month}" },
  "data.title": { ar: "بياناتك", en: "Your data" },
  "data.text": { ar: "احفظ نسخة احتياطية من كل ما يحفظه AquaWatt على هذا الجهاز (الحاسبة، والتوفير، والاختبار، والفواتير)، أو افتحها على هاتف أو كمبيوتر آخر.", en: "Save a backup of everything AquaWatt keeps on this device (calculator, savings, quiz and bills), or load it on another phone or computer." },
  "data.export": { ar: "صدّر بياناتي (JSON)", en: "Export my data (JSON)" },
  "data.import": { ar: "استورد من ملف", en: "Import from a file" },
  "data.exported": { ar: "تم تنزيل الملف {file}.", en: "Downloaded {file}." },
  "data.confirmImport": { ar: "هل تريد استبدال بيانات AquaWatt على هذا الجهاز ببيانات هذا الملف؟", en: "Replace the AquaWatt data on this device with the data in this file?" },
  "data.imported": { ar: "تم الاستيراد. جارٍ إعادة تحميل الصفحة…", en: "Imported. Reloading the page…" },
  "data.invalid": { ar: "هذا الملف ليس نسخة احتياطية صالحة من AquaWatt.", en: "This file is not a valid AquaWatt backup." },
  "data.noStorage": { ar: "الاستيراد يحتاج إلى التخزين المحلي، وهو محظور في هذا المتصفح.", en: "Importing needs browser storage, which is blocked here." },
  "assume.title": { ar: "كيف نحسب (الافتراضات)", en: "How we calculate (assumptions)" },
  "assume.1": { ar: "رأس الدُش العادي ٩ لترات في الدقيقة، والموفّر ٦ لترات؛ ويُسخَّن ٦٠٪ من مياه الاستحمام بمقدار ٢٥ درجة مئوية.", en: "Standard shower head 9 L/min, low-flow 6 L/min; 60% of shower water is heated by 25 °C." },
  "assume.2": { ar: "السخّان الكهربائي: ٠٫٠٣٢ ك.و.س لكل لتر ساخن (كفاءة ٩٠٪). سخّان الغاز: ٠٫٠٠٧٣ كجم CO₂ لكل لتر ساخن. الشمسي: صفر تقريبًا.", en: "Electric heater: 0.032 kWh per heated litre (90% efficient). Gas heater: 0.0073 kg CO₂ per heated litre. Solar: about zero." },
  "assume.3": { ar: "غسل الأسنان والحنفية مفتوحة: ٢٤ لترًا لكل فرد يوميًا؛ ومع قفلها: لتران. السيفون ٣٦ لترًا، والمطبخ والشرب ٢٥ لترًا لكل فرد يوميًا.", en: "Brushing with the tap running: 24 L per person per day; with the tap off: 2 L. Toilets 36 L and kitchen/drinking 25 L per person per day." },
  "assume.4": { ar: "الغسيل: ٦٠ لترًا و٠٫٩ ك.و.س لكل غسلة دافئة؛ و٠٫٤ ك.و.س للغسلة الكاملة بماء بارد، مع غسلات أقل بنحو ٢٠٪.", en: "Laundry: 60 L and 0.9 kWh per warm load; 0.4 kWh for a cold full load, with about 20% fewer loads." },
  "assume.5": { ar: "التكييف: متوسط استهلاك ١٫١ كيلوواط؛ وطاقة أقل بنحو ٤٪ مع كل درجة أعلى حتى ٢٥ درجة.", en: "Air conditioner: 1.1 kW average draw; about 4% less energy for each °C higher, up to 25 °C." },
  "assume.6": { ar: "الإضاءة ٥ ساعات يوميًا؛ لمبة LED ‏٩ واط، واللمبات القديمة ٢٥ واط في المتوسط. باقي الأجهزة (الثلاجة، التلفزيون، الراوتر): ١٢٠ ك.و.س شهريًا.", en: "Bulbs on 5 h/day; LED 9 W, older bulbs 25 W on average. Other appliances (fridge, TV, router): 120 kWh/month." },
  "assume.7": { ar: "إمداد المياه ومعالجتها: ٠٫٦ ك.و.س لكل م³. معامل انبعاثات الشبكة نحو ٠٫٤٧ كجم CO₂ لكل ك.و.س (متوسط تقريبي لمصر). الشهر ٣٠ يومًا.", en: "Water supply and treatment: 0.6 kWh per m³. Grid emission factor about 0.47 kg CO₂/kWh (approximate Egypt average). 30-day month." },
  "assume.8": { ar: "هذه تقديرات للتوعية وليست فاتورة. أرقامك الحقيقية تعتمد على أجهزتك وعاداتك.", en: "These are estimates for awareness, not a bill. Your real numbers depend on your appliances and habits." },

  "how.eyebrow": { ar: "كيف بنيناه", en: "How we built it" },
  "how.title": { ar: "بسيط، يحفظ خصوصيتك، ويعمل على أي هاتف", en: "Simple, private, works on any phone" },
  "how.1t": { ar: "البحث", en: "Research" },
  "how.1": { ar: "اخترنا الأهداف ٦ و٧ و١٣ من تقرير الأمم المتحدة لأهداف التنمية المستدامة ٢٠٢٦، وراجعنا أوراقًا بحثية محكّمة من Google Scholar وScienceDirect.", en: "We chose SDG 6, 7 and 13 from the UN SDG Report 2026 and reviewed peer-reviewed papers from Google Scholar and ScienceDirect." },
  "how.2t": { ar: "النموذج", en: "Model" },
  "how.2": { ar: "حوّلنا نتائج الأبحاث إلى نموذج بسيط لاستهلاك البيت من المياه والكهرباء وCO₂، مع عرض كل افتراض على الصفحة.", en: "We turned the research into a simple model of household water, electricity and CO₂ use, with every assumption listed on the page." },
  "how.3t": { ar: "البناء", en: "Build" },
  "how.3": { ar: "صفحة ويب واحدة بلغات HTML وCSS وJavaScript. بلا تسجيل ولا جمع بيانات، وتتكيّف مع شاشات الهواتف والوضع الداكن.", en: "One web page in HTML, CSS and JavaScript. No sign-up, no data collection, and it adapts to phone screens and dark mode." },
  "how.4t": { ar: "التحقق", en: "Verify" },
  "how.4": { ar: "استخدمنا أدوات الذكاء الاصطناعي للمساعدة في تلخيص الأبحاث ومراجعة الكود، ثم راجعنا كل رقم بمقارنته بالمصادر الأصلية.", en: "We used AI tools to help summarise papers and check code, then checked every number against the original sources." },
  "team.eyebrow": { ar: "الفريق", en: "The team" },
  "team.title": { ar: "من نحن", en: "Who we are" },
  "team.no": { ar: "فريق رقم {n}", en: "Team No. {n}" },
  "team.lead": { ar: "طلاب هندسة الحاسبات، جامعة العلمين الدولية · مقرر GEO217 تغيّر المناخ والاستدامة.", en: "Computer engineering students, Alamein International University · GEO217 Climate Change and Sustainability." },
  "role.researchAnalysis": { ar: "البحث والتحليل", en: "Research & Analysis" },
  "role.contentDevelopment": { ar: "إعداد المحتوى", en: "Content Development" },
  "role.deployingAI": { ar: "توظيف أدوات الذكاء الاصطناعي", en: "Deploying AI tools" },
  "role.digitalPublishing": { ar: "النشر الرقمي", en: "Digital publishing" },
  "role.finalOutput": { ar: "المُخرَج النهائي", en: "Final output" },
  "refs.eyebrow": { ar: "المصادر", en: "Sources" },
  "refs.title": { ar: "المراجع (APA 7)", en: "References (APA 7)" },
  "footer.line": { ar: "AquaWatt · مقرر GEO217 تغيّر المناخ والاستدامة · جامعة العلمين الدولية", en: "AquaWatt · GEO217 Climate Change and Sustainability · Alamein International University" }
};

/* ==== Storage: versioned, validated, and never fatal ==== */
const STORE_VERSION = 1;
const store = (() => {
  let ok = true;
  try { localStorage.setItem("aquawatt.__test", "1"); localStorage.removeItem("aquawatt.__test"); }
  catch (e) { ok = false; }
  return {
    get available() { return ok; },
    get(key, isValid) {
      if (!ok) return null;
      try {
        const obj = JSON.parse(localStorage.getItem("aquawatt." + key));
        if (!obj || obj.v !== STORE_VERSION) return null;
        return isValid(obj.data) ? obj.data : null;
      } catch (e) { return null; }
    },
    set(key, data) {
      if (!ok) return false;
      try { localStorage.setItem("aquawatt." + key, JSON.stringify({ v: STORE_VERSION, data })); return true; }
      catch (e) { ok = false; showStorageNotice(); return false; }
    },
    remove(key) { if (ok) try { localStorage.removeItem("aquawatt." + key); } catch (e) {} }
  };
})();
const isObj = x => x !== null && typeof x === "object" && !Array.isArray(x);

function showStorageNotice() {
  const n = document.getElementById("storageNotice");
  if (n && !n.dataset.dismissed) n.hidden = false;
}

/* ==== Language ==== */
const prefs = store.get("prefs", d => isObj(d)) || {};
let lang = document.documentElement.lang === "en" ? "en" : "ar";
const langListeners = [];

function t(key, vars) {
  const entry = I18N[key];
  if (!entry) return key;
  let s = entry[lang] ?? entry.en;
  if (isObj(s)) s = s[new Intl.PluralRules(lang).select(vars?.n ?? 0)] ?? s.other;
  // Plain numbers are formatted for the active language; pre-formatted strings pass through.
  return vars ? s.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? (typeof vars[k] === "number" ? fmt(vars[k]) : vars[k]) : m)) : s;
}

const numLocale = () => (lang === "ar" ? "ar-EG" : "en-US");
const fmt = (n, dp = 0) => new Intl.NumberFormat(numLocale(), { maximumFractionDigits: dp, minimumFractionDigits: dp }).format(n);
// Savings shown as a negative change. Intl adds the right bidi marks so the minus sits correctly in Arabic.
const neg = (n, dp = 0) => (lang === "ar" ? new Intl.NumberFormat("ar-EG", { maximumFractionDigits: dp, minimumFractionDigits: dp, signDisplay: "always" }).format(-n) : "−" + fmt(n, dp));

function applyI18n(root = document) {
  root.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  root.querySelectorAll("[data-i18n-html]").forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
  root.querySelectorAll("[data-i18n-attr]").forEach(el => {
    el.dataset.i18nAttr.split(";").forEach(pair => { const [attr, key] = pair.split(":"); el.setAttribute(attr.trim(), t(key.trim())); });
  });
}

function setLang(next, save = true) {
  lang = next === "en" ? "en" : "ar";
  const root = document.documentElement;
  root.lang = lang; root.dir = lang === "ar" ? "rtl" : "ltr";
  applyI18n();
  const btn = document.getElementById("langBtn");
  btn.textContent = t("lang.other");
  btn.lang = lang === "ar" ? "en" : "ar";
  btn.setAttribute("aria-label", t("lang.switch"));
  layoutLoop();
  updateThemeButton();
  langListeners.forEach(fn => fn());
  if (save) { prefs.lang = lang; store.set("prefs", prefs); }
}

/* The loop diagram reads right-to-left in Arabic: mirror the shapes, move the labels. */
function layoutLoop() {
  const W = 760, rtl = lang === "ar";
  document.getElementById("loopShapes").setAttribute("transform", rtl ? `translate(${W},0) scale(-1,1)` : "");
  document.querySelectorAll("#loopSvg .loop-text text").forEach(el => {
    if (!el.dataset.x) el.dataset.x = el.getAttribute("x");
    const x = +el.dataset.x;
    el.setAttribute("x", rtl ? W - x : x);
  });
}

/* ==== Theme ==== */
const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
const isDark = () => {
  const forced = document.documentElement.getAttribute("data-theme");
  return forced ? forced === "dark" : darkQuery.matches;
};
function updateThemeButton() {
  const btn = document.getElementById("themeBtn");
  const label = t(isDark() ? "theme.toLight" : "theme.toDark");
  btn.setAttribute("aria-label", label); btn.title = label;
}
document.getElementById("themeBtn").addEventListener("click", () => {
  const next = isDark() ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  prefs.theme = next; store.set("prefs", prefs);
  updateThemeButton();
  document.dispatchEvent(new CustomEvent("themechange"));
});
darkQuery.addEventListener?.("change", () => { updateThemeButton(); document.dispatchEvent(new CustomEvent("themechange")); });

/* ==== Header: language button, mobile menu, storage notice ==== */
document.getElementById("langBtn").addEventListener("click", () => setLang(lang === "ar" ? "en" : "ar"));
(() => {
  const btn = document.getElementById("menuBtn"), nav = document.getElementById("siteNav");
  const close = () => { nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); };
  btn.addEventListener("click", () => {
    const open = !nav.classList.contains("open");
    nav.classList.toggle("open", open); btn.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", e => { if (e.target.closest("a")) close(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && nav.classList.contains("open")) { close(); btn.focus(); } });
})();
document.getElementById("storageDismiss").addEventListener("click", () => {
  const n = document.getElementById("storageNotice"); n.hidden = true; n.dataset.dismissed = "1";
});
if (!store.available) showStorageNotice();

/* ==== Team ==== */
function renderTeam() {
  document.getElementById("teamNo").textContent = t("team.no", { n: TEAM.number });
  const ul = document.getElementById("teamList");
  ul.innerHTML = "";
  TEAM.members.forEach(m => {
    const li = document.createElement("li");
    const n = document.createElement("span"); n.className = "name"; n.textContent = m.name[lang] ?? m.name.en;
    const r = document.createElement("span"); r.className = "role"; r.textContent = t("role." + m.role);
    li.append(n, r); ul.append(li);
  });
}
langListeners.push(renderTeam);

// #region model
/* ==== Model (constants and formulas unchanged from the original calculator) ==== */
const K = {
  flow: 9, lowFlow: 6, hotFrac: 0.6,
  kwhPerHotL: 4.186 * 25 / 3600 / 0.9,       // electric heater
  co2PerHotLGas: 4.186 * 25 / 3600 / 0.8 * 0.2, // gas heater, kg
  brushOn: 24, brushOff: 2, toilet: 36, kitchen: 25,
  laundryL: 60, laundryKwh: 0.9, laundryKwhCold: 0.4,
  acKw: 1.1, bulbHours: 5, led: 9, oldBulb: 25, base: 120,
  supplyKwhPerL: 0.0006, grid: 0.47, days: 30
};

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

// Action text lives in I18N under "act.<id>.t" and "act.<id>.why".
const ACTIONS = [
  { id: "lowflow", apply: s => (s.lowFlow = true), show: s => s.shower > 0 && s.showers > 0 },
  { id: "shorter", apply: s => (s.shower = Math.max(1, s.shower - 2)), show: s => s.shower > 3 && s.showers > 0 },
  { id: "tap", apply: s => (s.tap = false), show: s => s.tap },
  { id: "ac", apply: s => (s.acTemp = 25), show: s => s.ac > 0 && s.acHours > 0 && s.acTemp < 25 },
  { id: "led", apply: s => (s.led = 1), show: s => s.bulbs > 0 && s.led < 1 },
  { id: "laundry", apply: s => (s.laundryCold = true), show: s => s.laundry > 0 },
  { id: "solar", apply: s => (s.heater = "solar"), show: s => s.heater !== "solar" }
];

// Each available action with its own savings, ranked by CO₂ (then water), exactly as the original.
function rankActions(s, base) {
  return ACTIONS.filter(a => a.show(s)).map(a => {
    const t = { ...s }; a.apply(t); const m = model(t);
    return { ...a, w: base.water - m.water, e: base.kwh - m.kwh, c: base.co2 - m.co2 };
  }).filter(a => a.c > 0.05 || a.w > 1).sort((x, y) => y.c - x.c || y.w - x.w);
}

// Combined savings of the chosen actions applied together.
function planSavings(s, base, ids) {
  const t = { ...s }; ACTIONS.filter(a => ids.has(a.id)).forEach(a => a.apply(t));
  const m = model(t);
  return { w: base.water - m.water, e: base.kwh - m.kwh, c: base.co2 - m.co2 };
}
// #endregion model

/* ==== Calculator UI ==== */
const FIELDS = ["people", "heater", "shower", "showers", "laundry", "ac", "acHours", "acTemp", "bulbs", "led", "price", "tap"];
const $ = id => document.getElementById(id);
const DEFAULTS = Object.fromEntries(FIELDS.map(id => [id, $(id).type === "checkbox" ? $(id).checked : $(id).value]));
const DEFAULT_PLAN = ["lowflow", "tap", "solar"]; // example plan
const chosen = new Set();
let current = null; // latest { s, base, plan } for other features (tracker, share card)

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

function chip(cls, text) { const c = document.createElement("span"); c.className = "chip " + cls; c.textContent = text; return c; }

function update(){
  $("showerOut").textContent = fmt(+$("shower").value);
  $("ledOut").textContent = fmt(+$("led").value) + (lang === "ar" ? "٪" : "%");
  const s = read();
  const base = model(s);
  $("oW").textContent = fmt(base.water);
  $("oE").textContent = fmt(base.kwh);
  $("oC").textContent = fmt(base.co2);

  const list = rankActions(s, base);
  for (const id of [...chosen]) if (!list.some(a => a.id === id)) chosen.delete(id);

  const box = $("actions");
  box.innerHTML = "";
  if (!list.length) box.innerHTML = `<p class="empty">${t("calc.allDone")}</p>`;
  list.forEach(a => {
    const lab = document.createElement("label"); lab.className = "action"; lab.id = "action-" + a.id;
    const cb = document.createElement("input"); cb.type = "checkbox"; cb.id = "act-" + a.id; cb.checked = chosen.has(a.id);
    cb.addEventListener("change", () => { cb.checked ? chosen.add(a.id) : chosen.delete(a.id); update(); $("act-" + a.id)?.focus(); });
    const div = document.createElement("div");
    const title = document.createElement("div"); title.className = "t"; title.textContent = t(`act.${a.id}.t`);
    const why = document.createElement("div"); why.className = "why"; why.textContent = t(`act.${a.id}.why`);
    const chips = document.createElement("div"); chips.className = "chips";
    if (a.w >= 1) chips.append(chip("w", `${neg(a.w)} ${t("unit.L")}`));
    chips.append(chip("e", `${neg(a.e, 1)} ${t("unit.kWh")}`), chip("c", `${neg(a.c, 1)} ${t("unit.kgCO2")}`));
    if (a.e * s.price >= 1) chips.append(chip("m", t("chip.money", { n: fmt(a.e * s.price) })));
    div.append(title, why, chips);
    lab.append(cb, div); box.append(lab);
  });

  const plan = $("plan");
  current = { s, base, plan: null };
  if (!chosen.size){
    plan.innerHTML = `<span class="pt">${t("plan.title")}</span><span class="pv">${t("plan.empty")}</span>`;
  } else {
    const p = planSavings(s, base, chosen);
    current.plan = { ...p, ids: [...chosen], price: s.price };
    plan.innerHTML = `<span class="pt">${t("plan.title")} · ${t("plan.count", { n: chosen.size })}</span>
      <span class="pv">${t("plan.saves", { w: fmt(p.w), e: fmt(p.e), c: fmt(p.c) })}</span>
      <span class="py">${t("plan.year", { m3: fmt(p.w * 12 / 1000, 1), c: fmt(p.c * 12), egp: fmt(p.e * 12 * s.price), pw: fmt(p.w / base.water * 100), pc: fmt(p.c / base.co2 * 100) })}</span>`;
  }
  saveCalc();
  document.dispatchEvent(new CustomEvent("planchange"));
}

function saveCalc() {
  const inputs = Object.fromEntries(FIELDS.map(id => [id, $(id).type === "checkbox" ? $(id).checked : $(id).value]));
  store.set("calc", { inputs, chosen: [...chosen] });
}
const validCalc = d => isObj(d) && isObj(d.inputs) && Array.isArray(d.chosen) && d.chosen.every(id => typeof id === "string");
function loadCalc() {
  const saved = store.get("calc", validCalc);
  const inputs = saved ? saved.inputs : DEFAULTS;
  FIELDS.forEach(id => {
    const el = $(id), v = inputs[id];
    if (el.type === "checkbox") el.checked = typeof v === "boolean" ? v : DEFAULTS[id];
    else if (id === "heater") el.value = ["electric", "gas", "solar"].includes(v) ? v : DEFAULTS[id];
    else el.value = typeof v === "string" && v.trim() !== "" && isFinite(+v) ? v : DEFAULTS[id];
  });
  chosen.clear();
  (saved ? saved.chosen.filter(id => ACTIONS.some(a => a.id === id)) : DEFAULT_PLAN).forEach(id => chosen.add(id));
}

$("form").addEventListener("input", update);
$("form").addEventListener("submit", e => e.preventDefault());
$("resetCalc").addEventListener("click", () => { store.remove("calc"); loadCalc(); update(); });
langListeners.push(() => { $("showerMin").textContent = fmt(2); $("showerMax").textContent = `${fmt(25)} ${t("unit.min")}`; update(); });

/* ==== Impact tracker: plan savings added once per calendar month ==== */
const monthKey = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
const MONTH_RE = /^\d{4}-(0[1-9]|1[0-2])$/;
const finiteNonNeg = x => typeof x === "number" && isFinite(x) && x >= 0;
const validTracker = d => isObj(d) && isObj(d.months) &&
  Object.entries(d.months).every(([k, v]) => MONTH_RE.test(k) && isObj(v) && ["w", "e", "c"].every(f => finiteNonNeg(v[f])));
const tracker = store.get("tracker", validTracker) || { months: {} };
let trackMsg = null; // last action message, so it survives a language switch

function monthName(key) {
  const [y, m] = key.split("-").map(Number);
  return new Intl.DateTimeFormat(lang === "ar" ? "ar-EG" : "en-GB", { month: "long", year: "numeric" }).format(new Date(y, m - 1, 1));
}

// One subtle motion: totals count up to their new value (skipped with reduced motion).
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
function countTo(el, value, animate) {
  const from = +el.dataset.value || 0;
  el.dataset.value = value;
  if (!animate || reduceMotion.matches || from === value) { el.textContent = fmt(value); return; }
  const start = performance.now(), dur = 700;
  const step = now => {
    const p = Math.min(1, (now - start) / dur), eased = 1 - Math.pow(1 - p, 3);
    el.textContent = fmt(from + (value - from) * eased);
    if (p < 1 && +el.dataset.value === value) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function renderTracker(animate = false) {
  const entries = Object.values(tracker.months);
  const sum = f => entries.reduce((a, v) => a + v[f], 0);
  countTo($("tW"), Math.round(sum("w")), animate);
  countTo($("tE"), Math.round(sum("e")), animate);
  countTo($("tC"), Math.round(sum("c")), animate);
  countTo($("tM"), entries.length, animate);
  $("impactEmpty").hidden = entries.length > 0;

  const key = monthKey(), done = key in tracker.months, btn = $("markMonth");
  btn.textContent = done ? t("track.done", { month: monthName(key) }) : t("track.mark");
  btn.classList.toggle("done", done);
  btn.disabled = done || !current?.plan;
  btn.setAttribute("aria-disabled", String(btn.disabled));
  $("undoMonth").hidden = !done;
  $("trackMsg").textContent = trackMsg ? t(trackMsg, { month: monthName(key) })
    : done ? t("track.again") : current?.plan ? t("track.ready", { month: monthName(key) }) : t("track.needPlan");
}

$("markMonth").addEventListener("click", () => {
  const key = monthKey();
  if (key in tracker.months || !current?.plan) return;
  const { w, e, c } = current.plan;
  tracker.months[key] = { w: Math.max(0, w), e: Math.max(0, e), c: Math.max(0, c) };
  store.set("tracker", tracker);
  trackMsg = "track.added";
  renderTracker(true);
  $("undoMonth").focus();
});
$("undoMonth").addEventListener("click", () => {
  delete tracker.months[monthKey()];
  store.set("tracker", tracker);
  trackMsg = "track.undone";
  renderTracker(true);
  $("markMonth").focus();
});
document.addEventListener("planchange", () => { trackMsg = null; renderTracker(); });
langListeners.push(() => renderTracker());

/* ==== Habits quiz ==== */
// points[i] is the score of option i (3 = most water- and energy-wise).
// Array order is the tie-break priority: habits that save more energy in the calculator come first.
const QUIZ = [
  { id: "heater", points: [3, 2, 1, 0], action: ["solar"], field: "heater", k: "e" },
  { id: "shower", points: [3, 2, 1, 0], action: ["shorter", "lowflow"], field: "shower", k: "w" },
  { id: "ac", points: [3, 3, 2, 1, 0], action: ["ac"], field: "acTemp", k: "e" },
  { id: "lights", points: [3, 2, 1, 0], action: ["led"], field: "led", k: "e" },
  { id: "laundry", points: [3, 2, 1, 0], action: ["laundry"], field: "laundry", k: "e" },
  { id: "tap", points: [3, 2, 1, 0], action: ["tap"], field: "tap", k: "w" },
  { id: "bills", points: [3, 2, 1, 0], section: "bills", k: "c" }
];
// Questions are asked in an everyday order, separate from the tie-break order.
const QUIZ_ORDER = ["shower", "tap", "ac", "lights", "laundry", "heater", "bills"];
const QUIZ_MAX = 3 * QUIZ.length;
const PROFILES = [{ from: 0, to: 7 }, { from: 8, to: 13 }, { from: 14, to: 18 }, { from: 19, to: 21 }];
const qById = Object.fromEntries(QUIZ.map(q => [q.id, q]));

const validQuiz = d => isObj(d) && isObj(d.answers) && Number.isInteger(d.step) && d.step >= 0 && d.step < QUIZ.length &&
  Object.entries(d.answers).every(([id, i]) => qById[id] && Number.isInteger(i) && i >= 0 && i < qById[id].points.length);
const quiz = store.get("quiz", validQuiz) || { answers: {}, step: 0, done: false };
// A save can claim "done" without every answer (e.g. edited by hand); send it back to the questions.
if (quiz.done && !QUIZ.every(q => q.id in quiz.answers)) quiz.done = false;
const saveQuiz = () => store.set("quiz", quiz);
const quizScore = id => qById[id].points[quiz.answers[id]];

function renderQuiz(focus = false) {
  $("quizForm").hidden = !!quiz.done;
  $("qResult").hidden = !quiz.done;
  renderBands();
  if (quiz.done) return renderQuizResult(focus);
  const q = qById[QUIZ_ORDER[quiz.step]];
  $("qCount").textContent = t("quiz.count", { n: quiz.step + 1, total: QUIZ.length });
  $("qBar").style.width = ((quiz.step + 1) / QUIZ.length * 100) + "%";
  $("qLegend").textContent = t("q." + q.id);
  const opts = $("qOpts");
  opts.innerHTML = "";
  q.points.forEach((p, i) => {
    const lab = document.createElement("label"); lab.className = "opt";
    const r = document.createElement("input"); r.type = "radio"; r.name = "q"; r.value = i; r.checked = quiz.answers[q.id] === i;
    r.addEventListener("change", () => { quiz.answers[q.id] = i; saveQuiz(); updateQuizNav(); });
    const span = document.createElement("span"); span.textContent = t(`q.${q.id}.${i}`);
    lab.append(r, span); opts.append(lab);
  });
  $("qBack").disabled = quiz.step === 0;
  updateQuizNav();
  if (focus) $("qLegend").focus({ preventScroll: true });
}
function updateQuizNav() {
  $("qNext").textContent = t(quiz.step === QUIZ.length - 1 ? "quiz.finish" : "quiz.next");
  $("qNext").disabled = !(QUIZ_ORDER[quiz.step] in quiz.answers);
}
function renderBands() {
  const ul = $("qBands"); ul.innerHTML = "";
  PROFILES.forEach((b, i) => {
    const li = document.createElement("li");
    const name = document.createElement("b"); name.textContent = t("profile." + i);
    li.append(t("quiz.band", { from: b.from, to: b.to }), name); ul.append(li);
  });
}

function renderQuizResult(focus) {
  const total = QUIZ.reduce((a, q) => a + quizScore(q.id), 0);
  const pi = PROFILES.findIndex(b => total >= b.from && total <= b.to);
  $("qProfile").textContent = t("profile." + pi);
  $("qScore").textContent = t("quiz.score", { score: total, max: QUIZ_MAX });
  $("qProfileText").textContent = t(`profile.${pi}.text`);
  const weak = QUIZ.filter(q => quizScore(q.id) < 3)
    .sort((a, b) => quizScore(a.id) - quizScore(b.id) || QUIZ.indexOf(a) - QUIZ.indexOf(b)).slice(0, 3);
  const ol = $("qTips"); ol.innerHTML = "";
  if (!weak.length) { const li = document.createElement("li"); li.textContent = t("quiz.noTips"); ol.append(li); }
  weak.forEach(q => {
    const li = document.createElement("li"); li.className = q.k;
    const tt = document.createElement("span"); tt.className = "tip-t"; tt.textContent = t(`tip.${q.id}.t`);
    const why = document.createElement("span"); why.textContent = t(`tip.${q.id}.why`);
    const meta = document.createElement("span"); meta.className = "tip-meta"; meta.textContent = t("quiz.tipMeta", { n: quizScore(q.id) });
    const go = document.createElement("button"); go.type = "button"; go.className = "link-btn";
    go.textContent = t(q.section ? "quiz.showBills" : "quiz.showCalc");
    go.addEventListener("click", () => showTarget(q));
    li.append(tt, why, meta, go); ol.append(li);
  });
  if (focus) $("qProfile").focus({ preventScroll: true });
}

// Scroll to the matching calculator action (or its input, if the action is not listed) and highlight it briefly.
function showTarget(q) {
  let el, focusEl;
  if (q.section) { el = $(q.section); focusEl = el?.querySelector("h2"); }
  else {
    const id = q.action.find(a => $("action-" + a));
    el = id ? $("action-" + id) : $(q.field)?.closest(".field");
    focusEl = id ? $("act-" + id) : $(q.field);
  }
  if (!el) return;
  el.scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth", block: "center" });
  if (focusEl) {
    if (!focusEl.matches("input,select,button,a")) focusEl.tabIndex = -1;
    focusEl.focus({ preventScroll: true });
  }
  el.classList.add("flash");
  setTimeout(() => el.classList.remove("flash"), 2600);
}

$("quizForm").addEventListener("submit", e => {
  e.preventDefault();
  if (!(QUIZ_ORDER[quiz.step] in quiz.answers)) return;
  if (quiz.step < QUIZ.length - 1) quiz.step++; else quiz.done = true;
  saveQuiz(); renderQuiz(true);
});
// Enter on a chosen option moves on, like pressing Next.
$("qOpts").addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); $("quizForm").requestSubmit(); } });
$("qBack").addEventListener("click", () => { if (quiz.step > 0) { quiz.step--; saveQuiz(); renderQuiz(true); } });
$("qRetake").addEventListener("click", () => { quiz.answers = {}; quiz.step = 0; quiz.done = false; saveQuiz(); renderQuiz(true); });
langListeners.push(() => renderQuiz());

/* ==== Bill tracker ==== */
const monthIndex = key => { const [y, m] = key.split("-").map(Number); return y * 12 + m - 1; };
const keyFromIndex = i => `${Math.floor(i / 12)}-${String(i % 12 + 1).padStart(2, "0")}`;
const validBills = d => isObj(d) && Array.isArray(d.entries) &&
  d.entries.every(e => isObj(e) && MONTH_RE.test(e.m) && ["kwh", "m3"].every(f => typeof e[f] === "number" && isFinite(e[f]) && e[f] > 0)) &&
  new Set(d.entries.map(e => e.m)).size === d.entries.length;
const bills = store.get("bills", validBills) || { entries: [] };
const billCo2 = e => (e.kwh + e.m3 * 1000 * K.supplyKwhPerL) * K.grid;
const sortedBills = () => [...bills.entries].sort((a, b) => monthIndex(a.m) - monthIndex(b.m));
let editingBill = null;

// Accept Arabic-Indic digits and the Arabic decimal separator, since many phones type them.
function parseNum(str) {
  const s = String(str).trim()
    .replace(/[٠-٩]/g, d => d.charCodeAt(0) - 0x0660)
    .replace(/[۰-۹]/g, d => d.charCodeAt(0) - 0x06F0)
    .replace(/[٫,]/g, ".").replace(/[٬\s]/g, "");
  return /^\d*\.?\d+$/.test(s) ? parseFloat(s) : NaN;
}
const pct = n => new Intl.NumberFormat(numLocale(), { style: "percent", maximumFractionDigits: 0, signDisplay: "exceptZero" }).format(n);
const shortMonth = key => {
  const [y, m] = key.split("-").map(Number);
  return new Intl.DateTimeFormat(lang === "ar" ? "ar-EG" : "en-GB", { month: "short" }).format(new Date(y, m - 1, 1));
};

function fillMonthSelects() {
  const mSel = $("billMonth"), ySel = $("billYear");
  const keep = { m: mSel.value, y: ySel.value };
  const now = new Date(), names = new Intl.DateTimeFormat(lang === "ar" ? "ar-EG" : "en-GB", { month: "long" });
  mSel.innerHTML = ""; ySel.innerHTML = "";
  for (let m = 1; m <= 12; m++) mSel.add(new Option(names.format(new Date(2000, m - 1, 1)), String(m).padStart(2, "0")));
  for (let y = now.getFullYear(); y >= now.getFullYear() - 9; y--) ySel.add(new Option(fmt(y).replace(/[٬,]/g, ""), String(y)));
  mSel.value = keep.m || String(now.getMonth() + 1).padStart(2, "0");
  ySel.value = keep.y || String(now.getFullYear());
}

function setBillError(msg, field) {
  $("billError").textContent = msg || "";
  ["billKwh", "billM3", "billMonth"].forEach(id => $(id).removeAttribute("aria-invalid"));
  if (field) { $(field).setAttribute("aria-invalid", "true"); $(field).focus(); }
}

$("billForm").addEventListener("submit", e => {
  e.preventDefault();
  const key = `${$("billYear").value}-${$("billMonth").value}`;
  const kwh = parseNum($("billKwh").value), m3 = parseNum($("billM3").value);
  if (monthIndex(key) > monthIndex(monthKey())) return setBillError(t("bills.errFuture"), "billMonth");
  if (key !== editingBill && bills.entries.some(b => b.m === key)) return setBillError(t("bills.errDup", { month: monthName(key) }), "billMonth");
  if (!(kwh > 0)) return setBillError(t("bills.errKwh"), "billKwh");
  if (kwh > 100000) return setBillError(t("bills.errBig"), "billKwh");
  if (!(m3 > 0)) return setBillError(t("bills.errM3"), "billM3");
  if (m3 > 10000) return setBillError(t("bills.errBig"), "billM3");
  bills.entries = bills.entries.filter(b => b.m !== key && b.m !== editingBill);
  bills.entries.push({ m: key, kwh, m3 });
  store.set("bills", bills);
  resetBillForm();
  renderBills();
});
$("billCancel").addEventListener("click", () => resetBillForm(true));

function resetBillForm(focus) {
  editingBill = null;
  $("billKwh").value = ""; $("billM3").value = "";
  setBillError("");
  $("billFormTitle").textContent = t("bills.add");
  $("billSave").textContent = t("bills.save");
  $("billCancel").hidden = true;
  if (focus) $("billKwh").focus();
}
function startEdit(entry) {
  editingBill = entry.m;
  const [y, m] = entry.m.split("-");
  $("billYear").value = y; $("billMonth").value = m;
  $("billKwh").value = entry.kwh; $("billM3").value = entry.m3;
  setBillError("");
  $("billFormTitle").textContent = t("bills.edit", { month: monthName(entry.m) });
  $("billSave").textContent = t("bills.saveEdit");
  $("billCancel").hidden = false;
  $("billForm").scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth", block: "center" });
  $("billKwh").focus({ preventScroll: true });
}

function renderBills() {
  const rows = $("billRows"), list = sortedBills();
  rows.innerHTML = "";
  if (!list.length) rows.innerHTML = `<tr class="empty-row"><td colspan="5">${t("bills.noRows")}</td></tr>`;
  [...list].reverse().forEach(entry => {
    const tr = document.createElement("tr");
    const cell = (text, cls) => { const td = document.createElement("td"); if (cls) td.className = cls; td.textContent = text; tr.append(td); return td; };
    const th = document.createElement("th"); th.scope = "row"; th.textContent = monthName(entry.m); tr.append(th);
    cell(fmt(entry.kwh, entry.kwh % 1 ? 1 : 0), "num");
    cell(fmt(entry.m3, entry.m3 % 1 ? 1 : 0), "num");
    cell(fmt(billCo2(entry)), "num");
    const act = cell("", "row-actions");
    const edit = document.createElement("button"); edit.type = "button"; edit.className = "link-btn";
    edit.textContent = t("bills.editBtn"); edit.setAttribute("aria-label", t("bills.editLabel", { month: monthName(entry.m) }));
    edit.addEventListener("click", () => startEdit(entry));
    const del = document.createElement("button"); del.type = "button"; del.className = "link-btn del";
    del.textContent = t("bills.deleteBtn"); del.setAttribute("aria-label", t("bills.deleteLabel", { month: monthName(entry.m) }));
    del.addEventListener("click", () => {
      if (!confirm(t("bills.confirmDelete", { month: monthName(entry.m) }))) return;
      bills.entries = bills.entries.filter(b => b.m !== entry.m);
      if (editingBill === entry.m) resetBillForm();
      store.set("bills", bills);
      renderBills();
      $("billKwh").focus();
    });
    act.append(edit, del);
    rows.append(tr);
  });
  drawBillChart(list);
}

/* Two small panels share one time axis instead of a dual-axis chart: kWh and m³ have different scales. */
function drawBillChart(list) {
  const box = $("billChart"), tip = $("billTip");
  tip.hidden = true;
  if (!list.length) { box.innerHTML = `<p class="chart-empty">${t("bills.chartEmpty")}</p>`; return; }
  const NS = "http://www.w3.org/2000/svg", rtl = lang === "ar";
  // Draw at the container's real width so text stays readable on phones.
  const W = Math.max(280, Math.round(box.clientWidth || 640)), padStart = 46, padEnd = 30, panelH = 150, gap = 20, axisH = 26, H = panelH * 2 + gap + axisH;
  const i0 = monthIndex(list[0].m), span = Math.max(1, monthIndex(list[list.length - 1].m) - i0);
  const px = f => (rtl ? W - (padStart + f * (W - padStart - padEnd)) : padStart + f * (W - padStart - padEnd));
  const xOf = key => px(list.length === 1 ? 0.5 : (monthIndex(key) - i0) / span);
  const startEdge = rtl ? W : 0, endEdge = rtl ? 0 : W;

  const svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-label", t("bills.chartLabel", { n: list.length }));
  svg.style.direction = "ltr";
  const el = (name, attrs, parent = svg) => {
    const n = document.createElementNS(NS, name);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    parent.append(n); return n;
  };
  // side = physical "left" | "right" | "middle"; Arabic text runs right-to-left, so its anchors swap.
  const text = (x, y, str, cls, side) => {
    const anchor = side === "middle" ? "middle" : (side === "left") !== rtl ? "start" : "end";
    const n = el("text", { x, y, class: cls, "text-anchor": anchor, direction: rtl ? "rtl" : "ltr" });
    n.textContent = str; return n;
  };
  const sideOf = edge => (edge === 0 ? "left" : "right");

  const series = [
    { key: "kwh", title: t("bills.kwh"), unit: t("unit.kWh"), color: "var(--chart-energy)" },
    { key: "m3", title: t("bills.m3"), unit: lang === "ar" ? "م³" : "m³", color: "var(--chart-water)" }
  ];
  series.forEach((s, p) => {
    const y0 = p * (panelH + gap), top = y0 + 40, bottom = y0 + panelH - 8;
    const max = Math.max(...list.map(e => e[s.key]));
    const step = niceStep(max / 3), yMax = Math.max(step * 3, Math.ceil(max * 1.12 / step) * step);
    const yOf = v => bottom - (v / yMax) * (bottom - top);

    // Legend swatch + title at the inline start, latest value and change at the inline end.
    el("rect", { x: rtl ? W - 14 : 0, y: y0 + 8, width: 14, height: 3, rx: 1.5, fill: s.color });
    text(rtl ? W - 20 : 20, y0 + 13, s.title, "c-title", sideOf(startEdge));
    const last = list[list.length - 1], prev = list[list.length - 2];
    let summary = t("bills.latest", { v: fmt(last[s.key], last[s.key] % 1 ? 1 : 0), unit: s.unit });
    if (prev) summary += " · " + t("bills.change", { pct: pct((last[s.key] - prev[s.key]) / prev[s.key]), month: monthName(prev.m) });
    text(endEdge, y0 + 30, summary, "c-change", sideOf(endEdge));

    for (let v = 0; v <= yMax + 1e-9; v += step) {
      el("line", { x1: px(0), x2: px(1), y1: yOf(v), y2: yOf(v), class: v === 0 ? "c-base" : "c-grid" });
      text(rtl ? W - padStart + 8 : padStart - 8, yOf(v) + 4, fmt(v), "c-axis", rtl ? "left" : "right");
    }
    // Break the line where a month is missing, so gaps are not drawn as data.
    let d = "";
    list.forEach((e, i) => {
      const cmd = i > 0 && monthIndex(e.m) - monthIndex(list[i - 1].m) === 1 ? "L" : "M";
      d += `${cmd}${xOf(e.m).toFixed(1)},${yOf(e[s.key]).toFixed(1)}`;
    });
    el("path", { d, fill: "none", stroke: s.color, "stroke-width": 2, "stroke-linejoin": "round", "stroke-linecap": "round" });
    list.forEach((e, i) => {
      const isLast = i === list.length - 1;
      el("circle", { cx: xOf(e.m), cy: yOf(e[s.key]), r: isLast ? 6 : 4, fill: s.color, stroke: "var(--surface)", "stroke-width": 2 });
    });
    text(xOf(last.m), yOf(last[s.key]) - 12, fmt(last[s.key], last[s.key] % 1 ? 1 : 0), "c-val", list.length === 1 ? "middle" : rtl ? "left" : "right");
  });

  // Month labels on the shared axis, thinned to about six.
  const every = Math.ceil(list.length / 6);
  list.forEach((e, i) => {
    if ((list.length - 1 - i) % every) return;
    const showYear = i === 0 || e.m.endsWith("-01");
    text(xOf(e.m), H - 6, shortMonth(e.m) + (showYear ? " " + fmt(+e.m.slice(0, 4)).replace(/[٬,]/g, "") : ""), "c-axis", "middle");
  });

  // Hover layer: a tall hit area per month shows a guide line and a tooltip with all values.
  const guide = el("line", { y1: 0, y2: H - axisH, class: "c-hover", visibility: "hidden" });
  const colW = list.length === 1 ? (W - padStart - padEnd) : Math.max(16, (W - padStart - padEnd) / Math.max(1, span));
  list.forEach(e => {
    const x = xOf(e.m);
    const hit = el("rect", { x: x - colW / 2, y: 0, width: colW, height: H - axisH, class: "c-hit" });
    hit.addEventListener("pointerenter", () => {
      guide.setAttribute("x1", x); guide.setAttribute("x2", x); guide.setAttribute("visibility", "visible");
      tip.innerHTML = "";
      const b = document.createElement("b"); b.textContent = monthName(e.m); tip.append(b);
      [[series[0], e.kwh], [series[1], e.m3]].forEach(([s, v]) => {
        const row = document.createElement("div");
        const sw = document.createElement("span"); sw.className = "sw"; sw.style.background = s.color;
        row.append(sw, `${fmt(v, v % 1 ? 1 : 0)} ${s.unit}`); tip.append(row);
      });
      const co2 = document.createElement("div"); co2.textContent = `≈ ${fmt(billCo2(e))} ${t("unit.kgCO2")}`; tip.append(co2);
      tip.hidden = false;
      const card = box.parentElement.getBoundingClientRect(), r = svg.getBoundingClientRect();
      const left = r.left - card.left + x * (r.width / W), half = tip.offsetWidth / 2;
      tip.style.left = Math.min(card.width - tip.offsetWidth - 8, Math.max(8, left - half)) + "px";
      tip.style.top = (r.top - card.top + 8) + "px";
    });
  });
  svg.addEventListener("pointerleave", () => { guide.setAttribute("visibility", "hidden"); tip.hidden = true; });
  box.innerHTML = ""; box.append(svg);
}
function niceStep(raw) {
  if (!(raw > 0)) return 1;
  const mag = Math.pow(10, Math.floor(Math.log10(raw))), n = raw / mag;
  return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10) * mag;
}
// Redraw when the chart's width changes (rotation, resizing), not on every pixel of height.
let billChartWidth = 0;
new ResizeObserver(([entry]) => {
  const w = Math.round(entry.contentRect.width);
  if (w && Math.abs(w - billChartWidth) > 4) { billChartWidth = w; drawBillChart(sortedBills()); }
}).observe($("billChart"));
langListeners.push(() => {
  fillMonthSelects();
  if (editingBill) { $("billFormTitle").textContent = t("bills.edit", { month: monthName(editingBill) }); $("billSave").textContent = t("bills.saveEdit"); }
  else { $("billFormTitle").textContent = t("bills.add"); $("billSave").textContent = t("bills.save"); }
  setBillError("");
  renderBills();
});

/* ==== Export / import all saved data ==== */
const DATA_PARTS = { prefs: d => isObj(d), calc: validCalc, tracker: validTracker, quiz: validQuiz, bills: validBills };
$("exportData").addEventListener("click", () => {
  const data = {};
  for (const k in DATA_PARTS) { const v = store.get(k, DATA_PARTS[k]); if (v) data[k] = v; }
  // Live values cover the case where storage is blocked.
  Object.assign(data, { calc: data.calc || { inputs: Object.fromEntries(FIELDS.map(id => [id, $(id).type === "checkbox" ? $(id).checked : $(id).value])), chosen: [...chosen] }, tracker, quiz, bills });
  const file = `aquawatt-data-${new Date().toISOString().slice(0, 10)}.json`;
  const blob = new Blob([JSON.stringify({ app: "AquaWatt", version: STORE_VERSION, exported: new Date().toISOString(), data }, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob); a.download = file;
  document.body.append(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  $("dataMsg").textContent = t("data.exported", { file });
});
$("importData").addEventListener("change", async e => {
  const input = e.target, f = input.files[0];
  input.value = "";
  if (!f) return;
  const msg = $("dataMsg");
  if (!store.available) { msg.textContent = t("data.noStorage"); return; }
  let parsed;
  try { parsed = JSON.parse(await f.text()); } catch (err) { parsed = null; }
  const data = parsed?.app === "AquaWatt" && parsed.version === STORE_VERSION && isObj(parsed.data) ? parsed.data : null;
  const keys = data ? Object.keys(data).filter(k => k in DATA_PARTS) : [];
  if (!keys.length || !keys.every(k => DATA_PARTS[k](data[k]))) { msg.textContent = t("data.invalid"); return; }
  if (!confirm(t("data.confirmImport"))) return;
  keys.forEach(k => store.set(k, data[k]));
  msg.textContent = t("data.imported");
  setTimeout(() => location.reload(), 600);
});

/* ==== Start ==== */
loadCalc();
setLang(lang, false);
