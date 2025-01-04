function setTheme(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
}

function setSystemTheme() {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const theme = darkModeMediaQuery.matches ? 'dark' : 'light';
    setTheme(theme);

    // Update theme when system preference changes
    darkModeMediaQuery.addEventListener('change', (e) => {
        const theme = e.matches ? 'dark' : 'light';
        setTheme(theme);
    });
}
