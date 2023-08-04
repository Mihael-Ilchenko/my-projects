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
