# Konyalı Hacı Usta QR Menü Taslağı

Mobil uyumlu, fiyatları eklenmiş statik QR menü önizlemesi. Sayfa, QR kodla açılacak müşteri görünümüne göre hazırlanmıştır.

## İçerik

- `app.js`: Menü ürünleri, pişmiş porsiyon gramajları, tahmini besin değerleri ve fiyatlar
- `styles.css`: mobil ve masaüstü görünüm
- `theme.css`: logodaki pudra pembe, siyah ve kırık beyaz tonlarına göre tema
- `index.html`: sayfa iskeleti
- `assets/logo.png`: tabela fotoğrafı referans alınarak yeniden çizilmiş, saydam zeminli logo

Pişmiş porsiyon gramajları kullanıcı tarafından verildi. Malzeme toplamı porsiyon etiketinden %20'den fazla sapan yemekler müşteriye gösterilmez, tarayıcı konsoluna `[gramaj]` uyarısı olarak yazılır. Tarifi eksik ürünlerde kesin bilinen malzemeler (hamur, kaşar, bulgur vb.) gramajsız listelenir; böylece alerjenler yine de görünür. Kiremitte Köfte'deki köfte besin değeri, Köfte tarifinden otomatik türetilir. Kalori, protein, yağ, karbonhidrat ve lif değerleri tarifteki gramajlar ile TürKomp (Ulusal Gıda Kompozisyon Veri Tabanı) ortalama değerlerinden hesaplanır; TürKomp'ta karşılığı olmayan kıyma, kelle eti, derisiz tavuk but ve küflü peynir için USDA FoodData Central kullanılır (kaynaklar `app.js` içinde satır satır yazılı). Kemikli etlerde (kanat, kuzu kol) yalnızca yenen kısım hesaba katılır; ilk el yazısı görsellerindeki besin tabloları hesaplamada kullanılmadı. Tarif, etin yağ oranı ve pişirme yağı gerçek değerleri değiştirebilir. Bunlar laboratuvar analizi değildir. İçerik miktarları mutfaktaki güncel reçeteyle doğrulanmalıdır.

Ekranda kategori filtresi ve sabit alt navbar yoktur. Header ortasında menü özeti bulunur. Ürün kartlarında solda görsel, sağda ad ve kısa içerik; alt sırada fiyat ile kalori yer alır. Ürün satırına dokununca besin ve içerik detayları aynı sayfada genişler. Yemek görselleri temsili olarak üretilmiş, logonun pudra/krem tonlarına uyarlanmıştır ve restoranın gerçek servis fotoğrafları değildir; gerçek ürün fotoğraflarıyla değiştirilebilir.

Fiyatlar 19 Kasım 2026 tarihli menü fotoğraflarından aktarıldı; X işareti bulunan ürünler eklenmedi. Fiyatı henüz eklenmeyen yemeklerde bu durum belirtiliyor. İçli Köfte için hem tek (90 TL) hem porsiyon (270 TL) fiyatı gösteriliyor.

Logo, kullanıcının son isteğiyle referans fotoğraftaki daire, renkler, yazıların konumu ve merkez monogram yapısı korunarak temiz bir amblem gibi yeniden çizildi.

## GitHub Pages'de yayınlama

Dosyalar `meyildiz1994/khurestaurant` deposunun kök dizininde tutulacak. Depo ayarlarında **Settings → Pages → Build and deployment → Deploy from a branch → main → /(root)** seçilip kaydedildiğinde menü şu adreste yayınlanır: `https://meyildiz1994.github.io/khurestaurant/`. Yayına çıktıktan sonra QR kod bu adrese yönlendirilebilir. Bu prototipte sipariş, ödeme veya yönetim paneli bulunmuyor.
