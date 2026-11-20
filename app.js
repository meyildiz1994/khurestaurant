const dishes = [
  {id:'adana',name:'Adana Kebap',category:'Kebap & Izgara',emoji:'♨',portion:'150 g pişmiş servis',recipeComplete:true,ingredients:[['Dana kıyma','48 g'],['Kuzu kıyma','49 g'],['Kuyruk yağı','20 g'],['Pul biber','20 g'],['Tuz','3 g'],['Kapya biber','10 g']]},
  {id:'urfa',name:'Urfa Kebap',category:'Kebap & Izgara',emoji:'♨',portion:'150 g pişmiş servis',recipeComplete:true,ingredients:[['Dana kıyma','58 g'],['Kuzu kıyma','59 g'],['Kuyruk yağı','20 g'],['Kapya biber','10 g'],['Tuz','3 g']]},
  {id:'ali-nazik',name:'Ali Nazik',category:'Kebap & Izgara',emoji:'♨',portion:'250 g pişmiş servis',recipeComplete:true,ingredients:[['Dana kıyma','58 g'],['Kuzu kıyma','59 g'],['Kuyruk yağı','20 g'],['Kapya biber','10 g'],['Tuz','3 g'],['Tereyağı','20 g'],['Domates sosu','30 g'],['Patlıcan','100 g'],['Yoğurt','100 g']]},
  {id:'yogurtlu-kebap',name:'Yoğurtlu Kebap',category:'Kebap & Izgara',emoji:'♨',portion:'250 g pişmiş servis',recipeComplete:true,ingredients:[['Dana kıyma','58 g'],['Kuzu kıyma','59 g'],['Kuyruk yağı','20 g'],['Kapya biber','10 g'],['Tuz','3 g'],['Tereyağı','20 g'],['Domates sosu','30 g'],['Pide','120 g'],['Yoğurt','100 g']]},
  {id:'patlican-kebap',name:'Patlıcan Kebap',category:'Kebap & Izgara',emoji:'♨',portion:'250 g pişmiş servis',recipeComplete:false,ingredients:[]},
  {id:'sarma-beyti',name:'Sarma Beyti',category:'Kebap & Izgara',emoji:'♨',portion:'300 g pişmiş servis',recipeComplete:true,ingredients:[['Tuz','3 g'],['Kapya biber','10 g'],['Kuyruk yağı','20 g'],['Dana kıyma','58 g'],['Kuzu kıyma','58 g'],['Lavaş','180 g'],['Tereyağı','20 g'],['Salça sos','30 g']]},
  {id:'kofte',name:'Köfte',category:'Kebap & Izgara',emoji:'♨',portion:'300 g pişmiş servis',recipeComplete:true,ingredients:[['Tuz','5 g'],['Ekmek','10 g'],['Soğan','5 g'],['Dana kıyma','90 g'],['Kuzu kıyma','90 g']]},
  {id:'tavuk-sis',name:'Tavuk Şiş',category:'Kebap & Izgara',emoji:'♨',portion:'250 g pişmiş servis',recipeComplete:true,ingredients:[['Tuz','5 g'],['Domates salçası','10 g'],['Sıvı yağ','5 g'],['Toz biber','5 g'],['Pul biber','3 g'],['Tavuk but','222 g']]},
  {id:'kanat',name:'Tavuk Kanat',category:'Kebap & Izgara',emoji:'♨',portion:'250 g pişmiş servis',recipeComplete:true,ingredients:[['Tuz','5 g'],['Domates salçası','10 g'],['Sıvı yağ','5 g'],['Toz biber','5 g'],['Pul biber','3 g'],['Tavuk kanat','222 g']]},
  {id:'cop-sis',name:'Et Çöp Şiş',category:'Kebap & Izgara',emoji:'♨',portion:'300 g pişmiş servis',recipeComplete:true,ingredients:[['Tuz','3 g'],['Toz biber','3 g'],['Sıvı yağ','3 g'],['Kuyruk yağı','40 g'],['Dana eti','250 g']]},
  {id:'tandir',name:'Tandır',category:'Kebap & Izgara',emoji:'♨',portion:'130 g pişmiş servis',recipeComplete:true,ingredients:[['Tuz','5 g'],['Kuzu kol','125 g']]},
  {id:'etli-ekmek',name:'Etli Ekmek',category:'Pide & Fırın',emoji:'⌁',portion:'180 g pişmiş servis',recipeComplete:true,ingredients:[['Kıyma','120 g'],['Domates','90 g'],['Biber','40 g'],['Soğan','35 g'],['Hamur','200 g'],['Tuz','5 g']]},
  {id:'bicak-arasi',name:'Bıçak Arası',category:'Pide & Fırın',emoji:'⌁',portion:'180 g pişmiş servis',recipeComplete:true,ingredients:[['Et','100 g'],['Domates','90 g'],['Biber','40 g'],['Kavram yağı','50 g'],['Tuz','5 g'],['Sıvı yağ','10 g'],['Hamur','200 g']]},
  {id:'mevlana',name:'Mevlana',category:'Pide & Fırın',emoji:'⌁',portion:'180 g pişmiş servis',recipeComplete:true,ingredients:[['Kıyma','100 g'],['Peynir','30 g'],['Domates','90 g'],['Biber','40 g'],['Soğan','35 g'],['Hamur','200 g'],['Tuz','5 g']]},
  {id:'lahmacun',name:'Lahmacun',category:'Pide & Fırın',emoji:'⌁',portion:'180 g pişmiş servis',recipeComplete:true,ingredients:[['Kıyma','120 g'],['Domates','90 g'],['Biber','40 g'],['Soğan','35 g'],['Sarımsak','5 g'],['İsot','10 g'],['Maydanoz','10 g'],['Tuz','5 g'],['Hamur','55 g']]},
  {id:'kasarli-pide',name:'Kaşarlı Pide',category:'Pide & Fırın',emoji:'⌁',portion:'180 g pişmiş servis',recipeComplete:false,ingredients:[]},
  {id:'peynirli-pide',name:'Peynirli Pide (Börek)',category:'Pide & Fırın',emoji:'⌁',portion:'180 g pişmiş servis',recipeComplete:false,ingredients:[['Peynir','120 g'],['Kaşar','40 g'],['Küflü peynir','25 g']]},
  {id:'bamya',name:'Bamya',category:'Çorba & Başlangıç',emoji:'◒',portion:'200 g pişmiş servis',recipeComplete:false,ingredients:[]},
  {id:'kelle-paca',name:'Kelle Paça',category:'Çorba & Başlangıç',emoji:'◒',portion:'100 g pişmiş servis',recipeComplete:false,ingredients:[]},
  {id:'mercimek',name:'Mercimek',category:'Çorba & Başlangıç',emoji:'◒',portion:'100 g pişmiş servis',recipeComplete:false,ingredients:[]},
  {id:'icli-kofte',name:'İçli Köfte',category:'Çorba & Başlangıç',emoji:'◒',portion:'80 g pişmiş servis',recipeComplete:false,ingredients:[]}
];

// Per-100 g reference values from USDA FoodData Central SR Legacy generic foods.
// Local recipe amounts are treated as the amount used for one menu item; cooking loss is not modeled.
const nutrientReference = {
  beefMince:[215,18.59,15,0,0], lambMince:[193,20.33,12.41,0,0], animalFat:[902,0,100,0,0],
  paprika:[282,14.14,12.89,53.99,34.9], redPepper:[26,.99,.3,6.03,2.1], salt:[0,0,0,0,0],
  butter:[717,.85,81.11,.06,0], tomatoPaste:[82,4.32,.47,18.91,4.1], eggplant:[25,.98,.18,5.88,3],
  yogurt:[61,3.47,3.25,4.66,0], pita:[275,9.1,1.2,55.7,2.2], bread:[266,8.85,3.33,49.42,2.7],
  chickenThigh:[121,19.66,4.12,0,0], chickenWing:[191,17.52,12.85,0,0], oil:[884,0,100,0,0],
  beefSteak:[201,20.3,12.71,0,0], lambShoulder:[264,16.58,21.45,0,0], tomato:[18,.88,.2,3.89,1.2],
  onion:[40,1.1,.1,9.34,1.7], garlic:[149,6.36,.5,33.06,2.1], parsley:[36,2.97,.79,6.33,3.3],
  feta:[265,14.21,21.49,3.88,0], cheddar:[410,24.25,33.82,2.13,0], blueCheese:[353,21.4,28.74,2.34,0]
};
const ingredientReference = {
  'Dana kıyma':'beefMince','Kıyma':'beefMince','Kuzu kıyma':'lambMince','Kuyruk yağı':'animalFat','Kavram yağı':'animalFat',
  'Pul biber':'paprika','Toz biber':'paprika','İsot':'paprika','Kapya biber':'redPepper','Biber':'redPepper','Tuz':'salt',
  'Tereyağı':'butter','Domates sosu':'tomatoPaste','Salça sos':'tomatoPaste','Domates salçası':'tomatoPaste','Patlıcan':'eggplant',
  'Yoğurt':'yogurt','Pide':'pita','Lavaş':'pita','Hamur':'pita','Ekmek':'bread','Tavuk but':'chickenThigh','Tavuk kanat':'chickenWing',
  'Sıvı yağ':'oil','Dana eti':'beefSteak','Et':'beefSteak','Kuzu kol':'lambShoulder','Domates':'tomato','Soğan':'onion',
  'Sarımsak':'garlic','Maydanoz':'parsley','Peynir':'feta','Kaşar':'cheddar','Küflü peynir':'blueCheese'
};
const allergenReference = {
  'Gluten içeren tahıllar (buğday)': new Set(['Ekmek','Hamur','Lavaş','Pide']),
  'Süt ve süt ürünleri': new Set(['Peynir','Kaşar','Küflü peynir','Yoğurt','Tereyağı'])
};
function gramsOf(amount) { return Number(String(amount).match(/[\d.]+/)?.[0] || 0); }
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
for (const dish of dishes) {
  dish.nutrition = calculateNutrition(dish);
  dish.kcalCard = dish.nutrition ? dish.nutrition[0][1] : 'Hesap bekliyor';
  dish.recipeTotalGrams = dish.ingredients.reduce((sum, [,amount]) => sum + gramsOf(amount), 0);
  dish.allergens = Object.entries(allergenReference)
    .filter(([,ingredientNames]) => dish.ingredients.some(([name]) => ingredientNames.has(name)))
    .map(([allergen]) => allergen);
  dish.note = dish.recipeComplete
    ? 'Standart gıda bileşim verilerinden yaklaşık hesaplandı; listelenen gramajların tek ürün reçetesi olduğu varsayıldı. Belirtilmeyen kıyma dana kıyma, et dana eti, hamur/lavaş beyaz pide, peynir beyaz peynir, kaşar cheddar; tavuk but derisiz kabul edildi. Ürün markası, etin yağ oranı, kanat kemiği, pişirme kaybı ve porsiyon verimi sonucu değiştirebilir.'
    : 'Bu ürünün tam reçetesi paylaşılmadığı için besin değerleri hesaplanmadı.';
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
  kofte: '₺430',
  'tavuk-sis': '₺490',
  kanat: '₺430',
  'cop-sis': '₺800',
  'etli-ekmek': '₺420',
  'bicak-arasi': '₺480',
  mevlana: '₺450',
  lahmacun: '₺280',
  'peynirli-pide': '₺400',
  'icli-kofte': 'Tek ₺90 · Porsiyon ₺270'
};
for (const dish of dishes) dish.priceLabel = priceLabels[dish.id] ?? '';

let query = '';
const grid = document.querySelector('#menu-grid');
const searchInput = document.querySelector('#search');

function escapeHTML(value='') { return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char])); }
function imageMarkup(dish, className) { return `<img class="${className}" src="assets/${escapeHTML(dish.id)}.jpg" alt="${escapeHTML(dish.name)} için temsili yemek görseli" loading="lazy" />`; }
function filteredDishes() {
  const normalized = query.trim().toLocaleLowerCase('tr');
  return dishes.filter(dish => {
    const haystack = [dish.name,dish.note,...dish.ingredients.map(([name,amount])=>`${name} ${amount}`)].join(' ').toLocaleLowerCase('tr');
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
      ? dish.ingredients.slice(0,3).map(([name,amount])=>`${amount} ${name}`).join(' · ')
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
    : '<div class="detail-note">Tam tarif olmadığı için bu ürünün kalori, protein, yağ, karbonhidrat ve lif hesabı gösterilmiyor.</div>';
  const ingredientRows = dish.ingredients.map(([name,amount])=>`<li><span>${escapeHTML(name)}</span><b>${escapeHTML(amount)}</b></li>`).join('');
  const ingredients = ingredientRows ? `<ul class="ingredient-list">${ingredientRows}</ul>` : '<div class="detail-note">Bu yemek için içerik listesi henüz doğrulanmadı.</div>';
  const allergenTags = dish.allergens.length
    ? `<div class="allergen-list">${dish.allergens.map(name=>`<span class="allergen-tag warn">${escapeHTML(name)}</span>`).join('')}</div>`
    : `<div class="detail-note">${dish.recipeComplete ? 'Listelenen malzemelerde 14 ana alerjen grubundan açıkça belirlenen bir bileşen yok.' : 'Tarif eksik olduğu için alerjenler belirlenemiyor.'}</div>`;
  const allergenCaveat = dish.recipeComplete
    ? 'Yalnızca paylaşılan reçetede doğrudan görülen alerjenler listelenmiştir.'
    : 'Tarif tamamlanmadan bu ürünün alerjen listesi eksik kalabilir.';
  const portionGrams = Number(dish.portion.match(/[\d.]+/)?.[0] || 0);
  const yieldNote = dish.nutrition && Math.abs(dish.recipeTotalGrams - portionGrams) > portionGrams * 0.2
    ? `<div class="detail-note">Girilen malzemeler toplamı ${dish.recipeTotalGrams} g; menüdeki pişmiş servis ${portionGrams} g.</div>`
    : '';
  return `<div class="inline-meta"><span>Porsiyon: ${escapeHTML(dish.portion)}</span><b>${escapeHTML(dish.priceLabel || 'Fiyat henüz eklenmedi')}</b></div>
    <section class="detail-block"><h3>Kalori ve besin bilgisi <span>yaklaşık hesap</span></h3><div class="nutrition-grid">${nutritionRows}</div></section>
    <section class="detail-block"><h3>İçerik</h3>${ingredients}</section>
    <section class="detail-block"><h3>Alerjen bilgisi</h3>${allergenTags}<div class="detail-note">${escapeHTML(allergenCaveat)} Tedarikçi ürün etiketleri ve mutfaktaki çapraz temas işletme tarafından ayrıca doğrulanmalıdır.</div></section>
    ${yieldNote}
    <div class="detail-warning"><b>NOT:</b> Değerler laboratuvar analizi değildir.</div>
  `;
}
renderDishes();
searchInput.addEventListener('input',event=>{query=event.target.value;renderDishes();});
document.querySelector('#clear-filters').addEventListener('click',()=>{query='';searchInput.value='';renderDishes();});
