export const menu = () => {

    const menu = document.querySelector(".menu");
    const menuBtn = document.querySelector(".menu__btn");
    const menuDrop = document.querySelector(".menu__drop");
    const menuItems = document.querySelectorAll(".menu__item");
    const menuClose = document.querySelector('.menu__close')

    menuClose.addEventListener('click', () => {
        menuDrop.classList.remove('menu_active');
        document.body.style.overflowY = 'auto'
    })
    menuBtn.addEventListener("click", () => {

        if (!menuDrop.classList.contains('menu_active')) {
            menuDrop.classList.add('menu_active');
            document.body.style.overflowY = 'hidden'
        } else {
            menuDrop.classList.remove('menu_active');
            document.body.style.overflowY = 'auto'

        }

    });
    menuItems.forEach((item) => {
        item.addEventListener("click", () => {
            menuDrop.classList.remove("menu_active");
            document.body.style.overflowY = 'auto'
        });
    });
    window.addEventListener("click", (e) => {
        const target = e.target;
        if (!target.closest(".menu") &&
            !target.closest(".menu__btn")
        ) {
            menuDrop.classList.remove("menu_active");
            document.body.style.overflowY = 'auto'

        }
    });
}
