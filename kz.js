// Kazakh A: the Kazakh wording of the builder page (used by lang.js when Kazakh A is chosen).
// The Kazakh wording was generated and should be checked by a Kazakh A teacher.
(function () {
  if (typeof S === 'undefined' || !S.lkz) return;

  // --- Kazakh A data that is always shown in Kazakh
  var L = S.lkz;
  L.rule = 'Kazakh A: сұрақ пен эссе қазақ тілінде жазылады. Үлгілер табыс септігін қолданады: тәсіл мен тақырып табыс септігінде (мысалы, «контраст тәсілін», «жалғыздық тақырыбын»). Қазақша тұжырымдар мен кеңестер автоматты түрде дайындалған: оларды міндетті түрде қазақ тілі мен әдебиеті мұғалімімен тексеріңіз.';
  var FL = { auth: 'Автор', work: 'Шығарма (тырнақшасыз)', dev: 'Тәсіл табыс септігінде (мысалы, «контраст тәсілін»)', th: 'Тақырып табыс септігінде (мысалы, «жалғыздық тақырыбын»)' };
  L.f.forEach(function (f) { if (FL[f[0]]) f[1] = FL[f[0]]; });
  L.v.forEach(function (v) { v[0] = v[0].split(' · ')[0]; });
  L.ck.forEach(function (c) { c[0] = c[0].split(' · ')[0]; });
  var SC = ['Кіріспе, сұрақ, тәсіл', 'Талдау 1', 'Талдау 2', 'Талдау 3: күрделендіру, қарсы оқылым', 'Қорытынды'];
  L.sc.forEach(function (x, i) { if (SC[i]) x[0] = SC[i]; });
  var CT = { C1: 'Қосымша дереккөздер: сын және теория', T1: 'Мұқият оқу: негізгі мәтінге түсініктеме', T2: 'Әр аргументке дәлелдер жинағы', T3: 'Қосымша дереккөздерді сыни бағалау' };
  L.c.forEach(function (t) { if (CT[t[0]]) t[1] = CT[t[0]]; });
  L.x.l = ' Салыстыру элементін қосу (екінші мәтін)';
  L.x.t.forEach(function (t) { t[1] = 'Салыстыру элементі: екінші мәтін'; });
  L.cp = 'Әдебиетте жоспардың өзегі — негізгі мәтінді мұқият оқу: неғұрлым ерте бастасаңыз, аргументке соғұрлым көп уақыт қалады.';
  L.ex.forEach(function (e) { e[0] = e[0].replace(/^Template: /, 'Үлгі: '); });
  (DIR.lkz || []).forEach(function (x) {
    x.n = x.n.split(' · ')[0];
    x.nt = x.nt.replace('Казахские формулировки нужно проверить у учителя.', 'Қазақша тұжырымдарды мұғалім тексеруі керек.');
  });

  // --- whole phrases
  var X = {
    // page, header and footer
    '🔬 EE Builder by subject · Конструктор EE по предметам': '🔬 Пәндер бойынша EE конструкторы',
    'Physics, Chemistry, Biology, Economics, Business Management, History, Mathematics, Computer Science, Geography, Arts, Language A, Language B. Each subject has its own question fields, variables, 4000-word structure and a week-by-week plan. Values in the fields are examples only: replace them. · Значения в полях — примеры, замените их.':
      'Әр пәннің өз сұрақ өрістері, талдау элементтері, 4000 сөздік құрылымы және апталық жоспары бар. Өрістердегі мәндер тек мысал: оларды өзіңіздікімен ауыстырыңыз.',
    'EE Builder': 'EE конструкторы', 'Which subject?': 'Қай пән?', 'APA 7 references': 'APA 7 сілтемелері', 'Builder': 'Конструктор',
    'Subject': 'Пән', 'Question': 'Сұрақ', 'Variables': 'Элементтер', 'Sources': 'Дереккөздер', 'Blueprint': 'Құрылым', 'Time left': 'Уақыт', 'Citations': 'Сілтемелер', 'Examples': 'Мысалдар',
    'Your work is saved only in this browser.': 'Жұмысыңыз тек осы браузерде сақталады.',
    'If you clear the browser or use another device, it will not be there. Download a copy regularly. · Работа хранится только в этом браузере — регулярно скачивайте копию.':
      'Браузерді тазаласаңыз немесе басқа құрылғыны қолдансаңыз, ол жоғалады. Көшірмесін үнемі жүктеп алыңыз.',
    'Download my work': 'Жұмысымды жүктеп алу', 'Load my work from a file': 'Жұмысымды файлдан жүктеу', 'Saved ✓': 'Сақталды ✓',
    'This is not a file saved from this site.': 'Бұл файл осы сайттан сақталмаған.',
    'The research directions, variables, section questions and plans were compiled with AI (Claude) from books on the Extended Essay, public examples and general IB practice. Check them with your supervisor. Kazakh wording was generated and should be checked by a Kazakh A teacher. Weeks and hours are estimates.':
      'Зерттеу бағыттары, талдау элементтері, бөлімдерге арналған сұрақтар мен жоспарлар Extended Essay туралы кітаптар, ашық мысалдар және жалпы IB тәжірибесі негізінде ЖИ (Claude) көмегімен құрастырылған. Оларды жетекшіңізбен тексеріңіз. Қазақша мәтін автоматты түрде дайындалған, оны қазақ тілі мұғалімі тексеруі керек. Апталар мен сағаттар шамамен берілген.',
    'Made by teachers for IB Extended Essay students. Not affiliated with or endorsed by the International Baccalaureate.':
      'IB Extended Essay оқушыларына арнап мұғалімдер жасаған. International Baccalaureate ұйымымен байланысы жоқ және ол мақұлдамаған.',
    'Save my work to a file': 'Жұмысымды файлға сақтау', 'Back to top': 'Жоғарыға',
    // 1. subject
    '1. Subject and question fields · Предмет и поля': '1. Пән және сұрақ өрістері',
    'Subject · Предмет': 'Пән',
    '🏆 How to reach the top band': '🏆 Жоғары балл алу жолы', '· Как получить высокий балл': '',
    'Research direction · Направление': 'Зерттеу бағыты', 'Custom': 'Өзім',
    'Pick a direction to fill the fields with a coherent set of variables, then adjust them. ✓ = approved by a teacher, ⚠ = marked for revision.':
      'Өрістерді үйлесімді мәндермен толтыру үшін бағытты таңдаңыз, содан кейін оларды өзгертіңіз. ✓ = мұғалім бекіткен, ⚠ = түзетуге белгіленген.',
    'No suggestions: type your own': 'Ұсыныс жоқ: өзіңіз жазыңыз', 'My options': 'Менің нұсқаларым', 'Save to my options': 'Менің нұсқаларыма сақтау', 'Remove from my options': 'Менің нұсқаларымнан алып тастау',
    'Add': 'Қосу', '+ add my own': '+ өзімдікін қосу', 'Remove': 'Өшіру', '× remove': '× өшіру',
    'Save the text typed here, or the current text of the field above, to your list': 'Осында жазылған мәтінді немесе жоғарыдағы өрістің мәтінін тізіміңізге сақтау',
    // 2. question
    '2. Research question variants · Варианты вопроса': '2. Зерттеу сұрағының нұсқалары',
    'Question openers can differ. Pick one to run the checks. · Выберите вариант для проверки.': 'Сұрақтың басталуы әртүрлі болуы мүмкін. Тексеру үшін біреуін таңдаңыз.',
    'Checks · Проверка': 'Тексеру',
    'All fields used by this question are filled': 'Сұрақтағы барлық өрістер толтырылған',
    'A single question': 'Бір ғана сұрақ', 'Analytical opener': 'Талдамалы бастама',
    // 3–4. variables, sources
    '3. Variables and method · Переменные и метод': '3. Талдау элементтері және әдіс',
    'My own variables · Мои переменные': 'Өз элементтерім',
    'Add a variable that the lists do not cover: its name and how you will measure, control or account for it. Saved in this browser.':
      'Тізімде жоқ элементті қосыңыз: атауы және оны қалай талдайтыныңыз немесе ескеретініңіз. Осы браузерде сақталады.',
    'Variable (e.g. humidity)': 'Элемент (мысалы, қайталау)', 'How I measure or control it': 'Оны қалай талдаймын немесе ескеремін', 'Add variable': 'Элемент қосу',
    'Measure and process · Как измерять': 'Қалай талдау керек', 'Control or account for · Что учесть': 'Нені ескеру керек',
    '4. Sources and tools · Источники и инструменты': '4. Дереккөздер мен құралдар', 'Sources · Источники': 'Дереккөздер',
    // 5. blueprint
    '5. Essay blueprint · Структура эссе': '5. Эссе құрылымы',
    'Sections, word budgets, what to write in each paragraph, checklists and your progress. Tap a section to open it. · Нажмите на раздел, чтобы раскрыть.':
      'Бөлімдер, сөз саны, әр абзацта не жазу керек, тексеру тізімдері және сіздің ілгерілеуіңіз. Бөлімді ашу үшін оны басыңыз.',
    'Organise the analysis · Организация анализа': 'Талдауды ұйымдастыру', 'Share of theory in the essay · Доля теории': 'Эсседегі теорияның үлесі',
    'By lens: key concept or critical theory · Через линзы': 'Линза бойынша: негізгі ұғым немесе сыни теория',
    'Each section reads the text through one lens: a key concept of the course (identity, representation, perspective, culture, creativity, communication, transformation) or a critical theory (feminist, postcolonial, psychoanalytic, Marxist). Analysis and evaluation sit together: apply the lens, then test its limits and compare it with critics. Headings are optional in literature essays (a free-flowing essay is also acceptable); if you use them, write them as claims.':
      'Әр бөлім мәтінді бір линза арқылы оқиды: курстың негізгі ұғымы (бірегейлік, бейнелеу, көзқарас, мәдениет, шығармашылық, коммуникация, трансформация) немесе сыни теория (феминистік, постколониялық, психоаналитикалық, марксистік). Талдау мен бағалау қатар жүреді: линзаны қолданыңыз, содан кейін оның шектеулерін тексеріп, сыншылармен салыстырыңыз. Әдебиет эсселерінде тақырыптар міндетті емес (еркін эссе де қабылданады); қолдансаңыз, оларды тұжырым ретінде жазыңыз.',
    'Lens 1: a key concept, applied and evaluated': '1-линза: негізгі ұғым, қолданылуы мен бағасы',
    'Lens 2: a critical theory or a second concept, applied and evaluated': '2-линза: сыни теория немесе екінші ұғым, қолданылуы мен бағасы',
    'Synthesis: what the lenses reveal together, and their limits': 'Синтез: линзалар бірге нені ашады және олардың шектеулері',
    'By device (one feature per section)': 'Тәсіл бойынша (әр бөлімде бір тәсіл)',
    'Each section analyses one device or feature and its effect on the idea in the question.': 'Әр бөлім бір тәсілді немесе ерекшелікті және оның сұрақтағы идеяға әсерін талдайды.',
    'Device 1 and its effect': '1-тәсіл және оның әсері', 'Device 2 and its effect': '2-тәсіл және оның әсері',
    'How the devices interact or complicate each other': 'Тәсілдердің өзара байланысы мен қайшылығы',
    'Through the work (beginning to end)': 'Шығарма бойымен (басынан соңына дейін)',
    'Follow the progression of the work and show how the effect develops. Do not retell the plot.': 'Шығарманың барысын бақылап, әсердің қалай дамитынын көрсетіңіз. Сюжетті қайталамаңыз.',
    'Opening and set-up': 'Басталуы және экспозиция', 'Development and turning point': 'Дамуы және бетбұрыс', 'Resolution and final effect': 'Шешімі және соңғы әсері',
    'By idea (argument-led)': 'Идея бойынша (аргументке негізделген)',
    'Each section develops one interpretive claim and uses several passages as evidence.': 'Әр бөлім бір интерпретациялық тұжырымды дамытып, бірнеше үзіндіні дәлел ретінде пайдаланады.',
    'Claim 1 and its passages': '1-тұжырым және үзінділер', 'Claim 2 and its passages': '2-тұжырым және үзінділер', 'Counter-reading or complication': 'Қарсы оқылым немесе күрделендіру',
    'Written:': 'Жазылғаны:', '· Checklist:': '· Тексеру тізімі:', 'ticked': 'белгіленді', '(over the limit)': '(шектен асты)',
    'Hook and context: why the topic matters, in 2–3 sentences. No history of the world.': 'Кіріспе және контекст: тақырыптың неге маңызды екенін 2–3 сөйлеммен көрсетіңіз. Әлем тарихын баяндамаңыз.',
    'Explain why the question is worth asking: a gap, a debate or a real problem.': 'Сұрақтың неге маңызды екенін түсіндіріңіз: зерттелмеген тұс, пікірталас немесе нақты мәселе.',
    'Give the approach and a one-line roadmap of the sections.': 'Тәсіліңізді және бөлімдердің бір жолдық жоспарын беріңіз.',
    'Sciences and mathematics: a falsifiable hypothesis or conjecture. Language A, literature, arts and humanities: a thesis (a provisional answer) and the line of argument, not a hypothesis.':
      'Жаратылыстану және математика: тексерілетін гипотеза. Language A, әдебиет, өнер және гуманитарлық пәндер: гипотеза емес, тезис (алдын ала жауап) және аргумент желісі.',
    'Question quoted exactly': 'Сұрақ дәл келтірілген', 'Terms defined': 'Терминдер анықталған', 'Scope limits stated': 'Шекаралар көрсетілген', 'Roadmap given': 'Бөлімдер жоспары берілген',
    'Write this section by answering': 'Бұл бөлімді мына сұрақтарға жауап беру арқылы жазыңыз',
    'Why does this topic matter? Give the context in 2–3 sentences, not the history of the world.': 'Бұл тақырып неге маңызды? Контексті 2–3 сөйлеммен беріңіз, әлем тарихын емес.',
    'Why is this question worth asking? What gap, debate or real problem does it address?': 'Бұл сұрақ неге зерттеуге тұрарлық? Ол қандай олқылыққа, пікірталасқа немесе нақты мәселеге жауап береді?',
    'Which approach do you take: a close reading of the text; a close reading through a literary theory or a key concept (identity, representation, perspective, culture…); or testing existing criticism? Name the lens and the critics.':
      'Қандай тәсілді таңдайсыз: мәтінді мұқият оқу; әдеби теория немесе негізгі ұғым (бірегейлік, бейнелеу, көзқарас, мәдениет…) арқылы мұқият оқу; әлде бар сынды тексеру? Линзаны және сыншыларды атаңыз.',
    'What is your thesis: a provisional answer and the line of argument you will develop? A hypothesis is not needed here.': 'Тезисіңіз қандай: алдын ала жауап және дамытатын аргумент желісі? Мұнда гипотеза қажет емес.',
    'This topic matters because…': 'Бұл тақырып маңызды, себебі…',
    'In this essay, … is defined as … The essay focuses on …': 'Бұл эсседе … деп … түсініледі. Эссе … назар аударады.',
    'This essay investigates the question: “…”': 'Бұл эссе мына сұрақты зерттейді: «…»',
    'This question is worth investigating because…': 'Бұл сұрақты зерттеу маңызды, себебі…',
    'This essay offers a close reading of … through the lens of …': 'Бұл эссе … шығармасын … линзасы арқылы мұқият оқиды.',
    'This essay argues that …': 'Бұл эсседе … деген тұжырым дәлелденеді.',
    'Draft of this section': 'Бөлімнің жобасы', 'Copy section': 'Бөлімді көшіру', 'Words written': 'Жазылған сөздер',
    'Copied ✓': 'Көшірілді ✓', 'Select the text and copy (Ctrl/Cmd + C)': 'Мәтінді белгілеп, көшіріңіз (Ctrl/Cmd + C)',
    'Open the section with a sentence that states its argument.': 'Бөлімді оның аргументін білдіретін сөйлеммен бастаңыз.',
    'Build paragraphs with PEEL: Point (a claim that answers part of the question), Evidence (data, quotation, source), Explanation (how the evidence supports the claim), Link (back to the question).':
      'Абзацтарды PEEL бойынша құрыңыз: Point (сұрақтың бір бөлігіне жауап беретін тұжырым), Evidence (дерек, дәйексөз, дереккөз), Explanation (дәлелдің тұжырымды қалай қолдайтыны), Link (сұраққа қайта байланыстыру).',
    'Evaluate the evidence inside the paragraph: strength, bias, counter-view.': 'Дәлелді абзацтың ішінде бағалаңыз: күші, біржақтылығы, қарсы пікір.',
    'Close with a mini-conclusion that answers part of the question.': 'Бөлімді сұрақтың бір бөлігіне жауап беретін шағын қорытындымен аяқтаңыз.',
    'Every paragraph has a claim and evidence': 'Әр абзацта тұжырым мен дәлел бар', 'Counter-view considered': 'Қарсы пікір қарастырылған', 'Mini-conclusion present': 'Шағын қорытынды бар',
    'Section heading': 'Бөлім тақырыбы',
    '(optional; write it as a claim, e.g. “Silence as resistance: a feminist reading”)': '(міндетті емес; тұжырым ретінде жазыңыз, мысалы: «Үнсіздік — қарсылық түрі: феминистік оқылым»)',
    'Your heading for this section': 'Осы бөлімнің тақырыбы',
    'Point:': 'Тұжырым (Point):', 'Evidence:': 'Дәлел (Evidence):', 'Explanation:': 'Түсіндіру (Explanation):', 'Evaluation:': 'Бағалау (Evaluation):', 'Link:': 'Байланыс (Link):',
    'what claim does this paragraph make that answers part of your question?': 'бұл абзац сұрағыңыздың бір бөлігіне жауап беретін қандай тұжырым жасайды?',
    'what data, quotation or source supports it? Cite it.': 'оны қандай дерек, дәйексөз немесе дереккөз қолдайды? Сілтеме беріңіз.',
    'how does the evidence support the claim? Use your framework and evaluate the evidence.': 'дәлел тұжырымды қалай қолдайды? Өз тәсіліңізді қолданып, дәлелді бағалаңыз.',
    'what are the limits of this lens? What would another reading or a critic say?': 'бұл линзаның шектеулері қандай? Басқа оқылым немесе сыншы не айтар еді?',
    'how does this answer your research question?': 'бұл зерттеу сұрағыңызға қалай жауап береді?',
    'This paragraph argues that…': 'Бұл абзацта … деген тұжырым жасалады…', 'According to … / The data show …': '… пікірінше … / Мәтінде: «…»',
    'This shows … because … However, …': 'Бұл … көрсетеді, себебі … Алайда …', 'However, a … reading suggests …': 'Алайда … оқылым … деп ұсынады',
    'Therefore …, which suggests that …': 'Демек, …, бұл … дегенді білдіреді',
    'Answer the research question directly in 1–2 sentences.': 'Зерттеу сұрағына 1–2 сөйлеммен тікелей жауап беріңіз.',
    'Summarise the main arguments or findings. No new evidence.': 'Негізгі аргументтер мен нәтижелерді қорытыңыз. Жаңа дәлел келтірмеңіз.',
    'Acknowledge limitations and what remains unanswered.': 'Шектеулерді және жауапсыз қалған мәселелерді атаңыз.',
    'Close with the significance or a direction for further research.': 'Зерттеудің маңызымен немесе болашақ зерттеу бағытымен аяқтаңыз.',
    'Question answered directly': 'Сұраққа тікелей жауап берілген', 'No new evidence': 'Жаңа дәлел жоқ', 'Limits acknowledged': 'Шектеулер аталған',
    'Which main arguments or findings led to this answer? (No new evidence.)': 'Қандай негізгі аргументтер немесе нәтижелер осы жауапқа әкелді? (Жаңа дәлелсіз.)',
    'Which limitations should the reader keep in mind?': 'Оқырман қандай шектеулерді ескеруі керек?',
    'What remains unanswered, and what is the significance or a next step?': 'Не жауапсыз қалды және зерттеудің маңызы немесе келесі қадамы қандай?',
    'In conclusion, … to a large/limited extent because …': 'Қорытындылай келе, … едәуір/шектеулі дәрежеде …, себебі …',
    'This conclusion rests on …: first …, second …': 'Бұл қорытынды мынаған негізделеді: біріншіден …, екіншіден …',
    'The conclusion is limited by …': 'Қорытындының шектеуі: …', 'Further research could …. This matters because …': 'Болашақ зерттеу … қарастыра алады. Бұл маңызды, себебі …',
    'Essay draft · Черновик': 'Эссенің жобасы', 'Copy essay draft': 'Эсседі көшіру',
    'Answers are saved in this browser only. Copy the draft into your document, rewrite it in your own words, then add equations, tables, citations and the bibliography.':
      'Жауаптар тек осы браузерде сақталады. Жобаны құжатыңызға көшіріп, өз сөзіңізбен қайта жазыңыз, содан кейін дәйексөздер, сілтемелер мен әдебиеттер тізімін қосыңыз.',
    'Assessment criteria from May 2027 (30 marks): A Framework for the essay (focus, methodology, structure and presentation) · B Knowledge and understanding · C Analysis and line of argument · D Discussion and evaluation · E Reflection (one reflective statement on the RPF after the viva, up to 500 words). Title page, contents, headings, citations and bibliography now count under A.':
      '2027 жылғы мамырдан бастап бағалау критерийлері (30 балл): A Эссенің құрылымы (фокус, әдіснама, құрылым және рәсімдеу) · B Білім және түсіну · C Талдау және аргумент желісі · D Талқылау және бағалау · E Рефлексия (viva voce-ден кейін RPF формасындағы бір рефлексиялық мәтін, 500 сөзге дейін). Титул беті, мазмұны, тақырыптар, сілтемелер және әдебиеттер тізімі енді A критерийіне жатады.',
    // 6. time
    '6. Time left · Сколько осталось времени': '6. Қалған уақыт',
    'Next checkpoint · Следующая контрольная точка': 'Келесі бақылау нүктесі',
    'Topic/focus, detailed action plan, notes from the reflection session, 1+ RRS entry': 'Тақырып/фокус, толық іс-қимыл жоспары, Рефлексия кездесуінің жазбасы, RRS-те 1+ жазба',
    'Defined RQ, bibliography, 2+ RRS entries': 'Нақты зерттеу сұрағы, әдебиеттер тізімі, RRS-те 2+ жазба',
    'Annotated bibliography (sciences: evidence of gathered data), detailed outline, 3+ RRS': 'Аннотацияланған әдебиеттер тізімі (жаратылыстану: жиналған деректердің дәлелі), толық жоспар, RRS-те 3+ жазба',
    'Summer plan, 1,500 words, 5+ RRS': 'Жазғы жоспар, 1500 сөз, RRS-те 5+ жазба',
    'Notes from the reflection session, summer plan achieved, analysed sources, intro + body, 3,000 words, 8+ RRS': 'Рефлексия кездесуінің жазбасы, жазғы жоспар орындалған, дереккөздер талданған, кіріспе + негізгі бөлім, 3000 сөз, RRS-те 8+ жазба',
    'Full draft, formatting (Arial 12, 3×3 cm, double spacing), citations, bibliography, 10+ RRS': 'Толық жоба, рәсімдеу (Arial 12, 3×3 см, қос интервал), сілтемелер, әдебиеттер тізімі, RRS-те 10+ жазба',
    'Supervisor feedback on the full draft, 12+ RRS': 'Жетекшінің толық жобаға пікірі, RRS-те 12+ жазба',
    'Final revisions discussed': 'Соңғы түзетулер талқыланды',
    'Final essay, viva voce, reflective statement on the RPF (up to 500 words), formatting, 15+ RRS': 'Қорытынды эссе, viva voce, RPF-тегі қорытынды рефлексия (500 сөзге дейін), рәсімдеу, RRS-те 15+ жазба',
    'today': 'бүгін', 'Today': 'Бүгін', 'dashed line = today': 'үзік сызық = бүгін',
    'All M28 checkpoints have passed.': 'M28 бақылау нүктелерінің бәрі өтті.',
    'What to work on now · Чем заняться сейчас': 'Қазір немен айналысу керек',
    'All tasks are past their planned dates.': 'Барлық тапсырмалардың жоспарланған мерзімі өтті.',
    'Some tasks do not fit between the checkpoints: shorten the work or move the dates.': 'Кейбір тапсырмалар бақылау нүктелерінің арасына сыймайды: жұмысты қысқартыңыз немесе күндерді жылжытыңыз.',
    'Detailed plan by weeks · Подробный план': 'Апталар бойынша толық жоспар',
    'Break / buffer, weeks · Пауза (лето, риски)': 'Үзіліс / қор, апта', 'Schedule · Расписание': 'Кесте',
    'Aligned to M28 checkpoints': 'M28 бақылау нүктелеріне сәйкес', 'As early as possible': 'Мүмкіндігінше ерте',
    'Earliest start · Не раньше': 'Ең ерте басталу күні',
    'within the 40 h guide': '40 сағаттық нұсқаулық шегінде', 'above the 40 h guide': '40 сағаттық нұсқаулықтан асады',
    'Task': 'Тапсырма', 'Start': 'Басталуы', 'End': 'Аяқталуы', 'Hours': 'Сағат',
    'Checkpoint dates · Даты контрольных точек': 'Бақылау нүктелерінің күндері', 'M28 checkpoints.': 'M28 бақылау нүктелері.',
    'Dates are taken from the Extended Essay M28 Checklist (Grade 11: 15–19 Feb, 8–12 Mar, 12–16 Apr, 17–21 May 2027; Grade 12: 6–11 Sep, 8 Oct, 1–5 Nov, 6–10 Dec 2027, final 7 Jan 2028). Each date is the last day of the window; edit if the schedule changes. · Даты из чеклиста M28; указан последний день окна.':
      'Күндер Extended Essay M28 тексеру тізімінен алынған (11-сынып: 15–19 ақпан, 8–12 наурыз, 12–16 сәуір, 17–21 мамыр 2027; 12-сынып: 6–11 қыркүйек, 8 қазан, 1–5 қараша, 6–10 желтоқсан 2027, қорытынды тапсыру 7 қаңтар 2028). Әр күн — мерзімнің соңғы күні; кесте өзгерсе, түзетіңіз.',
    // 7. APA
    '7. Citations and references (APA 7) · Ссылки и список литературы': '7. Сілтемелер және әдебиеттер тізімі (APA 7)',
    'Use the APA 7 builder to create every reference and in-text citation and to keep your reference list. The school EE checklist requires APA. · Чеклист школы требует APA.':
      'Әрбір дереккөзді және мәтін ішіндегі сілтемені жасау, әдебиеттер тізімін жүргізу үшін APA 7 құрастырғышын пайдаланыңыз. Мектептің EE тексеру тізімі APA талап етеді.',
    'Open the APA 7 reference builder ↗': 'APA 7 сілтеме құрастырғышын ашу ↗',
    '· 20 source types (including generative AI chats under the September 2025 APA Style guidance), in-text citations, a reference list with a, b for same-year works, combined and “as cited in” citations.':
      '· 20 дереккөз түрі (оның ішінде 2025 жылғы қыркүйектегі APA Style нұсқаулығы бойынша генеративті ЖИ чаттары), мәтін ішіндегі сілтемелер, бір жылғы еңбектерге a, b әріптері қойылатын әдебиеттер тізімі, біріктірілген және «as cited in» сілтемелер.',
    'APA reminders · Памятка': 'APA бойынша еске салғыш',
    'Every source cited in the text appears in the reference list, and every entry in the list is cited in the text. Personal communications are cited in the text only.':
      'Мәтінде келтірілген әрбір дереккөз әдебиеттер тізімінде болуы керек, ал тізімдегі әр жазбаға мәтінде сілтеме болуы керек. Жеке хат-хабарларға тек мәтін ішінде сілтеме жасалады.',
    'Sort the list alphabetically by the first author’s surname; use a hanging indent and double spacing.': 'Тізімді бірінші автордың тегі бойынша әліпби ретімен сұрыптаңыз; шығыңқы шегініс пен қос интервалды қолданыңыз.',
    'Use sentence case for titles of books, articles and web pages, and italicise books, reports, web pages and journal names. The Copy buttons keep the italics when you paste into Word or Google Docs.':
      'Кітап, мақала және веб-бет атауларында тек бірінші сөзді бас әріппен жазыңыз; кітаптарды, есептерді, веб-беттерді және журнал атауларын курсивпен беріңіз. Copy батырмалары Word немесе Google Docs-қа қойғанда курсивті сақтайды.',
    'Give a DOI as https://doi.org/… when there is one; otherwise give the URL.': 'DOI болса, оны https://doi.org/… түрінде беріңіз; болмаса, URL көрсетіңіз.',
    'Add a page number for every direct quotation, for example (Smith, 2020, p. 12).': 'Әрбір тікелей дәйексөзге бет нөмірін қосыңыз, мысалы (Smith, 2020, p. 12).',
    'In-text citations and the reference list are not counted in the 4000 words.': 'Мәтін ішіндегі сілтемелер мен әдебиеттер тізімі 4000 сөзге кірмейді.',
    'Language A: cite the edition of the primary text you use and give a page number for every quotation. For a translated text give both years, for example (Tolstoy, 1878/2010).':
      'Language A: пайдаланған негізгі мәтін басылымын көрсетіп, әр дәйексөзге бет нөмірін беріңіз. Аударма мәтін үшін екі жылды да көрсетіңіз, мысалы (Tolstoy, 1878/2010).',
    // 2. my question
    '2. Your research question · Ваш вопрос': '2. Сіздің зерттеу сұрағыңыз',
    'The templates below are only a starting draft built from your fields, not your question. Pick the closest one, then write your own version underneath. · Шаблоны — только черновик-каркас.':
      'Төмендегі үлгілер — өрістеріңізден құрастырылған бастапқы жоба ғана, сіздің сұрағыңыз емес. Ең жақынын таңдап, астына өз нұсқаңызды жазыңыз.',
    '✍️ My research question': '✍️ Менің зерттеу сұрағым',
    '(required): rewrite the draft in your own words, with your own case and wording.': '(міндетті): жобаны өз сөзіңізбен, өз мысалыңызбен және өз тұжырымыңызбен қайта жазыңыз.',
    'My research question…': 'Менің зерттеу сұрағым…', 'Start from the selected draft': 'Таңдалған жобадан бастау',
    'Why this question?': 'Неге бұл сұрақ?', 'Why it interests you, what you have read so far, what you expect to find.': 'Ол сізге неге қызық, не оқыдыңыз, не табамын деп күтесіз.',
    'It interests me because … So far I have read … I expect …': 'Бұл маған қызық, себебі … Мен … оқыдым … Мен … күтемін',
    'Save this version to my research diary': 'Бұл нұсқаны зерттеу күнделігіме сақтау',
    'Academic integrity.': 'Академиялық адалдық.',
    'This site is a planning tool and its suggestions were compiled with AI. The question you submit must be your own. Note in your research diary (RRS) that you used EE Toolkit, and agree the final question with your supervisor.':
      'Бұл сайт — жоспарлау құралы, оның ұсыныстары ЖИ көмегімен құрастырылған. Тапсыратын сұрағыңыз өзіңіздікі болуы керек. Зерттеу күнделігіңізде (RRS) EE Toolkit қолданғаныңызды жазып, қорытынды сұрақты жетекшіңізбен келісіңіз.',
    'Which key terms need defining, and what limits did you set (place, period, text, system)? Terms to consider:': 'Қандай терминдерді анықтау керек және қандай шекаралар қойдыңыз (орын, кезең, мәтін, жүйе)?',
    'Define the key terms and set the limits (place, period, text, system):': 'Негізгі терминдерді анықтап, шекараларды белгілеңіз (орын, кезең, мәтін, жүйе).',
    '(checking your question)': '(сіздің сұрағыңыз тексеріледі)', '(checking the selected draft: write your own version above)': '(таңдалған жоба тексеріледі: жоғарыда өз нұсқаңызды жазыңыз)',
    'Write your question first.': 'Алдымен сұрағыңызды жазыңыз.', 'Replace your text with the selected draft?': 'Мәтініңізді таңдалған жобамен ауыстыру керек пе?',
    // 6. checkpoint ticks
    'Ready for this checkpoint?': 'Осы бақылау нүктесіне дайынсыз ба?',
    'Topic/focus': 'Тақырып/фокус', 'Detailed action plan': 'Толық іс-қимыл жоспары', 'Notes from the reflection session': 'Рефлексия кездесуінің жазбасы', 'Notes from the reflection session': 'Рефлексия кездесуінің жазбасы',
    'Defined RQ': 'Нақты зерттеу сұрағы', 'Bibliography': 'Әдебиеттер тізімі',
    'Annotated bibliography (sciences: evidence of gathered data)': 'Аннотацияланған әдебиеттер тізімі (жаратылыстану: жиналған деректер)',
    'Summer plan': 'Жазғы жоспар', '1,500 words': '1500 сөз', '3,000 words': '3000 сөз', 'Summer plan achieved': 'Жазғы жоспар орындалды',
    'Analysed sources': 'Дереккөздер талданды', 'Intro + body': 'Кіріспе + негізгі бөлім', 'Full draft': 'Толық жоба',
    'Formatting (Arial 12, 3×3 cm, double spacing)': 'Рәсімдеу (Arial 12, 3×3 см, қос интервал)',
    'Supervisor feedback on the full draft': 'Жетекшінің толық жобаға пікірі', 'Final essay': 'Қорытынды эссе',
    'Reflective statement on the RPF (up to 500 words)': 'RPF-тегі қорытынды рефлексия (500 сөзге дейін)', 'Formatting': 'Рәсімдеу',
    // EE guide checks (2026-11-11)
    "AI.": "ЖИ.",
    "If you use AI-generated material, treat it as a source: cite it and check it against other sources (EE guide).": "Жасанды интеллект жасаған материалды пайдалансаңыз, оны дереккөз ретінде қарастырыңыз: сілтеме жасаңыз және басқа дереккөздермен тексеріңіз (EE guide).",
    "Your own checks (from the EE guide)": "Өзіңізді тексеру (EE guide бойынша)",
    "The answer is not obvious from the question itself.": "Жауап сұрақтың өзінен айқын емес.",
    "It invites analysis and evaluation, not description.": "Сұрақ сипаттауды емес, талдау мен бағалауды талап етеді.",
    "I have checked that there are enough sources I can access.": "Қолжетімді дереккөздердің жеткілікті екенін тексердім.",
    "My research method suits the subject and can answer the question.": "Зерттеу әдісім пәнге сай және сұраққа жауап беруге мүмкіндік береді.",
    "There are no ethical problems (IB ethical guidelines).": "Этикалық мәселелер жоқ (IB этикалық ережелері).",
    "My supervisor has seen this version.": "Жетекшім осы нұсқаны көрді.",
    "No [example] placeholders left": "[Мысал] жақшалары қалмаған",
    "Type of entry": "Жазба түрі",
    "My own thinking": "Өз ойым",
    "Note from a source: quotation": "Дереккөз бойынша жазба: дәйексөз",
    "Note from a source: paraphrase": "Дереккөз бойынша жазба: өз сөзіммен баяндау",
    "Note from a source: summary": "Дереккөз бойынша жазба: қысқаша мазмұн",
    "Source: quotation": "Дереккөз: дәйексөз",
    "Source: paraphrase": "Дереккөз: өз сөзіммен баяндау",
    "Source: summary": "Дереккөз: қысқаша мазмұн",
    "Source details": "Дереккөз деректері",
    "Author, title, page or URL, date": "Авторы, атауы, беті немесе URL, күні",
    "Source:": "Дереккөз:",
    "Add the source details.": "Дереккөз деректерін қосыңыз.",
    "The EE guide suggests marking each entry: is it your own thinking or someone else’s work? For a source, write down all its details now; this saves time when you write your references.": "EE guide әр жазбаны белгілеуге кеңес береді: бұл өз ойыңыз ба, әлде басқаның еңбегі ме? Дереккөздің барлық деректерін бірден жазыңыз — бұл әдебиеттер тізімін жасағанда уақыт үнемдейді.",
    // 9. diary
    'Diary': 'Күнделік',
    '9. Research diary (RRS) · Исследовательский дневник': '9. Зерттеу күнделігі (RRS)',
    'The IB strongly recommends keeping a researcher’s reflection space (RRS). Write a short entry each week and after every meeting with your supervisor: what you did, what you found, what changed in your thinking. These entries help in the reflection sessions, the viva voce and your final reflection (criterion E). Entries are saved only in this browser: copy them into your school RRS regularly.':
      'IB зерттеушінің рефлексия кеңістігін (researcher’s reflection space, RRS) жүргізуді қатты ұсынады. Әр апта сайын және жетекшімен әр кездесуден кейін қысқа жазба жасаңыз: не істедіңіз, не таптыңыз, ойлауыңызда не өзгерді. Бұл жазбалар рефлексия кездесулерінде, viva voce-де және қорытынды рефлексияда (E критерийі) көмектеседі. Жазбалар тек осы браузерде сақталады: оларды мектептің RRS-іне үнемі көшіріп отырыңыз.',
    'Date': 'Күні', 'Question to answer (optional)': 'Жазбаға арналған сұрақ (міндетті емес)', 'Write your entry…': 'Жазбаңызды жазыңыз…',
    'Add entry': 'Жазба қосу', 'Copy the whole diary': 'Бүкіл күнделікті көшіру', 'Write something first.': 'Алдымен мәтін жазыңыз.',
    'Added ✓': 'Қосылды ✓', 'Delete this entry?': 'Бұл жазбаны өшіру керек пе?', '— free entry —': '— еркін жазба —',
    'No entries yet. Start with the first question in the list.': 'Әзірге жазба жоқ. Тізімдегі бірінші сұрақтан бастаңыз.',
    'Getting started': 'Жұмысты бастау', 'Research question': 'Зерттеу сұрағы', 'Research and sources': 'Зерттеу және дереккөздер',
    'Writing and feedback': 'Жазу және кері байланыс', 'Reflection (for the RPF)': 'Рефлексия (RPF үшін)', 'AI use': 'ЖИ қолдану',
    'What interests me about this topic, and why?': 'Бұл тақырыптың маған несі қызық және неге?',
    'What do I already know about it, and what do I want to find out?': 'Ол туралы не білемін және нені анықтағым келеді?',
    'Which subject fits my topic best, and why?': 'Тақырыбыма қай пән ең жақсы сәйкес келеді және неге?',
    'How has my research question changed, and why?': 'Зерттеу сұрағым қалай өзгерді және неге?',
    'What did my supervisor suggest, and what will I do about it?': 'Жетекшім не ұсынды және мен не істеймін?',
    'Is my question focused enough to answer in 4000 words? What would I narrow?': 'Сұрағым 4000 сөзде жауап беруге жеткілікті тар ма? Нені тарылтар едім?',
    'Which sources did I read this week? What was the most useful idea?': 'Осы аптада қандай дереккөздерді оқыдым? Ең пайдалы идея қандай болды?',
    'Which source surprised me or challenged my view? How reliable is it?': 'Қай дереккөз мені таң қалдырды немесе көзқарасыма күмән келтірді? Ол қаншалықты сенімді?',
    'What evidence do I still need, and where will I find it?': 'Маған әлі қандай дәлелдер керек және оларды қайдан табамын?',
    'What problem did I face in my research, and how did I solve it?': 'Зерттеуде қандай қиындыққа тап болдым және оны қалай шештім?',
    'What did I do this week, and what is my plan for next week?': 'Осы аптада не істедім және келесі аптаға жоспарым қандай?',
    'Which part of my argument is strongest, and which is weakest?': 'Аргументімнің қай бөлігі ең күшті, қайсысы ең әлсіз?',
    'What feedback did I get, and what did I change because of it?': 'Қандай кері байланыс алдым және соның арқасында нені өзгерттім?',
    'Which skills have I developed (research, thinking, self-management, communication)? Give an example.': 'Қандай дағдыларымды дамыттым (зерттеу, ойлау, өзін-өзі басқару, коммуникация)? Мысал келтіріңіз.',
    'How has my thinking about the topic changed since I started?': 'Жұмысты бастағаннан бері тақырып туралы ойым қалай өзгерді?',
    'What would I do differently if I started again?': 'Қайта бастасам, нені басқаша істер едім?',
    'Where can I use what I have learned outside the EE?': 'Үйренгенімді EE-ден тыс қай жерде қолдана аламын?',
    'Did I use an AI tool? Which one, with what prompt, and what did I keep or reject?': 'ЖИ құралын қолдандым ба? Қайсысын, қандай сұраныспен және нені қалдырып, нені алып тастадым?',
    // 8. examples
    '8. Examples · Примеры': '8. Мысалдар',
    'Sciences and English: examples from the public Clastify catalogue (some pages need registration). Economics: examples from Hodder. Use for structure only, do not copy. · Только как образец структуры.':
      'Жаратылыстану және ағылшын тілі: ашық Clastify каталогындағы мысалдар (кейбір беттер тіркелуді талап етеді). Экономика: Hodder кітабындағы мысалдар. Тек құрылым үлгісі ретінде пайдаланыңыз, көшірмеңіз.'
  };

  // --- phrases that start a longer text (the rest is the student's own words)
  var P = [
    ['Define the key terms and set the limits (place, period, text, system): ', 'Негізгі терминдерді анықтап, шекараларды белгілеңіз (орын, кезең, мәтін, жүйе): '],
    ['State the research question word for word: “', 'Зерттеу сұрағын сөзбе-сөз жазыңыз: “'],
    ['Which key terms need defining, and what limits did you set (place, period, text, system)? Terms to consider: ', 'Қандай терминдерді анықтау керек және қандай шекаралар қойдыңыз (орын, кезең, мәтін, жүйе)? Ескеретін терминдер: '],
    ['What is your research question, word for word? “', 'Зерттеу сұрағыңыз сөзбе-сөз қандай? “'],
    ['e.g. ', 'мысалы, ']
  ];

  // --- whole texts with numbers in them
  var MON = { Jan: 'қаңтар', Feb: 'ақпан', Mar: 'наурыз', Apr: 'сәуір', May: 'мамыр', Jun: 'маусым', Jul: 'шілде', Aug: 'тамыз', Sep: 'қыркүйек', Sept: 'қыркүйек', Oct: 'қазан', Nov: 'қараша', Dec: 'желтоқсан' };
  var MSH = { Jan: 'Қаң', Feb: 'Ақп', Mar: 'Нау', Apr: 'Сәу', May: 'Мам', Jun: 'Мау', Jul: 'Шіл', Aug: 'Там', Sep: 'Қыр', Sept: 'Қыр', Oct: 'Қаз', Nov: 'Қар', Dec: 'Жел' };
  var R = [
    [/^Length: (\d+) words?( \(a guide only\))?$/, function (m, n, g) { return 'Ұзындығы: ' + n + ' сөз' + (g ? ' (тек бағдар)' : ''); }],
    [/^(\d+)% · about (\d+) words$/, '$1% · шамамен $2 сөз'],
    [/^(\d+) \/ 4000 words$/, '$1 / 4000 сөз'],
    [/^· ~(\d+) words · ≈(\d+) paragraphs?$/, '· ~$1 сөз · ≈$2 абзац'],
    [/^Criteria (.+)$/, 'Критерийлер: $1'],
    [/^(\d+) words?$/, '$1 сөз'],
    [/^(\d+) words? written so far$/, 'Әзірге $1 сөз жазылды'],
    [/^Paragraph (\d+)$/, '$1-абзац'],
    [/^▾ Choose a suggestion \((\d+)\)$/, '▾ Ұсынысты таңдаңыз ($1)'],
    [/^Saved to your research diary ✓ \(version (\d+)\)$/, 'Күнделікке сақталды ✓ ($1-нұсқа)'],
    [/^Research question, version (\d+)$/, 'Зерттеу сұрағы, $1-нұсқа'],
    [/^(\d+) entr(?:y|ies)$/, '$1 жазба'],
    [/^\(your diary: (\d+)\)$/, '(күнделігіңізде: $1)'],
    [/^(\d+)\+ RRS(?: entr(?:y|ies))?$/, 'RRS-те $1+ жазба'],
    [/^(.+) · ([\d,]+) words by (.+)$/, function (m, a, n, d) { return a + ' · ' + d + ' дейін ' + n.replace(',', '') + ' сөз'; }],
    [/^in (\d+) days? \(≈(\d+) weeks\)$/, '$1 күннен кейін (≈$2 апта)'],
    [/^in (\d+) days?$/, '$1 күннен кейін'],
    [/^(\d+) days? \(≈(\d+) weeks\) ago$/, '$1 күн бұрын (≈$2 апта)'],
    [/^(\d+) days? ago$/, '$1 күн бұрын'],
    [/^plan runs \((\d+) wks\)$/, 'жоспар ұзақтығы ($1 апта)'],
    [/^(\d+) h$/, '$1 сағ'],
    [/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept?|Oct|Nov|Dec)( \d\d)?$/, function (m, a, y) { return MSH[a] + (y || ''); }]
  ];

  // --- pieces inside longer texts (plan tasks, checkpoints, dates); longer ones first
  var TASKS = {
    'Choose subject and topic area': 'Пән мен тақырып аясын таңдау',
    'Pre-reading; define topic/focus': 'Алдын ала оқу; тақырып/фокусты анықтау',
    'First reflection session: action plan': 'Бірінші рефлексия: іс-қимыл жоспары, Рефлексия кездесуінің жазбасы',
    'Formulate the research question': 'Зерттеу сұрағын тұжырымдау',
    'Stress-test RQ + draft bibliography': 'Зерттеу сұрағын тексеру + әдебиеттер тізімінің жобасы',
    'Check-in 1 (RQ and bibliography confirmed)': 'Бақылау кездесуі 1 (сұрақ пен әдебиеттер тізімі бекітілді)',
    'Detailed outline': 'Толық жоспар',
    'First 1,500 words + summer plan': 'Алғашқы 1500 сөз + жазғы жоспар',
    'Draft main body to 3,000 words': 'Негізгі бөлімнің жобасы, 3000 сөзге дейін',
    'Interim reflection session': 'Аралық рефлексия (Рефлексия кездесуінің жазбасы)',
    'Complete draft, conclusion, formatting': 'Толық жоба, қорытынды, рәсімдеу',
    'Check-in 4: supervisor feedback': 'Бақылау кездесуі 4: жетекшінің пікірі',
    'Revisions; Check-in 5': 'Түзетулер; бақылау кездесуі 5',
    'Final submission + viva voce + reflective statement': 'Қорытынды тапсыру + viva voce + қорытынды рефлексия',
    ' Pick a value from the list above a field, then adjust it in the field if needed. To keep your own value, type it and press ☆: it is added to “My options” in the list and saved in this browser.':
      ' Өрістің үстіндегі тізімнен мәнді таңдап, қажет болса, өрістің өзінде түзетіңіз. Өз мәніңізді сақтау үшін оны жазып, ☆ батырмасын басыңыз: ол тізімдегі «Менің нұсқаларым» бөліміне қосылып, осы браузерде сақталады.',
    'Nothing is scheduled for today. Next: ': 'Бүгінге ештеңе жоспарланбаған. Келесісі: ',
    'In this plan, work starts on ': 'Бұл жоспарда жұмыс басталатын күн: ',
    ' (already started)': ' (басталып кетті)', ' (today)': ' (бүгін)'
  };
  var DAYS = '(\\d+) days?(?: \\(≈(\\d+) weeks\\))?';
  var wk = function (d, w) { return d + ' күн' + (w ? ' (≈' + w + ' апта)' : ''); };
  var SUB = [
    [/ \(from ([^)]+)\)/g, ' ($1 бастап)'],
    [/ \(until ([^)]+)\)/g, ' ($1 дейін)'],
    [new RegExp(' \\(' + DAYS + ' from today\\)', 'g'), function (m, d, w) { return ' (бүгіннен бастап ' + wk(d, w) + ' кейін)'; }],
    [new RegExp('Final submission in ' + DAYS + '\\.', 'g'), function (m, d, w) { return 'Қорытынды тапсыруға дейін ' + wk(d, w) + '.'; }],
    [/ Bars show when each task is planned;[^]*?ending on ([^;]+);[^]*Use Break for pauses\./, ' Жолақтар әр тапсырманың жоспарланған уақытын көрсетеді; үзік сызық — бүгінгі күн. Ұзақтығы мен сағаттары шамамен берілген; IB нұсқаулығы бойынша шамамен 40 сағат. «M28 бақылау нүктелеріне сәйкес» режимінде зерттеу бақылау кездесуі 1-ден кейін басталады, ал жазу кезеңдері M28 бақылау нүктелерінің алдына қойылып, $1 аяқталады; «Мүмкіндігінше ерте» режимі ең ерте басталу күнінен басталады. Қызыл түс ең ұзын тәуелділік тізбегін көрсетеді. Үзілістер үшін «Үзіліс» өрісін пайдаланыңыз.'],
    [/(^|· )by (\d+ \S+ \d{4})/g, '$1$2 дейін'],
    [/First reflection/g, 'Бірінші рефлексия'], [/Interim reflection/g, 'Аралық рефлексия'], [/Complete draft/g, 'Толық жоба'],
    [/Final \+ viva/g, 'Қорытынды тапсыру + viva voce'], [/Check-in (\d)/g, 'Бақылау кездесуі $1'],
    [/(\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept?|Oct|Nov|Dec)\b/g, function (m, d, a) { return d + ' ' + MON[a]; }]
  ];

  window.EE_LANG = window.EE_LANG || {};
  EE_LANG.lkz = { lang: 'kk', X: X, P: P, R: R, TASKS: TASKS, SUB: SUB };
})();
