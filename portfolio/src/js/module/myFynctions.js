export function scrollTop() {
    if (document.querySelector(".scroll-top")) {
        const btn = document.querySelector(".scroll-top");

        window.addEventListener(
            "scroll",
            () => {
                if (window.pageYOffset > 100) {
                    btn.style.display = "block";
                } else {
                    btn.style.display = "none";
                }
            }, { passive: true }
        );

        btn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

export const changeTheme = () => {
    const btnTheme = document.getElementById('theme');
    const srcTheme = document.getElementById('linkTheme');
    let activeTheme = localStorage.getItem('theme');

    btnTheme.addEventListener('click', () => {
        if (btnTheme.dataset.theme == 'light') {
            btnTheme.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark')
        } else {
            btnTheme.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light')
        }
        applyTheme(btnTheme.dataset.theme);


    })

    function applyTheme(nameTheme) {
        let urlTheme = `./css/${nameTheme}-theme.min.css`;
        srcTheme.href = urlTheme;
    }

    if (activeTheme == null) {
        applyTheme('light')
    } else {
        applyTheme(activeTheme)
    }


}
