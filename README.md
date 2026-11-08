# AquaWatt

**Every litre you save also saves energy and cuts CO₂.**
A free, private household calculator for Egyptian families, built by **Team 78** for **GEO217 Climate Change and Sustainability** at **Alamein International University (AIU)**.

- **Live site:** https://yasseenabdelghany.github.io/Climate-Change-and-Sustainability-Website/
- **Project report:** [Word](docs/GEO217_SDG_Project_AquaWatt.docx) · [PDF](docs/GEO217_SDG_Project_AquaWatt.pdf)

[العربية ↓](#aquawatt-بالعربية)

---

## What AquaWatt is

AquaWatt treats three UN Sustainable Development Goals as **one household problem**:

| Goal | Why it matters at home |
|---|---|
| **SDG 6** Clean water and sanitation | Egypt is water-scarce; Northern Africa and Western Asia have water stress above 75%. |
| **SDG 7** Affordable and clean energy | Heating, pumping and treating water uses electricity. |
| **SDG 13** Climate action | Most of Egypt's electricity still comes from fossil fuels, so that electricity produces CO₂. |

**The problem:** most footprint calculators tell people their footprint but not what to do next. AquaWatt turns a family's habits into a ranked list of actions, each with its own water, electricity, CO₂ and money savings, and helps the family follow a plan month by month.

## Features

- **English and Arabic**: the site opens in English with the light theme at the top of the page. One click switches to Arabic with a full right-to-left layout, Arabic-Indic digits and the official Arabic SDG icons; another switches to dark mode.
- **Household calculator**: monthly water (L), electricity (kWh) and CO₂ (kg), 7 actions ranked by CO₂ saved, and a "Your plan" total with yearly savings.
- **Our home's savings**: mark "We did our plan this month" once per calendar month (with undo); running totals of water, electricity and CO₂ saved. These are estimates from the calculator, not measured savings.
- **Habits quiz**: 7 questions, a habit profile, and the top 3 tips for your weakest habits. Each tip jumps to the matching action in the calculator. Scoring is explained on the page.
- **Bill tracker**: enter real monthly bills (kWh and m³), edit or delete them, and see an SVG chart with the change from the month before and an approximate CO₂ figure.
- **Your data**: export everything to a JSON file and import it on another device.
- **Get help in Egypt**: a searchable list of official water, electricity and solar contacts (for example 125 for water and 121 for electricity), each checked on the organisation's own website, with a "Checked on" date and source link.
- **Share our plan**: an image card made in the browser (PNG download, copy text, Web Share, LinkedIn) with a ready-to-copy post.
- **Accessible and responsive**: works on phones, tablets and desktops, keyboard-friendly, WCAG AA colour contrast in both themes, respects reduced motion, and prints a one-page "Our family plan".

## How to run it

No installation and no build step. Either:

1. **Double-click `index.html`** to open it in your browser, or
2. open the [live site](https://yasseenabdelghany.github.io/Climate-Change-and-Sustainability-Website/).

To check that the calculator gives the same numbers as the original version (needs [Node.js](https://nodejs.org/)):

```bash
node tests/check-calculator.js
```

Expected output for the example family of five: **24,836 L, 838 kWh and 394 kg CO₂ per month**; the example plan (solar heater + low-flow shower heads + tap off while brushing) saves **6,900 L, 213 kWh and 100 kg CO₂ per month**.

## Files

```
index.html           page structure (every visible text has a data-i18n key)
style.css            design, light/dark themes, right-to-left support, print layout
script.js            team details, translations, calculator model and all features
assets/favicon.svg   three dots in the SDG 6 / 7 / 13 colours
assets/og-image.png  1200×630 preview image for LinkedIn and other social sites
assets/sdg/          official UN icons for SDG 6, 7 and 13 in English and Arabic
docs/                final project report (Word and PDF)
tests/               calculator check (Node.js) and a copy of the original model
```

Change `number` and each member's Arabic and English name. Roles are translated automatically.

## How we calculate (assumptions)

| Item | Value used |
|---|---|
| Shower flow | Standard head 9 L/min, low-flow head 6 L/min |
| Hot water | 60% of shower water is heated by 25 °C |
| Electric water heater | 0.032 kWh per heated litre (90% efficient) |
| Gas water heater | 0.0073 kg CO₂ per heated litre |
| Solar water heater | About zero |
| Brushing teeth | Tap running: 24 L per person per day; tap off: 2 L |
| Toilet / kitchen and drinking | 36 L and 25 L per person per day |
| Laundry | 60 L and 0.9 kWh per warm load; 0.4 kWh per cold full load, with about 20% fewer loads |
| Air conditioner | 1.1 kW average draw; about 4% less energy for each °C higher, up to 25 °C |
| Lighting | 5 h/day; LED 9 W, older bulbs 25 W on average |
| Other appliances | 120 kWh per month (fridge, TV, router) |
| Water supply and treatment | 0.6 kWh per m³ |
| Grid emission factor | About 0.47 kg CO₂ per kWh (approximate Egypt average) |
| Month | 30 days |
| Bill tracker CO₂ | (kWh + m³ × 0.6) × 0.47 kg, approximate |

These are estimates for awareness, not a bill. Real numbers depend on each home's appliances and habits.

## Data and privacy

- Nothing you type leaves your browser. There is no account, no server, no analytics and no tracking.
- Your calculator inputs, savings, quiz answers and bills are saved only in your browser (`localStorage`) on your device. If your browser blocks storage, the site still works but forgets everything when you close it.
- The only outside requests are for fonts from Google Fonts. Share and LinkedIn buttons only open when you click them.
- You can export your data to a JSON file, and import it again, at any time.

## References (APA 7)

1. Abdelzaher, M. A., Farahat, E. M., Abdel-Ghafar, H. M., Balboul, B. A. A., & Awad, M. M. (2023). Environmental policy to develop a conceptual design for the water–energy–food nexus: A case study in Wadi-Dara on the Red Sea coast, Egypt. *Water, 15*(4), 780. https://doi.org/10.3390/w15040780
2. Albertarelli, S., Fraternali, P., Herrera, S., Melenhorst, M., Novak, J., Pasini, C., Rizzoli, A.-E., & Rottondi, C. (2018). A survey on the design of gamified systems for energy and water sustainability. *Games, 9*(3), 38. https://doi.org/10.3390/g9030038
3. Allcott, H. (2011). Social norms and energy conservation. *Journal of Public Economics, 95*(9–10), 1082–1095. https://www.sciencedirect.com/science/article/pii/S0047272711000478
4. Alshami, A., Ali, E., Elsayed, M., Eltoukhy, A. E. E., & Zayed, T. (2024). IoT innovations in sustainable water and wastewater management and water quality monitoring: A comprehensive review of advancements, implications, and future directions. *IEEE Access, 12*, 58427–58453. https://doi.org/10.1109/ACCESS.2024.3392573
5. Ashour, M. A., El Degwee, Y. A., Hashem, R. H., Abdou, A. A., & Abu-Zaid, T. S. (2024). The extent to which the available water resources in Upper Egypt can be affected by climate change. *Limnological Review, 24*(2), 164–177. https://doi.org/10.3390/limnolrev24020009
6. Collins, A., Galli, A., Hipwood, T., & Murthy, A. (2020). Living within a One Planet reality: The contribution of personal Footprint calculators. *Environmental Research Letters, 15*(2), 025008. https://doi.org/10.1088/1748-9326/ab5f96
7. Cominola, A., Giuliani, M., Castelletti, A., Fraternali, P., Herrera Gonzalez, S. L., Guardiola Herrero, J. C., Novak, J., & Rizzoli, A. E. (2021). Long-term water conservation is fostered by smart meter-based feedback and digital user engagement. *npj Clean Water, 4*, 29. https://doi.org/10.1038/s41545-021-00119-0
8. Enlund, J., Andersson, D., & Carlsson, F. (2023). Individual carbon footprint reduction: Evidence from pro-environmental users of a carbon calculator. *Environmental and Resource Economics, 86*(3), 433–467. https://doi.org/10.1007/s10640-023-00800-7
9. Hamiche, A. M., Stambouli, A. B., & Flazi, S. (2016). A review of the water-energy nexus. *Renewable and Sustainable Energy Reviews, 65*, 319–331. https://doi.org/10.1016/j.rser.2016.07.020
10. Karlin, B., Zinger, J. F., & Ford, R. (2015). The effects of feedback on energy conservation: A meta-analysis. *Psychological Bulletin, 141*(6), 1205–1227. https://doi.org/10.1037/a0039650
11. Megahed, T. F., & Radwan, A. (2020). Performance investigation of zero-building-integrated photovoltaic roof system: A case study in Egypt. *Alexandria Engineering Journal, 59*(6), 5053–5067. https://doi.org/10.1016/j.aej.2020.09.031
12. United Nations Department of Economic and Social Affairs. (2026). *The Sustainable Development Goals report 2026*. United Nations.

## Team

Team No. 78, computer engineering students at Alamein International University.

| Name | Role |
|---|---|
| Ahmed Khaled Ahmed Said | Research & Analysis |
| Mohamed Hany Awad Abdelhaleem | Content Development |
| Ahmed Yasser Ibrahim Elsayed | Deploying AI tools |
| Ahmed Khaled Fathy Ahmed | Digital publishing |
| Yasseen Ahmed ELSayed Abdelghany | Final output |

## Update the live site

The site is published with GitHub Pages from the `main` branch (Settings → Pages → Deploy from a branch → `main` / root).
To publish a change, commit it and push:

```bash
git push origin main
```

GitHub rebuilds the site in 1–2 minutes; you can watch progress in the **Actions** tab.

### Publishing a copy from scratch

1. Create a **public** repository on [GitHub](https://github.com/) and upload `index.html`, `style.css`, `script.js`, `README.md` and the `assets` folder (**Add file → Upload files → Commit changes**).
2. Open **Settings → Pages**, set **Source** to **Deploy from a branch**, choose **`main`** and **`/ (root)`**, and click **Save**.
3. After 1–2 minutes the site is live at `https://<username>.github.io/<repo>/`.
4. If your username or repository name is different, replace the old address in the `canonical`, `og:url`, `og:image` and `twitter:image` lines near the top of `index.html`, and in `SITE_URL` near the top of `script.js`.
5. Check the LinkedIn preview with the [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/).

## Credits

- SDG icons: [United Nations](https://www.un.org/sustainabledevelopment/news/communications-material/). This project is not endorsed by the United Nations.
- Fonts: Readex Pro and IBM Plex Sans / IBM Plex Sans Arabic from Google Fonts.

#AIU #SDGs #Climate_change_Sustainability #GEO217 #Alamein_International_University

---

# AquaWatt بالعربية

**كل لتر مياه توفّره يوفّر معه الكهرباء ويقلّل انبعاثات الكربون.**
حاسبة منزلية مجانية تحفظ خصوصيتك، صمّمها **الفريق رقم ٧٨** للأسر المصرية ضمن مقرر **GEO217 تغيّر المناخ والاستدامة** في **جامعة العلمين الدولية**.

- **الموقع:** https://yasseenabdelghany.github.io/Climate-Change-and-Sustainability-Website/
- **تقرير المشروع:** [Word](docs/GEO217_SDG_Project_AquaWatt.docx) · [PDF](docs/GEO217_SDG_Project_AquaWatt.pdf)

## ما هو AquaWatt؟

يتعامل AquaWatt مع ثلاثة من أهداف الأمم المتحدة للتنمية المستدامة بوصفها **مشكلة واحدة داخل البيت**:

| الهدف | لماذا يهم في البيت |
|---|---|
| **الهدف ٦** المياه النظيفة والنظافة الصحية | مصر بلد يعاني شحّ المياه، والإجهاد المائي في شمال أفريقيا وغرب آسيا يتجاوز ٧٥٪. |
| **الهدف ٧** طاقة نظيفة وبأسعار معقولة | تسخين المياه وضخّها ومعالجتها يحتاج إلى كهرباء. |
| **الهدف ١٣** العمل المناخي | معظم كهرباء مصر ما زال يُنتَج من الوقود الأحفوري، فتنتج عنها انبعاثات CO₂. |

**المشكلة:** معظم حاسبات البصمة تخبر الناس ببصمتهم، لكنها لا تقول لهم ماذا يفعلون بعد ذلك. يحوّل AquaWatt عادات الأسرة إلى قائمة إجراءات مرتّبة، لكلٍّ منها توفيره في المياه والكهرباء وCO₂ والمال، ويساعد الأسرة على متابعة خطتها شهرًا بشهر.

## المزايا

- **الإنجليزية والعربية:** يفتح الموقع بالإنجليزية وبالوضع الفاتح من أعلى الصفحة، وبضغطة واحدة يتحوّل إلى العربية باتجاه كامل من اليمين إلى اليسار وأرقام عربية وأيقونات الأهداف الرسمية بالعربية، أو إلى الوضع الداكن.
- **الحاسبة المنزلية:** استهلاك شهري للمياه (لتر) والكهرباء (ك.و.س) وCO₂ (كجم)، و٧ إجراءات مرتّبة حسب توفير CO₂، وإجمالي «خطتك» مع التوفير السنوي.
- **ما وفّره بيتنا:** زر «طبّقنا خطتنا هذا الشهر» مرة واحدة كل شهر (مع إمكانية التراجع)، وإجمالي تراكمي للمياه والكهرباء وCO₂. هذه تقديرات من الحاسبة وليست قياسات فعلية.
- **اختبار العادات:** ٧ أسئلة، وملف لعادات أسرتك، وأهم ٣ نصائح لأضعف عاداتكم، وكل نصيحة تنقلك إلى الإجراء المناسب في الحاسبة. طريقة حساب النقاط موضّحة في الصفحة.
- **متتبّع الفواتير:** أدخل فواتيرك الحقيقية (ك.و.س و م³)، وعدّلها أو احذفها، وشاهد رسمًا بيانيًا يوضّح التغيّر عن الشهر السابق ورقمًا تقريبيًا لـ CO₂.
- **بياناتك:** صدّر كل بياناتك في ملف JSON واستوردها على جهاز آخر.
- **أرقام مهمة في مصر:** دليل قابل للبحث لجهات رسمية في المياه والكهرباء والطاقة الشمسية (مثل ١٢٥ للمياه و١٢١ للكهرباء)، راجعنا كل رقم فيه على الموقع الرسمي للجهة، مع تاريخ المراجعة ورابط المصدر.
- **شارك خطتنا:** بطاقة صورة تُصنع داخل المتصفح (تنزيل PNG، نسخ النص، المشاركة من الهاتف، LinkedIn) مع منشور جاهز للنسخ.
- **سهل الاستخدام للجميع:** يعمل على الهاتف والتابلت والكمبيوتر وبلوحة المفاتيح، بتباين ألوان يحقق معيار WCAG AA في الوضعين، ويحترم إعداد تقليل الحركة، ويطبع «خطة أسرتنا» في صفحة واحدة.

## طريقة التشغيل

لا يحتاج إلى تثبيت. إمّا أن **تفتح ملف `index.html` بالنقر المزدوج**، أو تفتح [الموقع المنشور](https://yasseenabdelghany.github.io/Climate-Change-and-Sustainability-Website/).

## كيف نحسب (الافتراضات)

| البند | القيمة المستخدمة |
|---|---|
| تدفّق الدُش | العادي ٩ لترات/دقيقة، والموفّر ٦ لترات/دقيقة |
| المياه الساخنة | يُسخَّن ٦٠٪ من مياه الاستحمام بمقدار ٢٥ درجة مئوية |
| السخّان الكهربائي | ٠٫٠٣٢ ك.و.س لكل لتر ساخن (كفاءة ٩٠٪) |
| سخّان الغاز | ٠٫٠٠٧٣ كجم CO₂ لكل لتر ساخن |
| السخّان الشمسي | صفر تقريبًا |
| غسل الأسنان | الحنفية مفتوحة: ٢٤ لترًا لكل فرد يوميًا؛ مقفولة: لتران |
| السيفون / المطبخ والشرب | ٣٦ لترًا و٢٥ لترًا لكل فرد يوميًا |
| الغسيل | ٦٠ لترًا و٠٫٩ ك.و.س لكل غسلة دافئة؛ ٠٫٤ ك.و.س للغسلة الكاملة الباردة مع غسلات أقل بنحو ٢٠٪ |
| التكييف | متوسط ١٫١ كيلوواط؛ طاقة أقل بنحو ٤٪ لكل درجة أعلى حتى ٢٥ درجة |
| الإضاءة | ٥ ساعات يوميًا؛ LED ‏٩ واط، واللمبات القديمة ٢٥ واط في المتوسط |
| باقي الأجهزة | ١٢٠ ك.و.س شهريًا (الثلاجة، التلفزيون، الراوتر) |
| إمداد المياه ومعالجتها | ٠٫٦ ك.و.س لكل م³ |
| معامل انبعاثات الشبكة | نحو ٠٫٤٧ كجم CO₂ لكل ك.و.س (متوسط تقريبي لمصر) |
| الشهر | ٣٠ يومًا |
| CO₂ في متتبّع الفواتير | (ك.و.س + م³ × ٠٫٦) × ٠٫٤٧ كجم، رقم تقريبي |

هذه تقديرات للتوعية وليست فاتورة.

## البيانات والخصوصية

- لا يغادر أي شيء تكتبه متصفحك: لا حساب، ولا خادم، ولا أدوات تحليل أو تتبّع.
- تُحفظ بياناتك في متصفحك فقط (`localStorage`) على جهازك. وإذا منع المتصفح التخزين، يظل الموقع يعمل لكنه ينسى البيانات عند الإغلاق.
- الطلب الخارجي الوحيد هو تحميل الخطوط من Google Fonts. أزرار المشاركة وLinkedIn لا تعمل إلا عند الضغط عليها.

## المراجع

المراجع بأسلوب APA 7 باللغة الإنجليزية، وهي نفسها المذكورة في [القسم الإنجليزي](#references-apa-7).

## الفريق

الفريق رقم ٧٨، طلاب هندسة الحاسبات في جامعة العلمين الدولية.

| الاسم | الدور |
|---|---|
| احمد خالد احمد سعيد | البحث والتحليل |
| محمد هاني عوض عبد الحليم | إعداد المحتوى |
| احمد ياسر ابراهيم السيد | توظيف أدوات الذكاء الاصطناعي |
| احمد خالد فتحي احمد | النشر الرقمي |
| ياسين أحمد السيد عبدالغني | المُخرَج النهائي |

## تحديث الموقع المنشور

الموقع منشور على GitHub Pages من الفرع `main`. لنشر أي تعديل، احفظه (commit) ثم ارفعه بالأمر `git push origin main`، وسيتحدّث الموقع خلال دقيقة أو دقيقتين.

## شكر وتقدير

- أيقونات أهداف التنمية المستدامة من [الأمم المتحدة](https://www.un.org/sustainabledevelopment/news/communications-material/)، وهذا المشروع غير معتمد من الأمم المتحدة.
- الخطوط: Readex Pro وIBM Plex Sans وIBM Plex Sans Arabic من Google Fonts.

---

Licensed under the MIT License. See [LICENSE](LICENSE).
