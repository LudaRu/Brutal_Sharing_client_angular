switchTheme(localStorage.getItem('themeName')); // same key as in app.component.ts

function getTheme() {
    return localStorage.getItem('themeName')
}

function switchTheme(theme) {
    if (theme) {
        const body = document.getElementsByTagName('body')[0];
        body.className = theme;
    }
}
