// =============================================
// KDCN DIGITAL PLATFORM – MASTER JAVASCRIPT
// Version: 1.0
// =============================================

document.addEventListener('DOMContentLoaded', function() {

    // ---------- HAMBURGER MENU ----------
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // ---------- THEME TOGGLE ----------
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
        // Load saved theme
        if (localStorage.getItem('theme') === 'light') {
            document.body.classList.add('light');
            toggle.textContent = '☀️';
        }

        toggle.addEventListener('click', function() {
            document.body.classList.toggle('light');
            const isLight = document.body.classList.contains('light');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
            toggle.textContent = isLight ? '☀️' : '🌙';
        });
    }

});

