# Konyalı Hacı Usta QR Menü Taslağı

Mobil uyumlu, statik QR menü (fiyat gösterilmez). Sayfa, QR kodla açılacak müşteri görünümüne göre hazırlanmıştır.

## İçerik

- `app.js`: Menü ürünleri, tarif gramajları, besin değerleri ve alerjenler
- `styles.css`: tüm görünüm (logodaki somon, krem ve siyah tonları)
- `index.html`: sayfa iskeleti
- `assets/logo.png`: tabela fotoğrafı referans alınarak yeniden çizilmiş, saydam zeminli logo

Pişmiş porsiyon gramajları kullanıcı tarafından verildi. Malzeme toplamı porsiyon etiketinden %20'den fazla sapan yemekler müşteriye gösterilmez, tarayıcı konsoluna `[gramaj]` uyarısı olarak yazılır. Tarifi eksik ürünlerde kesin bilinen malzemeler (hamur, kaşar, bulgur vb.) gramajsız listelenir; böylece alerjenler yine de görünür. Kiremitte Köfte'deki köfte besin değeri, Köfte tarifinden otomatik türetilir. Kalori, protein, yağ, karbonhidrat ve lif değerleri tarifteki gramajlar ile TürKomp (Ulusal Gıda Kompozisyon Veri Tabanı) ortalama değerlerinden hesaplanır; Kıyma, TürKomp'taki yağsız kol eti ve kuyruk yağından %15 yağlı (ortalama, orta yağlı) olacak şekilde hesaplanır; oran `app.js` içindeki `MINCE_FAT_PERCENT` ile değiştirilebilir. TürKomp'ta karşılığı olmayan kelle eti, derisiz tavuk but ve küflü peynir için USDA FoodData Central kullanılır (kaynaklar `app.js` içinde satır satır yazılı). Kemikli etlerde (kanat, kuzu kol) yalnızca yenen kısım hesaba katılır; ilk el yazısı görsellerindeki besin tabloları hesaplamada kullanılmadı. Tarif, etin yağ oranı ve pişirme yağı gerçek değerleri değiştirebilir. Bunlar laboratuvar analizi değildir. İçerik miktarları mutfaktaki güncel reçeteyle doğrulanmalıdır.

Arayüz: logodaki renklerle somon tabela başlık; yapışkan arama ve kategori çipleri (ekrandaki kategori otomatik vurgulanır); kategori başlıkları altında yemek satırları (ad, kısa içerik, kalori, alerjen); satıra dokununca alttan açılan detay penceresi (kalori ve besin değerleri, alerjenler, gramajlı içindekiler). Bağlantı `#yemek-id` ile doğrudan bir yemeğin detayı açılabilir. Yazı tipi Poppins (SIL OFL) `assets/fonts` içinde siteyle birlikte gelir. Yemek görselleri temsili olarak üretilmiştir ve restoranın gerçek servis fotoğrafları değildir; gerçek ürün fotoğraflarıyla değiştirilebilir.

Menüde fiyat gösterilmiyor (restoran kararı, 24 Kasım 2026). Kaşarlı Pide menüde olmadığı için çıkarıldı; Peynirli Pide menüde Börek adıyla yer alıyor. İçli Köfte tarifi restoranın 24 Kasım notundan 1 adet için girildi. Ceviz, karabiber, irmik ve yumurta değerleri USDA'dan alındı.

Logo, kullanıcının son isteğiyle referans fotoğraftaki daire, renkler, yazıların konumu ve merkez monogram yapısı korunarak temiz bir amblem gibi yeniden çizildi.

## GitHub Pages'de yayınlama

Dosyalar `meyildiz1994/khurestaurant` deposunun kök dizininde tutulacak. Depo ayarlarında **Settings → Pages → Build and deployment → Deploy from a branch → main → /(root)** seçilip kaydedildiğinde menü şu adreste yayınlanır: `https://meyildiz1994.github.io/khurestaurant/`. Yayına çıktıktan sonra QR kod bu adrese yönlendirilebilir. Bu prototipte sipariş, ödeme veya yönetim paneli bulunmuyor.
