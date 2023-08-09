export const choiceTabs = () => {
    if (document.querySelector('.choice')) {
        document.querySelectorAll('.choice__btn').forEach(function(tabsBtn) {
            tabsBtn.addEventListener('click', function(event) {
                const path = event.currentTarget.dataset.path
                document.querySelectorAll('.choice__swiper').forEach(function(choiceList) {
                    choiceList.classList.remove('choice__swiper_active')
                })
                document.querySelectorAll('.choice__btn').forEach(function(btnActive) {
                    btnActive.classList.remove('choice__btn_active')
                })
                document.querySelector(`[data-target="${path}"]`).classList.add('choice__swiper_active')
                document.querySelector(`[data-path="${path}"]`).classList.add('choice__btn_active')
            })
        })
    }
}
