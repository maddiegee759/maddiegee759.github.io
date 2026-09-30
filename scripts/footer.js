(() => {
    const footerMarkup = `
        <footer class="footer">
            <button class="footer-icon">
                <a href="mailto:maddie.gee.759@gmail.com">
                    <img src="assets/emailIcon.png" width="30">
                </a>
            </button>

            <button class="footer-icon">
            <a href="https://www.linkedin.com/in/maddie-gee-cs/" target="_blank">
                <img src="assets/linkedinIcon.png" width="30">
            </a>
            </button>

            <button class="footer-icon">
                <a href="https://github.com/maddiegee759" target="_blank">
                    <img src="assets/githubIcon.png" width="30">
                </a>
            </button>
        </footer>
    `;

    function mountFooter() {
        if (document.querySelector('.footer')) {
            return;
        }

        const template = document.createElement('template');
        template.innerHTML = footerMarkup.trim();
        document.body.appendChild(template.content.firstElementChild);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', mountFooter, { once: true });
    } else {
        mountFooter();
    }
})();
