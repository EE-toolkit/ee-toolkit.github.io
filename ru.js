// Russian A: the Russian wording of the builder page (used by lang.js when Russian A is chosen).
(function () {
  if (typeof S === 'undefined' || !S.lru) return;

  // --- Russian A data that is always shown in Russian
  var L = S.lru;
  L.rule = 'Russian A: вопрос и эссе пишутся на русском. Первичный источник — сам текст; вторичные источники используются критически. Шаблоны используют падежи: приём — в форме, где именительный и винительный совпадают (напр. «внутренний монолог»), тема — в родительном (напр. «темы одиночества»). Если формулировка звучит неестественно, перепишите вопрос вручную.';
  var FL = { auth: 'Автор', work: 'Произведение (без кавычек)', dev: 'Приём (напр. «внутренний монолог»)', th: 'Тема в родительном падеже (напр. «темы одиночества»)' };
  L.f.forEach(function (f) { if (FL[f[0]]) f[1] = FL[f[0]]; });
  L.v.forEach(function (v) { v[0] = v[0].split(' · ')[0]; });
  L.ck.forEach(function (c) { c[0] = c[0].split(' · ')[0]; });
  var SC = ['Введение, вопрос, подход', 'Анализ 1', 'Анализ 2', 'Анализ 3: усложнение, контр-прочтение', 'Заключение'];
  L.sc.forEach(function (x, i) { if (SC[i]) x[0] = SC[i]; });
  var CT = { C1: 'Вторичные источники: критика и теория', T1: 'Медленное чтение: аннотации к первичному тексту', T2: 'Банк цитат под каждый аргумент', T3: 'Критическая оценка вторичных источников' };
  L.c.forEach(function (t) { if (CT[t[0]]) t[1] = CT[t[0]]; });
  L.x.l = ' Добавить сравнительный элемент (второй текст)';
  L.x.t.forEach(function (t) { t[1] = 'Сравнительный элемент: второй текст'; });
  L.cp = 'В литературе основа плана — медленное чтение первичного текста: чем раньше начнёте, тем больше времени останется на аргумент.';
  L.ex.forEach(function (e) { e[0] = e[0].replace(/^Template: /, 'Шаблон: '); });
  (DIR.lru || []).forEach(function (x) { x.n = x.n.split(' · ')[0]; });

  // --- whole phrases
  var X = {
    // page, header and footer
    '🔬 EE Builder by subject · Конструктор EE по предметам': '🔬 Конструктор EE по предметам',
    'Physics, Chemistry, Biology, Economics, Business Management, History, Mathematics, Computer Science, Geography, Arts, Language A, Language B. Each subject has its own question fields, variables, 4000-word structure and a week-by-week plan. Values in the fields are examples only: replace them. · Значения в полях — примеры, замените их.':
      'У каждого предмета свои поля вопроса, элементы анализа, структура на 4000 слов и план по неделям. Значения в полях — только примеры: замените их своими.',
    'EE Builder': 'Конструктор EE', 'Which subject?': 'Какой предмет?', 'APA 7 references': 'Ссылки APA 7', 'Builder': 'Конструктор',
    'Subject': 'Предмет', 'Question': 'Вопрос', 'Variables': 'Элементы', 'Sources': 'Источники', 'Blueprint': 'Структура', 'Time left': 'Время', 'Citations': 'Ссылки', 'Examples': 'Примеры',
    'Your work is saved only in this browser.': 'Ваша работа хранится только в этом браузере.',
    'If you clear the browser or use another device, it will not be there. Download a copy regularly. · Работа хранится только в этом браузере — регулярно скачивайте копию.':
      'Если очистить браузер или открыть сайт на другом устройстве, её там не будет. Регулярно скачивайте копию.',
    'Download my work': 'Скачать мою работу', 'Load my work from a file': 'Загрузить работу из файла', 'Saved ✓': 'Сохранено ✓',
    'This is not a file saved from this site.': 'Этот файл сохранён не с этого сайта.',
    'The research directions, variables, section questions and plans were compiled with AI (Claude) from books on the Extended Essay, public examples and general IB practice. Check them with your supervisor. Kazakh wording was generated and should be checked by a Kazakh A teacher. Weeks and hours are estimates.':
      'Направления исследования, элементы анализа, вопросы к разделам и планы составлены с помощью ИИ (Claude) по книгам об Extended Essay, открытым примерам и общей практике IB. Проверьте их с руководителем. Недели и часы указаны приблизительно.',
    'Made by teachers for IB Extended Essay students. Not affiliated with or endorsed by the International Baccalaureate.':
      'Сделано учителями для учеников, пишущих IB Extended Essay. Сайт не связан с International Baccalaureate и не одобрен им.',
    'Save my work to a file': 'Сохранить работу в файл', 'Back to top': 'Наверх',
    // 1. subject
    '1. Subject and question fields · Предмет и поля': '1. Предмет и поля вопроса',
    'Subject · Предмет': 'Предмет',
    '🏆 How to reach the top band': '🏆 Как получить высокий балл', '· Как получить высокий балл': '',
    'Research direction · Направление': 'Направление исследования', 'Custom': 'Своё',
    'Pick a direction to fill the fields with a coherent set of variables, then adjust them. ✓ = approved by a teacher, ⚠ = marked for revision.':
      'Выберите направление, чтобы заполнить поля согласованным набором значений, затем измените их. ✓ = одобрено учителем, ⚠ = отмечено для доработки.',
    'No suggestions: type your own': 'Подсказок нет: введите своё', 'My options': 'Мои варианты', 'Save to my options': 'Сохранить в мои варианты', 'Remove from my options': 'Убрать из моих вариантов',
    'Add': 'Добавить', '+ add my own': '+ добавить своё', 'Remove': 'Удалить', '× remove': '× удалить',
    'Save the text typed here, or the current text of the field above, to your list': 'Сохранить в свой список текст, введённый здесь, или текущий текст поля выше',
    // 2. question
    '2. Research question variants · Варианты вопроса': '2. Варианты исследовательского вопроса',
    'Question openers can differ. Pick one to run the checks. · Выберите вариант для проверки.': 'Вопрос можно начать по-разному. Выберите вариант для проверки.',
    'Checks · Проверка': 'Проверка',
    'All fields used by this question are filled': 'Все поля этого вопроса заполнены',
    'A single question': 'Один вопрос', 'Analytical opener': 'Аналитическое начало вопроса',
    // 3–4. variables, sources
    '3. Variables and method · Переменные и метод': '3. Элементы анализа и метод',
    'My own variables · Мои переменные': 'Мои элементы',
    'Add a variable that the lists do not cover: its name and how you will measure, control or account for it. Saved in this browser.':
      'Добавьте элемент, которого нет в списках: его название и то, как вы будете его анализировать или учитывать. Сохраняется в этом браузере.',
    'Variable (e.g. humidity)': 'Элемент (напр. повтор)', 'How I measure or control it': 'Как я его анализирую или учитываю', 'Add variable': 'Добавить элемент',
    'Measure and process · Как измерять': 'Как анализировать', 'Control or account for · Что учесть': 'Что учесть',
    '4. Sources and tools · Источники и инструменты': '4. Источники и инструменты', 'Sources · Источники': 'Источники',
    // 5. blueprint
    '5. Essay blueprint · Структура эссе': '5. Структура эссе',
    'Sections, word budgets, what to write in each paragraph, checklists and your progress. Tap a section to open it. · Нажмите на раздел, чтобы раскрыть.':
      'Разделы, объём в словах, что писать в каждом абзаце, чек-листы и ваш прогресс. Нажмите на раздел, чтобы раскрыть.',
    'Organise the analysis · Организация анализа': 'Организация анализа', 'Share of theory in the essay · Доля теории': 'Доля теории в эссе',
    'By lens: key concept or critical theory · Через линзы': 'Через линзы: ключевое понятие или критическая теория',
    'Each section reads the text through one lens: a key concept of the course (identity, representation, perspective, culture, creativity, communication, transformation) or a critical theory (feminist, postcolonial, psychoanalytic, Marxist). Analysis and evaluation sit together: apply the lens, then test its limits and compare it with critics. Headings are optional in literature essays (a free-flowing essay is also acceptable); if you use them, write them as claims.':
      'Каждый раздел читает текст через одну линзу: ключевое понятие курса (идентичность, репрезентация, точка зрения, культура, творчество, коммуникация, трансформация) или критическую теорию (феминистская, постколониальная, психоаналитическая, марксистская). Анализ и оценка идут вместе: примените линзу, затем проверьте её пределы и сравните с критиками. Заголовки в литературном эссе не обязательны (допустимо сплошное эссе); если используете их, формулируйте как утверждения.',
    'Lens 1: a key concept, applied and evaluated': 'Линза 1: ключевое понятие, применение и оценка',
    'Lens 2: a critical theory or a second concept, applied and evaluated': 'Линза 2: критическая теория или второе понятие, применение и оценка',
    'Synthesis: what the lenses reveal together, and their limits': 'Синтез: что линзы показывают вместе и их пределы',
    'By device (one feature per section)': 'По приёмам (один приём в разделе)',
    'Each section analyses one device or feature and its effect on the idea in the question.': 'Каждый раздел анализирует один приём или особенность и их эффект для идеи из вопроса.',
    'Device 1 and its effect': 'Приём 1 и его эффект', 'Device 2 and its effect': 'Приём 2 и его эффект',
    'How the devices interact or complicate each other': 'Как приёмы взаимодействуют или усложняют друг друга',
    'Through the work (beginning to end)': 'По ходу произведения (от начала к концу)',
    'Follow the progression of the work and show how the effect develops. Do not retell the plot.': 'Следите за развитием произведения и показывайте, как развивается эффект. Не пересказывайте сюжет.',
    'Opening and set-up': 'Начало и экспозиция', 'Development and turning point': 'Развитие и поворотный момент', 'Resolution and final effect': 'Развязка и итоговый эффект',
    'By idea (argument-led)': 'По идеям (от аргумента)',
    'Each section develops one interpretive claim and uses several passages as evidence.': 'Каждый раздел развивает одно интерпретационное утверждение и опирается на несколько фрагментов как доказательства.',
    'Claim 1 and its passages': 'Утверждение 1 и фрагменты', 'Claim 2 and its passages': 'Утверждение 2 и фрагменты', 'Counter-reading or complication': 'Контр-прочтение или усложнение',
    'Written:': 'Написано:', '· Checklist:': '· Чек-лист:', 'ticked': 'отмечено', '(over the limit)': '(больше лимита)',
    'Hook and context: why the topic matters, in 2–3 sentences. No history of the world.': 'Зацепка и контекст: почему тема важна, в 2–3 предложениях. Без «истории мира».',
    'Explain why the question is worth asking: a gap, a debate or a real problem.': 'Объясните, почему вопрос стоит задавать: пробел в исследованиях, спор или реальная проблема.',
    'Give the approach and a one-line roadmap of the sections.': 'Назовите подход и в одной строке план разделов.',
    'Sciences and mathematics: a falsifiable hypothesis or conjecture. Language A, literature, arts and humanities: a thesis (a provisional answer) and the line of argument, not a hypothesis.':
      'Естественные науки и математика: проверяемая гипотеза. Language A, литература, искусство и гуманитарные предметы: не гипотеза, а тезис (предварительный ответ) и линия аргумента.',
    'Question quoted exactly': 'Вопрос приведён дословно', 'Terms defined': 'Термины определены', 'Scope limits stated': 'Границы обозначены', 'Roadmap given': 'План разделов дан',
    'Write this section by answering': 'Напишите этот раздел, отвечая на вопросы',
    'Why does this topic matter? Give the context in 2–3 sentences, not the history of the world.': 'Почему эта тема важна? Дайте контекст в 2–3 предложениях, без «истории мира».',
    'Why is this question worth asking? What gap, debate or real problem does it address?': 'Почему этот вопрос стоит исследовать? Какой пробел, спор или реальную проблему он затрагивает?',
    'Which approach do you take: a close reading of the text; a close reading through a literary theory or a key concept (identity, representation, perspective, culture…); or testing existing criticism? Name the lens and the critics.':
      'Какой подход вы выбираете: медленное чтение текста; чтение через литературную теорию или ключевое понятие (идентичность, репрезентация, точка зрения, культура…); или проверку существующей критики? Назовите линзу и критиков.',
    'What is your thesis: a provisional answer and the line of argument you will develop? A hypothesis is not needed here.': 'Каков ваш тезис: предварительный ответ и линия аргумента, которую вы будете развивать? Гипотеза здесь не нужна.',
    'This topic matters because…': 'Эта тема важна, потому что…',
    'In this essay, … is defined as … The essay focuses on …': 'В этом эссе под … понимается … Эссе сосредоточено на …',
    'This essay investigates the question: “…”': 'Это эссе исследует вопрос: «…»',
    'This question is worth investigating because…': 'Этот вопрос стоит исследовать, потому что…',
    'This essay offers a close reading of … through the lens of …': 'Это эссе предлагает медленное прочтение … через линзу …',
    'This essay argues that …': 'В этом эссе доказывается, что …',
    'Draft of this section': 'Черновик раздела', 'Copy section': 'Скопировать раздел', 'Words written': 'Написано слов',
    'Copied ✓': 'Скопировано ✓', 'Select the text and copy (Ctrl/Cmd + C)': 'Выделите текст и скопируйте (Ctrl/Cmd + C)',
    'Open the section with a sentence that states its argument.': 'Начните раздел с предложения, которое формулирует его аргумент.',
    'Build paragraphs with PEEL: Point (a claim that answers part of the question), Evidence (data, quotation, source), Explanation (how the evidence supports the claim), Link (back to the question).':
      'Стройте абзацы по PEEL: Point (утверждение, отвечающее на часть вопроса), Evidence (данные, цитата, источник), Explanation (как доказательство поддерживает утверждение), Link (связь с вопросом).',
    'Evaluate the evidence inside the paragraph: strength, bias, counter-view.': 'Оценивайте доказательство внутри абзаца: сила, предвзятость, противоположная точка зрения.',
    'Close with a mini-conclusion that answers part of the question.': 'Завершите мини-выводом, который отвечает на часть вопроса.',
    'Every paragraph has a claim and evidence': 'В каждом абзаце есть утверждение и доказательство', 'Counter-view considered': 'Рассмотрена противоположная точка зрения', 'Mini-conclusion present': 'Есть мини-вывод',
    'Section heading': 'Заголовок раздела',
    '(optional; write it as a claim, e.g. “Silence as resistance: a feminist reading”)': '(не обязательно; сформулируйте как утверждение, напр. «Молчание как сопротивление: феминистское прочтение»)',
    'Your heading for this section': 'Ваш заголовок для этого раздела',
    'Point:': 'Утверждение (Point):', 'Evidence:': 'Доказательство (Evidence):', 'Explanation:': 'Объяснение (Explanation):', 'Evaluation:': 'Оценка (Evaluation):', 'Link:': 'Связь (Link):',
    'what claim does this paragraph make that answers part of your question?': 'какое утверждение делает этот абзац, отвечая на часть вашего вопроса?',
    'what data, quotation or source supports it? Cite it.': 'какие данные, цитата или источник его поддерживают? Дайте ссылку.',
    'how does the evidence support the claim? Use your framework and evaluate the evidence.': 'как доказательство поддерживает утверждение? Используйте свой подход и оцените доказательство.',
    'what are the limits of this lens? What would another reading or a critic say?': 'каковы пределы этой линзы? Что сказало бы другое прочтение или критик?',
    'how does this answer your research question?': 'как это отвечает на ваш исследовательский вопрос?',
    'This paragraph argues that…': 'В этом абзаце утверждается, что…', 'According to … / The data show …': 'По мнению … / В тексте: «…»',
    'This shows … because … However, …': 'Это показывает …, потому что … Однако …', 'However, a … reading suggests …': 'Однако … прочтение предполагает …',
    'Therefore …, which suggests that …': 'Следовательно, …, что говорит о том, что …',
    'Answer the research question directly in 1–2 sentences.': 'Прямо ответьте на исследовательский вопрос в 1–2 предложениях.',
    'Summarise the main arguments or findings. No new evidence.': 'Подведите итог главным аргументам и результатам. Без новых доказательств.',
    'Acknowledge limitations and what remains unanswered.': 'Назовите ограничения и то, что осталось без ответа.',
    'Close with the significance or a direction for further research.': 'Завершите значимостью работы или направлением дальнейшего исследования.',
    'Question answered directly': 'На вопрос дан прямой ответ', 'No new evidence': 'Нет новых доказательств', 'Limits acknowledged': 'Ограничения названы',
    'Which main arguments or findings led to this answer? (No new evidence.)': 'Какие главные аргументы или результаты привели к этому ответу? (Без новых доказательств.)',
    'Which limitations should the reader keep in mind?': 'Какие ограничения должен учитывать читатель?',
    'What remains unanswered, and what is the significance or a next step?': 'Что осталось без ответа и в чём значимость работы или следующий шаг?',
    'In conclusion, … to a large/limited extent because …': 'Таким образом, … в значительной/ограниченной степени, потому что …',
    'This conclusion rests on …: first …, second …': 'Этот вывод опирается на …: во-первых …, во-вторых …',
    'The conclusion is limited by …': 'Вывод ограничен тем, что …', 'Further research could …. This matters because …': 'Дальнейшее исследование могло бы … Это важно, потому что …',
    'Essay draft · Черновик': 'Черновик эссе', 'Copy essay draft': 'Скопировать черновик эссе',
    'Answers are saved in this browser only. Copy the draft into your document, rewrite it in your own words, then add equations, tables, citations and the bibliography.':
      'Ответы сохраняются только в этом браузере. Скопируйте черновик в свой документ, перепишите своими словами, затем добавьте цитаты, ссылки и список литературы.',
    'Assessment criteria from May 2027 (30 marks): A Framework for the essay (focus, methodology, structure and presentation) · B Knowledge and understanding · C Analysis and line of argument · D Discussion and evaluation · E Reflection (one reflective statement on the RPF after the viva, up to 500 words). Title page, contents, headings, citations and bibliography now count under A.':
      'Критерии оценивания с мая 2027 года (30 баллов): A Рамка эссе (фокус, методология, структура и оформление) · B Знание и понимание · C Анализ и линия аргумента · D Обсуждение и оценка · E Рефлексия (один рефлексивный текст в форме RPF после viva voce, до 500 слов). Титульный лист, содержание, заголовки, ссылки и список литературы теперь оцениваются по критерию A.',
    // 6. time
    '6. Time left · Сколько осталось времени': '6. Сколько осталось времени',
    'Next checkpoint · Следующая контрольная точка': 'Следующая контрольная точка',
    'Topic/focus, detailed action plan, RPPF box 1, 1+ RRS entry': 'Тема/фокус, подробный план действий, раздел 1 RPPF, 1+ запись в RRS',
    'Defined RQ, bibliography, 2+ RRS entries': 'Сформулированный вопрос, список литературы, 2+ записи в RRS',
    'Annotated bibliography (sciences: evidence of gathered data), detailed outline, 3+ RRS': 'Аннотированный список литературы (науки: собранные данные), подробный план, 3+ записи в RRS',
    'Summer plan, 1,500 words, 5+ RRS': 'План на лето, 1500 слов, 5+ записей в RRS',
    'RPPF box 2, summer plan achieved, analysed sources, intro + body, 3,000 words, 8+ RRS': 'Раздел 2 RPPF, план на лето выполнен, источники проанализированы, введение + основная часть, 3000 слов, 8+ записей в RRS',
    'Full draft, formatting (Arial 12, 3×3 cm, double spacing), citations, bibliography, 10+ RRS': 'Полный черновик, оформление (Arial 12, поля 3×3 см, двойной интервал), ссылки, список литературы, 10+ записей в RRS',
    'Supervisor feedback on the full draft, 12+ RRS': 'Отзыв руководителя на полный черновик, 12+ записей в RRS',
    'Final revisions discussed': 'Обсуждены последние правки',
    'Final essay, viva voce, RPPF final reflection, formatting, 15+ RRS': 'Итоговое эссе, viva voce, итоговая рефлексия RPPF, оформление, 15+ записей в RRS',
    'today': 'сегодня', 'Today': 'Сегодня', 'dashed line = today': 'пунктир = сегодня',
    'All M28 checkpoints have passed.': 'Все контрольные точки M28 пройдены.',
    'What to work on now · Чем заняться сейчас': 'Чем заняться сейчас',
    'All tasks are past their planned dates.': 'Сроки всех задач прошли.',
    'Some tasks do not fit between the checkpoints: shorten the work or move the dates.': 'Некоторые задачи не помещаются между контрольными точками: сократите работу или сдвиньте даты.',
    'Detailed plan by weeks · Подробный план': 'Подробный план по неделям',
    'Break / buffer, weeks · Пауза (лето, риски)': 'Пауза / запас, недель', 'Schedule · Расписание': 'Расписание',
    'Aligned to M28 checkpoints': 'По контрольным точкам M28', 'As early as possible': 'Как можно раньше',
    'Earliest start · Не раньше': 'Начать не раньше',
    'within the 40 h guide': 'в пределах рекомендованных 40 ч', 'above the 40 h guide': 'больше рекомендованных 40 ч',
    'Task': 'Задача', 'Start': 'Начало', 'End': 'Конец', 'Hours': 'Часы',
    'Checkpoint dates · Даты контрольных точек': 'Даты контрольных точек', 'M28 checkpoints.': 'Контрольные точки M28.',
    'Dates are taken from the Extended Essay M28 Checklist (Grade 11: 15–19 Feb, 8–12 Mar, 12–16 Apr, 17–21 May 2027; Grade 12: 6–11 Sep, 8 Oct, 1–5 Nov, 6–10 Dec 2027, final 7 Jan 2028). Each date is the last day of the window; edit if the schedule changes. · Даты из чеклиста M28; указан последний день окна.':
      'Даты взяты из чек-листа Extended Essay M28 (11 класс: 15–19 февраля, 8–12 марта, 12–16 апреля, 17–21 мая 2027; 12 класс: 6–11 сентября, 8 октября, 1–5 ноября, 6–10 декабря 2027, итоговая сдача 7 января 2028). Указан последний день каждого окна; если расписание изменится, исправьте даты.',
    // 7. APA
    '7. Citations and references (APA 7) · Ссылки и список литературы': '7. Ссылки и список литературы (APA 7)',
    'Use the APA 7 builder to create every reference and in-text citation and to keep your reference list. The school EE checklist requires APA. · Чеклист школы требует APA.':
      'Оформляйте каждую ссылку и внутритекстовую цитату и ведите список литературы в конструкторе APA 7. Школьный чек-лист EE требует APA.',
    'Open the APA 7 reference builder ↗': 'Открыть конструктор ссылок APA 7 ↗',
    '· 20 source types (including generative AI chats under the September 2025 APA Style guidance), in-text citations, a reference list with a, b for same-year works, combined and “as cited in” citations.':
      '· 20 типов источников (в том числе чаты с генеративным ИИ по рекомендациям APA Style от сентября 2025), внутритекстовые ссылки, список литературы с буквами a, b для работ одного года, объединённые ссылки и «as cited in».',
    'APA reminders · Памятка': 'Памятка по APA',
    'Every source cited in the text appears in the reference list, and every entry in the list is cited in the text. Personal communications are cited in the text only.':
      'Каждый источник, на который вы ссылаетесь в тексте, есть в списке литературы, и на каждую запись списка есть ссылка в тексте. Личная переписка указывается только в тексте.',
    'Sort the list alphabetically by the first author’s surname; use a hanging indent and double spacing.': 'Сортируйте список по алфавиту по фамилии первого автора; используйте выступ первой строки и двойной интервал.',
    'Use sentence case for titles of books, articles and web pages, and italicise books, reports, web pages and journal names. The Copy buttons keep the italics when you paste into Word or Google Docs.':
      'В названиях книг, статей и веб-страниц с заглавной буквы пишется только первое слово (и имена собственные); книги, отчёты, веб-страницы и названия журналов выделяются курсивом. Кнопки Copy сохраняют курсив при вставке в Word или Google Docs.',
    'Give a DOI as https://doi.org/… when there is one; otherwise give the URL.': 'Если у источника есть DOI, указывайте его как https://doi.org/…; если нет — URL.',
    'Add a page number for every direct quotation, for example (Smith, 2020, p. 12).': 'Для каждой прямой цитаты указывайте страницу, например (Smith, 2020, p. 12).',
    'In-text citations and the reference list are not counted in the 4000 words.': 'Внутритекстовые ссылки и список литературы не входят в 4000 слов.',
    'Language A: cite the edition of the primary text you use and give a page number for every quotation. For a translated text give both years, for example (Tolstoy, 1878/2010).':
      'Language A: указывайте издание первичного текста, которым пользуетесь, и страницу для каждой цитаты. Для переводного текста указывайте оба года, например (Tolstoy, 1878/2010).',
    // 8. examples
    '8. Examples · Примеры': '8. Примеры',
    'Sciences and English: examples from the public Clastify catalogue (some pages need registration). Economics: examples from Hodder. Use for structure only, do not copy. · Только как образец структуры.':
      'Естественные науки и английский: примеры из открытого каталога Clastify (для некоторых страниц нужна регистрация). Экономика: примеры из книги Hodder. Используйте только как образец структуры, не копируйте.'
  };

  // --- phrases that start a longer text (the rest is the student's own words)
  var P = [
    ['Define the key terms and set the limits (place, period, text, system): ', 'Определите ключевые термины и обозначьте границы (место, период, текст, система): '],
    ['State the research question word for word: “', 'Приведите исследовательский вопрос дословно: “'],
    ['Which key terms need defining, and what limits did you set (place, period, text, system)? Terms to consider: ', 'Какие термины нужно определить и какие границы вы задали (место, период, текст, система)? Термины для рассмотрения: '],
    ['What is your research question, word for word? “', 'Каков ваш исследовательский вопрос дословно? “']
  ];

  // Russian numerals: 1 день, 2 дня, 5 дней
  var pl = function (n, a, b, c) { n = +n; var d = n % 10, h = n % 100; return d === 1 && h !== 11 ? a : d >= 2 && d <= 4 && (h < 12 || h > 14) ? b : c; };
  var days = function (d) { return d + ' ' + pl(d, 'день', 'дня', 'дней'); };
  var weeks = function (w) { return w + ' ' + pl(w, 'неделя', 'недели', 'недель'); };
  var dw = function (d, w) { return days(d) + (w ? ' (≈' + weeks(w) + ')' : ''); };
  var words = function (n) { return pl(n, 'слово', 'слова', 'слов'); };
  var MON = { Jan: 'января', Feb: 'февраля', Mar: 'марта', Apr: 'апреля', May: 'мая', Jun: 'июня', Jul: 'июля', Aug: 'августа', Sep: 'сентября', Sept: 'сентября', Oct: 'октября', Nov: 'ноября', Dec: 'декабря' };
  var MSH = { Jan: 'янв', Feb: 'фев', Mar: 'мар', Apr: 'апр', May: 'май', Jun: 'июн', Jul: 'июл', Aug: 'авг', Sep: 'сен', Sept: 'сен', Oct: 'окт', Nov: 'ноя', Dec: 'дек' };
  var R = [
    [/^Length: (\d+) words?$/, function (m, n) { return 'Длина: ' + n + ' ' + words(n); }],
    [/^(\d+)% · about (\d+) words$/, '$1% · около $2 слов'],
    [/^(\d+) \/ 4000 words$/, '$1 / 4000 слов'],
    [/^· ~(\d+) words · ≈(\d+) paragraphs?$/, function (m, n, p) { return '· ~' + n + ' слов · ≈' + p + ' ' + pl(p, 'абзац', 'абзаца', 'абзацев'); }],
    [/^Criteria (.+)$/, 'Критерии: $1'],
    [/^(\d+) words?$/, function (m, n) { return n + ' ' + words(n); }],
    [/^(\d+) words? written so far$/, function (m, n) { return 'Пока написано: ' + n + ' ' + words(n); }],
    [/^Paragraph (\d+)$/, 'Абзац $1'],
    [/^▾ Choose a suggestion \((\d+)\)$/, '▾ Выберите подсказку ($1)'],
    [/^(.+) · ([\d,]+) words by (.+)$/, function (m, a, n, d) { return a + ' · ' + n.replace(',', '') + ' слов к ' + d; }],
    [/^in (\d+) days?(?: \(≈(\d+) weeks\))?$/, function (m, d, w) { return 'через ' + dw(d, w); }],
    [/^(\d+) days?(?: \(≈(\d+) weeks\))? ago$/, function (m, d, w) { return dw(d, w) + ' назад'; }],
    [/^plan runs \((\d+) wks\)$/, function (m, w) { return 'длительность плана (' + weeks(w) + ')'; }],
    [/^(\d+) h$/, '$1 ч'],
    [/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept?|Oct|Nov|Dec)( \d\d)?$/, function (m, a, y) { return MSH[a] + (y || ''); }]
  ];

  // --- pieces inside longer texts (plan tasks, checkpoints, dates)
  var TASKS = {
    'Choose subject and topic area': 'Выбрать предмет и область темы',
    'Pre-reading; define topic/focus': 'Предварительное чтение; определить тему/фокус',
    'First reflection: action plan, RPPF box 1': 'Первая рефлексия: план действий, раздел 1 RPPF',
    'Formulate the research question': 'Сформулировать исследовательский вопрос',
    'Stress-test RQ + draft bibliography': 'Проверить вопрос на прочность + черновой список литературы',
    'Check-in 1 (RQ and bibliography confirmed)': 'Встреча 1 (вопрос и список литературы утверждены)',
    'Detailed outline': 'Подробный план',
    'First 1,500 words + summer plan': 'Первые 1500 слов + план на лето',
    'Draft main body to 3,000 words': 'Черновик основной части до 3000 слов',
    'Interim reflection (RPPF box 2)': 'Промежуточная рефлексия (раздел 2 RPPF)',
    'Complete draft, conclusion, formatting': 'Полный черновик, заключение, оформление',
    'Check-in 4: supervisor feedback': 'Встреча 4: отзыв руководителя',
    'Revisions; Check-in 5': 'Правки; встреча 5',
    'Final submission + viva (RPPF final)': 'Итоговая сдача + viva voce (итог RPPF)',
    ' Pick a value from the list above a field, then adjust it in the field if needed. To keep your own value, type it and press ☆: it is added to “My options” in the list and saved in this browser.':
      ' Выберите значение из списка над полем и при необходимости поправьте его в самом поле. Чтобы сохранить своё значение, введите его и нажмите ☆: оно появится в списке в разделе «Мои варианты» и сохранится в этом браузере.',
    'Nothing is scheduled for today. Next: ': 'На сегодня ничего не запланировано. Дальше: ',
    'In this plan, work starts on ': 'По этому плану работа начинается ',
    ' (already started)': ' (уже началась)', ' (today)': ' (сегодня)'
  };
  var DAYS = '(\\d+) days?(?: \\(≈(\\d+) weeks\\))?';
  var SUB = [
    [/ \(from ([^)]+)\)/g, ' (с $1)'],
    [/ \(until ([^)]+)\)/g, ' (до $1)'],
    [new RegExp(' \\(' + DAYS + ' from today\\)', 'g'), function (m, d, w) { return ' (через ' + dw(d, w) + ')'; }],
    [new RegExp('Final submission in ' + DAYS + '\\.', 'g'), function (m, d, w) { return 'До итоговой сдачи: ' + dw(d, w) + '.'; }],
    [/ Bars show when each task is planned;[^]*?ending on ([^;]+);[^]*Use Break for pauses\./, ' Полосы показывают, когда запланирована каждая задача; пунктир — сегодня. Длительность и часы приблизительны; по рекомендации IB — около 40 часов. В режиме «По контрольным точкам M28» исследование начинается сразу после встречи 1, а письмо и этапы ставятся прямо перед контрольными точками M28, с окончанием $1; режим «Как можно раньше» начинается с указанной даты начала. Красным отмечена самая длинная цепочка зависимых задач. Для перерывов используйте поле «Пауза».'],
    [/(^|· )by (\d+ \S+ \d{4})/g, '$1до $2'],
    [/First reflection/g, 'Первая рефлексия'], [/Interim reflection/g, 'Промежуточная рефлексия'], [/Complete draft/g, 'Полный черновик'],
    [/Final \+ viva/g, 'Итоговая сдача + viva voce'], [/Check-in (\d)/g, 'Встреча $1'],
    [/(\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept?|Oct|Nov|Dec)\b/g, function (m, d, a) { return d + ' ' + MON[a]; }]
  ];

  window.EE_LANG = window.EE_LANG || {};
  EE_LANG.lru = { lang: 'ru', X: X, P: P, R: R, TASKS: TASKS, SUB: SUB };
})();
