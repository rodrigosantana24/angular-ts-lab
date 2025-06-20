// Espera o DOM carregar completamente antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    /**
     * Inicializa todas as funcionalidades do site.
     * Esta abordagem modular torna o código mais fácil de ler e manter.
     */
    function init() {
        initThemeSwitcher();
        initMobileMenu();
        initSmoothScrolling();
        initScrollAnimations();
        initTypingAnimation();
        initEmailCopy();
    }

    /**
     * Gerencia o sistema de troca de tema (Dark/Light).
     * - Verifica a preferência do sistema operacional do usuário.
     * - Salva a escolha do usuário no localStorage.
     * - Atualiza a UI (ícone e classes do body).
     */
    function initThemeSwitcher() {
        const themeSwitcher = document.getElementById('theme-switcher');
        const sunIcon = 'fa-sun';
        const moonIcon = 'fa-moon';
        const currentTheme = localStorage.getItem('theme');
        let isDark = true;

        const updateTheme = (dark) => {
            isDark = dark;
            const icon = themeSwitcher.querySelector('i');
            document.body.classList.toggle('dark-theme', isDark);
            document.body.classList.toggle('light-theme', !isDark);
            icon.classList.toggle(moonIcon, isDark);
            icon.classList.toggle(sunIcon, !isDark);
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        };

        // Define o tema inicial baseado no localStorage ou na preferência do sistema
        if (currentTheme) {
            updateTheme(currentTheme === 'dark');
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            updateTheme(true);
        } else {
            updateTheme(false); // Default para light se não houver preferência
        }

        themeSwitcher.addEventListener('click', () => updateTheme(!isDark));
    }
    
    /**
     * Controla o menu de navegação em dispositivos móveis.
     */
    function initMobileMenu() {
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        if (!menuToggle || !navLinks) return;

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Fecha o menu ao clicar em um link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            });
        });
    }

    /**
     * Implementa a rolagem suave para links de âncora.
     * O comportamento de rolagem agora é definido principalmente pelo CSS `scroll-behavior: smooth`.
     * Este JS garante compatibilidade e fecha o menu móvel.
     */
    function initSmoothScrolling() {
        // A rolagem suave principal agora é feita via CSS. 
        // Este código é um fallback e ajuda a fechar o menu mobile.
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href.length > 1) {
                    e.preventDefault();
                    document.querySelector(href).scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    /**
     * Anima elementos quando eles entram na tela (viewport).
     * Usa IntersectionObserver para performance.
     */
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        if (!animatedElements.length) return;

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = parseInt(entry.target.dataset.animationDelay) || 0;
                    setTimeout(() => {
                        entry.target.classList.add('is-visible');
                    }, delay * 200); // Converte o delay em milissegundos
                    
                    observer.unobserve(entry.target); // Anima apenas uma vez
                }
            });
        }, { threshold: 0.1 });

        animatedElements.forEach(el => observer.observe(el));
    }
    
    /**
     * Cria um efeito de digitação animado e cíclico.
     * Percorre um array de frases.
     */
    async function initTypingAnimation() {
        const typedTextSpan = document.getElementById('typed-text');
        if (!typedTextSpan) return;
        
        const phrases = [
            "Olá, eu sou Rodrigo Santana!",
            "Desenvolvedor Full-Stack.",
            "Vamos criar algo incrível."
        ];
        let phraseIndex = 0;

        const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

        while (true) {
            const currentPhrase = phrases[phraseIndex];
            // Typing
            for (let i = 0; i < currentPhrase.length; i++) {
                typedTextSpan.textContent += currentPhrase[i];
                await sleep(100);
            }
            await sleep(1500); // Pause after typing

            // Deleting
            for (let i = 0; i < currentPhrase.length; i++) {
                typedTextSpan.textContent = typedTextSpan.textContent.slice(0, -1);
                await sleep(50);
            }
            await sleep(500); // Pause after deleting

            phraseIndex = (phraseIndex + 1) % phrases.length;
        }
    }

    /**
     * Gerencia a funcionalidade de copiar o e-mail para a área de transferência.
     */
    function initEmailCopy() {
        const emailLink = document.getElementById('email-link');
        const feedback = document.getElementById('copy-feedback');

        if (!emailLink || !feedback) return;

        emailLink.addEventListener('click', (event) => {
            event.preventDefault();
            const email = emailLink.dataset.email;
            
            navigator.clipboard.writeText(email).then(() => {
                feedback.classList.add('show');
                setTimeout(() => {
                    feedback.classList.remove('show');
                }, 2000);
            }).catch(err => {
                console.error('Falha ao copiar e-mail: ', err);
                alert('Não foi possível copiar o e-mail. Por favor, copie manualmente.');
            });
        });
    }

    // Inicia tudo!
    init();
});