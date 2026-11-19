const dishes = [
  {id:'adana',name:'Adana Kebap',category:'Kebap & Izgara',emoji:'♨',portion:'150 g pişmiş servis',ingredients:[['Kuzu kıyma','29 g'],['Kuyruk yağı','20 g'],['Pul biber','20 g'],['Tuz','3 g'],['Kapya biber','10 g']]},
  {id:'urfa',name:'Urfa Kebap',category:'Kebap & Izgara',emoji:'♨',portion:'150 g pişmiş servis',ingredients:[['Dana kıyma','58 g'],['Kuzu kıyma','59 g'],['Kuyruk yağı','20 g'],['Kapya biber','10 g'],['Tuz','3 g']]},
  {id:'ali-nazik',name:'Ali Nazik',category:'Kebap & Izgara',emoji:'♨',portion:'250 g pişmiş servis',ingredients:[['Dana kıyma','58 g'],['Kuzu kıyma','59 g'],['Kuyruk yağı','20 g'],['Kapya biber','10 g'],['Tuz','3 g'],['Tereyağı','20 g'],['Domates sosu','30 g'],['Patlıcan','100 g'],['Yoğurt','100 g']]},
  {id:'yogurtlu-kebap',name:'Yoğurtlu Kebap',category:'Kebap & Izgara',emoji:'♨',portion:'250 g pişmiş servis',ingredients:[['Dana kıyma','58 g'],['Kuzu kıyma','59 g'],['Kuyruk yağı','20 g'],['Kapya biber','10 g'],['Tuz','3 g'],['Tereyağı','20 g'],['Domates sosu','30 g'],['Pide','120 g'],['Yoğurt','100 g']]},
  {id:'patlican-kebap',name:'Patlıcan Kebap',category:'Kebap & Izgara',emoji:'♨',portion:'250 g pişmiş servis',ingredients:[]},
  {id:'sarma-beyti',name:'Sarma Beyti',category:'Kebap & Izgara',emoji:'♨',portion:'300 g pişmiş servis',ingredients:[['Tuz','3 g'],['Kapya biber','10 g'],['Kuyruk yağı','20 g'],['Dana kıyma','58 g'],['Kuzu kıyma','58 g'],['Lavaş','180 g'],['Tereyağı','20 g'],['Salça sos','30 g']]},
  {id:'kofte',name:'Köfte',category:'Kebap & Izgara',emoji:'♨',portion:'300 g pişmiş servis',ingredients:[['Ekmek','10 g'],['Soğan','5 g'],['Dana kıyma','90 g'],['Kuzu kıyma','90 g']]},
  {id:'tavuk-sis',name:'Tavuk Şiş',category:'Kebap & Izgara',emoji:'♨',portion:'250 g pişmiş servis',ingredients:[['Tuz','5 g'],['Domates salçası','10 g'],['Sıvı yağ','5 g'],['Toz biber','5 g'],['Pul biber','3 g'],['Tavuk','222 g']]},
  {id:'kanat',name:'Tavuk Kanat',category:'Kebap & Izgara',emoji:'♨',portion:'250 g pişmiş servis',ingredients:[['Tuz','5 g'],['Domates salçası','10 g'],['Sıvı yağ','5 g'],['Toz biber','5 g'],['Pul biber','3 g'],['Tavuk kanat','222 g']]},
  {id:'cop-sis',name:'Et Çöp Şiş',category:'Kebap & Izgara',emoji:'♨',portion:'300 g pişmiş servis',ingredients:[['Tuz','3 g'],['Toz biber','3 g'],['Sıvı yağ','3 g'],['Kuyruk yağı','40 g'],['Dana eti','250 g']]},
  {id:'tandir',name:'Tandır',category:'Kebap & Izgara',emoji:'♨',portion:'130 g pişmiş servis',ingredients:[['Tuz','5 g'],['Kuzu kol','125 g']]},
  {id:'etli-ekmek',name:'Etli Ekmek',category:'Pide & Fırın',emoji:'⌁',portion:'180 g pişmiş servis',ingredients:[['Kıyma','120 g'],['Döner','80 g'],['Biber','40 g'],['Soğan','35 g'],['Hamur','200 g'],['Tuz','5 g']]},
  {id:'bicak-arasi',name:'Bıçak Arası',category:'Pide & Fırın',emoji:'⌁',portion:'180 g pişmiş servis',ingredients:[['Kıyma','100 g'],['Döner','90 g'],['Biber','40 g'],['Kuyruk yağı','50 g'],['Tuz','5 g'],['Sıvı yağ','10 g'],['Hamur','200 g']]},
  {id:'mevlana',name:'Mevlana',category:'Pide & Fırın',emoji:'⌁',portion:'180 g pişmiş servis',ingredients:[['Peynir','30 g'],['Biber','40 g'],['Soğan','35 g'],['Hamur','200 g'],['Tuz','5 g']]},
  {id:'lahmacun',name:'Lahmacun',category:'Pide & Fırın',emoji:'⌁',portion:'180 g pişmiş servis',ingredients:[['Kıyma','120 g'],['Domates','90 g'],['Biber','40 g'],['Soğan','35 g'],['Sarımsak','5 g'],['İsot','10 g'],['Maydanoz','10 g'],['Tuz','5 g']]},
  {id:'kasarli-pide',name:'Kaşarlı Pide',category:'Pide & Fırın',emoji:'⌁',portion:'180 g pişmiş servis',ingredients:[]},
  {id:'peynirli-pide',name:'Peynirli Pide (Börek)',category:'Pide & Fırın',emoji:'⌁',portion:'180 g pişmiş servis',ingredients:[['Peynir','120 g'],['Kaşar','40 g']]},
  {id:'bamya',name:'Bamya',category:'Çorba & Başlangıç',emoji:'◒',portion:'200 g pişmiş servis',ingredients:[]},
  {id:'kelle-paca',name:'Kelle Paça',category:'Çorba & Başlangıç',emoji:'◒',portion:'100 g pişmiş servis',ingredients:[]},
  {id:'mercimek',name:'Mercimek',category:'Çorba & Başlangıç',emoji:'◒',portion:'100 g pişmiş servis',ingredients:[]},
  {id:'icli-kofte',name:'İçli Köfte',category:'Çorba & Başlangıç',emoji:'◒',portion:'80 g pişmiş servis',ingredients:[]}
];

// Nutrient estimates are calculated for the cooked serving weights supplied by the user.
// They use typical recipe averages and deliberately do not reuse values from the handwritten photos.
const nutritionEstimates = {
  adana: [390,25,31,2,0], urfa: [335,27,24,2,0],
  'sarma-beyti': [700,44,36,50,2], 'tavuk-sis': [420,60,17,6,1],
  kanat: [490,44,34,2,0], kofte: [590,51,36,15,1],
  'ali-nazik': [430,26,28,18,4], 'cop-sis': [650,75,37,3,0],
  'yogurtlu-kebap': [560,30,30,42,2], 'patlican-kebap': [455,31,24,29,6],
  tandir: [325,34,21,0,0], 'etli-ekmek': [455,21,17,55,3],
  'bicak-arasi': [450,20,18,52,3], mevlana: [495,22,21,54,3],
  lahmacun: [385,20,12,49,4], 'kasarli-pide': [505,22,19,61,2],
  'peynirli-pide': [535,19,26,56,2], bamya: [200,9,9,21,7],
  'kelle-paca': [125,10,8,3,0], mercimek: [70,4,2,9,3],
  'icli-kofte': [185,7,8,21,2]
};
for (const dish of dishes) {
  const [kcal, protein, fat, carbs, fiber] = nutritionEstimates[dish.id];
  dish.kcalCard = `~${kcal} kcal`;
  dish.nutrition = [
    ['Kalori', `~${kcal} kcal`], ['Protein', `~${protein} g`], ['Yağ', `~${fat} g`],
    ['Karbonhidrat', `~${carbs} g`], ['Lif', `~${fiber} g`]
  ];
  dish.note = 'Tahmini standart tarif ortalamasıdır; etin yağ oranı, tarif ve pişirme yağına göre değişebilir.';
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
  const nutritionRows = dish.nutrition.map(([name,value])=>`<div class="nutrition-cell"><b>${escapeHTML(value)}</b><span>${escapeHTML(name)}</span></div>`).join('');
  const ingredientRows = dish.ingredients.map(([name,amount])=>`<li><span>${escapeHTML(name)}</span><b>${escapeHTML(amount)}</b></li>`).join('');
  const ingredients = ingredientRows ? `<ul class="ingredient-list">${ingredientRows}</ul>` : '<div class="detail-note">Bu yemek için içerik listesi henüz doğrulanmadı.</div>';
  return `<div class="inline-meta"><span>Porsiyon: ${escapeHTML(dish.portion)}</span><b>${escapeHTML(dish.priceLabel || 'Fiyat henüz eklenmedi')}</b></div>
    <section class="detail-block"><h3>Kalori ve besin bilgisi <span>tahmini · pişmiş porsiyon</span></h3><div class="nutrition-grid">${nutritionRows}</div></section>
    <section class="detail-block"><h3>İçerik</h3>${ingredients}</section>
    <div class="detail-warning"><b>Tahmin notu</b> · ${escapeHTML(dish.note)} Lif dahil değerler yaklaşık porsiyon değeridir; laboratuvar analizi değildir.</div>
  `;
}
renderDishes();
searchInput.addEventListener('input',event=>{query=event.target.value;renderDishes();});
document.querySelector('#clear-filters').addEventListener('click',()=>{query='';searchInput.value='';renderDishes();});
