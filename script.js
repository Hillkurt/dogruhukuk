// ===== Header Scroll =====
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ===== Theme Toggle =====
const themeToggle = document.getElementById('themeToggle');
let currentTheme = localStorage.getItem('theme') || 'dark';

// Apply saved theme on load
document.documentElement.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);

    // Show notification
    const themeNames = { 'dark': 'Koyu Tema', 'light': 'Açık Tema' };
    showThemeNotification(themeNames[currentTheme] + ' ✓');
});

function showThemeNotification(message) {
    const existing = document.querySelector('.theme-notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = 'theme-notification';
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${currentTheme === 'dark' ? '#1e3a5f' : '#ffffff'};
        color: ${currentTheme === 'dark' ? '#c9a962' : '#1e3a5f'};
        padding: 1rem 1.5rem;
        border-radius: 4px;
        z-index: 9999;
        font-size: 0.9rem;
        font-weight: 600;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        animation: slideIn 0.3s ease;
        border: 1px solid ${currentTheme === 'dark' ? '#c9a962' : '#1e3a5f'};
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 1500);
}

// ===== Translations =====
const translations = {
    tr: {
        // Navigation
        'nav-home': 'ANASAYFA',
        'nav-services': 'HUKUK ALANLARIMIZ',
        'nav-about': 'HAKKIMIZDA',
        'nav-why': 'NEDEN BİZ',
        'nav-vision': 'VİZYONUMUZ',
        'nav-contact': 'İLETİŞİM',
        'header-btn': 'Randevu Al',

        // Hero
        'hero-badge': 'Türk Hukuku Uzmanı',
        'hero-title': 'Türk Hukukunda<br><span class="highlight">Güvenilir</span> Çözüm Ortağınız',
        'hero-desc': 'Avukat olarak müvekkillerime sadece Türk hukuku alanında danışmanlık ve temsil hizmeti vermekteyim. Uluslararası hukukun yanı sıra, <strong>Mannheim</strong> ve <strong>Ankara</strong>\'daki ofislerimizle, Türk hukukunda hukuki temsil ve danışmanlıkla ilgili tüm sorularınız için yetkin ve güvenilir destek sunuyorum.',
        'hero-cta-1': 'Ücretsiz Ön Görüşme',
        'hero-cta-2': 'Hemen Arayın',
        'hero-note': '<strong>Not:</strong> Alman hukuku kapsamında tavsiye veya temsil açıkça sağlanmamaktadır.',

        // Stats
        'stat-1': 'Başarılı Dava',
        'stat-2': 'Yıllık Deneyim',
        'stat-3': '% Müvekkil Memnuniyeti',
        'stat-4': 'Ülkede Ofis',

        // About
        'about-tag': 'Hakkımızda',
        'about-title': 'Türk Hukukunda<br><span class="highlight">Profesyonel Temsil</span>',
        'about-btn': 'İletişime Geçin',

        // Services
        'services-tag': 'Uzmanlık Alanlarımız',
        'services-title': 'HUKUK ALANLARIMIZ',
        'services-desc': 'Türk hukuku kapsamında aşağıdaki alanlarda profesyonel danışmanlık ve temsil hizmeti sunmaktayız.',

        // Why Us
        'why-tag': 'Avantajlarımız',
        'why-title': 'Neden DOĞRU Hukuk Bürosu?',

        // Contact
        'contact-tag': 'İletişim',
        'contact-title': 'Hukuki Danışmanlık İçin<br><span class="highlight">Bizimle İletişime Geçin</span>',
        'contact-desc': 'İlk görüşme ücretsizdir. Hukuki sorularınız için randevu talep edin. Çalışmalarımın kalitesini kendiniz görün ve bugün benimle iletişime geçin!',
        'form-title': 'Randevu Talep Formu',
        'form-name': 'Ad Soyad *',
        'form-email': 'E-posta *',
        'form-phone': 'Telefon',
        'form-subject': 'Konu *',
        'form-message': 'Mesajınız *',
        'form-submit': 'Randevu Talep Et',
        'form-note': '* Gönderdiğiniz bilgiler gizlilik kapsamında korunmaktadır.',

        // Logo
        'logo-subtitle': 'HUKUK BÜROSU',

        // Hero Features
        'hero-feature-1': 'Miras Hukuku',
        'hero-feature-2': 'Aile Hukuku',
        'hero-feature-3': 'Gayrimenkul Hukuku',
        'hero-feature-4': 'İş Hukuku',

        // Dropdown Menu
        'dropdown-1': 'Miras Hukuku',
        'dropdown-2': 'Veraset İlamı',
        'dropdown-3': 'Gayrimenkul Hukuku',
        'dropdown-4': 'İş Hukuku',
        'dropdown-5': 'Boşanma Davaları',
        'dropdown-6': 'Borçlar Hukuku',

        // Contact
        'contact-office-de': 'Almanya Ofisi',
        'contact-office-tr': 'Türkiye Ofisi',
        'contact-phone': 'Telefon',
        'contact-email': 'E-posta',
        'form-option-select': 'Seçiniz',
        'form-option-miras': 'Miras Hukuku',
        'form-option-veraset': 'Veraset İlamı',
        'form-option-gayrimenkul': 'Gayrimenkul Hukuku',
        'form-option-is': 'İş Hukuku',
        'form-option-bosanma': 'Boşanma Davaları',
        'form-option-borclar': 'Borçlar Hukuku',
        'form-option-diger': 'Diğer',
        'form-note': '* Gönderdiğiniz bilgiler gizlilik kapsamında korunmaktadır.',

        // Footer
        'footer-desc': 'Türk hukuku alanında profesyonel danışmanlık ve temsil hizmeti sunmaktayız. Mannheim ve Ankara ofislerimizle yanınızdayız.',
        'footer-corporate': 'Kurumsal',
        'footer-home': 'Ana Sayfa',
        'footer-about': 'Hakkımızda',
        'footer-why': 'Neden Biz',
        'footer-vision': 'Vizyonumuz',
        'footer-contact': 'İletişim',
        'footer-legal-areas': 'Hukuk Alanları',
        'footer-legal': 'Yasal',
        'footer-policy': 'Gizlilik Politikası',
        'footer-kvkk': 'KVKK Aydınlatma',
        'footer-imprint': 'Künye',
        'footer-data': 'Veri Koruma',
        'footer-copyright': '© 2024 Doğru Hukuk Bürosu. Tüm hakları saklıdır.',
        'footer-note': 'Alman hukuku kapsamında tavsiye veya temsil açıkça sağlanmamaktadır.',

        // Info Banner
        'info-text': 'Almanya\'da yaşıyorsanız, Türk vatandaşlığına sahipseniz veya Mavi Kart sahibiyseniz ve Türkiye\'de Türk hukuku kapsamında danışmanlık ve temsile ihtiyaç duyduğunuz hukuki bir meseleniz varsa, <strong>Türk konsolosluğundan alınmış bir vekaletname</strong> ile Türkiye\'ye bizzat gitmenize gerek kalmadan sizi Türkiye\'deki mahkemelerde temsil edebilirim.',

        // About - Extended
        'about-text-1': 'Müvekkillerimi temsil etmeye tamamen kararlıyım. İster Türk hukukuna göre boşanma, ister Türk mahkemelerindeki davalar, ister Türk hukukuna göre önemli sözleşmesel konular veya diğer hukuki zorluklar olsun, size <strong>etkili, sonuç odaklı ve pratik çözümler</strong> sunuyorum.',
        'about-text-2': 'Sadece bir "Türk avukatı" olarak hukuki açıdan değil, aynı zamanda yaşam durumunuzu gerçek anlamda anlayarak endişelerinize yanıt vereceğim.',
        'about-list-title': 'Çalışma Alanlarım:',
        'about-list-items': [
            'Türk hukukunda <strong>miras hukuku</strong>',
            'Türk hukukunda <strong>aile hukuku</strong>',
            'Türk hukukunda <strong>boşanma davaları</strong>',
            'Türk hukukunda <strong>gayrimenkul hukuku</strong>',
            'Türk hukukunda <strong>iş hukuku</strong>',
            'Türk hukukunda <strong>sözleşme hukuku</strong>'
        ],

        // Why Us - Cards
        'why-title-1': 'Aracı Yok',
        'why-desc-1': 'Üçüncü şahıs aracılığı olmadan doğrudan avukatınızla çalışırsınız. Tüm süreç şeffaf ve net.',
        'why-title-2': 'Doğrudan İletişim',
        'why-desc-2': 'Avukatınıza her zaman doğrudan ulaşabilirsiniz. Sorularınız anında yanıtlanır.',
        'why-title-3': 'Türk Hukuku Deneyimi',
        'why-desc-3': '15 yılı aşkın Türk hukuku deneyimi ve derin bilgi birikimi ile yanınızdayız.',
        'why-title-4': 'Almanya & Türkiye',
        'why-desc-4': 'Her iki ülkede de ofisler ve geniş müvekkil ağı. Nerede olursanız olun ulaşılabilir.',
        'why-title-5': 'Yüksek Memnuniyet',
        'why-desc-5': 'Google değerlendirmelerinde kanıtlanmış yüksek müvekkil memnuniyeti.',

        // Vision - Extended
        'vision-title': 'VİZYONUMUZ',
        'vision-text-1': 'Hukukun üstünlüğüne ilişkin güçlü bir anlayışla, öncelikli hedefimiz müvekkillerimizin haklarını ve çıkarlarını en üst düzeyde koruyan, güvenilir, çözüm odaklı ve zamanın taleplerine uyum sağlayan bir hukuk firması olmaktır.',
        'vision-text-2': 'Sadece güncel değil, aynı zamanda gelecekteki ihtiyaçları da öngören, etik değerlere bağlı, sürekli gelişen, dijital dönüşüme açık ve ulusal ve uluslararası alanda tanınan bir hukuk danışmanı olarak kendimizi farklılaştırmaya çalışıyoruz.',
        'vision-text-3': 'Vizyonumuz, sadece bir hizmet sağlayıcı değil, aynı zamanda özel ve kurumsal müvekkillerimiz için uzun vadeli bir çözüm ortağı olmaktır.',

        // Mission
        'mission-title': 'MİSYONUMUZ',
        'mission-text-1': 'Amacımız, evrensel hukuk ilkelerine bağlı kalarak müvekkillerimizin ihtiyaç ve beklentilerini en iyi ve etkili şekilde karşılamaktır.',
        'mission-text-2': 'Temel görevimiz, her bir davanın dikkatli bir şekilde ele alınması yoluyla adaletin uygulanmasına katkıda bulunmak ve hukuki işlemleri anlaşılır ve anlaşılır hale getirmektir.',
        'mission-text-3': 'Müvekkillerimize her zaman <strong>dürüst, şeffaf ve zamanında bilgi</strong> sağlarız ve her zaman mesleki etiğe uygun hareket ederiz. Sosyal sorumluluğumuzun farkındayız. Bu nedenle, yalnızca temsil ettiğimiz kişilerin savunuculuğunu yapmıyoruz, aynı zamanda adil ve sürdürülebilir bir hukuk sistemine de katkıda bulunuyoruz.',

        // Service Titles & CTA (TR)
        'miras-title': 'Miras Hukuku',
        'veraset-title': 'Veraset İlamı',
        'gayr-title': 'Gayrimenkul Hukuku',
        'is-title': 'İş Hukuku',
        'bosanma-title': 'Boşanma Davaları',
        'borclar-title': 'Borçlar Hukuku',
        'service-cta': 'Randevu Al',

        // Services - Miras (TR)
        'miras-subtitle': 'Miras Hukuku Nedir? Hangi Durumları Kapsar?',
        'miras-intro': 'Miras hukuku, bir kişinin vefatından sonra geride bıraktığı malvarlığının kanuni mirasçılara nasıl geçeceğini düzenleyen hukuk dalıdır. Aile içi paylaşım, vasiyet, mal rejimi, reddi miras gibi pek çok konuyu kapsar.',
        'miras-col1-title': '📌 Miras Hukuku Hangi Alanları Kapsar?',
        'miras-col1-list': [
            '<strong>Yasal Mirasçılık:</strong> Kimlerin hangi oranda mirasçı olduğunu belirler.',
            '<strong>Vasiyetname Hazırlama:</strong> Malvarlığının isteğe göre paylaştırılması.',
            '<strong>Reddi Miras:</strong> Borçlu mirasın reddedilmesi süreci.',
            '<strong>Tenkis Davaları:</strong> Saklı paylara zarar verildiğinde mirasın düzeltilmesi.',
            '<strong>İzale-i Şuyu:</strong> Miras kalan taşınmazların paylaşılması.'
        ],
        'miras-col2-title': '🧾 Miras Süreci Nasıl İşler?',
        'miras-col2-list': [
            'Vefat gerçekleşir ve nüfus müdürlüğüne bildirilir.',
            'Veraset ilamı alınır (noterden veya mahkemeden).',
            'Tapu, banka, araç, şirket gibi işlemler yapılır.',
            'Veraset ve intikal vergisi ödenir.',
            'Gerekirse hukuki dava süreçleri başlatılır.'
        ],
        'miras-info-title': '🧠 Kimler Mirasçıdır?',
        'miras-info-list': [
            '✓ Eş, çocuklar, torunlar',
            '✓ Anne-baba, kardeşler',
            '✓ Daha uzak akrabalar (önceki gruplar yoksa)',
            '✓ Evlatlıklar da yasal mirasçıdır'
        ],
        'miras-warning-title': '⚠️ Önemli Uyarılar',
        'miras-warning-list': [
            'Her miras, sadece mal değil <strong>borç da içerebilir</strong>. Gerekirse reddi miras hakkınızı kullanabilirsiniz.',
            'Uluslararası durumlarda (örneğin Almanya\'da ölen bir kişi) <strong>farklı hukuk sistemleri</strong> geçerli olabilir.',
            'Haklarınızı zamanında kullanmanız için <strong>profesyonel destek</strong> önemlidir.'
        ],

        // Services - Veraset (TR)
        'veraset-subtitle': 'Veraset İlamı Nedir? Nasıl Alınır?',
        'veraset-intro': 'Veraset ilamı, bir kişinin vefatından sonra yasal mirasçılarının kim olduğunu resmi olarak gösteren belgedir. Bu belge sayesinde mirasçılar; bankalardaki işlemleri, tapu devirlerini, araç satışlarını ve vergi bildirimlerini yapabilir.',
        'veraset-col1-title': '📌 Kimler Alabilir?',
        'veraset-col1-desc': 'Veraset ilamı, yasal mirasçılar tarafından alınabilir:',
        'veraset-col1-list': [
            'Eş',
            'Çocuklar',
            'Anne-baba',
            'Kardeşler ve gerekirse daha uzak akrabalar'
        ],
        'veraset-col2-title': '📌 Nereden Alınır?',
        'veraset-col2-list': [
            '<strong>Noterden:</strong> Tüm mirasçılar Türk vatandaşı ise ve soybağı net ise',
            '<strong>Sulh Hukuk Mahkemesi\'nden:</strong> Daha karmaşık durumlar veya yabancı uyruklu mirasçılar varsa'
        ],
        'veraset-info-title': '📋 Gerekli Belgeler',
        'veraset-info-list': [
            '✓ Vefat eden kişinin ölüm belgesi veya nüfus kayıt örneği',
            '✓ Mirasçıların kimlik fotokopileri',
            '✓ Noter başvurularında nüfus kayıt örneği (vukuatlı)'
        ],
        'veraset-warning-title': '⚠️ Dikkat Edilmesi Gerekenler',
        'veraset-warning-list': [
            'Veraset ilamı alınmadan <strong>miras işlemleri başlatılamaz</strong>.',
            'Her mirasçı <strong>ayrı ayrı başvuru</strong> yapabilir.',
            'Yabancı ülkelerde yaşayanlar için <strong>noter onaylı tercüme ve apostil</strong> gerekebilir.'
        ],

        // Services - Gayrimenkul (TR)
        'gayr-subtitle': 'Gayrimenkul Hukuku Nedir? Hangi Durumlarda Gerekli Olur?',
        'gayr-intro': 'Gayrimenkul hukuku, arsa, konut, işyeri gibi taşınmazlarla ilgili tüm alım-satım, kira, tapu ve mülkiyet süreçlerini düzenleyen hukuk dalıdır.',
        'gayr-col1-title': '📌 Gayrimenkul Hukuku Hangi Alanları Kapsar?',
        'gayr-col1-list': [
            'Tapu iptal ve tescil davaları',
            'Kat mülkiyeti ve ortak alan ihtilafları',
            'Kira sözleşmeleri ve tahliye davaları',
            'Şufa (önalım), izale-i şuyu davaları',
            'İnşaat sözleşmeleri (kat karşılığı – anahtar teslim)',
            'Kamulaştırma ve değer tespiti uyuşmazlıkları'
        ],
        'gayr-col2-title': '🧾 Neden Hukuki Destek Almalısınız?',
        'gayr-col2-desc': 'Taşınmaz işlemlerinde yapılan küçük bir hata, büyük maddi kayıplara ve uzun dava süreçlerine yol açabilir.',
        'gayr-col2-list': [
            'Tapu işlemleri <strong>güvenli şekilde</strong> yürütülür',
            'Kira alacakları <strong>hızlı tahsil</strong> edilir',
            'Ortak mülkiyetler <strong>hukuka uygun</strong> şekilde bölüştürülür'
        ],

        // Services - Is (TR)
        'is-subtitle': 'İş Hukuku Nedir? Hangi Hakları Kapsar?',
        'is-intro': 'İş hukuku, çalışan ile işveren arasındaki iş ilişkisini düzenleyen, hem işçilerin haklarını hem işverenin yükümlülüklerini güvence altına alan hukuk dalıdır. İş sözleşmesinden feshe, tazminattan iş kazasına kadar geniş bir alanı kapsar.',
        'is-col1-title': '📌 İş Hukuku Hangi Konuları Kapsar?',
        'is-col1-list': [
            'Haksız fesih ve işe iade davaları',
            'Kıdem ve ihbar tazminatı talepleri',
            'Fazla mesai, hafta tatili, yıllık izin alacakları',
            'SGK prim uyuşmazlıkları ve hizmet tespiti',
            'İş kazası ve meslek hastalığı davaları',
            'Disiplin işlemleri ve personel savunmaları',
            'Toplu iş sözleşmeleri ve sendikal süreçler'
        ],
        'is-col2-title': '👷 Kimler İçin Gereklidir?',
        'is-col2-group1-title': 'Çalışanlar için:',
        'is-col2-group1-desc': 'Haksız işten çıkarılma, ödenmeyen alacaklar, mobbing, hak ihlalleri.',
        'is-col2-group2-title': 'İşverenler için:',
        'is-col2-group2-desc': 'Yasalara uygun sözleşmeler hazırlama, ihtar ve fesih süreçleri, risk yönetimi.',
        'is-warning-title': '⚠️ Önemli Süreler',
        'is-warning-text': 'İş hukuku süreçleri hak düşürücü süreler içerir. Zamanında ve doğru adım atılmazsa hak kaybı yaşanabilir:',
        'is-warning-list': [
            'İşe iade için <strong>30 gün</strong>',
            'Alacak davaları için <strong>5 yıl</strong>',
            'İş kazaları için <strong>10 yıl</strong>'
        ],

        // Services - Bosanma (TR)
        'bosanma-subtitle': 'Boşanma Süreci: Haklarınızı Biliyor Musunuz?',
        'bosanma-intro': 'Boşanma, sadece iki insanın evliliğini sonlandırması değil; mal paylaşımı, çocukların velayeti, nafaka ve duygusal yüklerin de hukuki düzlemde çözümlenmesi sürecidir. Bu süreçte doğru adımlar atmak, geleceğinizi güvence altına almak adına büyük önem taşır.',
        'bosanma-col1-title': '📌 Anlaşmalı Boşanma',
        'bosanma-col1-desc': 'Tarafların her konuda uzlaşması durumunda, kısa sürede ve tek celsede sonuçlanabilir.',
        'bosanma-col1-sub': 'Şartlar:',
        'bosanma-col1-list': [
            '✔ Evliliğin en az 1 yıl sürmüş olması',
            '✔ Protokol hazırlanması (mal paylaşımı, nafaka, velayet gibi)',
            '✔ Tarafların birlikte mahkemeye başvurması'
        ],
        'bosanma-col2-title': '📌 Çekişmeli Boşanma',
        'bosanma-col2-desc': 'Taraflar arasında anlaşmazlık varsa; sebeplerin ispatlanması, tanıklar, deliller ve uzun yargılama süreci söz konusudur.',
        'bosanma-col2-sub': 'Nedenler:',
        'bosanma-col2-list': [
            '• Aldatma',
            '• Şiddet',
            '• Terk',
            '• Geçimsizlik',
            '• Suistimal',
            '• Akıl hastalığı'
        ],
        'bosanma-info-title': '👶 Velayet ve Nafaka',
        'bosanma-info-text': 'Boşanma sürecinde en hassas konulardan biri çocukların velayeti ve nafaka konusudur. Mahkeme, <strong>çocuğun üstün yararını</strong> gözeterek karar verir. Ortak velayet, kişisel ilişki kurulması ve iştirak nafakası detaylı değerlendirilir.',
        'bosanma-warning-title': '⚠️ Unutmayın!',
        'bosanma-warning-list': [
            'Mal paylaşımı, boşanma davasından <strong>ayrı bir dava</strong> olarak açılabilir.',
            'Boşanma sonrası <strong>soyadı kullanımı, nafaka iptali/artırımı, velayet değişikliği</strong> gibi haklarınız da vardır.',
            'Avukat desteği, hem süreci hızlandırır hem de <strong>hak kayıplarınızı önler</strong>.'
        ],

        // Services - Borclar (TR)
        'borclar-subtitle': 'Borçlar Hukuku Nedir? Sizi Nasıl Korur?',
        'borclar-intro': 'Borçlar hukuku, kişiler veya şirketler arasında doğan borç-alacak ilişkilerini, sözleşmeleri, sorumlulukları ve tazminat yükümlülüklerini düzenleyen temel hukuk dalıdır. Gündelik yaşamda yapılan her sözleşme, borçlar hukukunun kapsamına girer.',
        'borclar-col1-title': '📌 Borçlar Hukuku Hangi Konuları Kapsar?',
        'borclar-col1-list': [
            'Sözleşme hazırlama ve incelenmesi (satış, kira, hizmet, vekâlet, taşeronluk vb.)',
            'Borçların ifası ve temerrüt (gecikme)',
            'Alacak tahsili ve ihtar süreçleri',
            'Haksız fiil (zarar verme) ve maddi/manevi tazminat davaları',
            'Sebepsiz zenginleşme talepleri',
            'Sorumluluk davaları (kusur, garanti, ayıplı mal)'
        ],
        'borclar-col2-title': '👥 Kimler İçin Gerekli?',
        'borclar-col2-group1-title': 'Bireyler:',
        'borclar-col2-group1-desc': 'Alacak-verecek ilişkileri, tazminat davaları, hizmet veya kira sözleşmeleriyle ilgili ihtilaflar.',
        'borclar-col2-group2-title': 'Şirketler:',
        'borclar-col2-group2-desc': 'Ticari sözleşmelerin hazırlanması, tahsilat süreçlerinin takibi, yüklenici-alt yüklenici ilişkileri, teminat ve sorumluluk düzenlemeleri.',
        'borclar-warning-title': '⚠️ Neden Önemlidir?',
        'borclar-warning-text': 'Yanlış veya eksik hazırlanmış bir sözleşme, ileride uzun ve maddi kayıplı dava süreçlerine yol açabilir. <strong>Güçlü bir hukuki altyapı</strong>, ticari ve bireysel ilişkilerde güven sağlar.'
    },
    de: {
        // Navigation
        'nav-home': 'STARTSEITE',
        'nav-services': 'RECHTSGEBIETE',
        'nav-about': 'ÜBER UNS',
        'nav-why': 'WARUM WIR',
        'nav-vision': 'UNSERE VISION',
        'nav-contact': 'KONTAKT',
        'header-btn': 'Termin vereinbaren',

        // Hero
        'hero-badge': 'Experte für türkisches Recht',
        'hero-title': 'Ihr zuverlässiger<br><span class="highlight">Partner</span> im türkischen Recht',
        'hero-desc': 'Als Rechtsanwalt biete ich meinen Mandanten ausschließlich Beratung und Vertretung im türkischen Recht an. Mit unseren Büros in <strong>Mannheim</strong> und <strong>Ankara</strong> biete ich kompetente und zuverlässige Unterstützung für alle Ihre Fragen zur Rechtsvertretung im türkischen Recht.',
        'hero-cta-1': 'Kostenlose Erstberatung',
        'hero-cta-2': 'Jetzt anrufen',
        'hero-note': '<strong>Hinweis:</strong> Beratung oder Vertretung im deutschen Recht wird ausdrücklich nicht angeboten.',

        // Stats
        'stat-1': 'Erfolgreiche Fälle',
        'stat-2': 'Jahre Erfahrung',
        'stat-3': '% Mandantenzufriedenheit',
        'stat-4': 'Büros in Ländern',

        // About
        'about-tag': 'Über uns',
        'about-title': 'Professionelle Vertretung<br><span class="highlight">im türkischen Recht</span>',
        'about-btn': 'Kontaktieren Sie uns',

        // Services
        'services-tag': 'Unsere Fachgebiete',
        'services-title': 'RECHTSGEBIETE',
        'services-desc': 'Wir bieten professionelle Beratung und Vertretung in folgenden Bereichen des türkischen Rechts.',

        // Why Us
        'why-tag': 'Unsere Vorteile',
        'why-title': 'Warum DOĞRU Rechtsanwaltskanzlei?',

        // Contact
        'contact-tag': 'Kontakt',
        'contact-title': 'Für Rechtsberatung<br><span class="highlight">Kontaktieren Sie uns</span>',
        'contact-desc': 'Das Erstgespräch ist kostenlos. Vereinbaren Sie einen Termin für Ihre rechtlichen Fragen. Überzeugen Sie sich selbst von der Qualität meiner Arbeit!',
        'form-title': 'Terminvereinbarung',
        'form-name': 'Name *',
        'form-email': 'E-Mail *',
        'form-phone': 'Telefon',
        'form-subject': 'Betreff *',
        'form-message': 'Ihre Nachricht *',
        'form-submit': 'Termin anfragen',
        'form-note': '* Ihre Daten werden vertraulich behandelt.',

        // Logo
        'logo-subtitle': 'RECHTSANWALTSKANZLEI',

        // Hero Features
        'hero-feature-1': 'Erbrecht',
        'hero-feature-2': 'Familienrecht',
        'hero-feature-3': 'Immobilienrecht',
        'hero-feature-4': 'Arbeitsrecht',

        // Dropdown Menu
        'dropdown-1': 'Erbrecht',
        'dropdown-2': 'Erbschein',
        'dropdown-3': 'Immobilienrecht',
        'dropdown-4': 'Arbeitsrecht',
        'dropdown-5': 'Scheidungsverfahren',
        'dropdown-6': 'Schuldrecht',

        // Contact Form (DE)
        'contact-office-de': 'Kanzlei Deutschland',
        'contact-office-tr': 'Kanzlei Türkei',
        'contact-phone': 'Telefon',
        'contact-email': 'E-Mail',
        'form-title': 'Kontaktieren Sie uns',
        'form-name': 'Vorname Nachname *',
        'form-email': 'E-Mail *',
        'form-phone': 'Telefonnummer',
        'form-subject': 'Betreff *',
        'form-message': 'Ihre Nachricht *',
        'form-submit': 'Senden',
        'form-option-select': 'Bitte wählen',
        'form-option-miras': 'Erbrecht',
        'form-option-veraset': 'Erbschein',
        'form-option-gayrimenkul': 'Immobilienrecht',
        'form-option-is': 'Arbeitsrecht',
        'form-option-bosanma': 'Scheidungsverfahren',
        'form-option-borclar': 'Schuldrecht',
        'form-option-diger': 'Sonstiges',
        'form-note': '* Die von Ihnen gesendeten Informationen werden vertraulich behandelt.',

        // Footer (DE)
        'footer-desc': 'Wir bieten professionelle Beratung und Vertretung im türkischen Recht. Wir sind mit unseren Büros in Mannheim und Ankara für Sie da.',
        'footer-corporate': 'Unternehmen',
        'footer-home': 'Startseite',
        'footer-about': 'Über Uns',
        'footer-why': 'Warum Wir',
        'footer-vision': 'Unsere Vision',
        'footer-contact': 'Kontakt',
        'footer-legal-areas': 'Rechtsgebiete',
        'footer-legal': 'Rechtliches',
        'footer-policy': 'Datenschutz',
        'footer-kvkk': 'KVKK Info',
        'footer-imprint': 'Impressum',
        'footer-data': 'Datenschutz',
        'footer-copyright': '© 2024 DOĞRU Rechtsanwaltskanzlei. Alle Rechte vorbehalten.',
        'footer-note': 'Beratung oder Vertretung im deutschen Recht wird ausdrücklich nicht angeboten.',

        // Info Banner
        'info-text': 'Wenn Sie in Deutschland leben, die türkische Staatsbürgerschaft besitzen oder Inhaber einer Blauen Karte sind und rechtliche Angelegenheiten in der Türkei haben, die eine Beratung und Vertretung im türkischen Recht erfordern, kann ich Sie mit einer <strong>Vollmacht des türkischen Konsulats</strong> vor türkischen Gerichten vertreten, ohne dass Sie persönlich in die Türkei reisen müssen.',

        // About - Extended
        'about-text-1': 'Ich setze mich voll und ganz für die Vertretung meiner Mandanten ein. Ob Scheidung nach türkischem Recht, Gerichtsverfahren in der Türkei, wichtige vertragsrechtliche Fragen nach türkischem Recht oder andere rechtliche Herausforderungen – ich biete Ihnen <strong>effektive, ergebnisorientierte und praktische Lösungen</strong>.',
        'about-text-2': 'Ich werde nicht nur als "türkischer Anwalt" rechtlich auf Ihre Anliegen eingehen, sondern auch Ihre Lebenssituation wirklich verstehen und Ihre Sorgen ernst nehmen.',
        'about-list-title': 'Meine Tätigkeitsbereiche:',
        'about-list-items': [
            '<strong>Erbrecht</strong> im türkischen Recht',
            '<strong>Familienrecht</strong> im türkischen Recht',
            '<strong>Scheidungsverfahren</strong> im türkischen Recht',
            '<strong>Immobilienrecht</strong> im türkischen Recht',
            '<strong>Arbeitsrecht</strong> im türkischen Recht',
            '<strong>Vertragsrecht</strong> im türkischen Recht'
        ],

        // Why Us - Cards
        'why-title-1': 'Keine Vermittler',
        'why-desc-1': 'Sie arbeiten direkt mit Ihrem Anwalt, ohne Dritte. Der gesamte Prozess ist transparent und klar.',
        'why-title-2': 'Direkter Kontakt',
        'why-desc-2': 'Sie können Ihren Anwalt jederzeit direkt erreichen. Ihre Fragen werden sofort beantwortet.',
        'why-title-3': 'Erfahrung im türkischen Recht',
        'why-desc-3': 'Wir stehen Ihnen mit über 15 Jahren Erfahrung im türkischen Recht und tiefem Fachwissen zur Seite.',
        'why-title-4': 'Deutschland & Türkei',
        'why-desc-4': 'Büros in beiden Ländern und ein großes Mandantennetzwerk. Wir sind überall erreichbar.',
        'why-title-5': 'Hohe Zufriedenheit',
        'why-desc-5': 'Bewährt hohe Mandantenzufriedenheit in Google-Bewertungen.',

        // Vision - Extended
        'vision-title': 'UNSERE VISION',
        'vision-text-1': 'Mit einem tiefen Verständnis für Rechtsstaatlichkeit ist es unser vorrangiges Ziel, eine vertrauenswürdige und lösungsorientierte Kanzlei zu sein, die die Rechte und Interessen unserer Mandanten auf höchstem Niveau wahrt.',
        'vision-text-2': 'Wir streben danach, uns als Rechtsberater zu etablieren, der nicht nur aktuelle, sondern auch zukünftige Bedürfnisse antizipiert, ethischen Werten verpflichtet bleibt und sich stetig weiterentwickelt.',
        'vision-text-3': 'Unsere Vision ist es, nicht nur ein Dienstleister zu sein, sondern ein langfristiger Lösungspartner für unsere privaten und gewerblichen Mandanten.',

        // Mission
        'mission-title': 'UNSERE MISSION',
        'mission-text-1': 'Unser Ziel ist es, die Bedürfnisse und Erwartungen unserer Mandanten unter Einhaltung universeller Rechtsgrundsätze bestmöglich zu erfüllen.',
        'mission-text-2': 'Unsere Hauptaufgabe ist es, durch die sorgfältige Betreuung jedes Mandats zur Gerechtigkeit beizutragen und rechtliche Verfahren transparent und verständlich zu gestalten.',
        'mission-text-3': 'Wir informieren unsere Mandanten stets <strong>ehrlich, transparent und zeitnah</strong> und handeln stets nach den Grundsätzen der Berufsethik.',

        // Service Titles & CTA (DE)
        'miras-title': 'Erbrecht',
        'veraset-title': 'Erbschein',
        'gayr-title': 'Immobilienrecht',
        'is-title': 'Arbeitsrecht',
        'bosanma-title': 'Scheidungsverfahren',
        'borclar-title': 'Schuldrecht',
        'service-cta': 'Termin vereinbaren',

        // Services - Miras (DE)
        'miras-subtitle': 'Was ist das Erbrecht? Was deckt es ab?',
        'miras-intro': 'Das Erbrecht regelt den Übergang des Vermögens einer Person nach deren Tod auf die gesetzlichen Erben. Es umfasst viele Themen wie die Aufteilung innerhalb der Familie, Testamente, Güterstände und Erbausschlagung.',
        'miras-col1-title': '📌 Welche Bereiche deckt das Erbrecht ab?',
        'miras-col1-list': [
            '<strong>Gesetzliche Erbfolge:</strong> Bestimmt, wer in welchem Umfang Erbe wird.',
            '<strong>Testamentserstellung:</strong> Verteilung des Vermögens nach Wunsch.',
            '<strong>Erbausschlagung:</strong> Prozess der Ablehnung einer überschuldeten Erbschaft.',
            '<strong>Pflichtteilsansprüche:</strong> Korrektur des Erbes bei Verletzung von Pflichtteilen.',
            '<strong>Erbauseinandersetzung:</strong> Aufteilung von geerbten Immobilien.'
        ],
        'miras-col2-title': '🧾 Wie läuft der Erbprozess ab?',
        'miras-col2-list': [
            'Der Tod tritt ein und wird dem Standesamt gemeldet.',
            'Ein Erbschein wird eingeholt (beim Notar oder Gericht).',
            'Transaktionen wie Grundbuch, Bank, Fahrzeug, Firma werden durchgeführt.',
            'Erbschaftssteuer wird gezahlt.',
            'Bei Bedarf werden rechtliche Schritte eingeleitet.'
        ],
        'miras-info-title': '🧠 Wer sind die Erben?',
        'miras-info-list': [
            '✓ Ehepartner, Kinder, Enkelkinder',
            '✓ Eltern, Geschwister',
            '✓ Entferntere Verwandte (wenn keine der vorherigen Gruppen vorhanden)',
            '✓ Auch Adoptivkinder sind gesetzliche Erben'
        ],
        'miras-warning-title': '⚠️ Wichtige Warnungen',
        'miras-warning-list': [
            'Jedes Erbe kann nicht nur Vermögen, sondern auch <strong>Schulden beinhalten</strong>. Bei Bedarf können Sie Ihr Recht zur Ausschlagung nutzen.',
            'In internationalen Fällen (z. B. eine in Deutschland verstorbene Person) können <strong>unterschiedliche Rechtssysteme</strong> gelten.',
            '<strong>Professionelle Unterstützung</strong> ist wichtig, um Ihre Rechte fristgerecht wahrzunehmen.'
        ],

        // Services - Veraset (DE)
        'veraset-subtitle': 'Was ist ein Erbschein? Wie bekommt man ihn?',
        'veraset-intro': 'Der Erbschein ist ein offizielles Dokument, das zeigt, wer die gesetzlichen Erben einer verstorbenen Person sind. Mit diesem Dokument können Erben Bankgeschäfte, Grundbuchübertragungen, Fahrzeugverkäufe und Steuermeldungen durchführen.',
        'veraset-col1-title': '📌 Wer kann ihn erhalten?',
        'veraset-col1-desc': 'Der Erbschein kann von gesetzlichen Erben beantragt werden:',
        'veraset-col1-list': [
            'Ehepartner',
            'Kinder',
            'Eltern',
            'Geschwister und gegebenenfalls entferntere Verwandte'
        ],
        'veraset-col2-title': '📌 Wo bekommt man ihn?',
        'veraset-col2-list': [
            '<strong>Beim Notar:</strong> Wenn alle Erben türkische Staatsbürger sind und die Abstammung klar ist.',
            '<strong>Beim Zivilgericht:</strong> Bei komplexeren Situationen oder ausländischen Erben.'
        ],
        'veraset-info-title': '📋 Notwendige Dokumente',
        'veraset-info-list': [
            '✓ Sterbeurkunde oder Personenstandsregisterauszug des Verstorbenen',
            '✓ Ausweiskopien der Erben',
            '✓ Personenstandsregisterauszug für Notaranträge'
        ],
        'veraset-warning-title': '⚠️ Worauf muss geachtet werden?',
        'veraset-warning-list': [
            'Ohne Erbschein können <strong>keine Erbtransaktionen</strong> eingeleitet werden.',
            'Jeder Erbe kann <strong>individuell einen Antrag</strong> stellen.',
            'Für im Ausland lebende Personen können <strong>notariell beglaubigte Übersetzungen und Apostillen</strong> erforderlich sein.'
        ],

        // Services - Gayrimenkul (DE)
        'gayr-subtitle': 'Was ist Immobilienrecht? Wann ist es notwendig?',
        'gayr-intro': 'Das Immobilienrecht regelt alle Kauf-, Verkaufs-, Miet-, Grundbuch- und Eigentumsprozesse in Bezug auf Immobilien wie Grundstücke, Wohnungen und Arbeitsstätten.',
        'gayr-col1-title': '📌 Was deckt das Immobilienrecht ab?',
        'gayr-col1-list': [
            'Klagen auf Löschung und Eintragung im Grundbuch',
            'Wohnungseigentums- und Gemeinschaftsflächenstreitigkeiten',
            'Mietverträge und Räumungsklagen',
            'Vorkaufsrecht und Teilungsklagen',
            'Bauverträge (gegen Wohnungstausch – schlüsselfertig)',
            'Enteignungs- und Wertermittlungsstreitigkeiten'
        ],
        'gayr-col2-title': '🧾 Warum sollten Sie rechtliche Unterstützung in Anspruch nehmen?',
        'gayr-col2-desc': 'Ein kleiner Fehler bei Immobilientransaktionen kann zu großen finanziellen Verlusten und langen Gerichtsprozessen führen.',
        'gayr-col2-list': [
            'Grundbuchtransaktionen werden <strong>sicher</strong> durchgeführt',
            'Mietforderungen werden <strong>schnell eingezogen</strong>',
            'Gemeinschaftseigentum wird <strong>gesetzeskonform</strong> aufgeteilt'
        ],

        // Services - Is (DE)
        'is-subtitle': 'Was ist Arbeitsrecht? Welche Rechte umfasst es?',
        'is-intro': 'Das Arbeitsrecht regelt das Arbeitsverhältnis zwischen Arbeitnehmer und Arbeitgeber und sichert sowohl die Rechte der Arbeitnehmer als auch die Pflichten der Arbeitgeber. Es deckt ein breites Spektrum ab, vom Arbeitsvertrag bis zur Kündigung, von der Entschädigung bis zum Arbeitsunfall.',
        'is-col1-title': '📌 Was deckt das Arbeitsrecht ab?',
        'is-col1-list': [
            'Ungerechtfertigte Kündigung und Wiedereinstellungsklagen',
            'Abfindungs- und Kündigungsentschädigungsforderungen',
            'Überstunden, Wochenruhe, Jahresurlaubsansprüche',
            'Streitigkeiten über Sozialversicherungsprämien und Dienstfeststellung',
            'Arbeitsunfall- und Berufskrankheitsklagen',
            'Disziplinarverfahren und Personalverteidigung',
            'Tarifverträge und gewerkschaftliche Prozesse'
        ],
        'is-col2-title': '👷 Für wen ist es notwendig?',
        'is-col2-group1-title': 'Für Arbeitnehmer:',
        'is-col2-group1-desc': 'Ungerechtfertigte Entlassung, unbezahlte Forderungen, Mobbing, Rechtsverletzungen.',
        'is-col2-group2-title': 'Für Arbeitgeber:',
        'is-col2-group2-desc': 'Erstellung gesetzeskonformer Verträge, Abmahnungs- und Kündigungsprozesse, Risikomanagement.',
        'is-warning-title': '⚠️ Wichtige Fristen',
        'is-warning-text': 'Arbeitsrechtliche Prozesse beinhalten Ausschlussfristen. Wenn nicht rechtzeitig und korrekt gehandelt wird, können Rechte verloren gehen:',
        'is-warning-list': [
            'Für Wiedereinstellung <strong>30 Tage</strong>',
            'Für Forderungsklagen <strong>5 Jahre</strong>',
            'Für Arbeitsunfälle <strong>10 Jahre</strong>'
        ],

        // Services - Bosanma (DE)
        'bosanma-subtitle': 'Scheidungsprozess: Kennen Sie Ihre Rechte?',
        'bosanma-intro': 'Eine Scheidung ist nicht nur die Beendigung der Ehe zweier Menschen; es ist auch ein Prozess der rechtlichen Lösung von Vermögensaufteilung, Sorgerecht für Kinder, Unterhalt und emotionalen Belastungen. In diesem Prozess die richtigen Schritte zu unternehmen, ist von großer Bedeutung, um Ihre Zukunft zu sichern.',
        'bosanma-col1-title': '📌 Einvernehmliche Scheidung',
        'bosanma-col1-desc': 'Wenn sich die Parteien in allen Punkten einig sind, kann dies in kurzer Zeit und in einer einzigen Sitzung abgeschlossen werden.',
        'bosanma-col1-sub': 'Bedingungen:',
        'bosanma-col1-list': [
            '✔ Die Ehe muss mindestens 1 Jahr gedauert haben',
            '✔ Erstellung eines Protokolls (Vermögensaufteilung, Unterhalt, Sorgerecht usw.)',
            '✔ Gemeinsamer Antrag der Parteien bei Gericht'
        ],
        'bosanma-col2-title': '📌 Streitige Scheidung',
        'bosanma-col2-desc': 'Wenn es Unstimmigkeiten zwischen den Parteien gibt; Beweis der Gründe, Zeugen, Beweise und ein langer Gerichtsprozess sind involviert.',
        'bosanma-col2-sub': 'Gründe:',
        'bosanma-col2-list': [
            '• Ehebruch',
            '• Gewalt',
            '• Verlassen',
            '• Unvereinbarkeit',
            '• Missbrauch',
            '• Geisteskrankheit'
        ],
        'bosanma-info-title': '👶 Sorgerecht und Unterhalt',
        'bosanma-info-text': 'Eines der sensibelsten Themen im Scheidungsprozess ist das Sorgerecht für Kinder und Unterhalt. Das Gericht entscheidet unter Berücksichtigung des <strong>höchsten Wohls des Kindes</strong>. Gemeinsames Sorgerecht, persönlicher Umgang und Kindesunterhalt werden detailliert bewertet.',
        'bosanma-warning-title': '⚠️ Nicht vergessen!',
        'bosanma-warning-list': [
            'Die Vermögensaufteilung kann als <strong>separater Fall</strong> vom Scheidungsfall eröffnet werden.',
            'Sie haben auch Rechte wie <strong>Namensnutzung, Unterhaltsstreichung/-erhöhung, Sorgerechtsänderung</strong> nach der Scheidung.',
            'Anwaltliche Unterstützung beschleunigt den Prozess und <strong>verhindert Rechtsverluste</strong>.'
        ],

        // Services - Borclar (DE)
        'borclar-subtitle': 'Was ist Schuldrecht? Wie schützt es Sie?',
        'borclar-intro': 'Das Schuldrecht ist das grundlegende Rechtsgebiet, das Schuld-Forderungs-Beziehungen, Verträge, Verantwortlichkeiten und Schadenersatzpflichten zwischen Personen oder Unternehmen regelt. Jeder im täglichen Leben abgeschlossene Vertrag fällt in den Anwendungsbereich des Schuldrechts.',
        'borclar-col1-title': '📌 Was deckt das Schuldrecht ab?',
        'borclar-col1-list': [
            'Vertragserstellung und -prüfung (Verkauf, Miete, Dienstleistung, Vollmacht, Subunternehmer usw.)',
            'Leistung von Schulden und Verzug',
            'Forderungseinzug und Mahnverfahren',
            'Unerlaubte Handlung (Schadenszufügung) und materielle/immaterielle Schadenersatzklagen',
            'Ungerechtfertigte Bereicherungsansprüche',
            'Haftungsklagen (Mangel, Garantie, fehlerhafte Ware)'
        ],
        'borclar-col2-title': '👥 Für wen ist es notwendig?',
        'borclar-col2-group1-title': 'Privatpersonen:',
        'borclar-col2-group1-desc': 'Streitigkeiten im Zusammenhang mit Forderungen-Schulden-Beziehungen, Schadenersatzklagen, Dienstleistungs- oder Mietverträgen.',
        'borclar-col2-group2-title': 'Unternehmen:',
        'borclar-col2-group2-desc': 'Vorbereitung von Handelsverträgen, Verfolgung von Inkasso-, Auftragnehmer-Subunternehmer-Beziehungen, Garantie- und Haftungsregelungen.',
        'borclar-warning-title': '⚠️ Warum ist es wichtig?',
        'borclar-warning-text': 'Ein falsch oder unvollständig vorbereiteter Vertrag kann in Zukunft zu langen und kostspieligen Gerichtsprozessen führen. Eine <strong>starke rechtliche Infrastruktur</strong> schafft Vertrauen in geschäftlichen und individuellen Beziehungen.'
    },
    en: {
        // Navigation
        'nav-home': 'HOME',
        'nav-services': 'LEGAL SERVICES',
        'nav-about': 'ABOUT US',
        'nav-why': 'WHY US',
        'nav-vision': 'OUR VISION',
        'nav-contact': 'CONTACT',
        'header-btn': 'Book Appointment',

        // Hero
        'hero-badge': 'Turkish Law Expert',
        'hero-title': 'Your Trusted<br><span class="highlight">Partner</span> in Turkish Law',
        'hero-desc': 'As a lawyer, I exclusively provide consultation and representation in Turkish law. With our offices in <strong>Mannheim</strong> and <strong>Ankara</strong>, I offer competent and reliable support for all your questions regarding legal representation in Turkish law.',
        'hero-cta-1': 'Free Consultation',
        'hero-cta-2': 'Call Now',
        'hero-note': '<strong>Note:</strong> Advice or representation under German law is expressly not provided.',

        // Stats
        'stat-1': 'Successful Cases',
        'stat-2': 'Years Experience',
        'stat-3': '% Client Satisfaction',
        'stat-4': 'Offices in Countries',

        // About
        'about-tag': 'About Us',
        'about-title': 'Professional Representation<br><span class="highlight">in Turkish Law</span>',
        'about-btn': 'Contact Us',

        // Services
        'services-tag': 'Our Expertise',
        'services-title': 'LEGAL SERVICES',
        'services-desc': 'We provide professional consultation and representation in the following areas of Turkish law.',

        // Why Us
        'why-tag': 'Our Advantages',
        'why-title': 'Why DOĞRU Law Firm?',

        // Contact
        'contact-tag': 'Contact',
        'contact-title': 'For Legal Consultation<br><span class="highlight">Contact Us</span>',
        'contact-desc': 'First consultation is free. Request an appointment for your legal questions. See the quality of my work for yourself and contact me today!',
        'form-title': 'Appointment Request',
        'form-name': 'Full Name *',
        'form-email': 'Email *',
        'form-phone': 'Phone',
        'form-subject': 'Subject *',
        'form-message': 'Your Message *',
        'form-submit': 'Request Appointment',
        'form-note': '* Your information is protected under privacy policy.',

        // Logo
        'logo-subtitle': 'LAW FIRM',

        // Hero Features
        'hero-feature-1': 'Inheritance Law',
        'hero-feature-2': 'Family Law',
        'hero-feature-3': 'Real Estate Law',
        'hero-feature-4': 'Labor Law',

        // Dropdown Menu
        'dropdown-1': 'Inheritance Law',
        'dropdown-2': 'Certificate of Inheritance',
        'dropdown-3': 'Real Estate Law',
        'dropdown-4': 'Labor Law',
        'dropdown-5': 'Divorce Proceedings',
        'dropdown-6': 'Contract Law',

        // Contact & Form (EN Translations)
        'contact-office-de': 'Germany Office',
        'contact-office-tr': 'Turkey Office',
        'contact-phone': 'Phone',
        'contact-email': 'E-mail',
        'form-option-select': 'Select',
        'form-option-miras': 'Inheritance Law',
        'form-option-veraset': 'Certificate of Inheritance',
        'form-option-gayrimenkul': 'Real Estate Law',
        'form-option-is': 'Labor Law',
        'form-option-bosanma': 'Divorce Cases',
        'form-option-borclar': 'Law of Obligations',
        'form-option-diger': 'Other',
        'form-note': '* The information you send is protected under privacy.',

        // Footer (EN)
        'footer-desc': 'We provide professional consultancy and representation services in Turkish law. We are at your side with our offices in Mannheim and Ankara.',
        'footer-corporate': 'Corporate',
        'footer-home': 'Home',
        'footer-about': 'About Us',
        'footer-why': 'Why Us',
        'footer-vision': 'Our Vision',
        'footer-contact': 'Contact',
        'footer-legal-areas': 'Legal Areas',
        'footer-legal': 'Legal',
        'footer-policy': 'Privacy Policy',
        'footer-kvkk': 'PDPL Info',
        'footer-imprint': 'Imprint',
        'footer-data': 'Data Protection',
        'footer-copyright': '© 2024 DOĞRU Law Firm. All rights reserved.',
        'footer-note': 'Advice or representation under German law is expressly not provided.',

        // Info Banner
        'info-text': 'If you live in Germany, hold Turkish citizenship or are a Blue Card holder and have a legal matter in Turkey requiring consultation and representation under Turkish law, I can represent you in Turkish courts with a <strong>power of attorney from the Turkish consulate</strong>, without you needing to travel to Turkey personally.',

        // About - Extended
        'about-text-1': 'I am fully committed to representing my clients. Whether it is divorce under Turkish law, lawsuits in Turkish courts, important contractual matters under Turkish law, or other legal challenges, I offer you <strong>effective, result-oriented, and practical solutions</strong>.',
        'about-text-2': 'I will respond to your concerns not only as a "Turkish lawyer" from a legal perspective but also by truly understanding your life situation.',
        'about-list-title': 'My Areas of Practice:',
        'about-list-items': [
            '<strong>Inheritance Law</strong> in Turkish Law',
            '<strong>Family Law</strong> in Turkish Law',
            '<strong>Divorce Proceedings</strong> in Turkish Law',
            '<strong>Real Estate Law</strong> in Turkish Law',
            '<strong>Labor Law</strong> in Turkish Law',
            '<strong>Contract Law</strong> in Turkish Law'
        ],

        // Why Us - Cards
        'why-title-1': 'No Intermediaries',
        'why-desc-1': 'You work directly with your lawyer without third parties. The entire process is transparent and clear.',
        'why-title-2': 'Direct Contact',
        'why-desc-2': 'You can always reach your lawyer directly. Your questions are answered immediately.',
        'why-title-3': 'Turkish Law Experience',
        'why-desc-3': 'We are by your side with over 15 years of experience in Turkish law and deep knowledge.',
        'why-title-4': 'Germany & Turkey',
        'why-desc-4': 'Offices in both countries and a large client network. We are accessible wherever you are.',
        'why-title-5': 'High Satisfaction',
        'why-desc-5': 'Proven high client satisfaction in Google reviews.',

        // Vision - Extended
        'vision-title': 'OUR VISION',
        'vision-text-1': 'With a strong understanding of the rule of law, our primary goal is to be a reliable, solution-oriented law firm that protects our clients\' rights and interests at the highest level and adapts to the demands of the time.',
        'vision-text-2': 'We strive to differentiate ourselves as a legal consultant who anticipates not only current but also future needs, is committed to ethical values, constantly developing, open to digital transformation, and recognized nationally and internationally.',
        'vision-text-3': 'Our vision is to be not just a service provider, but a long-term solution partner for our private and corporate clients.',

        // Mission
        'mission-title': 'OUR MISSION',
        'mission-text-1': 'Our goal is to meet the needs and expectations of our clients in the best and most effective way, while adhering to universal legal principles.',
        'mission-text-2': 'Our main duty is to contribute to the administration of justice through the careful handling of each case and to make legal proceedings understandable and clear.',
        'mission-text-3': 'We always provide our clients with <strong>honest, transparent, and timely information</strong> and always act in accordance with professional ethics. We are aware of our social responsibility. Therefore, we do not only advocate for the people we represent, but also contribute to a fair and sustainable legal system.',

        // Service Titles & CTA (EN)
        'miras-title': 'Inheritance Law',
        'veraset-title': 'Certificate of Inheritance',
        'gayr-title': 'Real Estate Law',
        'is-title': 'Labor Law',
        'bosanma-title': 'Divorce Proceedings',
        'borclar-title': 'Law of Obligations',
        'service-cta': 'Book Appointment',

        // Services - Miras (EN)
        'miras-subtitle': 'What is Inheritance Law? What Does It Cover?',
        'miras-intro': 'Inheritance law is the branch of law that regulates how a person\'s assets will pass to legal heirs after their death. It covers many topics such as family sharing, wills, property regimes, and refusal of inheritance.',
        'miras-col1-title': '📌 What Areas Does Inheritance Law Cover?',
        'miras-col1-list': [
            '<strong>Legal Heirship:</strong> Determines who inherits at what rate.',
            '<strong>Will Preparation:</strong> Distribution of assets according to wishes.',
            '<strong>Refusal of Inheritance:</strong> The process of rejecting indebted inheritance.',
            '<strong>Abatement Lawsuits:</strong> Correction of inheritance when reserved shares are violated.',
            '<strong>Partition Lawsuits:</strong> Sharing of inherited real estate.'
        ],
        'miras-col2-title': '🧾 How Does the Inheritance Process Work?',
        'miras-col2-list': [
            'Death occurs and is reported to the registry office.',
            'Certificate of inheritance is obtained (from notary or court).',
            'Transactions such as title deed, bank, vehicle, company are carried out.',
            'Inheritance and transfer tax is paid.',
            'If necessary, legal proceedings are initiated.'
        ],
        'miras-info-title': '🧠 Who Are the Heirs?',
        'miras-info-list': [
            '✓ Spouse, children, grandchildren',
            '✓ Parents, siblings',
            '✓ More distant relatives (if previous groups do not exist)',
            '✓ Adopted children are also legal heirs'
        ],
        'miras-warning-title': '⚠️ Important Warnings',
        'miras-warning-list': [
            'Every inheritance may include not only assets but also <strong>debts</strong>. You can use your right to refuse inheritance if necessary.',
            'In international cases (e.g., a person dying in Germany), <strong>different legal systems</strong> may apply.',
            '<strong>Professional support</strong> is important to exercise your rights on time.'
        ],

        // Services - Veraset (EN)
        'veraset-subtitle': 'What is a Certificate of Inheritance? How to Get It?',
        'veraset-intro': 'A certificate of inheritance is an official document showing who the legal heirs of a deceased person are. Thanks to this document, heirs can carry out bank transactions, title deed transfers, vehicle sales, and tax notifications.',
        'veraset-col1-title': '📌 What Can Get It?',
        'veraset-col1-desc': 'The certificate of inheritance can be obtained by legal heirs:',
        'veraset-col1-list': [
            'Spouse',
            'Children',
            'Parents',
            'Siblings and, if necessary, more distant relatives'
        ],
        'veraset-col2-title': '📌 Where to Get It?',
        'veraset-col2-list': [
            '<strong>From Notary:</strong> If all heirs are Turkish citizens and lineage is clear.',
            '<strong>From Civil Court of Peace:</strong> If there are more complex situations or foreign national heirs.'
        ],
        'veraset-info-title': '📋 Required Documents',
        'veraset-info-list': [
            '✓ Death certificate or population register copy of the deceased',
            '✓ Identity copies of heirs',
            '✓ Population register copy for notary applications'
        ],
        'veraset-warning-title': '⚠️ Things to Consider',
        'veraset-warning-list': [
            '<strong>Inheritance transactions cannot be started</strong> without a certificate of inheritance.',
            'Each heir can apply <strong>individually</strong>.',
            '<strong>Notarized translation and apostille</strong> may be required for those living in foreign countries.'
        ],

        // Services - Gayrimenkul (EN)
        'gayr-subtitle': 'What is Real Estate Law? When is it Necessary?',
        'gayr-intro': 'Real estate law is the branch of law that regulates all buying-selling, rental, title deed, and property processes regarding real estate such as land, housing, and workplaces.',
        'gayr-col1-title': '📌 What Areas Does Real Estate Law Cover?',
        'gayr-col1-list': [
            'Title deed cancellation and registration lawsuits',
            'Condominium and common area disputes',
            'Rental contracts and eviction lawsuits',
            'Pre-emption and partition lawsuits',
            'Construction contracts (in return for flat – turnkey)',
            'Expropriation and valuation disputes'
        ],
        'gayr-col2-title': '🧾 Why Should You Get Legal Support?',
        'gayr-col2-desc': 'A small mistake in real estate transactions can lead to large financial losses and long legal processes.',
        'gayr-col2-list': [
            'Title deed transactions are carried out <strong>safely</strong>',
            'Rental receivables are <strong>collected quickly</strong>',
            'Joint ownerships are distributed <strong>in accordance with the law</strong>'
        ],

        // Services - Is (EN)
        'is-subtitle': 'What is Labor Law? What Rights Does It Cover?',
        'is-intro': 'Labor law is the branch of law that regulates the employment relationship between employee and employer, guaranteeing both the rights of employees and the obligations of employers. It covers a wide area from employment contract to termination, from compensation to work accidents.',
        'is-col1-title': '📌 What Topics Does Labor Law Cover?',
        'is-col1-list': [
            'Unfair termination and re-employment lawsuits',
            'Severance and notice pay claims',
            'Overtime, weekly rest, annual leave receivables',
            'SSI premium disputes and service determination',
            'Work accident and occupational disease lawsuits',
            'Disciplinary proceedings and personnel defenses',
            'Collective bargaining agreements and union processes'
        ],
        'is-col2-title': '👷 For Who Is It Necessary?',
        'is-col2-group1-title': 'For Employees:',
        'is-col2-group1-desc': 'Unfair dismissal, unpaid receivables, mobbing, rights violations.',
        'is-col2-group2-title': 'For Employers:',
        'is-col2-group2-desc': 'Preparing contracts in accordance with laws, warning and termination processes, risk management.',
        'is-warning-title': '⚠️ Important Periods',
        'is-warning-text': 'Labor law processes include forfeiture periods. If steps are not taken on time and incorrectly, rights may be lost:',
        'is-warning-list': [
            '<strong>30 days</strong> for re-employment',
            '<strong>5 years</strong> for receivable lawsuits',
            '<strong>10 years</strong> for work accidents'
        ],

        // Services - Bosanma (EN)
        'bosanma-subtitle': 'Divorce Process: Do You Know Your Rights?',
        'bosanma-intro': 'Divorce is not just the termination of the marriage of two people; it is also the process of resolving property division, child custody, alimony, and emotional burdens on a legal plane. Taking the right steps in this process is of great importance to secure your future.',
        'bosanma-col1-title': '📌 Uncontested Divorce',
        'bosanma-col1-desc': 'If the parties agree on all issues, it can be concluded in a short time and in a single session.',
        'bosanma-col1-sub': 'Conditions:',
        'bosanma-col1-list': [
            '✔ Marriage must have lasted at least 1 year',
            '✔ Preparation of protocol (property division, alimony, custody, etc.)',
            '✔ Joint application of parties to court'
        ],
        'bosanma-col2-title': '📌 Contested Divorce',
        'bosanma-col2-desc': 'If there is disagreement between parties; proof of reasons, witnesses, evidence, and a long trial process are involved.',
        'bosanma-col2-sub': 'Reasons:',
        'bosanma-col2-list': [
            '• Adultery',
            '• Violence',
            '• Desertion',
            '• Incompatibility',
            '• Abuse',
            '• Mental illness'
        ],
        'bosanma-info-title': '👶 Custody and Alimony',
        'bosanma-info-text': 'One of the most sensitive issues in the divorce process is child custody and alimony. The court decides by considering the <strong>best interests of the child</strong>. Joint custody, establishing personal relationships, and child support are evaluated in detail.',
        'bosanma-warning-title': '⚠️ Don\'t Forget!',
        'bosanma-warning-list': [
            'Property division can be opened as a <strong>separate case</strong> from the divorce case.',
            'You also have rights such as <strong>surname usage, alimony cancellation/increase, custody change</strong> after divorce.',
            'Legal support both speeds up the process and <strong>prevents loss of rights</strong>.'
        ],

        // Services - Borclar (EN)
        'borclar-subtitle': 'What is the Code of Obligations? How Does It Protect You?',
        'borclar-intro': 'The Code of Obligations is the fundamental branch of law that regulates debt-credit relationships, contracts, responsibilities, and compensation obligations between people or companies. Every contract made in daily life falls within the scope of the Code of Obligations.',
        'borclar-col1-title': '📌 What Topics Does the Code of Obligations Cover?',
        'borclar-col1-list': [
            'Contract preparation and review (sales, rental, service, proxy, subcontracting, etc.)',
            'Performance of debts and default (delay)',
            'Receivable collection and warning processes',
            'Tort (causing damage) and material/moral compensation lawsuits',
            'Unjust enrichment claims',
            'Liability lawsuits (defect, warranty, defective goods)'
        ],
        'borclar-col2-title': '👥 For Who Is It Necessary?',
        'borclar-col2-group1-title': 'Individuals:',
        'borclar-col2-group1-desc': 'Disputes regarding credit-debt relationships, compensation lawsuits, service or rental contracts.',
        'borclar-col2-group2-title': 'Companies:',
        'borclar-col2-group2-desc': 'Preparation of commercial contracts, follow-up of collection processes, contractor-subcontractor relationships, guarantee and liability regulations.',
        'borclar-warning-title': '⚠️ Why Is It Important?',
        'borclar-warning-text': 'A wrongly or incompletely prepared contract can lead to long and financially damaging lawsuits in the future. A <strong>strong legal infrastructure</strong> provides trust in business and individual relationships.'
    }
};

// ===== Language Switcher =====
const langBtns = document.querySelectorAll('.lang-btn');
let currentLang = 'de'; // Varsayılan Almanca

// Sayfa yüklendiğinde varsayılan dili uygula
window.addEventListener('load', () => {
    // localStorage'dan kayıtlı dil varsa onu kullan
    const savedLang = localStorage.getItem('lang');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
    }
    applyLanguage(currentLang);
    updateActiveLangBtn(currentLang);
});

langBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = btn.getAttribute('data-lang');

        // Update active button
        langBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Save and apply language
        currentLang = lang;
        localStorage.setItem('lang', lang);
        applyLanguage(lang);

        // Show notification
        const langNames = { 'tr': 'Türkçe', 'de': 'Deutsch', 'en': 'English' };
        showNotification(`${langNames[lang]} ✓`);
    });
});

function updateActiveLangBtn(lang) {
    langBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
}

function applyLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Generic translation update for all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            // Handle inputs/placeholders if necessary, but for now textContent is primary
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.hasAttribute('placeholder')) {
                    element.setAttribute('placeholder', t[key]);
                }
            } else {
                element.innerHTML = t[key]; // Use innerHTML to support <br> or <strong> tags if any
            }
        }
    });

    // Handle standard placeholders separately if they use different keys (optional logic preservation)
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    if (nameInput) nameInput.placeholder = t['form-name'].replace(' *', '');
    if (emailInput) emailInput.placeholder = t['form-email'].replace(' *', '');
    // Phone placeholder optional
    if (messageInput) messageInput.placeholder = t['form-message'].replace(' *', '');

    // Navigation dropdown link (RECHTSGEBIETE/HUKUK ALANLARIMIZ)
    const navServicesLink = document.querySelector('.nav-link.has-dropdown');
    if (navServicesLink) {
        // Preserve the arrow SVG when updating text
        const arrow = navServicesLink.querySelector('.dropdown-arrow');
        navServicesLink.innerHTML = t['nav-services'] + ' ';
        if (arrow) navServicesLink.appendChild(arrow);
    }

    // Stats
    const statLabels = document.querySelectorAll('.stat-label');
    if (statLabels[0]) statLabels[0].textContent = t['stat-1'];
    if (statLabels[1]) statLabels[1].textContent = t['stat-2'];
    if (statLabels[2]) statLabels[2].textContent = t['stat-3'];
    if (statLabels[3]) statLabels[3].textContent = t['stat-4'];

    // About
    const aboutTag = document.querySelector('#hakkimizda .tag-text');
    if (aboutTag) aboutTag.textContent = t['about-tag'];

    const aboutTitle = document.querySelector('#hakkimizda .section-title');
    if (aboutTitle) aboutTitle.innerHTML = t['about-title'];

    const aboutBtn = document.querySelector('#hakkimizda .btn-primary span');
    if (aboutBtn) aboutBtn.textContent = t['about-btn'];

    // Services
    const servicesTag = document.querySelector('#hizmetler .section-header .tag-text');
    if (servicesTag) servicesTag.textContent = t['services-tag'];

    const servicesTitle = document.querySelector('#hizmetler .section-title');
    if (servicesTitle) servicesTitle.textContent = t['services-title'];

    const servicesDesc = document.querySelector('#hizmetler .section-desc');
    if (servicesDesc) servicesDesc.textContent = t['services-desc'];

    // Why Us
    const whyTag = document.querySelector('#neden-biz .tag-text');
    if (whyTag) whyTag.textContent = t['why-tag'];

    const whyTitle = document.querySelector('#neden-biz .section-title');
    if (whyTitle) whyTitle.textContent = t['why-title'];

    // Contact
    const contactTag = document.querySelector('#iletisim .tag-text');
    if (contactTag) contactTag.textContent = t['contact-tag'];

    const contactTitle = document.querySelector('#iletisim .section-title');
    if (contactTitle) contactTitle.innerHTML = t['contact-title'];

    const contactDesc = document.querySelector('.contact-desc');
    if (contactDesc) contactDesc.textContent = t['contact-desc'];

    const formTitle = document.querySelector('.contact-form-wrapper h3');
    if (formTitle) formTitle.textContent = t['form-title'];

    // Form labels
    const formLabels = document.querySelectorAll('.form-group label');
    if (formLabels[0]) formLabels[0].textContent = t['form-name'];
    if (formLabels[1]) formLabels[1].textContent = t['form-email'];
    if (formLabels[2]) formLabels[2].textContent = t['form-phone'];
    if (formLabels[3]) formLabels[3].textContent = t['form-subject'];
    if (formLabels[4]) formLabels[4].textContent = t['form-message'];

    const formSubmit = document.querySelector('.contact-form .btn-primary span');
    if (formSubmit) formSubmit.textContent = t['form-submit'];

    const formNote = document.querySelector('.form-note');
    if (formNote) formNote.textContent = t['form-note'];

    // Logo Subtitles (Header and Footer)
    const logoSubtitles = document.querySelectorAll('.logo-subtitle');
    logoSubtitles.forEach(el => {
        if (el) el.textContent = t['logo-subtitle'];
    });

    // Hero Features
    const heroFeatures = document.querySelectorAll('.hero-feature span');
    if (heroFeatures[0]) heroFeatures[0].textContent = t['hero-feature-1'];
    if (heroFeatures[1]) heroFeatures[1].textContent = t['hero-feature-2'];
    if (heroFeatures[2]) heroFeatures[2].textContent = t['hero-feature-3'];
    if (heroFeatures[3]) heroFeatures[3].textContent = t['hero-feature-4'];

    // Dropdown Menu
    const dropdownLinks = document.querySelectorAll('.dropdown-menu a');
    if (dropdownLinks[0]) dropdownLinks[0].textContent = t['dropdown-1'];
    if (dropdownLinks[1]) dropdownLinks[1].textContent = t['dropdown-2'];
    if (dropdownLinks[2]) dropdownLinks[2].textContent = t['dropdown-3'];
    if (dropdownLinks[3]) dropdownLinks[3].textContent = t['dropdown-4'];
    if (dropdownLinks[4]) dropdownLinks[4].textContent = t['dropdown-5'];
    if (dropdownLinks[5]) dropdownLinks[5].textContent = t['dropdown-6'];

    // Footer Description
    const footerDesc = document.querySelector('.footer-desc');
    if (footerDesc) footerDesc.textContent = t['footer-desc'];

    // Footer Navigation Headers
    const footerNavHeaders = document.querySelectorAll('.footer-nav h4');
    if (footerNavHeaders[0]) footerNavHeaders[0].textContent = t['footer-corp'];
    if (footerNavHeaders[1]) footerNavHeaders[1].textContent = t['footer-areas'];
    if (footerNavHeaders[2]) footerNavHeaders[2].textContent = t['footer-legal'];

    // Footer Corporate Links
    const footerCorpLinks = document.querySelectorAll('.footer-nav:nth-child(2) a');
    if (footerCorpLinks[0]) footerCorpLinks[0].textContent = t['footer-home'];
    if (footerCorpLinks[1]) footerCorpLinks[1].textContent = t['footer-about'];
    if (footerCorpLinks[2]) footerCorpLinks[2].textContent = t['footer-why'];
    if (footerCorpLinks[3]) footerCorpLinks[3].textContent = t['footer-vision'];
    if (footerCorpLinks[4]) footerCorpLinks[4].textContent = t['footer-contact'];

    // Footer Legal Links
    const footerLegalLinks = document.querySelectorAll('.footer-nav:nth-child(4) a');
    if (footerLegalLinks[0]) footerLegalLinks[0].textContent = t['footer-privacy'];
    if (footerLegalLinks[1]) footerLegalLinks[1].textContent = t['footer-kvkk'];
    if (footerLegalLinks[2]) footerLegalLinks[2].textContent = t['footer-imprint'];
    if (footerLegalLinks[3]) footerLegalLinks[3].textContent = t['footer-data'];

    // Footer Bottom
    const footerCopyright = document.querySelector('.footer-bottom p:first-child');
    if (footerCopyright) footerCopyright.textContent = t['footer-copyright'];

    const footerNote = document.querySelector('.footer-note');
    if (footerNote) footerNote.textContent = t['footer-note'];

    // Info Banner Text
    const infoText = document.querySelector('.info-text');
    if (infoText) infoText.innerHTML = t['info-text'];

    // About Texts
    const aboutText1 = document.querySelector('.about-text-1');
    if (aboutText1) aboutText1.innerHTML = t['about-text-1'];

    const aboutText2 = document.querySelector('.about-text-2');
    if (aboutText2) aboutText2.textContent = t['about-text-2'];

    const aboutListTitle = document.querySelector('.about-list-title');
    if (aboutListTitle) aboutListTitle.textContent = t['about-list-title'];

    const aboutListItems = document.querySelector('.about-list-items');
    if (aboutListItems && t['about-list-items']) {
        aboutListItems.innerHTML = t['about-list-items'].map(item => `<li>${item}</li>`).join('');
    }

    // Why Us Cards
    const whyCards = document.querySelectorAll('.why-card');
    whyCards.forEach(card => {
        const index = card.getAttribute('data-index');
        if (index) {
            const title = card.querySelector('h4');
            const desc = card.querySelector('p');
            if (title) title.textContent = t[`why-title-${index}`];
            if (desc) desc.textContent = t[`why-desc-${index}`];
        }
    });

    // Vision Texts
    const visionTitle = document.querySelector('.vision-title');
    if (visionTitle) visionTitle.textContent = t['vision-title'];

    const visionText1 = document.querySelector('.vision-text-1');
    if (visionText1) visionText1.textContent = t['vision-text-1'];

    const visionText2 = document.querySelector('.vision-text-2');
    if (visionText2) visionText2.textContent = t['vision-text-2'];

    // Mission Texts
    const missionTitle = document.querySelector('.mission-title');
    if (missionTitle) missionTitle.textContent = t['mission-title'];

    const missionText1 = document.querySelector('.mission-text-1');
    if (missionText1) missionText1.textContent = t['mission-text-1'];

    const missionText2 = document.querySelector('.mission-text-2');
    if (missionText2) missionText2.textContent = t['mission-text-2'];

    const missionText3 = document.querySelector('.mission-text-3');
    if (missionText3) missionText3.innerHTML = t['mission-text-3'];

    // Helper function to update lists
    const updateList = (selector, listData) => {
        const listEl = document.querySelector(selector);
        if (listEl && listData) {
            listEl.innerHTML = '';
            listData.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = item;
                listEl.appendChild(li);
            });
        }
    };

    // Helper function to update text content
    const updateText = (selector, key, isHTML = false) => {
        const el = document.querySelector(selector);
        if (el && t[key]) {
            if (isHTML) el.innerHTML = t[key];
            else el.textContent = t[key];
        }
    };

    // --- Services Translations Application ---

    // Service CTA Buttons
    const serviceCtas = document.querySelectorAll('.service-cta');
    serviceCtas.forEach(btn => {
        if (btn) btn.textContent = t['service-cta'];
    });

    // Miras
    updateText('.miras-title', 'miras-title');
    updateText('.miras-subtitle', 'miras-subtitle');
    updateText('.miras-intro', 'miras-intro');
    updateText('.miras-col1-title', 'miras-col1-title');
    updateList('.miras-col1-list', t['miras-col1-list']);
    updateText('.miras-col2-title', 'miras-col2-title');
    updateList('.miras-col2-list', t['miras-col2-list']);
    updateText('.miras-info-title', 'miras-info-title');
    updateList('.miras-info-list', t['miras-info-list']);
    updateText('.miras-warning-title', 'miras-warning-title');
    updateList('.miras-warning-list', t['miras-warning-list']);

    // Veraset
    updateText('.veraset-title', 'veraset-title');
    updateText('.veraset-subtitle', 'veraset-subtitle');
    updateText('.veraset-intro', 'veraset-intro');
    updateText('.veraset-col1-title', 'veraset-col1-title');
    updateText('.veraset-col1-desc', 'veraset-col1-desc');
    updateList('.veraset-col1-list', t['veraset-col1-list']);
    updateText('.veraset-col2-title', 'veraset-col2-title');
    updateList('.veraset-col2-list', t['veraset-col2-list']);
    updateText('.veraset-info-title', 'veraset-info-title');
    updateList('.veraset-info-list', t['veraset-info-list']);
    updateText('.veraset-warning-title', 'veraset-warning-title');
    updateList('.veraset-warning-list', t['veraset-warning-list']);

    // Gayrimenkul
    updateText('.gayrimenkul-title', 'gayr-title');
    updateText('.gayrimenkul-subtitle', 'gayr-subtitle');
    updateText('.gayrimenkul-intro', 'gayr-intro');
    updateText('.gayrimenkul-col1-title', 'gayr-col1-title');
    updateList('.gayrimenkul-col1-list', t['gayr-col1-list']);
    updateText('.gayrimenkul-col2-title', 'gayr-col2-title');
    updateText('.gayrimenkul-col2-desc', 'gayr-col2-desc');
    updateList('.gayrimenkul-col2-list', t['gayr-col2-list']);

    // Is Hukuku
    updateText('.is-title', 'is-title');
    updateText('.is-subtitle', 'is-subtitle');
    updateText('.is-intro', 'is-intro');
    updateText('.is-col1-title', 'is-col1-title');
    updateList('.is-col1-list', t['is-col1-list']);
    updateText('.is-col2-title', 'is-col2-title');

    // Is Hukuku nested groups - Manually update h5 and p inside groups
    const isGroup1 = document.querySelector('.is-col2-group1');
    if (isGroup1) {
        if (t['is-col2-group1-title']) isGroup1.querySelector('h5').innerText = t['is-col2-group1-title'];
        if (t['is-col2-group1-desc']) isGroup1.querySelector('p').innerText = t['is-col2-group1-desc'];
    }
    const isGroup2 = document.querySelector('.is-col2-group2');
    if (isGroup2) {
        if (t['is-col2-group2-title']) isGroup2.querySelector('h5').innerText = t['is-col2-group2-title'];
        if (t['is-col2-group2-desc']) isGroup2.querySelector('p').innerText = t['is-col2-group2-desc'];
    }

    updateText('.is-warning-title', 'is-warning-title');
    updateText('.is-warning-text', 'is-warning-text');
    updateList('.is-warning-list', t['is-warning-list']);

    // Bosanma
    updateText('.bosanma-title', 'bosanma-title');
    updateText('.bosanma-subtitle', 'bosanma-subtitle');
    updateText('.bosanma-intro', 'bosanma-intro');
    updateText('.bosanma-col1-title', 'bosanma-col1-title');
    updateText('.bosanma-col1-desc', 'bosanma-col1-desc');
    updateText('.bosanma-col1-sub', 'bosanma-col1-sub');
    updateList('.bosanma-col1-list', t['bosanma-col1-list']);
    updateText('.bosanma-col2-title', 'bosanma-col2-title');
    updateText('.bosanma-col2-desc', 'bosanma-col2-desc');
    updateText('.bosanma-col2-sub', 'bosanma-col2-sub');
    updateList('.bosanma-col2-list', t['bosanma-col2-list']);
    updateText('.bosanma-info-title', 'bosanma-info-title');
    updateText('.bosanma-info-text', 'bosanma-info-text', true);
    updateText('.bosanma-warning-title', 'bosanma-warning-title');
    updateList('.bosanma-warning-list', t['bosanma-warning-list']);

    // Borclar
    updateText('.borclar-title', 'borclar-title');
    updateText('.borclar-subtitle', 'borclar-subtitle');
    updateText('.borclar-intro', 'borclar-intro');
    updateText('.borclar-col1-title', 'borclar-col1-title');
    updateList('.borclar-col1-list', t['borclar-col1-list']);
    updateText('.borclar-col2-title', 'borclar-col2-title');

    // Borclar nested groups
    const borclarGroup1 = document.querySelector('.borclar-col2-group1');
    if (borclarGroup1) {
        if (t['borclar-col2-group1-title']) borclarGroup1.querySelector('h5').innerText = t['borclar-col2-group1-title'];
        if (t['borclar-col2-group1-desc']) borclarGroup1.querySelector('p').innerText = t['borclar-col2-group1-desc'];
    }
    const borclarGroup2 = document.querySelector('.borclar-col2-group2');
    if (borclarGroup2) {
        if (t['borclar-col2-group2-title']) borclarGroup2.querySelector('h5').innerText = t['borclar-col2-group2-title'];
        if (t['borclar-col2-group2-desc']) borclarGroup2.querySelector('p').innerText = t['borclar-col2-group2-desc'];
    }

    updateText('.borclar-warning-title', 'borclar-warning-title');
    updateText('.borclar-warning-text', 'borclar-warning-text', true);

}

function showNotification(message) {
    // Remove existing notification
    const existing = document.querySelector('.lang-notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = 'lang-notification';
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #1e3a5f;
        color: #c9a962;
        padding: 1rem 1.5rem;
        border-radius: 4px;
        z-index: 9999;
        font-size: 0.9rem;
        font-weight: 600;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 1500);
}

// Add notification animations
const langStyle = document.createElement('style');
langStyle.textContent = `
    @keyframes slideIn {
        from { opacity: 0; transform: translateX(30px); }
        to { opacity: 1; transform: translateX(0); }
    }
    @keyframes slideOut {
        from { opacity: 1; transform: translateX(0); }
        to { opacity: 0; transform: translateX(30px); }
    }
`;
document.head.appendChild(langStyle);

// ===== Mobile Menu Logic =====
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const navLinksMobile = document.querySelectorAll('.nav-link');

// Elements to move/clone for mobile
const headerElement = document.querySelector('.header');
const topBar = document.querySelector('.top-bar');
const headerBtnOriginal = document.querySelector('.header-btn');

function setupMobileMenu() {
    if (!nav || !menuToggle) return;

    // Create a container for mobile extras if not exists
    let mobileExtras = nav.querySelector('.mobile-extras');
    if (!mobileExtras) {
        mobileExtras = document.createElement('div');
        mobileExtras.className = 'mobile-extras';
        // Insert at the VERY top of nav
        nav.insertBefore(mobileExtras, nav.firstChild);
    }

    // 1. Clone Language Switcher
    const langSwitcher = document.querySelector('.top-bar .lang-switcher');
    if (langSwitcher && !mobileExtras.querySelector('.lang-switcher')) {
        const langClone = langSwitcher.cloneNode(true);
        mobileExtras.appendChild(langClone);

        const clonedBtns = langClone.querySelectorAll('.lang-btn');
        clonedBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = btn.getAttribute('data-lang');
                const originalBtn = document.querySelector(`.top-bar .lang-btn[data-lang="${lang}"]`);
                if (originalBtn) originalBtn.click();

                // Close menu after selection for better UX
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // 2. Clone Appointment Button (If not already in nav)
    if (headerBtnOriginal && !mobileExtras.querySelector('.mobile-nav-btn')) {
        const btnClone = headerBtnOriginal.cloneNode(true);
        btnClone.classList.add('mobile-nav-btn');
        btnClone.style.display = 'flex';
        mobileExtras.appendChild(btnClone);
    }
}

// Run setup
setupMobileMenu();

if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
        document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navLinksMobile.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('active') && !nav.contains(e.target) && !menuToggle.contains(e.target)) {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Toggle active state on menu button
document.querySelectorAll('.menu-toggle').forEach(btn => {
    btn.addEventListener('click', function () {
        const spans = this.querySelectorAll('span');
        if (this.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        }
    });
});

// Close menu on link click
document.querySelectorAll('.nav-link, .dropdown-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
        document.body.style.overflow = '';

        // Reset toggle button
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
    });
});

// ===== Active Navigation =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href && href === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ===== Counter Animation =====
const counters = document.querySelectorAll('.stat-number');
let countersAnimated = false;

const animateCounters = () => {
    counters.forEach(counter => {
        const countAttr = counter.getAttribute('data-count');
        if (!countAttr) return;

        const target = parseInt(countAttr);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    });
};

// Observe stats section
const statsSection = document.querySelector('.stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersAnimated) {
                countersAnimated = true;
                animateCounters();
            }
        });
    }, { threshold: 0.3 });

    statsObserver.observe(statsSection);
}

// ===== Scroll Reveal Animation =====
const revealElements = document.querySelectorAll(
    '.service-detail, .why-card, .vision-card, .about-content, .about-image, ' +
    '.contact-info, .contact-form-wrapper, .stat-card, .info-content'
);

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1, rootMargin: '-30px' });

revealElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `all 0.6s ease ${index * 0.05}s`;
    revealObserver.observe(el);
});

// ===== Why Cards Stagger =====
const whyCards = document.querySelectorAll('.why-card');

const whyObserver = new IntersectionObserver((entries, observer) => {
    let delay = 0;
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, delay);
            delay += 80;
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

whyCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.5s ease';
    whyObserver.observe(card);
});

// ===== Stat Cards Stagger =====
const statCards = document.querySelectorAll('.stat-card');

const statObserver = new IntersectionObserver((entries, observer) => {
    let delay = 0;
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, delay);
            delay += 100;
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

statCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
    statObserver.observe(card);
});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);

        if (target) {
            const offset = 120;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Form Handling =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalContent = submitBtn.innerHTML;

        // Loading state
        submitBtn.innerHTML = '<span>Gönderiliyor...</span>';
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';

        // Simulate submission
        setTimeout(() => {
            submitBtn.innerHTML = '<span>Başarıyla Gönderildi! ✓</span>';
            submitBtn.style.background = '#22c55e';

            setTimeout(() => {
                submitBtn.innerHTML = originalContent;
                submitBtn.style.background = '';
                submitBtn.style.opacity = '';
                submitBtn.disabled = false;
                contactForm.reset();
            }, 3000);
        }, 1500);
    });
}

// ===== Copy Contact Info =====
const contactDetails = document.querySelectorAll('.contact-detail p a, .contact-detail p');

contactDetails.forEach(item => {
    const text = item.textContent;
    if (text.includes('@') || text.includes('+')) {
        item.style.cursor = 'pointer';
        item.title = 'Kopyalamak için tıklayın';

        item.addEventListener('click', async (e) => {
            e.preventDefault();
            try {
                const cleanText = text.replace(/\s+/g, ' ').trim();
                await navigator.clipboard.writeText(cleanText);

                const originalText = item.innerHTML;
                item.textContent = 'Kopyalandı! ✓';
                item.style.color = '#22c55e';

                setTimeout(() => {
                    item.innerHTML = originalText;
                    item.style.color = '';
                }, 2000);
            } catch (err) {
                console.log('Copy failed:', err);
            }
        });
    }
});

// ===== Service Card Expand/Collapse (Optional) =====
const serviceHeaders = document.querySelectorAll('.service-header');

serviceHeaders.forEach(header => {
    header.style.cursor = 'pointer';

    header.addEventListener('click', (e) => {
        // Don't toggle if clicking on CTA button
        if (e.target.closest('.service-cta')) return;

        const serviceDetail = header.closest('.service-detail');
        const serviceBody = serviceDetail.querySelector('.service-body');

        // Toggle visibility
        if (serviceBody.style.display === 'none') {
            serviceBody.style.display = 'block';
            serviceBody.style.animation = 'slideDown 0.3s ease';
        } else {
            serviceBody.style.animation = 'slideUp 0.3s ease';
            setTimeout(() => {
                // Optionally hide after animation
                // serviceBody.style.display = 'none';
            }, 300);
        }
    });
});

// Add keyframe animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from { opacity: 0; max-height: 0; }
        to { opacity: 1; max-height: 2000px; }
    }
    
    @keyframes slideUp {
        from { opacity: 1; max-height: 2000px; }
        to { opacity: 0; max-height: 0; }
    }
`;
document.head.appendChild(style);

// ===== Hero Content Animation =====
const heroContent = document.querySelector('.hero-content');
if (heroContent) {
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(40px)';

    setTimeout(() => {
        heroContent.style.transition = 'all 1s ease';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 200);
}

// ===== Dropdown Menu - Mobile Touch Support =====
const dropdowns = document.querySelectorAll('.nav-dropdown');

dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('.nav-link.has-dropdown');

    link.addEventListener('click', (e) => {
        if (window.innerWidth <= 992) {
            e.preventDefault();
            dropdown.classList.toggle('open');
        }
    });
});

// ===== Back to Top on Logo Click =====
document.querySelectorAll('.logo, .footer-logo').forEach(logo => {
    logo.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// ===== Performance: Lazy load images when they come into view =====
const lazyImages = document.querySelectorAll('img[data-src]');

if (lazyImages.length > 0) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
}

// ===== Console Branding =====
console.log('%c⚖️ DOĞRU HUKUK BÜROSU', 'font-size: 24px; font-weight: bold; color: #1e3a5f;');
console.log('%cTürk Hukuku Danışmanlığı', 'font-size: 14px; color: #c9a962;');
console.log('%cMannheim & Ankara', 'font-size: 12px; color: #737373;');
console.log('%c📧 avukat.hasandogru@outlook.de', 'font-size: 11px; color: #525252;');
