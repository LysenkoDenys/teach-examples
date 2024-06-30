const db = [
  {
    id: 1,
    proverb: 'Без діла слабіє сила.',
    sphere: 'робота',
    meaning: 'якщо нічого не робити - стаєш слабким, ледащим і дурним.',
  },
  {
    id: 2,
    proverb: 'Без охоти нема роботи.',
    sphere: 'робота',
    meaning:
      'якщо не маєш настрою на будь-яку справу - вона буде марна (не матиме очікуваного результату).',
  },
  {
    id: 3,
    proverb: 'Без труда нема плода.',
    sphere: 'робота',
    meaning: 'якщо не докласти зусиль - нічого не отримаєш.',
  },
  {
    id: 4,
    proverb: 'Де руки й охота, там скора робота.',
    sphere: 'робота',
    meaning:
      'якщо маєш настрій гарний до роботи і руки в тебе не з дупи, то з роботою швидко впораєшся.',
  },
  {
    id: 5,
    proverb: 'Коли є до чого жагота, то кипить в руках робота.',
    sphere: 'робота',
    meaning:
      'якщо маєш настрій гарний до роботи і ти в ній зацікавлений, то будеш робити її швидко і якісно.',
  },
  {
    id: 6,
    proverb: 'Коли почав орати, то у сопілку не грати!',
    sphere: 'робота',
    meaning: 'якщо працюєш над чимось - не відволікайся на пустощі.',
  },
  {
    id: 7,
    proverb: 'На дерево дивись, як родить, а на чоловіка, як робить.',
    sphere: 'робота',
    meaning:
      'щоб оцінити якість людини - треба дивитися на її вчинки і на те, як вона працює.',
  },
  {
    id: 8,
    proverb: 'Не бери важкого в руки, а дурного у голову.',
    sphere: 'робота',
    meaning:
      'не слухай дурних людей і не зациклюйся на дрібницях, також не бери на себе те, чого не зможеш досягти (не обіцяй багато).',
  },
  {
    id: 9,
    proverb: 'Недаром говориться, що діло майстра боїться.',
    sphere: 'робота',
    meaning:
      'якщо ти - майстер з досвідом своєї справи, то працювати тобі легко.',
  },
  {
    id: 10,
    proverb: 'Праця чоловіка годує, а лінь марнує.',
    sphere: 'робота',
    meaning: 'працюй, навчайся, розвивайся, не лінуйся.',
  },
  {
    id: 11,
    proverb: 'Ранні пташки росу п`ють, а пізні - слізки ллють.',
    sphere: 'робота',
    meaning:
      'треба все робити швидко і в першій половині дня, тому що надолужити втрачений час важко.',
  },
  {
    id: 12,
    proverb: 'Треба нахилиться, щоб з криниці води напиться.',
    sphere: 'робота',
    meaning:
      'перед тим, як щось отримати, треба подумати, як то зробити - і зробити.',
  },
  {
    id: 13,
    proverb: 'Хочеш їсти калачі - не сиди на печі.',
    sphere: 'робота',
    meaning: 'якщо хочеш гарно жити - треба бути працьовитим (с) Lysenko Denys',
  },
  {
    id: 14,
    proverb: 'Хто рано підводиться, за тим і діло водиться.',
    sphere: 'робота',
    meaning:
      'рано прокидайся, плануй (вноси коригування в плани), роби важливі справи.',
  },
  {
    id: 15,
    proverb: 'Хто що вміє, то і сіє.',
    sphere: 'робота',
    meaning: 'to be filled…',
  },
  {
    id: 16,
    proverb: 'Хто що знає, тим і хліб заробляє.',
    sphere: 'робота',
    meaning: 'to be filled…',
  },
  {
    id: 17,
    proverb: 'Чесне діло роби сміло.',
    sphere: 'робота',
    meaning: 'to be filled…',
  },
  {
    id: 18,
    proverb: 'Що ранком не зробиш, то вечором не згониш.',
    sphere: 'робота',
    meaning:
      'краще все робити зранку, тоді є і енергія і розумні думки після гарного сну.',
  },
  {
    id: 19,
    proverb: 'Щоб рибу їсти, треба в воду лізти.',
    sphere: 'робота',
    meaning: 'щоб щось отримати, треба докласти зусиль.',
  },
  {
    id: 20,
    proverb: 'Як дбаєш, так і маєш.',
    sphere: '',
    meaning: 'якщо про щось піклуєшся, то це служить довго і вправно.',
  },
  {
    id: 21,
    proverb:
      'Звикай до господарства змолоду, то не будеш знати на старість голоду.',
    sphere: '',
    meaning:
      'з малку треба допомагати по господарству батькам, тоді і сам будеш хазяйновитим і звільниш час батькам для того, щоб провести з ними більше часу і чомусь навчитися новому.',
  },
  {
    id: 22,
    proverb: 'Роби на дворі - буде й в коморі.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 23,
    proverb: 'На тобі, небоже, що мені негоже.',
    sphere: '',
    meaning:
      'зазвичай людина віддає іншій людині те, що вона думає їй не знадобиться в майбутньому (старі речі, технології).',
  },
  {
    id: 24,
    proverb: 'На чорній землі білий хліб родить.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 25,
    proverb: 'Яка грушка, така й юшка.',
    sphere: '',
    meaning:
      'якщо робити щось якісними інструментами і якісними матеріалами, використовувати перевірені, упорядковані дані, то буде відповідний якісний результат (гарний). ',
  },
  {
    id: 26,
    proverb: 'Яка пшениця, така й паляниця.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 27,
    proverb: 'Добре тому в дорозі, хто сидить на возі.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 28,
    proverb: 'Не промажеш не поїдеш.',
    sphere: '',
    meaning:
      'перед початком якоїсь справи - треба домовитися з усіма, хто до неї причетний, можна заручитися підтримкою зацікавлених осіб (якщо такі є).',
  },
  {
    id: 29,
    proverb: 'Не доженеш і конем, що запізниш одним днем.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 30,
    proverb: 'Вік живи - Вік учись.',
    sphere: 'навчання',
    meaning: 'Вчитися треба все своє життя, бути допитливим.',
  },
  {
    id: 31,
    proverb: 'Догана мудрого більше стоїть, як похвала дурного.',
    sphere: '',
    meaning:
      'не ображайся на критику тих, хто старший і розумніший за тебе, а дякуй за зворотній зв`язок! На лестощі нерозумних і непрофесіоналів не зважай.',
  },
  {
    id: 32,
    proverb: 'Жалів вовк кобилу лишив хвіст та гриву.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 33,
    proverb: 'Людей питай, а свій розум май!',
    sphere: 'навчання',
    meaning:
      'прислухайся до порад розумних, але приймай рішення самостійно, як сам вважаєш. "чужому навчайтесь і свого не цурайтесь" (с) Т.Г. Шевченко ',
  },
  {
    id: 34,
    proverb: 'Мудра голова не дбає на лихі слова.',
    sphere: '',
    meaning:
      'розумна людина не бере до уваги, якщо кажуть на неї погане. зазвичай, це просто заздрощі і інша точка зору, а нам треба своє робити. є притча про подорож тата і сина в яких був віслюк, де в кожному селі хі критикували, що вони не правильно йшли.',
  },
  {
    id: 35,
    proverb: 'Мудрий не все каже, що знає, а дурень не все знає, що каже.',
    sphere: '',
    meaning: 'розумна людина більше слухає, ніж базікає.',
  },
  {
    id: 36,
    proverb: 'Мудрим ніхто не вродився, а навчився.',
    sphere: '',
    meaning:
      'для того, щоб стати розумним, треба вчитися і здобувати досвід (перевіряти, те що вивчив)',
  },
  {
    id: 37,
    proverb: 'Не суньте рило не у своє діло.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 38,
    proverb: 'Не кажи гоп, поки не перескочиш.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 39,
    proverb: 'Обіцянка - цяцянка, а дурневі радість.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 40,
    proverb: 'Сила без голови шаліє, а розум без сили мліє.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 41,
    proverb: 'Хто вчиться змолоду, не зазнає на старість голоду.',
    sphere: 'навчання',
    meaning: 'to be filled…',
  },
  {
    id: 42,
    proverb: 'Хто знання має, той мур зламає.',
    sphere: 'навчання',
    meaning: 'to be filled…',
  },
  {
    id: 43,
    proverb: 'Хто людей питає, той і розум має.',
    sphere: 'навчання',
    meaning: 'to be filled…',
  },
  {
    id: 44,
    proverb: 'Хто хоче багато знати, тому треба мало спати.',
    sphere: 'навчання',
    meaning: 'to be filled…',
  },
  {
    id: 45,
    proverb: 'Чого Івась не навчиться, того й Іван не буде знати.',
    sphere: 'навчання',
    meaning: 'to be filled…',
  },
  {
    id: 46,
    proverb: 'Чоловік розуму вчиться цілий вік.',
    sphere: 'навчання',
    meaning: 'to be filled…',
  },
  {
    id: 47,
    proverb: 'Чув дзвін, та не знає, звідки він.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 48,
    proverb: 'Як голова сивіє, то чоловік мудріє.',
    sphere: 'навчання',
    meaning: 'to be filled…',
  },
  {
    id: 49,
    proverb: 'Яка головонька, така й розмовонька!',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 50,
    proverb: 'Блискавка блисне - й камінь трісне.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 51,
    proverb: 'Грім гримить - хліб буде родить.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 52,
    proverb: 'Посієш вчасно, то і вродить рясно.',
    sphere: '',
    meaning:
      'все треба робити в свій час, готуватися заздалегідь, вміти ловити момент, коли треба щось вдіяти.',
  },
  {
    id: 53,
    proverb: 'Де багато пташок, там нема комашок.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 54,
    proverb: 'Коси, коса, поки роса.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 55,
    proverb: 'Прийшов спас - держи рукавиці про запас.',
    sphere: '',
    meaning:
      'готуйся до зими - влітку, якщо маєш досвід про циклічні події - згадай про їх ознаки і готуйся до повторення. одні і ті самі дії в однакових умовах призводять до однакових наслідків.',
  },
  {
    id: 56,
    proverb: 'Як зазиміє, то й жаба оніміє.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 57,
    proverb: 'Не знаючи броду - не лізь у воду.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 58,
    proverb: 'Береженого Бог береже, а козака - шабля стереже.',
    sphere: '',
    meaning:
      'довіряй, але перевіряй. також будь готовим, що вчорашній приятель - може перетворитися на ворога - не довіряй не перевіреним тривалим і пов`язаним часом людям.',
  },
  {
    id: 59,
    proverb: 'До булави треба голови.',
    sphere: '',
    meaning:
      'маючи владу (булава - символ влади), треба її з розумом використовувати.',
  },
  {
    id: 60,
    proverb: 'Козак з бідою, як риба з водою.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 61,
    proverb: 'Козак хороший, та нема грошей.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 62,
    proverb: 'Козацькому роду нема переводу.',
    sphere: '',
    meaning:
      'генетична пам`ять нащадків козаків переходить з покоління до покоління і не втрачає своєї сили і мужності.',
  },
  {
    id: 63,
    proverb: 'Терпи козаче, отаманом будеш.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 64,
    proverb: 'Волос сивіє, а голова шаліє.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 65,
    proverb: 'Вона за ним сохне, а він і не охне.',
    sphere: '',
    meaning:
      'хтось комусь подобається, а інший не помічає, а якщо і помічає, то взаємності не відчуває.',
  },
  {
    id: 66,
    proverb: 'До любої небоги нема далекої дороги.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 67,
    proverb: 'На любов і смак товариш не всяк.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 68,
    proverb: 'Не поможуть і чари, як хто кому не до пари.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 69,
    proverb: 'Невесело в світі жити, як нема кого любити.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 70,
    proverb: 'Силою не буть милою.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 71,
    proverb: 'Хто любить ревне, жаліє певне!',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 72,
    proverb: 'Де мало слів, там більше правди.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 73,
    proverb: 'Де слова з ділом розходяться, там непорядки водяться.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 74,
    proverb: 'З москалем дружи, а камінь за пазухою держи.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 75,
    proverb: 'З пісні слова не викидають і свого не вставляють.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 76,
    proverb: 'Коли москаль каже «сухо», то певно буде по вуха',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 77,
    proverb: 'Не так то він діє, як тим словом сіє.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 78,
    proverb: 'Слово до слова - зложиться мова.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 79,
    proverb:
      'Чоловік має два вуха, щоб багато слухав, а один язик, щоб менше говорив.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 80,
    proverb: 'З краси не пити роси.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 81,
    proverb: 'Не шукай красоти, а шукай доброти.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 82,
    proverb: 'Перше чим одружитись, треба роздивитись.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 83,
    proverb: 'Хто рано одружиться, той вік не натужиться.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 84,
    proverb: 'Кожна птиця знайде свого Гриця.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 85,
    proverb: 'Нема кращого друга, як вірна супруга.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 86,
    proverb: 'Без вірного друга великая туга.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 87,
    proverb: 'Батьки глядять дочку до вінця, а чоловік жінку до кінця.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 88,
    proverb: 'Нащо й клад, коли в сім`ї лад.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 89,
    proverb: 'Хоч ох, та вдвох!',
    sphere: '',
    meaning:
      'людям краще переживати всі негаразди разом, так як людина соціалізоване створіння і  для справжнього щастя людині потрібна людина (бажано споріднена душа).',
  },
  {
    id: 90,
    proverb: 'Вчи жінку без дітей, а дітей без людей.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 91,
    proverb: 'Рідня до півдня, а як сонце зайде - і сам чорт не найде!',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 92,
    proverb: 'Нашій мамці гарно й в дранці.',
    sphere: '',
    meaning:
      'справжню красу нічим не спаплюжиш (поганими речами), але в той же час гарні речі не можуть приховати зовнішню потворність.',
  },
  {
    id: 93,
    proverb: 'Соловей співа, поки дітей нема.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 94,
    proverb: 'Не доспи, не доїж, а дитину потіш!',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 95,
    proverb: 'Більшають діти - більшають і клопоти.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 96,
    proverb: 'Гни дерево, поки молоде, учи дітей, поки малі!',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 97,
    proverb: 'Як не навчиш дитину в пелюшках, то не навчиш і в подушках.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 98,
    proverb: 'Хто дітям потаче, той сам плаче.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 99,
    proverb: 'Не той батько, що зродив, а той, що до ума довів.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 100,
    proverb: 'Горе тому, в кого нема порядку в дому!',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 101,
    proverb: 'Шануй батька й неньку - буде тобі скрізь гладенько.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 102,
    proverb: 'До свого роду хоч через воду.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 103,
    proverb:
      'Живи просто, проживеш років зо сто, а будеш лукавить, так чорт тебе задавить.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 104,
    proverb: 'Життя прожити - не поле перейти.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 105,
    proverb: 'Аби шия, а ярмо буде.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 106,
    proverb: 'Або пан, або пропав.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 107,
    proverb: 'Без нашого Гриця вода не освятиться.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 108,
    proverb: 'Біда помучить і мудрості научить.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 109,
    proverb: 'Виріс, а ума не виніс.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 110,
    proverb: 'Вісті не лежать на місці.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 111,
    proverb: 'Дешева риба - погана юшка.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 112,
    proverb: 'За дурною головою і ногам нема спокою.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 113,
    proverb: 'Заліз у багатство - забув і братство.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 114,
    proverb: 'З ким поведешся, того й наберешся.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 115,
    proverb: 'З миру по нитці - голому сорочка.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 116,
    proverb: 'І будень, і неділя - все лінивому безділля.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 117,
    proverb: 'Кожна жаба своє болото хвалить.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 118,
    proverb: 'Коли густо, а коли й пусто.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 119,
    proverb: 'Косо, криво, аби живо.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 120,
    proverb: 'Краще пізно, як ніколи.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 121,
    proverb: 'Ласий на чужі ковбаси.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 122,
    proverb: 'Лінивий двічі робить, скупий двічі платить.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 123,
    proverb: 'Молодець проти вівець, а проти молодця і сам вівця.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 124,
    proverb: 'Моя хата скраю - нічого не знаю.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 125,
    proverb: 'На все свій час.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 126,
    proverb: 'На голові блистить, а в голові свистить.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 127,
    proverb: 'Не сунь носа до чужого проса.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 128,
    proverb: 'Не святі горшки ліплять.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 129,
    proverb: 'Не так сталося, як гадалося.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 130,
    proverb: 'Не так хутко робиться, як мовиться.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 131,
    proverb: 'Не той козак, що поборов, а той, що вивернувся.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 132,
    proverb: 'Одна дяка, що за рибу, що за рака.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 133,
    proverb: 'Паршива вівця все стадо запоганить.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 134,
    proverb: 'Старого лиса не виманиш з лісу.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 135,
    proverb: 'Хто два зайці гонить, жодного не здогонить.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 136,
    proverb: 'Хто мовчить, той трьох навчить.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 137,
    proverb: 'Чиє б нявчало, а твоє б мовчало.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 138,
    proverb: 'Як гукнеш, так і відгукнеться.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 139,
    proverb: 'Як дбаєш, так і маєш.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 140,
    proverb: 'Яке коріння, таке й насіння.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 141,
    proverb: 'Тримай голову в холоді, живіт у голоді, а ноги в теплі.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 142,
    proverb: 'Про дорогу скажеш, кума, як пройдеш по ній сама.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 143,
    proverb: 'Будь сильний духом, а не новим кожухом.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 144,
    proverb: 'Де двоє, там рада, а де третя, там зрада.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 145,
    proverb: 'Для приятеля нового не пускайся старого.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 146,
    proverb: 'З добрими людьми завжди згоди можна дійти.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 147,
    proverb: 'В лиху годину узнаєш вірну людину.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 148,
    proverb: 'З добрим дружись, а лихих стережись.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 149,
    proverb: 'Чим багаті, тим і раді.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 150,
    proverb: 'Набралося гостей з усіх волостей.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 151,
    proverb: 'Загоїться, поки весілля скоїться.',
    sphere: 'хвороби',
    meaning: 'якщо отримав травму - не проблема все заживе згодом.',
  },
  {
    id: 152,
    proverb: 'Надвоє бабка ворожила: або вмре, або буде жива.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 153,
    proverb: 'Перейшов на ліки - пропав навіки!',
    sphere: 'хвороби',
    meaning:
      'якщо почав вживати таблетки на постійній основі - це погана ознака, значить життя під загрозою вже. люди на таблетках і уколах довго не живуть. не доводь організм до лікарського втручання. слідкуй за собою самостійно (будь уважним до себе).',
  },
  {
    id: 154,
    proverb: 'Верба товста, та всередині пуста.',
    sphere: '',
    meaning:
      'за надмірними розмірами приховані невидимі вади і слабкощі. будь оптимальним. ',
  },
  {
    id: 155,
    proverb: 'Літа пливуть, як вода!',
    sphere: '',
    meaning: 'старше стаєш - роки починають минати швидше (таке відчуття).',
  },
  {
    id: 156,
    proverb: 'Проти віку нема ліку.',
    sphere: '',
    meaning:
      'всі живі неодмінно постарішають і помруть, така природа. але чинити опір треба - вправи, навчання, натхненна робота, правильне харчування.',
  },
  {
    id: 157,
    proverb: 'Старому від хати вже нікуди шкандибати!',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 158,
    proverb: 'І сам не гам, і другому не дам!',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 159,
    proverb: 'Їж, Мартине, мати ще підкине.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 160,
    proverb: 'На тобі, Гаврило, що мені немило.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 161,
    proverb: 'Давні пригоди боронять від шкоди.',
    sphere: '',
    meaning:
      'маючи досвід минулих пригод, ти можеш приблизно оцінити імовірність майбутніх подій',
  },
  {
    id: 162,
    proverb: 'Тихше їдеш - далі будеш.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 163,
    proverb: 'Як віз ламається, чумак ума набирається.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 164,
    proverb: 'Багатій не дивиться, чим убогий живиться.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 165,
    proverb: 'Багач не відає, що бідний обідає.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 166,
    proverb: 'Багатого проводять, щоб не впав, а бідного щоб не вкрав.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 167,
    proverb: 'Багатому свято, а бідному діла багато.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 168,
    proverb: 'Більше вір своїм очам, ніж чужим речам.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 169,
    proverb: 'Борода, як у старого, розуму, як у малого.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 170,
    proverb: 'Добре говорить, а зле творить.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 171,
    proverb: 'Дурень киснить, а розумний мислить.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 172,
    proverb: 'З лихою жінкою сварка та розлад, а з доброю і без грошей лад.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 173,
    proverb: 'З чим прийшов, з тим пішов.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 174,
    proverb: 'На чужий коровай очей не поривай, а про свій дбай.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 175,
    proverb: 'Позичати всі охочі, а віддавати немає мочі.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 176,
    proverb:
      'Розумному сину не збирай, - сам наживе, а дурному не зоставляй, - усе проживе.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 177,
    proverb: 'Умний мовчить, коли дурний ворчить.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 178,
    proverb:
      'Як бідний плаче, ніхто не бачить, а багатий скривиться - усяк дивиться.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 179,
    proverb: 'Бережіння-краще ворожіння.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 180,
    proverb: 'Одежу бережи для холоду, а гроші - для голоду.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 181,
    proverb: 'Захоче - на гору доскоче, а не схоче - з гори не скоче.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 182,
    proverb: 'Того бажається, чого вдома не мається.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 183,
    proverb: 'Де рідний край, там і рай.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 184,
    proverb: 'Добре тому, хто в своєму дому.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 185,
    proverb: 'Є квас, та не для вас.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 186,
    proverb: 'Кожен край має свій звичай.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 187,
    proverb: 'Люблю тебе, та не так, як себе.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 188,
    proverb: 'Нажите махом піде прахом.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 189,
    proverb: 'Пізнай самого себе і цього буде досить для тебе.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 190,
    proverb: 'У чужий ставок не кидай неводок.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 191,
    proverb: 'Чужого не гарбай, а свого не розкидай.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 192,
    proverb: 'Бач, нас не слухав,-і тиждень спину чухав.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 193,
    proverb: 'Держиться, як воша кожуха: хто що не кажи - не слуха.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 194,
    proverb: 'Нехай буде гречка, аби не суперечка.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 195,
    proverb: 'Ти йому про образи, а він тобі про гарбузи.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 196,
    proverb: 'Коли улітку дощ рідко буває, тоді у вулику мед прибуває.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 197,
    proverb: 'Їдь тихо - обминеш лихо.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 198,
    proverb: 'Дочки зоставлять тата без сорочки.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 199,
    proverb: 'Бачили очі, що купували, їжте, хоч повилазьте.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 200,
    proverb: 'Запас біди не чинить і їсти не просить.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 201,
    proverb: 'По своєму ліжку простягай і ніжку.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 202,
    proverb: 'Борщ та каша-їжа наша.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 203,
    proverb: 'Добрий борщик, та малий горщик.',
    sphere: '',
    meaning:
      'здається, що чогось гарного мало, або якщо хочеш, щоб щось цінувалося, треба це дозувати розумно, щоб не приїдалося.',
  },
  {
    id: 204,
    proverb: 'Їж борщ з грибами, а держи язик за зубами.',
    sphere: '',
    meaning:
      'якщо тобі пощастило, або просто добре жити, то нікому про то не кажи, щоб уникнути заздрощів і пов`язаних з цим проблем.',
  },
  {
    id: 205,
    proverb: 'Млин меле водою, а чоловік живе їдою.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 206,
    proverb: 'Не розбивши крашанки, не спечеш яєчні.',
    sphere: '',
    meaning:
      'щоб щось отримати, треба докласти зусиль і щось принести в жертву, наприклад: не навчишся їздити на скейті, поки не наб`єш собі гуль.',
  },
  {
    id: 207,
    proverb: 'Поки хліб та вода, то ще не біда.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 208,
    proverb: 'Хто чим відає, той так і обідає.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 209,
    proverb: 'Горем горюй, а руками воюй.',
    sphere: '',
    meaning: 'не здаватися попри все, йти вперед!',
  },
  {
    id: 210,
    proverb: 'Довіру май, але перевіряй.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 211,
    proverb:
      'На віку, як на довгій ниві, всякого трапиться, всякого хліба ізкуштується - і твердого, і м’якого.',
    sphere: '',
    meaning:
      'не все в житті стало - все змінюється, а також це про те, щоб не псувати стосунки з людьми, бо доведеться ще зустрітися з ними. не спалюй мости.',
  },
  {
    id: 212,
    proverb: 'Хоч не красне, але власне.',
    sphere: '',
    meaning:
      'краще мати щось не дуже дороге, але своє, не в кредит і не і оренду.',
  },
  {
    id: 213,
    proverb: 'Хто топиться той за соломину вхопиться.',
    sphere: '',
    meaning:
      'коли людина потерпає від негараздів, то й маленька допомога їй буде в нагоді, також - людина хапається за життя, тобто шукає можливості вижити за будь-яку ціну.',
  },
  {
    id: 214,
    proverb: 'Чужу біду руками розведу, а до своєї ума не приберу.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 215,
    proverb: 'Хочеш миру - готуйсь до війни.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 216,
    proverb: 'Хоч голі, аби на волі.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 217,
    proverb: 'Доки багатий стухне, бідний з голоду опухне.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 218,
    proverb: 'Не в тім річ, що у хаті піч, а в тім діло, щоб у печі кипіло.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 219,
    proverb: 'Як не наївся, то не налижешся.',
    sphere: '',
    meaning:
      'якщо весь курс нічого не петрав, то перед тестуванням марно щось повторювати і вчити.',
  },
  {
    id: 220,
    proverb: 'Чого маленько, того криши міленько.',
    sphere: '',
    meaning: 'треба розподіляти цінний ресурс і просто так не марнувати.',
  },
  {
    id: 221,
    proverb: 'Гарний гість, що не багато їсть.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 222,
    proverb:
      'Перший день гість-золото; на другий - мідь, а на третій додому їдь.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 223,
    proverb: 'Ласкаве дитя дві матки сосе.',
    sphere: '',
    meaning:
      'якщо не вередливий, розумієш, чого від тебе хочуть ті, хто стоїть в ієрархії вище за тебе і то робиш, то будеш отримувати додаткові винагороду від всіх керівників.',
  },
  {
    id: 224,
    proverb: 'Що записано пером, не витягнеш і волом.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 225,
    proverb: 'До слова - крепись, а давши слово - держись.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 226,
    proverb: 'Що тіло любить, те душу губить.',
    sphere: '',
    meaning:
      'якщо вдаватись до гедонізму (життя заради насолоди) - то душа стане залежною від твоїх примх. тримай тіло в голоді і роби вправи.',
  },
  {
    id: 227,
    proverb: 'В заздрості нема радості.',
    sphere: '',
    meaning:
      'якщо комусь заздриш, то не будеш щасливим. зверни увагу на те, що маєш ти і не прагни чужого.',
  },
  {
    id: 228,
    proverb: 'Залізо іржа з’їдає, а заздрий від злости погибає.',
    sphere: '',
    meaning:
      'заздрість знищує людину з середини. йди до мети не зважаючи на те, що мають оточуючі.',
  },
  {
    id: 229,
    proverb: 'Де згода працює, там і горе танцює.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 230,
    proverb: 'Згода дім будує, а незгода руйнує.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 231,
    proverb: 'Яке знайомство заведеш, таке й життя поведеш.',
    sphere: '',
    meaning:
      'треба дуже уважно підбирати друзів, спостерігати за їхніми вчинками тривалий час (це люди які тебе надихають, чомусь вчать, допомагають йти до мети), а від дурних дистанціюватися.',
  },
  {
    id: 232,
    proverb: 'Баба винувата, що дівка черевата.',
    sphere: '',
    meaning: 'звинувачення в проблемах когось, окрім себе.',
  },
  {
    id: 233,
    proverb: 'Найшов чуже і сховав-все рівно, що вкрав.',
    sphere: '',
    meaning:
      'все, що знайшов і бачиш, що хтось загубив -  повідом оточуючих, може хтось загубив.',
  },
  {
    id: 234,
    proverb: 'Рука руку миє, а злодій злодія криє.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 235,
    proverb: 'Гультяйство губить хазяйство.',
    sphere: '',
    meaning: 'to be filled…',
  },
  {
    id: 236,
    proverb: 'Лежачий плуг скоро поржавіє, ледача людина скоро постаріє.',
    sphere: '',
    meaning:
      'без діла/заняття людина швидко старішає і помирає. коли ти просуваєшся/працюєш в якомусь напрямку - ти лишаєшся молодим. ',
  },
  {
    id: 237,
    proverb: 'Сидить надувається, три дні в чоботи взувається.',
    sphere: '',
    meaning: 'to be filled…',
  },
];

// const db = []

export default db;
