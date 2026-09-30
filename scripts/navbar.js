(() => {
    const navbarMarkup = `
        <nav class="navbar">
            <div class="navbar-brand">
                <a href="index.html"target="_self">Maddie Gee</a>
            </div>

            <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-menu">
                <img src="assets/menu-button.png" width="30">
            </button>

            <div class="nav-menu" id="nav-menu">
                <a href="education.html" target="_self">Education</a>
                <a href="portfolio.html" target="_self">Portfolio</a>
                <a href="skills.html" target="_self">Skills</a>
                <a href="experience.html" target="_self">Experience</a>
            </div>
        </nav>
    `;

    function mountNavbar() {
        if (document.querySelector('.navbar')) {
            return;
        }

        const template = document.createElement('template');
        template.innerHTML = navbarMarkup.trim();
        const navbar = template.content.firstElementChild;

        navbar.querySelector('.nav-toggle').addEventListener('click', () => {
            const navMenu = navbar.querySelector('.nav-menu');
            const isOpen = navMenu.classList.toggle('is-open');

            navbar.querySelector('.nav-toggle').setAttribute('aria-expanded', String(isOpen));
        });

        document.body.prepend(navbar);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', mountNavbar, { once: true });
    } else {
        mountNavbar();
    }
})();
