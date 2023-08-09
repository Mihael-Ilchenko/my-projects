export const openCloseSearch = () => {
    if (document.querySelector('.search')) {
        const openBtn = document.getElementById('open-search');
        const closeBtn = document.getElementById('close-search');
        const search = document.getElementById('search');

        openBtn.addEventListener('click', () => {

            search.classList.add('search_active')

        })
        closeBtn.addEventListener('click', () => {
            search.classList.remove('search_active')
        })


        document.getElementById('form-search').addEventListener('submit', (e) => {
            e.preventDefault()
        })
    }
}

export const changeTheme = () => {
    const btnTheme = document.getElementById('theme-btn');
    const srcTheme = document.getElementById('theme');
    let activeTheme = localStorage.getItem('mode');

    btnTheme.addEventListener('click', () => {
        if (btnTheme.dataset.theme == 'lite') {
            btnTheme.setAttribute('data-theme', 'dark');
            localStorage.setItem('mode', 'dark')
        } else {
            btnTheme.setAttribute('data-theme', 'lite');
            localStorage.setItem('mode', 'lite')
        }
        applyTheme(btnTheme.dataset.theme);


    })

    function applyTheme(nameTheme) {
        let urlTheme = `./css/${nameTheme}-mode.css`;
        srcTheme.href = urlTheme;
    }

    if (activeTheme == null) {
        applyTheme('lite')
    } else {
        applyTheme(activeTheme)
    }


}
