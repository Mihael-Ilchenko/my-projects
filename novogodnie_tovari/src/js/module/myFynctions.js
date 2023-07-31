import { svgFill, svgNoFill } from "../data/svgIcons";

export function likes(value) {
    if (document.querySelector('.like')) {
        let count = value;
        let like = false;
        const btns = document.querySelectorAll('.like');
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                like = !like;
                btn.innerHTML = like ? `${svgFill} <span class="like__count">${count + 1}</span>` : svgNoFill;

            })
            btn.innerHTML = svgNoFill
        })
    }

}




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
