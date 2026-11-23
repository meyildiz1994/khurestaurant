const dishes = [
  {id:'adana',name:'Adana Kebap',category:'Kebap & Izgara',emoji:'♨',portion:'150 g pişmiş servis',recipeComplete:true,ingredients:[['Dana kıyma','48 g'],['Kuzu kıyma','49 g'],['Kuyruk yağı','20 g'],['Pul biber','2 g'],['Tuz','3 g'],['Kapya biber','10 g']]},
  {id:'urfa',name:'Urfa Kebap',category:'Kebap & Izgara',emoji:'♨',portion:'150 g pişmiş servis',recipeComplete:true,ingredients:[['Dana kıyma','58 g'],['Kuzu kıyma','59 g'],['Kuyruk yağı','20 g'],['Kapya biber','10 g'],['Tuz','3 g']]},
  {id:'ali-nazik',name:'Ali Nazik',category:'Kebap & Izgara',emoji:'♨',portion:'',recipeComplete:true,ingredients:[['Dana kıyma','58 g'],['Kuzu kıyma','59 g'],['Kuyruk yağı','20 g'],['Kapya biber','10 g'],['Tuz','3 g'],['Tereyağı','20 g'],['Domates sosu','30 g'],['Patlıcan','100 g'],['Yoğurt','100 g']]},
  {id:'yogurtlu-kebap',name:'Yoğurtlu Kebap',category:'Kebap & Izgara',emoji:'♨',portion:'',recipeComplete:true,ingredients:[['Dana kıyma','58 g'],['Kuzu kıyma','59 g'],['Kuyruk yağı','20 g'],['Kapya biber','10 g'],['Tuz','3 g'],['Tereyağı','20 g'],['Domates sosu','30 g'],['Pide','120 g'],['Yoğurt','100 g']]},
  {id:'patlican-kebap',name:'Patlıcan Kebap',category:'Kebap & Izgara',emoji:'♨',portion:'',recipeComplete:true,ingredients:[['Dana kıyma','58 g'],['Kuzu kıyma','59 g'],['Patlıcan','200 g'],['Kuyruk yağı','20 g'],['Kapya biber','10 g'],['Tuz','3 g']]},
  {id:'sarma-beyti',name:'Sarma Beyti',category:'Kebap & Izgara',emoji:'♨',portion:'',recipeComplete:true,ingredients:[['Tuz','3 g'],['Kapya biber','10 g'],['Kuyruk yağı','20 g'],['Dana kıyma','58 g'],['Kuzu kıyma','58 g'],['Lavaş','180 g'],['Tereyağı','20 g'],['Salça sos','30 g']]},
  {id:'saray-usulu-beyti',name:'Saray Usulü Beyti',category:'Kebap & Izgara',emoji:'♨',portion:'',imageId:'sarma-beyti',recipeComplete:true,ingredients:[['Tuz','3 g'],['Kapya biber','10 g'],['Kuyruk yağı','20 g'],['Dana kıyma','58 g'],['Kuzu kıyma','59 g'],['Kaşar peyniri','10 g'],['Lavaş ekmeği','1 adet (~60 g)'],['Salça sos','20 g'],['Tereyağı','30 g']]},
  {id:'special',name:'Special',category:'Kebap & Izgara',emoji:'♨',portion:'',imageId:'karisik-izgara',cardDescription:'Yarım Bıçak Arası · Yarım Mevlana · Yarım Tandır',recipeComplete:true,ingredients:[
    ['Kıyma','60 g','Yarım Bıçak Arası'],['Domates','45 g','Yarım Bıçak Arası'],['Biber','20 g','Yarım Bıçak Arası'],['Kuyruk yağı','25 g','Yarım Bıçak Arası'],['Tuz','2,5 g','Yarım Bıçak Arası'],['Sıvı yağ','5 g','Yarım Bıçak Arası'],['Hamur','100 g','Yarım Bıçak Arası'],
    ['Kıyma','50 g','Yarım Mevlana'],['Peynir','13 g','Yarım Mevlana'],['Domates','45 g','Yarım Mevlana'],['Biber','20 g','Yarım Mevlana'],['Soğan','17,5 g','Yarım Mevlana'],['Hamur','100 g','Yarım Mevlana'],['Tuz','2,5 g','Yarım Mevlana'],
    ['Kuzu kol (kemikli)','62,5 g','Yarım Tandır'],['Tuz','2,5 g','Yarım Tandır']
  ]},
  {id:'karisik-izgara',name:'Karışık Izgara',category:'Kebap & Izgara',emoji:'♨',portion:'',cardDescription:'Yarım Adana · Yarım Lahmacun · Yarım Tavuk Şiş · Yarım Kanat · Yarım Köfte · Yarım Patlıcan Kebap',recipeComplete:true,ingredients:[
    ['Dana kıyma','24 g','Yarım Adana'],['Kuzu kıyma','24,5 g','Yarım Adana'],['Kuyruk yağı','10 g','Yarım Adana'],['Pul biber','1 g','Yarım Adana'],['Tuz','1,5 g','Yarım Adana'],['Kapya biber','5 g','Yarım Adana'],
    ['Kıyma','60 g','Yarım Lahmacun'],['Domates','45 g','Yarım Lahmacun'],['Biber','20 g','Yarım Lahmacun'],['Soğan','17,5 g','Yarım Lahmacun'],['Sarımsak','2,5 g','Yarım Lahmacun'],['İsot','5 g','Yarım Lahmacun'],['Maydanoz','5 g','Yarım Lahmacun'],['Tuz','2,5 g','Yarım Lahmacun'],['Hamur','27,5 g','Yarım Lahmacun'],
    ['Tavuk but','111 g','Yarım Tavuk Şiş'],['Domates salçası','5 g','Yarım Tavuk Şiş'],['Sıvı yağ','2,5 g','Yarım Tavuk Şiş'],['Toz biber','2,5 g','Yarım Tavuk Şiş'],['Tuz','2,5 g','Yarım Tavuk Şiş'],['Pul biber','1,5 g','Yarım Tavuk Şiş'],
    ['Tavuk kanat (kemikli)','111 g','Yarım Kanat'],['Domates salçası','5 g','Yarım Kanat'],['Pul biber','1,5 g','Yarım Kanat'],['Tuz','2,5 g','Yarım Kanat'],['Sıvı yağ','2,5 g','Yarım Kanat'],['Toz biber','2,5 g','Yarım Kanat'],
    ['Dana kıyma','45 g','Yarım Köfte'],['Kuzu kıyma','45 g','Yarım Köfte'],['Tuz','2,5 g','Yarım Köfte'],['Ekmek','5 g','Yarım Köfte'],['Soğan','2,5 g','Yarım Köfte'],
    ['Patlıcan','100 g','Yarım Patlıcan Kebap'],['Kuzu kıyma','29,5 g','Yarım Patlıcan Kebap'],['Kuyruk yağı','10 g','Yarım Patlıcan Kebap'],['Dana kıyma','29 g','Yarım Patlıcan Kebap'],['Tuz','1,5 g','Yarım Patlıcan Kebap'],['Kapya biber','5 g','Yarım Patlıcan Kebap']
  ]},
  {id:'kofte',name:'Köfte',category:'Kebap & Izgara',emoji:'♨',portion:'',recipeComplete:true,ingredients:[['Tuz','5 g'],['Ekmek','10 g'],['Soğan','5 g'],['Dana kıyma','90 g'],['Kuzu kıyma','90 g']]},
  {id:'tavuk-sis',name:'Tavuk Şiş',category:'Kebap & Izgara',emoji:'♨',portion:'250 g pişmiş servis',recipeComplete:true,ingredients:[['Tuz','5 g'],['Domates salçası','10 g'],['Sıvı yağ','5 g'],['Toz biber','5 g'],['Pul biber','3 g'],['Tavuk but','222 g']]},
  {id:'kanat',name:'Tavuk Kanat',category:'Kebap & Izgara',emoji:'♨',portion:'250 g pişmiş servis',recipeComplete:true,ingredients:[['Tuz','5 g'],['Domates salçası','10 g'],['Sıvı yağ','5 g'],['Toz biber','5 g'],['Pul biber','3 g'],['Tavuk kanat (kemikli)','222 g']]},
  {id:'kiremitte-tavuk',name:'Kiremitte Tavuk',category:'Kebap & Izgara',emoji:'♨',portion:'',imageId:'tavuk-sis',recipeComplete:true,ingredients:[['Tavuk but','250 g'],['Domates','30 g'],['Biber','30 g'],['Kaşar peyniri','25 g'],['Salça sos','20 g']]},
  {id:'kiremitte-kanat',name:'Kiremitte Kanat',category:'Kebap & Izgara',emoji:'♨',portion:'',imageId:'kanat',recipeComplete:true,ingredients:[['Tavuk kanat (kemikli)','250 g'],['Domates','30 g'],['Biber','30 g'],['Kaşar peyniri','25 g'],['Salça sos','20 g']]},
  {id:'kiremitte-kofte',name:'Kiremitte Köfte',category:'Kebap & Izgara',emoji:'♨',portion:'',imageId:'kofte',recipeComplete:true,ingredients:[['Köfte','200 g'],['Domates','30 g'],['Biber','30 g'],['Kaşar peyniri','25 g'],['Salça sos','20 g']]},
  {id:'cop-sis',name:'Et Çöp Şiş',category:'Kebap & Izgara',emoji:'♨',portion:'300 g pişmiş servis',recipeComplete:true,ingredients:[['Tuz','3 g'],['Toz biber','3 g'],['Sıvı yağ','3 g'],['Kuyruk yağı','40 g'],['Dana eti','250 g']]},
  {id:'tandir',name:'Tandır',category:'Kebap & Izgara',emoji:'♨',portion:'130 g pişmiş servis',recipeComplete:true,ingredients:[['Tuz','5 g'],['Kuzu kol (kemikli)','125 g']]},
  {id:'etli-ekmek',name:'Etli Ekmek',category:'Pide & Fırın',emoji:'⌁',portion:'',recipeComplete:true,ingredients:[['Kıyma','120 g'],['Domates','90 g'],['Biber','40 g'],['Soğan','35 g'],['Hamur','200 g'],['Tuz','5 g']]},
  {id:'bicak-arasi',name:'Bıçak Arası',category:'Pide & Fırın',emoji:'⌁',portion:'',recipeComplete:true,ingredients:[['Et','100 g'],['Domates','90 g'],['Biber','40 g'],['Kavram yağı','50 g'],['Tuz','5 g'],['Sıvı yağ','10 g'],['Hamur','200 g']]},
  {id:'mevlana',name:'Mevlana',category:'Pide & Fırın',emoji:'⌁',portion:'',recipeComplete:true,ingredients:[['Kıyma','100 g'],['Peynir','30 g'],['Domates','90 g'],['Biber','40 g'],['Soğan','35 g'],['Hamur','200 g'],['Tuz','5 g']]},
  {id:'lahmacun',name:'Lahmacun',category:'Pide & Fırın',emoji:'⌁',portion:'',recipeComplete:true,ingredients:[['Kıyma','120 g'],['Domates','90 g'],['Biber','40 g'],['Soğan','35 g'],['Sarımsak','5 g'],['İsot','10 g'],['Maydanoz','10 g'],['Tuz','5 g'],['Hamur','55 g']]},
  {id:'kasarli-pide',name:'Kaşarlı Pide',category:'Pide & Fırın',emoji:'⌁',portion:'',recipeComplete:false,ingredients:[['Hamur',''],['Kaşar','']]},
  {id:'peynirli-pide',name:'Peynirli Pide (Börek)',category:'Pide & Fırın',emoji:'⌁',portion:'',recipeComplete:false,ingredients:[['Peynir','120 g'],['Kaşar','40 g'],['Küflü peynir','25 g'],['Hamur','']]},
  {id:'bamya',name:'Bamya',category:'Çorba & Başlangıç',emoji:'◒',portion:'200 g pişmiş servis',recipeComplete:true,ingredients:[['Bamya','30 g'],['Et','30 g'],['Soğan','10 g'],['Salça sos','10 g'],['Tuz','5 g'],['Limon kabuğu','2 g'],['Sıvı yağ','10 g'],['Biber salçası','5 g'],['Kapya biber','10 g']]},
  {id:'kelle-paca',name:'Kelle Paça',category:'Çorba & Başlangıç',emoji:'◒',portion:'',recipeComplete:true,ingredients:[['Dana kelle eti','100 g'],['Tereyağı','18 g'],['Sıvı yağ','5 g'],['Un','5 g'],['Yoğurt','30 g'],['Limon','4 g'],['Yumurta sarısı','5 g'],['Tuz','3 g']]},
  {id:'mercimek',name:'Mercimek',category:'Çorba & Başlangıç',emoji:'◒',portion:'1 kase (~250 g)',recipeComplete:true,ingredients:[['Mercimek','37,5 g'],['Un','12,5 g'],['Tuz','7,5 g'],['Su','187,5 g'],['Sıvı yağ','7,5 g']]},
  {id:'icli-kofte',name:'İçli Köfte',category:'Çorba & Başlangıç',emoji:'◒',portion:'80 g pişmiş servis',recipeComplete:false,ingredients:[['Bulgur',''],['Kıyma','']]}
];

// Per-100 g edible-portion values: [kcal, protein g, fat g, carbohydrate g, fibre g].
// Source: TürKomp (Ulusal Gıda Kompozisyon Veri Tabanı, turkomp.tarimorman.gov.tr), read 2026-11-24.
// TürKomp has no entry for plain minced meat, head meat, skinless chicken thigh or blue cheese; those use USDA FoodData Central SR Legacy.
// TürKomp lists no fat value for pul/toz biber; fat is taken as 0 (used in a few grams only).
const nutrientReference = {
  beefMince:[215,18.59,15,0,0],          // USDA 23572 Beef, ground, 85% lean / 15% fat, raw
  lambMince:[282,16.56,23.41,0,0],       // USDA 17224 Lamb, ground, raw
  beefHead:[201,20.3,12.71,0,0],         // USDA beef composite, raw (no head-meat entry in TürKomp)
  blueCheese:[353,21.4,28.74,2.34,0],    // USDA 01004 Cheese, blue
  beefMeat:[135,20.86,5.73,0,0],         // TürKomp: Dana eti, kol
  lambShoulder:[120,18.74,4.97,0,0],     // TürKomp: Kuzu eti, kol
  animalFat:[787,2.87,86.12,0,0],        // TürKomp: Koyun kuyruk yağı
  chickenThigh:[121,19.66,4.12,0,0],     // USDA 05096 Chicken thigh, meat only, raw (TürKomp 'but' is skin-on)
  chickenWing:[173,20.3,10.15,0,0],      // TürKomp: Piliç eti, kanat
  chiliFlakes:[286,11.69,0,43.67,32.25], // TürKomp: Biber, kırmızı, acılı, pul
  paprika:[281,14.75,0,32.97,45.05],     // TürKomp: Biber, kırmızı, toz
  redPepper:[28,.89,.21,4.94,1.61],      // TürKomp: Biber, kırmızı, California Wonder tipi (kapya yerine)
  greenPepper:[28,.76,.13,4.85,1.93],    // TürKomp: Biber, sivri
  salt:[1,0,0,.22,0],                    // TürKomp: Tuz, sofra, iyotlu
  butter:[753,.19,83.22,.85,0],          // TürKomp: Tereyağı, kahvaltılık
  tomatoPaste:[97,4.56,.52,16.64,3.58],  // TürKomp: Domates salçası
  pepperPaste:[112,2.44,.44,23.43,2.49], // TürKomp: Biber salçası
  eggplant:[23,.94,.23,3.13,2.51],       // TürKomp: Patlıcan, uzun
  yogurt:[69,4.53,3.8,4.24,0],           // TürKomp: Yoğurt, homojenize, tam yağlı
  pide:[258,7.58,1.5,51.39,4.08],        // TürKomp: Ramazan pidesi
  lavash:[284,7,2.23,57.51,3.16],        // TürKomp: Lavaş
  bread:[276,9.41,3.22,50.13,4.32],      // TürKomp: Ekmek, beyaz
  oil:[900,0,100,0,0],                   // TürKomp: Ayçiçek yağı
  tomato:[19,.89,.2,2.86,1.1],           // TürKomp: Domates, sofralık
  onion:[40,1.16,.18,7.88,1.23],         // TürKomp: Soğan, sarı, kuru
  garlic:[129,5.21,.54,24.48,2.64],      // TürKomp: Sarımsak, kuru
  parsley:[37,3.39,.56,2.82,3.42],       // TürKomp: Maydanoz
  whiteCheese:[309,16.01,23.55,8.21,0],  // TürKomp: Peynir, beyaz, tam yağlı
  kasar:[353,26.99,26.06,2.56,0],        // TürKomp: Peynir, kaşar, taze
  okra:[48,2.9,.13,7.2,3.36],            // TürKomp: Bamya
  lemon:[43,.44,.36,8.73,1.41],          // TürKomp: Limon, İnterdonato
  flour:[350,10.66,1.44,71.76,3.76],     // TürKomp: Buğday unu, ekmeklik, tip 550
  eggYolk:[308,14.75,27.62,0,0],         // TürKomp: Yumurta, tavuk, sarı
  lentils:[322,25.81,1.57,41.94,18.67],  // TürKomp: Mercimek, kırmızı, kuru
  bulgur:[357,12.08,3.95,64.97,6.79],    // TürKomp: Bulgur, pilavlık
  water:[0,0,0,0,0]
};
// Bone-in weights: values scaled to the edible part (bone ~46% of chicken wings, ~20% of lamb shoulder; USDA refuse factors).
nutrientReference.chickenWingBoneIn = nutrientReference.chickenWing.map(value => value * 0.54);
nutrientReference.lambShoulderBoneIn = nutrientReference.lambShoulder.map(value => value * 0.80);
const ingredientReference = {
  'Dana kıyma':'beefMince','Kıyma':'beefMince','Kuzu kıyma':'lambMince','Kuyruk yağı':'animalFat','Kavram yağı':'animalFat',
  'Pul biber':'chiliFlakes','İsot':'chiliFlakes','Toz biber':'paprika','Kapya biber':'redPepper','Biber':'greenPepper','Tuz':'salt',
  'Tereyağı':'butter','Domates sosu':'tomatoPaste','Salça sos':'tomatoPaste','Domates salçası':'tomatoPaste','Patlıcan':'eggplant',
  'Yoğurt':'yogurt','Pide':'pide','Lavaş':'lavash','Lavaş ekmeği':'lavash','Hamur':'pide','Ekmek':'bread','Tavuk but':'chickenThigh',
  'Tavuk kanat (kemikli)':'chickenWingBoneIn','Sıvı yağ':'oil','Dana eti':'beefMeat','Et':'beefMeat','Kuzu kol (kemikli)':'lambShoulderBoneIn',
  'Domates':'tomato','Soğan':'onion','Sarımsak':'garlic','Maydanoz':'parsley','Peynir':'whiteCheese','Kaşar':'kasar','Kaşar peyniri':'kasar',
  'Küflü peynir':'blueCheese','Köfte':'kofteMix','Bamya':'okra','Limon kabuğu':'lemon','Biber salçası':'pepperPaste',
  'Dana kelle eti':'beefHead','Un':'flour','Limon':'lemon','Yumurta sarısı':'eggYolk','Mercimek':'lentils','Su':'water','Bulgur':'bulgur'
};
const allergenReference = {
  'Gluten içeren tahıllar (buğday)': new Set(['Ekmek','Hamur','Lavaş','Lavaş ekmeği','Pide','Un','Köfte','Bulgur']),
  'Süt ve süt ürünleri': new Set(['Peynir','Kaşar','Kaşar peyniri','Küflü peynir','Yoğurt','Tereyağı']),
  'Yumurta ve yumurta ürünleri': new Set(['Yumurta sarısı'])
};
function gramsOf(amount) {
  const text = String(amount);
  const gramValue = text.match(/([\d.,]+)\s*g\b/i)?.[1] || text.match(/[\d.,]+/)?.[0] || '0';
  return Number(gramValue.replace(',','.')) || 0;
}
function calculateNutrition(dish) {
  if (!dish.recipeComplete || dish.ingredients.some(([name]) => !ingredientReference[name])) return null;
  const totals = [0,0,0,0,0];
  for (const [name,amount] of dish.ingredients) {
    const values = nutrientReference[ingredientReference[name]];
    values.forEach((value,index) => totals[index] += value * gramsOf(amount) / 100);
  }
  const rounded = [Math.round(totals[0]), ...totals.slice(1).map(value => Math.round(value * 10) / 10)];
  return [['Kalori',`~${rounded[0]} kcal`],['Protein',`~${rounded[1]} g`],['Yağ',`~${rounded[2]} g`],['Karbonhidrat',`~${rounded[3]} g`],['Lif',`~${rounded[4]} g`]];
}
// 'Köfte' as an ingredient (Kiremitte Köfte) is derived from the Köfte recipe itself.
{
  const kofte = dishes.find(dish => dish.id === 'kofte');
  const total = kofte.ingredients.reduce((sum,[,amount]) => sum + gramsOf(amount), 0);
  nutrientReference.kofteMix = [0,1,2,3,4].map(index => kofte.ingredients.reduce((sum,[name,amount]) =>
    sum + nutrientReference[ingredientReference[name]][index] * gramsOf(amount), 0) / total);
}
for (const dish of dishes) {
  dish.nutrition = calculateNutrition(dish);
  dish.kcalCard = dish.nutrition ? dish.nutrition[0][1] : 'Hesap bekliyor';
  dish.recipeTotalGrams = dish.ingredients.reduce((sum, [,amount]) => sum + gramsOf(amount), 0);
  dish.allergens = Object.entries(allergenReference)
    .filter(([,ingredientNames]) => dish.ingredients.some(([name]) => ingredientNames.has(name)))
    .map(([allergen]) => allergen);
  dish.note = 'NOT: Değerler laboratuvar analizi değildir.';
}

// Prices transcribed from the restaurant menu photos shared on 2026-11-19.
// Items marked with an X in those photos are not part of the available menu.
const priceLabels = {
  adana: '₺470',
  urfa: '₺470',
  'ali-nazik': '₺510',
  'yogurtlu-kebap': '₺510',
  'patlican-kebap': '₺510',
  'sarma-beyti': '₺490',
  'saray-usulu-beyti': '₺510',
  kofte: '₺430',
  'tavuk-sis': '₺490',
  kanat: '₺430',
  'kiremitte-tavuk': '₺430',
  'kiremitte-kanat': '₺450',
  'kiremitte-kofte': '₺450',
  'cop-sis': '₺800',
  'etli-ekmek': '₺420',
  'bicak-arasi': '₺480',
  mevlana: '₺450',
  lahmacun: '₺280',
  'peynirli-pide': '₺400',
  'icli-kofte': 'Tek ₺90 · Porsiyon ₺270'
};
for (const dish of dishes) dish.priceLabel = priceLabels[dish.id] ?? '';

// Internal check only (not shown to customers): raw recipe total vs. stated cooked portion.
for (const dish of dishes) {
  const portionGrams = Number(dish.portion.match(/([\d.]+)\s*g\b/)?.[1] || 0);
  if (dish.recipeComplete && portionGrams > 0 && Math.abs(dish.recipeTotalGrams - portionGrams) > portionGrams * 0.2)
    console.warn(`[gramaj] ${dish.name}: malzeme toplamı ${dish.recipeTotalGrams} g, porsiyon etiketi ${portionGrams} g`);
}

let query = '';
const grid = document.querySelector('#menu-grid');
const searchInput = document.querySelector('#search');

function escapeHTML(value='') { return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char])); }
function imageMarkup(dish, className) { return `<img class="${className}" src="assets/${escapeHTML(dish.imageId || dish.id)}.jpg" alt="${escapeHTML(dish.name)} için temsili yemek görseli" loading="lazy" />`; }
function filteredDishes() {
  const normalized = query.trim().toLocaleLowerCase('tr');
  return dishes.filter(dish => {
    const haystack = [dish.name,dish.note,...dish.ingredients.map(([name,amount,component])=>`${component || ''} ${name} ${amount}`)].join(' ').toLocaleLowerCase('tr');
    return !normalized || haystack.includes(normalized);
  });
}
function renderDishes() {
  const results = filteredDishes();
  document.querySelector('#result-count').textContent = `${results.length} yemek`;
  document.querySelector('#empty-state').hidden = results.length !== 0;
  grid.hidden = results.length === 0;
  grid.innerHTML = results.map(dish => {
    const preview = dish.ingredients.length
      ? dish.cardDescription || dish.ingredients.slice(0,3).map(([name,amount])=>amount ? `${amount} ${name}` : name).join(' · ')
      : 'İçerik listesi henüz doğrulanmadı';
    const price = dish.id === 'icli-kofte'
      ? '<span class="price-options"><span>Tek ₺90</span><span>Porsiyon ₺270</span></span>'
      : `<span class="card-price${dish.priceLabel ? '' : ' pending'}">${escapeHTML(dish.priceLabel || 'Fiyat bekleniyor')}</span>`;
    return `<article class="dish-card" data-id="${dish.id}">
      <button class="dish-row" type="button" aria-expanded="false" aria-label="${escapeHTML(dish.name)} detaylarını aç">
        ${imageMarkup(dish,'dish-thumb')}
        <span class="dish-main"><span class="dish-title"><b>${escapeHTML(dish.name)}</b></span><span class="dish-ingredients">${escapeHTML(preview)}</span><span class="dish-footer">${price}<span class="card-kcal"><span aria-hidden="true">♨</span>${escapeHTML(dish.kcalCard)}</span></span></span>
        <span class="dish-arrow" aria-hidden="true">⌄</span>
      </button>
      <div class="inline-detail" hidden>${detailMarkup(dish)}</div>
    </article>`;
  }).join('');
  grid.querySelectorAll('.dish-row').forEach(button => button.addEventListener('click',()=>{
    const card=button.closest('.dish-card');
    const detail=card.querySelector('.inline-detail');
    const opening=detail.hidden;
    grid.querySelectorAll('.inline-detail').forEach(item=>{item.hidden=true;item.closest('.dish-card').classList.remove('expanded');item.closest('.dish-card').querySelector('.dish-row').setAttribute('aria-expanded','false');});
    if(opening){detail.hidden=false;card.classList.add('expanded');button.setAttribute('aria-expanded','true');}
  }));
}
function detailMarkup(dish) {
  const nutritionRows = dish.nutrition
    ? dish.nutrition.map(([name,value])=>`<div class="nutrition-cell"><b>${escapeHTML(value)}</b><span>${escapeHTML(name)}</span></div>`).join('')
    : `<div class="detail-note">${escapeHTML(dish.nutritionPendingMessage || 'Tam tarif olmadığı için bu ürünün kalori, protein, yağ, karbonhidrat ve lif hesabı gösterilmiyor.')}</div>`;
  let previousComponent = '';
  const ingredientRows = dish.ingredients.map(([name,amount,component])=>{
    const heading = component && component !== previousComponent ? `<li class="ingredient-group">${escapeHTML(component)}</li>` : '';
    previousComponent = component || '';
    return `${heading}<li><span>${escapeHTML(name)}</span>${amount ? `<b>${escapeHTML(amount)}</b>` : '<b class="amount-pending">gramaj bekleniyor</b>'}</li>`;
  }).join('');
  const ingredients = ingredientRows ? `<ul class="ingredient-list">${ingredientRows}</ul>` : '<div class="detail-note">Bu yemek için içerik listesi henüz doğrulanmadı.</div>';
  const allergenTags = dish.allergens.length
    ? `<div class="allergen-list">${dish.allergens.map(name=>`<span class="allergen-tag warn">${escapeHTML(name)}</span>`).join('')}</div>`
    : `<div class="detail-note">${dish.recipeComplete ? 'Listelenen malzemelerde 14 ana alerjen grubundan açıkça belirlenen bir bileşen yok.' : 'Tarif eksik olduğu için alerjenler belirlenemiyor.'}</div>`;
  const allergenCaveat = dish.recipeComplete
    ? 'Yalnızca paylaşılan reçetede doğrudan görülen alerjenler listelenmiştir.'
    : 'Tarif tamamlanmadan bu ürünün alerjen listesi eksik kalabilir.';
  return `<div class="inline-meta">${dish.portion ? `<span>Porsiyon: ${escapeHTML(dish.portion)}</span>` : (dish.recipeComplete && dish.recipeTotalGrams ? `<span>Tarif toplamı: ~${Math.round(dish.recipeTotalGrams)} g (pişirme öncesi)</span>` : '')}<b>${escapeHTML(dish.priceLabel || 'Fiyat henüz eklenmedi')}</b></div>
    <section class="detail-block"><h3>Kalori ve besin bilgisi <span>1 porsiyon · yaklaşık hesap</span></h3><div class="nutrition-grid">${nutritionRows}</div></section>
    <section class="detail-block"><h3>İçerik</h3>${ingredients}</section>
    <section class="detail-block"><h3>Alerjen bilgisi</h3>${allergenTags}<div class="detail-note">${escapeHTML(allergenCaveat)} Tedarikçi ürün etiketleri ve mutfaktaki çapraz temas işletme tarafından ayrıca doğrulanmalıdır.</div></section>
    <div class="detail-warning"><b>NOT:</b> Değerler laboratuvar analizi değildir.</div>
  `;
}
renderDishes();
searchInput.addEventListener('input',event=>{query=event.target.value;renderDishes();});
document.querySelector('#clear-filters').addEventListener('click',()=>{query='';searchInput.value='';renderDishes();});
