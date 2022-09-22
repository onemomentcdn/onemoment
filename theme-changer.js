document.addEventListener('DOMContentLoaded', () => {
    const darkThemeFile = 'https://gitcdn.link/cdn/onemomentcdn/onemoment/main/theme-dark.min.css';
    const head = document.querySelector('head');
    head.insertAdjacentHTML('beforeend', `<link rel="stylesheet" href=${darkThemeFile}>`);

    const headerNav = document.querySelector('.header__nav');
    const themeChanger = `
        <div class="header__control row">
            <label for="toggle" class="theme-toggler settings-option" id="theme-toggler">
                <span class="theme-toggler__label">Тема</span>
                <input type="checkbox" id="toggle" class="theme-toggler__checkbox" checked="">
                <span aria-hidden="true" class="theme-toggler__switch"></span>
            </label>
        </div>
    `;
    headerNav.insertAdjacentHTML('afterend', themeChanger);

    const toggler = document.querySelector('.theme-toggler input[type="checkbox"]');
    const root = document.documentElement;
    const currentTheme = localStorage.getItem('theme') || "light";

    const toggleTheme = (e) => {
        if (e.target.checked) {
            root.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else{
            root.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }
    if (currentTheme == "light") {
        toggler.removeAttribute('checked');
    } else {
        toggler.checked = "true";
    }
    root.setAttribute('data-theme', currentTheme);
    toggler.addEventListener('change', toggleTheme, false);
});
