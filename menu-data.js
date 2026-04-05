// ╔══════════════════════════════════════════════════════════════╗
// ║  LYRA MENU DATA                                             ║
// ║  Edit items and prices here. Push to GitHub to update site.  ║
// ║                                                              ║
// ║  FORMAT:                                                     ║
// ║  { mk: "Македонски", en: "English", weight: "0.20kg",       ║
// ║    price: 120, allergens: ["G","D","E","N","F"],             ║
// ║    desc: { mk: "опис", en: "description" } }                ║
// ║                                                              ║
// ║  ALLERGENS: G=Gluten, D=Dairy, E=Eggs, N=Nuts, F=Fish       ║
// ║  price can be a number (120) or string ("190/210")           ║
// ╚══════════════════════════════════════════════════════════════╝

const MENU_DATA = {
  food: [
    {
      id: "topli",
      name: { mk: "Топло Предјадење", en: "Hot Starters" },
      items: [
        { mk: "Палента", en: "Polenta", weight: "0.20kg", price: 120, allergens: ["G"] },
        { mk: "Буковка на скара", en: "Grilled Oyster Mushrooms", weight: "0.20kg", price: 310 },
        { mk: "Јуфки со сирење", en: "Pastry with Cheese", weight: "0.18kg", price: 220, allergens: ["G", "D"] },
        { mk: "Пржени лепчиња", en: "Fried Bread", price: 190, allergens: ["G"] },
        { mk: "Поховани тиквички", en: "Breaded Zucchini", weight: "0.15kg", price: 210, allergens: ["G", "E"] },
        { mk: "Сирење на скара", en: "Grilled Cheese", weight: "0.10kg", price: 190, allergens: ["D"] },
        { mk: "Биено на скара", en: "Grilled Whipped Cheese", weight: "0.10kg", price: 230, allergens: ["D"] },
        { mk: "Шампињони на скара", en: "Grilled Mushrooms", weight: "0.25kg", price: 250 },
        { mk: "Буковка а ла Лира", en: "Oyster Mushrooms à la Lyra", weight: "0.20kg", price: 350, allergens: ["D"] },
        { mk: "Вргањ на скара", en: "Grilled Porcini", weight: "0.25kg", price: 450 },
        { mk: "Тавче гравче", en: "Baked Beans (Tavče Gravče)", price: 180, allergens: ["G"] },
        { mk: "Вргањ а ла Лира", en: "Porcini à la Lyra", weight: "0.25kg", price: 550, allergens: ["D", "E"] },
        { mk: "Омлет", en: "Omelette", price: 190, allergens: ["E"] },
        { mk: "Пиперка со сирење", en: "Pepper with Cheese", price: 220, allergens: ["D"] },
        { mk: "Похована пиперка", en: "Breaded Pepper", price: 120, allergens: ["G", "E"] },
        { mk: "Сармички порција", en: "Stuffed Cabbage Rolls", price: 180 },
        { mk: "Похован кашкавал", en: "Breaded Yellow Cheese", weight: "0.05kg", price: 120, allergens: ["G", "D", "E"] },
        { mk: "Похована пирошка", en: "Breaded Piroshki", price: 150, allergens: ["G", "E"] },
        { mk: "Домашна пита (сирење)", en: "Homemade Cheese Pie", price: 190, allergens: ["G", "D", "E"] },
        { mk: "Летна манџа", en: "Summer Vegetable Stew", price: 200, allergens: ["E"] },
        { mk: "Проја", en: "Cornbread (Proja)", price: 100, allergens: ["G", "D"] },
      ]
    },
    {
      id: "ladni",
      name: { mk: "Ладно Предјадење", en: "Cold Starters" },
      items: [
        { mk: "Брускети", en: "Bruschetta", weight: "0.10kg", price: 150, allergens: ["D"] },
        { mk: "Маслинки", en: "Olives", weight: "0.10kg", price: 100 },
        { mk: "Кравјо сирење", en: "Cow Cheese", weight: "0.10kg", price: 150, allergens: ["D"] },
        { mk: "Биено сирење", en: "Whipped Cheese", weight: "0.10kg", price: 210, allergens: ["D"] },
        { mk: "Кашкавал овчи", en: "Sheep Yellow Cheese", weight: "0.10kg", price: 270, allergens: ["D"] },
        { mk: "Дениш Блу", en: "Danish Blue Cheese", weight: "0.10kg", price: 390, allergens: ["D"] },
        { mk: "Даска а ла Лира", en: "Cheese Board à la Lyra", weight: "0.40kg", price: 390, allergens: ["G", "D", "E"] },
        { mk: "Пршута", en: "Prosciutto", weight: "0.15kg", price: 420 },
        { mk: "Овчо сирење", en: "Sheep Cheese", weight: "0.10kg", price: 210, allergens: ["D"] },
      ]
    },
    {
      id: "supi",
      name: { mk: "Супи", en: "Soups" },
      items: [
        { mk: "Зеленчук", en: "Vegetable Soup", weight: "0.35l", price: 170 },
      ]
    },
    {
      id: "salati",
      name: { mk: "Салати", en: "Salads" },
      note: { mk: "* сите салати се 0.25kg", en: "* all salads 0.25kg" },
      items: [
        { mk: "Македонска | сирење", en: "Macedonian | with Cheese", price: "190/210", allergens: ["D"], desc: { mk: "домат, зелена пиперка, краставица, кромид, магдонос", en: "tomato, green pepper, cucumber, onion, parsley" } },
        { mk: "Селска | сирење", en: "Village | with Cheese", price: "190/210", allergens: ["D"], desc: { mk: "домат, печени пиперки, магдонос, кромид", en: "tomato, roasted peppers, parsley, onion" } },
        { mk: "Овчарска", en: "Shepherd's Salad", price: 250, allergens: ["E"], desc: { mk: "домат, пиперка, магдонос, свежи шампињони, јајце, шунка", en: "tomato, pepper, parsley, fresh mushrooms, egg, ham" } },
        { mk: "Комбинирана", en: "Mixed Salad", price: 160, desc: { mk: "домат, краставица, морков, зелка, марула", en: "tomato, cucumber, carrot, cabbage, lettuce" } },
        { mk: "Шопска", en: "Shopska Salad", price: 210, allergens: ["D"], desc: { mk: "домат, краставица, сирење", en: "tomato, cucumber, white cheese" } },
        { mk: "Егејска", en: "Aegean Salad", price: 230, allergens: ["D"], desc: { mk: "домат, краставица, кромид, сирење, маслинки", en: "tomato, cucumber, onion, cheese, olives" } },
        { mk: "Мимоза", en: "Mimosa Salad", price: 130, allergens: ["E"], desc: { mk: "марула, јајца", en: "lettuce, eggs" } },
        { mk: "Таратур", en: "Tarator", price: 150, allergens: ["D"], desc: { mk: "краставица, павлака, лук", en: "cucumber, sour cream, garlic" } },
        { mk: "Туна", en: "Tuna Salad", price: 230, allergens: ["F"], desc: { mk: "марула, туна, морков, пченка, ленено семе", en: "lettuce, tuna, carrot, corn, flaxseed" } },
        { mk: "а ла Шеф", en: "Chef's Salad", price: 320, allergens: ["D"], desc: { mk: "рукола, сув домат, модар сув домат, пармезан, ленено семе", en: "arugula, sun-dried tomato, sun-dried purple tomato, parmesan, flaxseed" } },
        { mk: "Рукола", en: "Arugula Salad", price: 280, allergens: ["D"], desc: { mk: "рукола, домат, моцарела", en: "arugula, tomato, mozzarella" } },
        { mk: "Компир", en: "Potato Salad", price: 120, desc: { mk: "варени компири, кромид", en: "boiled potato, onion" } },
        { mk: "Кисела зелка", en: "Sauerkraut", price: 150, desc: { mk: "сезонски", en: "seasonal" } },
        { mk: "Овчавина", en: "Sheep Cream Salad", price: 150, allergens: ["D"], desc: { mk: "пиперка, кравја павлака, сезонски", en: "pepper, sour cream, seasonal" } },
      ]
    },
    {
      id: "ribi",
      name: { mk: "Риби и Лигњи", en: "Fish & Calamari" },
      items: [
        { mk: "Пастрмка", en: "Trout", weight: "1kg", price: 1300, allergens: ["F"] },
        { mk: "Лигњи на скара", en: "Grilled Calamari", weight: "0.30kg", price: 590, allergens: ["F"] },
        { mk: "Поховани лигњи", en: "Breaded Calamari", weight: "0.25kg", price: 550, allergens: ["G", "F"] },
        { mk: "Лигњи а ла Лира", en: "Calamari à la Lyra", weight: "0.25kg", price: 670, allergens: ["F"] },
        { mk: "Бранцин", en: "Sea Bass", weight: "1kg", price: 1500, allergens: ["F"] },
        { mk: "Орада", en: "Sea Bream", weight: "1kg", price: 1400, allergens: ["F"] },
      ]
    },
    {
      id: "prilozi",
      name: { mk: "Прилози", en: "Side Dishes" },
      items: [
        { mk: "Пекарски компир", en: "Baker's Potatoes", weight: "0.25kg", price: 130 },
        { mk: "Помфрит | сирење", en: "Fries | with Cheese", weight: "0.25kg", price: "100/130", allergens: ["D"] },
        { mk: "Рестован компир", en: "Sautéed Potatoes", weight: "0.25kg", price: 120 },
        { mk: "Варен зеленчук", en: "Steamed Vegetables", weight: "0.25kg", price: 140 },
        { mk: "Ориз", en: "Rice", weight: "0.25kg", price: 120 },
      ]
    },
    {
      id: "skara",
      name: { mk: "Скара", en: "Grill" },
      items: [
        { mk: "Плескавица (јунешка)", en: "Beef Burger Patty", weight: "0.20kg", price: 240 },
        { mk: "Завијок", en: "Rolled Meat", weight: "0.20kg", price: 320, allergens: ["D"] },
        { mk: "Шарска плескавица", en: "Šar Mountain Patty", weight: "0.30kg", price: 290, allergens: ["D"] },
        { mk: "Полнета вешалица (св.)", en: "Stuffed Pork Neck (fresh)", weight: "0.25kg", price: 320 },
        { mk: "Колбас домашен", en: "Homemade Sausage", price: 210 },
        { mk: "Раженче", en: "Small Kebab", weight: "0.13kg", price: 210 },
        { mk: "Вешалица", en: "Pork Neck Steak", weight: "0.20kg", price: 230 },
        { mk: "Кременадла", en: "Pork Chop", weight: "0.20kg", price: 250 },
        { mk: "Полнета вешалица (пл.)", en: "Stuffed Pork Neck (smoked)", weight: "0.25kg", price: 320, allergens: ["D"] },
        { mk: "Пилешко бело", en: "Chicken Breast", weight: "0.20kg", price: 230 },
        { mk: "Пилешко раженче", en: "Chicken Kebab", weight: "0.15kg", price: 210 },
        { mk: "Пилешко поховано", en: "Breaded Chicken", weight: "0.20kg", price: 290, allergens: ["G", "E"] },
        { mk: "Пилешки прсти", en: "Chicken Fingers", weight: "0.15kg", price: 320, allergens: ["G", "E"] },
        { mk: "Пилешки завијок", en: "Chicken Roll", weight: "0.20kg", price: 300, allergens: ["D"] },
        { mk: "Свинско филе", en: "Pork Tenderloin", weight: "0.35kg", price: 630 },
        { mk: "Џигер телешки", en: "Veal Liver", weight: "0.20kg", price: 320 },
        { mk: "Мешано месо на жар", en: "Mixed Grill", weight: "0.30kg", price: 790, desc: { mk: "св. каре, св. филе, пилешки стек, колбас, бифтек, сланина", en: "pork ribs, tenderloin, chicken steak, sausage, beef steak, bacon" } },
      ]
    },
    {
      id: "porachka",
      name: { mk: "Јадења по Порачка", en: "À la Carte" },
      items: [
        { mk: "Бечка шницла (тл.)", en: "Wiener Schnitzel (veal)", weight: "0.25kg", price: 490, allergens: ["G", "E"] },
        { mk: "Бечка шницла (св.)", en: "Wiener Schnitzel (pork)", weight: "0.25kg", price: 300, allergens: ["G", "E"] },
        { mk: "Натур шницла", en: "Natural Schnitzel", weight: "0.25kg", price: 290, allergens: ["G"], desc: { mk: "похована во брашно", en: "dusted in flour" } },
        { mk: "Пилешко во бел сос", en: "Chicken in White Sauce", weight: "0.25kg", price: 350, allergens: ["D"] },
        { mk: "Пилешки медаљони", en: "Chicken Medallions", weight: "0.25kg", price: 350, allergens: ["D"], desc: { mk: "во сос од печурки", en: "in mushroom sauce" } },
        { mk: "Бифтек", en: "Beef Steak", weight: "0.25kg", price: 1390 },
        { mk: "Соте строганоф", en: "Beef Stroganoff", weight: "0.25kg", price: 1290, allergens: ["D"] },
        { mk: "Бифтек холштајн", en: "Steak Holstein", weight: "0.25kg", price: 1390, allergens: ["E"] },
        { mk: "Пепер бифтек", en: "Pepper Steak", weight: "0.25kg", price: 1390 },
        { mk: "Филе мињон", en: "Filet Mignon", weight: "0.25kg", price: 1290 },
        { mk: "Свински медаљони", en: "Pork Medallions", weight: "0.25kg", price: 550, desc: { mk: "од свинско филе", en: "from pork tenderloin" } },
        { mk: "Шатобријан за 2 особи", en: "Chateaubriand for 2", weight: "0.50kg", price: 2800 },
      ]
    },
    {
      id: "pechenje",
      name: { mk: "Печење", en: "Roasts" },
      items: [
        { mk: "Јагнешко", en: "Lamb", weight: "1kg", price: 2000 },
        { mk: "Јагнешко обезкостено", en: "Boneless Lamb", weight: "1kg", price: 3200 },
        { mk: "Прасечко", en: "Suckling Pig", weight: "1kg", price: 1800 },
        { mk: "Прасечко обезкостено", en: "Boneless Suckling Pig", weight: "1kg", price: 2000 },
      ]
    },
    {
      id: "vegetarijanska",
      name: { mk: "Вегетеријанска Кујна", en: "Vegetarian" },
      items: [
        { mk: "Рижото", en: "Risotto", weight: "0.30kg", price: "210/230", allergens: ["D"], desc: { mk: "зеленчук | печурки", en: "vegetable | mushroom" } },
        { mk: "Полнет модар домат", en: "Stuffed Eggplant", price: 350, desc: { mk: "имам бајалди", en: "imam bayildi" } },
        { mk: "Шашлик", en: "Vegetable Skewer", weight: "0.30kg", price: 320, desc: { mk: "домат, модар домат, пиперка, тиквици, печурки, кромид", en: "tomato, eggplant, pepper, zucchini, mushrooms, onion" } },
        { mk: "Вегетеријанска даска", en: "Vegetarian Board", weight: "0.30kg", price: 320, allergens: ["G", "D", "E"], desc: { mk: "похован кашкавал, сирење на скара, пинџур, макало, урнебес, сарма, пита", en: "breaded cheese, grilled cheese, ajvar, makalo, urnebas, sarma, pita" } },
        { mk: "Зеленчук на скара", en: "Grilled Vegetables", weight: "0.30kg", price: 320, desc: { mk: "домат, модар домат, пиперка, тиквици, кромид", en: "tomato, eggplant, pepper, zucchini, onion" } },
      ]
    },
    {
      id: "spec",
      name: { mk: "Специјалитети на Куќата", en: "House Specialties" },
      items: [
        { mk: "Македонска тава", en: "Macedonian Tava", weight: "0.30kg", price: 590, desc: { mk: "свинско, јунешко, зеленчук", en: "pork, beef, vegetables" } },
        { mk: "Месо а ла Лира", en: "Meat à la Lyra", weight: "0.30kg", price: 620, desc: { mk: "свинско филе, праз, буковец, сува пиперка", en: "pork tenderloin, leek, oyster mushroom, dried pepper" } },
        { mk: "Селска прженица", en: "Village Pan Fry", weight: "0.30kg", price: 620, desc: { mk: "свинско филе, буковка, сува пиперка, кисели краставички", en: "pork tenderloin, oyster mushroom, dried pepper, pickles" } },
        { mk: "Смук а ла Лира", en: "Smuk à la Lyra", weight: "0.30kg", price: 690, allergens: ["D"], desc: { mk: "полнето свинско филе со пршута, кашкавал, печурки", en: "stuffed pork tenderloin with prosciutto, cheese, mushrooms" } },
        { mk: "Шашлик на жар", en: "Grilled Shashlik", weight: "0.30kg", price: 590, desc: { mk: "мешано месо со зеленчук на ражен", en: "mixed meat and vegetables on a skewer" } },
        { mk: "Јагнешко", en: "Lamb Shanks", weight: "0.50kg", price: 1100, allergens: ["D"], desc: { mk: "јагнешки коленици во крем сос од вргањ", en: "lamb shanks in porcini cream sauce" } },
        { mk: "Рамстек", en: "Rump Steak", weight: "0.20kg", price: 820, desc: { mk: "во сос од коњак и рузмарин", en: "in cognac and rosemary sauce" } },
        { mk: "Свински ребра во фурна", en: "Oven-Baked Pork Ribs", weight: "1kg", price: 1800 },
        { mk: "Свинска коленица", en: "Pork Knuckle", weight: "1kg", price: 1050 },
        { mk: "Телешко", en: "Veal", weight: "0.35kg", price: 790, allergens: ["D"], desc: { mk: "телешко месо во крем сос од вргањ", en: "veal in porcini cream sauce" } },
        { mk: "Селско месо", en: "Village Meat", weight: "0.30kg", price: 490, desc: { mk: "свинско филе, шампињони", en: "pork tenderloin, mushrooms" } },
      ]
    },
    {
      id: "deserti",
      name: { mk: "Десерти и Апетисани", en: "Desserts & Appetizers" },
      items: [
        { mk: "Баклава", en: "Baklava", weight: "0.20kg", price: 150, allergens: ["G", "N"] },
        { mk: "Жито со шлаг", en: "Wheat Pudding with Cream", weight: "0.20kg", price: 120, allergens: ["G", "D", "N"] },
        { mk: "Куп а ла Лира", en: "Cup à la Lyra", weight: "0.40kg", price: 180, allergens: ["D"], desc: { mk: "сладолед со овошна салата", en: "ice cream with fruit salad" } },
        { mk: "Бајадера", en: "Bajadera (chocolate cake)", price: 150, allergens: ["G", "N"] },
        { mk: "Сладолед", en: "Ice Cream", weight: "0.15kg", price: 150, allergens: ["D"] },
        { mk: "Овошна салата", en: "Fruit Salad", weight: "0.30kg", price: 210 },
        { mk: "Апетисани мешани", en: "Mixed Petit Fours", weight: "0.10kg", price: 250, allergens: ["N"] },
        { mk: "Печена тиква", en: "Baked Pumpkin", price: 180, allergens: ["N"], desc: { mk: "сезонски", en: "seasonal" } },
        { mk: "Печено јаболко", en: "Baked Apple", price: 150, allergens: ["D", "N"], desc: { mk: "сезонски", en: "seasonal" } },
        { mk: "Палачинка", en: "Pancake / Crepe", weight: "0.20kg", price: 150, allergens: ["G", "E"] },
      ]
    },
  ],

  drinks: [
    {
      id: "bezalk",
      name: { mk: "Безалкохолни Пијалоци", en: "Non-Alcoholic Drinks" },
      items: [
        { mk: "Цеден портокал | лимон", en: "Fresh Orange | Lemon Juice", weight: "0.20l", price: 200 },
        { mk: "Coca Cola", en: "Coca Cola", weight: "0.25l", price: 120 },
        { mk: "Sprite", en: "Sprite", weight: "0.25l", price: 120 },
        { mk: "Fanta", en: "Fanta", weight: "0.25l", price: 120 },
        { mk: "Schweppes", en: "Schweppes", weight: "0.25l", price: 120 },
        { mk: "Tonic", en: "Tonic", weight: "0.25l", price: 120 },
        { mk: "Овошни сокови", en: "Fruit Juices", weight: "0.20l", price: 130 },
        { mk: "Минерална вода", en: "Mineral Water", weight: "0.25l", price: 100 },
        { mk: "Acqua Panna / San Pellegrino", en: "Acqua Panna / San Pellegrino", weight: "0.75l", price: 190 },
        { mk: "Минерална вода", en: "Mineral Water", weight: "0.75l", price: 150 },
        { mk: "Rosa", en: "Rosa", weight: "0.75l", price: 150 },
      ]
    },
    {
      id: "toplipi",
      name: { mk: "Топли Пијалоци", en: "Hot Drinks" },
      items: [
        { mk: "Македонско кафе", en: "Macedonian Coffee", price: 90 },
        { mk: "Nescafé", en: "Nescafé", price: 150 },
        { mk: "Espresso", en: "Espresso", price: 90 },
        { mk: "Macchiato мало | големо", en: "Macchiato small | large", price: "100/130" },
        { mk: "Cappuccino", en: "Cappuccino", price: 140 },
        { mk: "Какао", en: "Hot Chocolate", price: 100, allergens: ["D"] },
        { mk: "Чај", en: "Tea", price: 100 },
        { mk: "Греано вино | ракија", en: "Mulled Wine | Brandy", price: "150/100" },
      ]
    },
    {
      id: "alkohol",
      name: { mk: "Алкохолни Пијалоци", en: "Spirits" },
      items: [
        { mk: "Ракија тиквеш", en: "Tikvesh Brandy", weight: "0.05l", price: 100 },
        { mk: "Ракија бовин", en: "Bovin Brandy", weight: "0.05l", price: 120 },
        { mk: "Ракија бовин (трифун)", en: "Bovin Trifun Brandy", weight: "0.04l", price: 180 },
        { mk: "Mastika", en: "Mastika", weight: "0.05l", price: 100 },
        { mk: "Ouzo", en: "Ouzo", weight: "0.05l", price: 100 },
        { mk: "Ouzo Plomari", en: "Ouzo Plomari", weight: "0.04l", price: 130 },
        { mk: "Cognac Badel", en: "Cognac Badel", weight: "0.04l", price: 100 },
        { mk: "Stock", en: "Stock", weight: "0.04l", price: 140 },
        { mk: "Rum Badel", en: "Rum Badel", weight: "0.04l", price: 100 },
        { mk: "Bacardi", en: "Bacardi", weight: "0.04l", price: 150 },
        { mk: "Sax Gin", en: "Sax Gin", weight: "0.04l", price: 100 },
        { mk: "Beefeater Gin", en: "Beefeater Gin", weight: "0.04l", price: 180 },
        { mk: "Gordon's Gin", en: "Gordon's Gin", weight: "0.04l", price: 180 },
        { mk: "Vigor Vodka", en: "Vigor Vodka", weight: "0.04l", price: 100 },
        { mk: "Finlandia Vodka", en: "Finlandia Vodka", weight: "0.04l", price: 150 },
        { mk: "Smirnoff Vodka", en: "Smirnoff Vodka", weight: "0.04l", price: 150 },
        { mk: "Tequila", en: "Tequila", weight: "0.03l", price: 100 },
      ]
    },
    {
      id: "viski",
      name: { mk: "Виски и Бурбон", en: "Whisky & Bourbon" },
      items: [
        { mk: "Johnnie Walker", en: "Johnnie Walker", weight: "0.04l", price: 180 },
        { mk: "Tullamore D.E.W.", en: "Tullamore D.E.W.", weight: "0.04l", price: 190 },
        { mk: "Ballantine's", en: "Ballantine's", weight: "0.04l", price: 180 },
        { mk: "Jack Daniel's", en: "Jack Daniel's", weight: "0.04l", price: 290 },
        { mk: "Chivas Regal", en: "Chivas Regal", weight: "0.04l", price: 340 },
        { mk: "Johnnie Walker Black 12", en: "Johnnie Walker Black 12", weight: "0.04l", price: 340 },
        { mk: "Ballantine's 12", en: "Ballantine's 12", weight: "0.04l", price: 340 },
        { mk: "Glenfiddich", en: "Glenfiddich", weight: "0.04l", price: 350 },
        { mk: "Jameson", en: "Jameson", weight: "0.04l", price: 210 },
        { mk: "J&B", en: "J&B", weight: "0.04l", price: 190 },
        { mk: "Jim Beam", en: "Jim Beam", weight: "0.04l", price: 190 },
        { mk: "Four Roses", en: "Four Roses", weight: "0.04l", price: 190 },
      ]
    },
    {
      id: "konjak",
      name: { mk: "Француски Коњак", en: "French Cognac" },
      items: [
        { mk: "Hennessy V.S.", en: "Hennessy V.S.", weight: "0.04l", price: 400 },
        { mk: "Courvoisier V.S.", en: "Courvoisier V.S.", weight: "0.04l", price: 400 },
        { mk: "Courvoisier V.S.O.P", en: "Courvoisier V.S.O.P", weight: "0.04l", price: 450 },
        { mk: "Rémy Martin V.S.", en: "Rémy Martin V.S.", weight: "0.04l", price: 470 },
        { mk: "Rémy Martin V.S.O.P.", en: "Rémy Martin V.S.O.P.", weight: "0.04l", price: 520 },
      ]
    },
    {
      id: "pivo",
      name: { mk: "Пиво", en: "Beer" },
      items: [
        { mk: "Skopsko", en: "Skopsko", weight: "0.33l", price: 140 },
        { mk: "Amstel", en: "Amstel", weight: "0.33l", price: 150 },
        { mk: "Heineken", en: "Heineken", weight: "0.4l", price: 190 },
        { mk: "Skopsko", en: "Skopsko", weight: "0.5l", price: 150 },
      ]
    },
    {
      id: "dizestiv",
      name: { mk: "Дижестив и Ликер", en: "Digestifs & Liqueurs" },
      items: [
        { mk: "Martini", en: "Martini", weight: "0.04l", price: 180 },
        { mk: "Campari", en: "Campari", weight: "0.04l", price: 180 },
        { mk: "Baileys", en: "Baileys", weight: "0.04l", price: 190 },
        { mk: "Вишњовка бовин", en: "Bovin Cherry Liqueur", weight: "0.04l", price: 180 },
        { mk: "Виљамовка", en: "Williams Pear Brandy", weight: "0.04l", price: 180 },
        { mk: "Сливовача", en: "Plum Brandy", weight: "0.04l", price: 180 },
        { mk: "Дуњовача", en: "Quince Brandy", weight: "0.04l", price: 180 },
        { mk: "Pelinkovac", en: "Pelinkovac", weight: "0.04l", price: 150 },
        { mk: "Jägermeister", en: "Jägermeister", weight: "0.04l", price: 180 },
      ]
    },
  ]
};
