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

        // Footer
        'footer-desc': 'Türk hukuku alanında profesyonel danışmanlık ve temsil hizmeti sunmaktayız. Mannheim ve Ankara ofislerimizle yanınızdayız.',
        'footer-corp': 'Kurumsal',
        'footer-home': 'Ana Sayfa',
        'footer-about': 'Hakkımızda',
        'footer-why': 'Neden Biz',
        'footer-vision': 'Vizyonumuz',
        'footer-contact': 'İletişim',
        'footer-areas': 'Hukuk Alanları',
        'footer-legal': 'Yasal',
        'footer-privacy': 'Gizlilik Politikası',
        'footer-kvkk': 'KVKK Aydınlatma',
        'footer-imprint': 'Künye',
        'footer-data': 'Veri Koruma',
        'footer-copyright': '© 2024 Doğru Hukuk Bürosu. Tüm hakları saklıdır.',
        'footer-note': 'Alman hukuku kapsamında tavsiye veya temsil açıkça sağlanmamaktadır.'
    },
    de: {
        // Navigation
        'nav-home': 'STARTSEITE',
        'nav-services': 'RECHTSGEBIETE',
        'nav-about': 'ÜBER UNS',
        'nav-why': 'WARUM WIR',
        'nav-vision': 'UNSERE VISION',
        'nav-contact': 'KONTAKT',
        'header-btn': 'Termin buchen',

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
        'form-title': 'Terminanfrage',
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

        // Footer
        'footer-desc': 'Wir bieten professionelle Beratung und Vertretung im türkischen Recht. Mit unseren Büros in Mannheim und Ankara sind wir für Sie da.',
        'footer-corp': 'Unternehmen',
        'footer-home': 'Startseite',
        'footer-about': 'Über Uns',
        'footer-why': 'Warum Wir',
        'footer-vision': 'Unsere Vision',
        'footer-contact': 'Kontakt',
        'footer-areas': 'Rechtsgebiete',
        'footer-legal': 'Rechtliches',
        'footer-privacy': 'Datenschutzerklärung',
        'footer-kvkk': 'DSGVO-Hinweise',
        'footer-imprint': 'Impressum',
        'footer-data': 'Datenschutz',
        'footer-copyright': '© 2024 DOĞRU Rechtsanwaltskanzlei. Alle Rechte vorbehalten.',
        'footer-note': 'Beratung oder Vertretung im deutschen Recht wird ausdrücklich nicht angeboten.'
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

        // Footer
        'footer-desc': 'We provide professional consultation and representation in Turkish law. With our offices in Mannheim and Ankara, we are here for you.',
        'footer-corp': 'Corporate',
        'footer-home': 'Home',
        'footer-about': 'About Us',
        'footer-why': 'Why Us',
        'footer-vision': 'Our Vision',
        'footer-contact': 'Contact',
        'footer-areas': 'Legal Areas',
        'footer-legal': 'Legal',
        'footer-privacy': 'Privacy Policy',
        'footer-kvkk': 'GDPR Notice',
        'footer-imprint': 'Imprint',
        'footer-data': 'Data Protection',
        'footer-copyright': '© 2024 DOĞRU Law Firm. All rights reserved.',
        'footer-note': 'Advice or representation under German law is expressly not provided.'
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

    // Navigation
    const navLinks = document.querySelectorAll('.nav-link');
    if (navLinks[0]) navLinks[0].textContent = t['nav-home'];
    if (navLinks[2]) navLinks[2].textContent = t['nav-about'];
    if (navLinks[3]) navLinks[3].textContent = t['nav-why'];
    if (navLinks[4]) navLinks[4].textContent = t['nav-vision'];
    if (navLinks[5]) navLinks[5].textContent = t['nav-contact'];

    // Navigation dropdown link (RECHTSGEBIETE/HUKUK ALANLARIMIZ)
    const navServicesLink = document.querySelector('.nav-link.has-dropdown');
    if (navServicesLink) {
        // Preserve the arrow SVG when updating text
        const arrow = navServicesLink.querySelector('.dropdown-arrow');
        navServicesLink.innerHTML = t['nav-services'] + ' ';
        if (arrow) navServicesLink.appendChild(arrow);
    }

    // Header Logo Subtitle
    const headerLogoSubtitle = document.querySelector('#header .logo-subtitle');
    if (headerLogoSubtitle) headerLogoSubtitle.textContent = t['logo-subtitle'];

    // Header button
    const headerBtn = document.querySelector('.header-btn span');
    if (headerBtn) headerBtn.textContent = t['header-btn'];

    // Hero section
    const heroBadge = document.querySelector('.hero-badge .badge-text');
    if (heroBadge) heroBadge.textContent = t['hero-badge'];

    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) heroTitle.innerHTML = t['hero-title'];

    const heroDesc = document.querySelector('.hero-desc');
    if (heroDesc) heroDesc.innerHTML = t['hero-desc'];

    const heroCta1 = document.querySelector('.hero-cta .btn-primary span');
    if (heroCta1) heroCta1.textContent = t['hero-cta-1'];

    const heroCta2 = document.querySelector('.hero-cta .btn-outline span');
    if (heroCta2) heroCta2.textContent = t['hero-cta-2'];

    const heroNote = document.querySelector('.hero-note');
    if (heroNote) heroNote.innerHTML = t['hero-note'];

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

// ===== Mobile Menu =====
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
});

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
