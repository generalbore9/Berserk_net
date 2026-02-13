        // === DATA ===
        const translations = {
            en: {
                enter: "INITIALIZE SYSTEM",
                enterSubtitle: "System security ready for initialization",
                tools: "Tools", docs: "Documentation", about: "About",
                heroTitle: "OSINT ARSENAL",
                heroSubtitle: "Professional tools for intelligence gathering, encoding, and analysis. No compromises.",
                startFree: "Start Free", documentation: "Documentation",
                statTools: "Tools",
                toolDesc: "This tool is in development. Join the waitlist for early access.",
                joinWaitlist: "Join Waitlist",
                registrationTitle: "Sign Up", registrationSubtitle: "Create an account to access all tools.",
                username: "Username", email: "Email", password: "Password",
                createAccount: "Create Account",
                waitlistSuccess: "Added to waitlist!", registrationSuccess: "Account created!",
                betaBadge: "Beta",
                close: "Close",
                docsTitle: "Documentation",
                docsContent: "Welcome to the Arsenal. Berserk.net is your tactical advantage. Select a tool to begin analysis.",
                aboutTitle: "About Us",
                aboutContent: "We create tools for those who make no compromises in security and information.",
                networkTitle: "NETWORK ACCESS",
                ownerRole: "Owner", projectRole: "Project Channel", adapterRole: "Adapter",
                online: "Online", channel: "Channel", support: "Support"
            },
            ru: {
                enter: "ИНИЦИАЛИЗАЦИЯ",
                enterSubtitle: "Система безопасности готова к запуску",
                tools: "Инструменты", docs: "Документация", about: "О нас",
                heroTitle: "АРСЕНАЛ OSINT",
                heroSubtitle: "Профессиональные инструменты для сбора разведданных, кодирования и анализа. Без компромиссов.",
                startFree: "Начать", documentation: "Документация",
                statTools: "Инструментов",
                toolDesc: "Этот инструмент сейчас в разработке. Присоединитесь к листу ожидания.",
                joinWaitlist: "В лист ожидания",
                registrationTitle: "Регистрация", registrationSubtitle: "Создайте аккаунт для доступа.",
                username: "Имя пользователя", email: "Email", password: "Пароль",
                createAccount: "Создать аккаунт",
                waitlistSuccess: "Вы добавлены в лист ожидания!", registrationSuccess: "Аккаунт создан!",
                betaBadge: "Бета",
                close: "Закрыть",
                docsTitle: "Документация",
                docsContent: "Добро пожаловать в Арсенал. Berserk.net — это ваше тактическое преимущество. Выберите инструмент для начала анализа.",
                aboutTitle: "О нас",
                aboutContent: "Мы создаем инструменты для тех, кто не идет на компромиссы в вопросах безопасности.",
                networkTitle: "Сетевой Доступ",
                ownerRole: "Владелец", projectRole: "Проект", adapterRole: "Адаптер",
                online: "Онлайн", channel: "Канал", support: "Поддержка"
            }
        };

        const toolsData = [
            { id: 1, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`, name: { en: "IP Analyzer", ru: "Анализатор IP" }, desc: { en: "Deep analysis of IP addresses.", ru: "Глубокий анализ IP-адресов." } },
            { id: 2, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`, name: { en: "Hash Decryptor", ru: "Дешифратор Хешей" }, desc: { en: "Identify and decrypt hash types.", ru: "Идентификация и дешифрование хешей." } },
            { id: 3, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`, name: { en: "Geo Tracker", ru: "Гео Трекер" }, desc: { en: "Track location data from coordinates.", ru: "Отслеживание локации по координатам." } },
            { id: 4, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`, name: { en: "Mail Hunter", ru: "Охотник за Почтой" }, desc: { en: "Search for emails in data breaches.", ru: "Поиск email в утечках данных." } },
            { id: 5, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`, name: { en: "Domain Check", ru: "Проверка Домена" }, desc: { en: "WHOIS and DNS lookup tools.", ru: "Инструменты WHOIS и DNS поиска." } },
            { id: 6, icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`, name: { en: "Threat Intel", ru: "Угрозы Intel" }, desc: { en: "Check IP/Domain against blacklists.", ru: "Проверка IP/Домена по черным спискам." } }
        ];

        // === APP STATE ===
        const app = {
            lang: localStorage.getItem('lang') || 'ru',
            isModalOpen: false
        };

        // === DOM ELEMENTS ===
        const els = {
            enterScreen: document.getElementById('enter-screen'),
            enterBtn: document.getElementById('enter-btn'),
            app: document.getElementById('app'),
            langToggle: document.getElementById('lang-toggle'),
            mobileLangToggle: document.getElementById('mobile-lang-toggle'),
            toolsGrid: document.getElementById('tools-grid'),
            modalOverlay: document.getElementById('modal-overlay'),
            modalBody: document.getElementById('modal-body'),
            modalClose: document.getElementById('modal-close'),
            toast: document.getElementById('toast'),
            mobileMenuBtn: document.getElementById('mobile-menu-btn'),
            mobileNav: document.getElementById('mobile-nav'),
            statTools: document.getElementById('stat-tools')
        };

        // === FUNCTIONS ===
        function init() {
            // Enter Screen
            els.enterBtn.addEventListener('click', () => {
                els.enterScreen.classList.add('hidden');
                setTimeout(() => {
                    els.enterScreen.style.display = 'none';
                    els.app.classList.add('visible');
                    animateStats();
                }, 800);
            });

            // Language
            updateLanguage();
            els.langToggle.addEventListener('click', toggleLanguage);
            els.mobileLangToggle.addEventListener('click', toggleLanguage);

            // Mobile Menu
            els.mobileMenuBtn.addEventListener('click', toggleMobileMenu);

            // Modals
            els.modalClose.addEventListener('click', closeModal);
            els.modalOverlay.addEventListener('click', (e) => {
                if (e.target === els.modalOverlay) closeModal();
            });
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && app.isModalOpen) closeModal();
            });

            // Nav Links (Docs/About)
            document.getElementById('nav-docs').addEventListener('click', () => openModal('docs'));
            document.getElementById('mobile-docs').addEventListener('click', () => { openModal('docs'); toggleMobileMenu(); });
            document.getElementById('nav-about').addEventListener('click', () => openModal('about'));
            document.getElementById('mobile-about').addEventListener('click', () => { openModal('about'); toggleMobileMenu(); });
            
            // Hero Buttons
            document.getElementById('btn-start-free').addEventListener('click', () => openModal('signup'));
            document.getElementById('btn-docs-hero').addEventListener('click', () => openModal('docs'));

            // Render Tools
            renderTools();
        }

        function toggleLanguage() {
            app.lang = app.lang === 'ru' ? 'en' : 'ru';
            localStorage.setItem('lang', app.lang);
            updateLanguage();
            renderTools(); // Re-render to update tool names
        }

        function updateLanguage() {
            const t = translations[app.lang];
            
            // Update Text
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (t[key]) el.textContent = t[key];
            });

            // Update Glitch Text Data Attribute
            const heroTitle = document.getElementById('hero-title');
            if (heroTitle) heroTitle.setAttribute('data-text', t.heroTitle);

            // Update Enter Screen
            document.getElementById('enter-subtitle').textContent = t.enterSubtitle;

            // Update Buttons
            els.langToggle.textContent = app.lang.toUpperCase();
            els.mobileLangToggle.textContent = app.lang.toUpperCase();
        }

        function renderTools() {
            const t = translations[app.lang];
            els.toolsGrid.innerHTML = toolsData.map(tool => `
                <div class="card" onclick="openModal('tool', ${tool.id})">
                    <div class="card-icon">${tool.icon}</div>
                    <h3>${tool.name[app.lang]}</h3>
                    <p>${tool.desc[app.lang]}</p>
                    <span class="beta-badge">${t.betaBadge}</span>
                </div>
            `).join('');
        }

        function animateStats() {
            let count = 0;
            const target = toolsData.length;
            const interval = setInterval(() => {
                count++;
                els.statTools.textContent = count;
                if (count >= target) clearInterval(interval);
            }, 100);
        }

        function toggleMobileMenu() {
            els.mobileNav.classList.toggle('active');
        }

        function scrollToTools() {
            document.getElementById('tools').scrollIntoView({ behavior: 'smooth' });
        }

        function openModal(type, id = null) {
            app.isModalOpen = true;
            const t = translations[app.lang];
            let content = '';

            if (type === 'tool') {
                const tool = toolsData.find(tl => tl.id === id);
                content = `
                    <div style="text-align:center; margin-bottom:2rem;">
                        <div style="color:var(--accent); margin-bottom:1rem; transform:scale(1.5);">${tool.icon}</div>
                        <h2 style="font-size:1.5rem; text-transform:uppercase; margin-bottom:0.5rem;">${tool.name[app.lang]}</h2>
                        <p style="color:var(--text-muted);">${t.toolDesc}</p>
                    </div>
                    <button class="btn btn-primary" style="width:100%; justify-content:center;" onclick="handleWaitlist()">
                        ${t.joinWaitlist}
                    </button>
                `;
            } else if (type === 'signup') {
                content = `
                    <h2 style="font-size:1.5rem; text-transform:uppercase; margin-bottom:0.5rem; text-align:center;">${t.registrationTitle}</h2>
                    <p style="color:var(--text-muted); text-align:center; margin-bottom:2rem;">${t.registrationSubtitle}</p>
                    <form onsubmit="handleSignup(event)">
                        <div class="form-group">
                            <label class="form-label">${t.username}</label>
                            <input type="text" class="form-input" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">${t.email}</label>
                            <input type="email" class="form-input" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">${t.password}</label>
                            <input type="password" class="form-input" required>
                        </div>
                        <button type="submit" class="btn btn-primary" style="width:100%; justify-content:center;">${t.createAccount}</button>
                    </form>
                `;
            } else if (type === 'docs') {
                content = `
                    <h2 style="font-size:1.5rem; text-transform:uppercase; margin-bottom:1rem; text-align:center;">${t.docsTitle}</h2>
                    <p style="color:var(--text-muted); line-height:1.6;">${t.docsContent}</p>
                `;
            } else if (type === 'about') {
                content = `
                    <h2 style="font-size:1.5rem; text-transform:uppercase; margin-bottom:1rem; text-align:center;">${t.aboutTitle}</h2>
                    <p style="color:var(--text-muted); line-height:1.6;">${t.aboutContent}</p>
                `;
            }

            els.modalBody.innerHTML = content;
            els.modalOverlay.classList.add('active');
        }

        function closeModal() {
            app.isModalOpen = false;
            els.modalOverlay.classList.remove('active');
        }

        function handleWaitlist() {
            showToast(translations[app.lang].waitlistSuccess);
            closeModal();
        }

        function handleSignup(e) {
            e.preventDefault();
            showToast(translations[app.lang].registrationSuccess);
            closeModal();
        }

        function showToast(msg) {
            els.toast.textContent = msg;
            els.toast.classList.add('show');
            setTimeout(() => els.toast.classList.remove('show'), 3000);
        }

        // Run Init\

        // Анализ IP
async function analyzeIP(e) {
    e.preventDefault();
    const ip = document.getElementById('ip-input').value.trim();
    const resultDiv = document.getElementById('ip-result');
    if (!ip) return;

    resultDiv.innerHTML = '<span class="text-yellow-400">Анализ...</span>';

    try {
        // Геолокация
        const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
        const geo = await geoRes.json();

        // WHOIS
        const whoisRes = await fetch(`https://api.hackertarget.com/whois/?q=${ip}`);
        const whois = await whoisRes.text();

        let output = `IP: ${ip}\n\n`;

        if (geo.error) {
            output += `Ошибка геолокации: ${geo.reason}\n\n`;
        } else {
            output += `Страна: ${geo.country_name || '-'}\n`;
            output += `Город: ${geo.city || '-'}\n`;
            output += `Провайдер: ${geo.org || geo.asn || '-'}\n`;
            output += `Широта/Долгота: ${geo.latitude || '-'} / ${geo.longitude || '-'}\n\n`;
        }

        output += `WHOIS:\n${whois.substring(0, 1500)}${whois.length > 1500 ? '...\n(полный WHOIS слишком большой, сокращено)' : ''}`;

        resultDiv.innerHTML = `<pre class="bg-neutral-950 p-4 rounded overflow-auto max-h-96">${output}</pre>`;
    } catch (err) {
        resultDiv.innerHTML = `<span class="text-red-400">Ошибка: ${err.message}</span>`;
    }
}

// Определение типа хеша
function identifyHash(e) {
    e.preventDefault();
    const hash = document.getElementById('hash-input').value.trim().toLowerCase();
    const resultDiv = document.getElementById('hash-result');

    if (!hash) return;

    let type = 'Неизвестный тип';
    const len = hash.length;

    if (/^[0-9a-f]{32}$/i.test(hash)) type = 'MD5';
    else if (/^[0-9a-f]{40}$/i.test(hash)) type = 'SHA-1';
    else if (/^[0-9a-f]{64}$/i.test(hash)) type = 'SHA-256';
    else if (/^[0-9a-f]{128}$/i.test(hash)) type = 'SHA-512';
    else if (hash.startsWith('$2a$') || hash.startsWith('$2b$') || hash.startsWith('$2y$')) type = 'bcrypt';
    else if (/^\$1\$[./0-9A-Za-z]{8}\$[./0-9A-Za-z]{22}$/.test(hash)) type = 'MD5 crypt';
    else if (hash.startsWith('$P$') || hash.startsWith('$H$')) type = 'phpBB / WordPress';
    else if (/^NTLM [0-9a-f]{32}$/i.test(hash)) type = 'NTLM';

    resultDiv.innerHTML = `<strong>Тип хеша:</strong> ${type}<br><br><small class="text-neutral-500">Это определение по длине и формату. Для точной проверки используйте специализированные сервисы.</small>`;
}

// Проверка утечек email (HIBP)
async function checkEmailBreaches(e) {
    e.preventDefault();
    const email = document.getElementById('email-input').value.trim();
    const resultDiv = document.getElementById('email-result');

    if (!email) return;

    resultDiv.innerHTML = '<span class="text-yellow-400">Проверка утечек...</span>';

    try {
        const res = await fetch(`https://haveibeenpwned.com/api/v3/breachedaccount/${encodeURIComponent(email)}?truncateResponse=false`, {
            headers: { 'User-Agent': 'BerserkOSINT' }
        });

        if (res.status === 404) {
            resultDiv.innerHTML = '<span class="text-green-400">Утечек не найдено. Ваш email не был скомпрометирован в известных базах.</span>';
            return;
        }

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const breaches = await res.json();

        let output = `<strong>Найдено утечек: ${breaches.length}</strong>\n\n`;
        breaches.forEach(b => {
            output += `• ${b.Name} (${b.BreachDate})\n  Описание: ${b.Description}\n  Утечки: ${b.DataClasses.join(', ')}\n\n`;
        });

        resultDiv.innerHTML = `<pre class="bg-neutral-950 p-4 rounded overflow-auto max-h-96">${output}</pre>`;
    } catch (err) {
        resultDiv.innerHTML = `<span class="text-red-400">Ошибка: ${err.message} (HIBP может ограничивать запросы без API-ключа)</span>`;
    }
}
        init();
  