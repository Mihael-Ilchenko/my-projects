document.addEventListener("DOMContentLoaded", () => {
    let tooltipBtn = document.querySelectorAll('.js-partners-tooltip');

    tippy(tooltipBtn, {
        theme: 'partners-tooltip-theme',
        maxWidth: 250,
        allowHTML: true,
        trigger: 'mouseenter click focusin',
    });

})
