
 
  let tooltipBtn = document.querySelectorAll('.js-tooltip');
  tippy(tooltipBtn, {
      theme: 'tooltip-theme',
      maxWidth: 250,
      allowHTML: true,
       trigger: 'mouseenter click focusin',
  });