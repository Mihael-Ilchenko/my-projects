const breakpoint = 1920;

function getWindowWidth() {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.body.clientWidth,
        document.documentElement.clientWidth
    );
}

function scrollToContent(link, isMobile) {
    if (isMobile && getWindowWidth() > breakpoint) {
        return;
    }

    const href = link.getAttribute("href").substring(1);
    const scrollTarget = document.getElementById(href);
    const elementPosition = scrollTarget.getBoundingClientRect().top;

    window.scrollBy({
        top: elementPosition,
        behavior: "smooth",
    });
}
document.querySelectorAll(".scroll").forEach((link) => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        scrollToContent(this, true);
    });
});
