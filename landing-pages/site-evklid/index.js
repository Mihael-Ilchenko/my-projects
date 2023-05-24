// search
window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#form-open').addEventListener('click', function() {
        document.querySelector('.search__wrapp').classList.toggle('search--active')
    })
    document.querySelector('#form__btn-close').addEventListener('click', function() {
            document.querySelector('.search__wrapp').classList.remove('search--active')
        })
        // burger-menu
    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#burger__nav').classList.toggle('burger__nav--active')
        document.querySelector('.burger-menu__span-1').classList.toggle('burger-menu__span-1--active'),
            document.querySelector('.burger-menu__span-0').classList.toggle('burger-menu__span-0--active'),
            document.querySelector('.burger-menu__span-2').classList.toggle('burger-menu__span-2--active')
    });




    // карта
    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);

    function init() {
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.76, 37.64],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 7
        });
        // Создание геообъекта с типом точка (метка).
        var myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point", // тип геометрии - точка
                coordinates: [55.8, 37.8] // координаты точки
            }
        });
        var myPlacemark = new ymaps.Placemark(
            [50.49997265075712, 36.684643980878455], {}, {
                iconLayout: 'default#image',
                iconImageHref: 'favicon.svg',
                iconImageSize: [30, 30],
                iconImageOffset: [-3, -42]
            });
        // Размещение геообъекта на карте.
        myMap.geoObjects.add(myGeoObject);
        myMap.geoObjects.add(myPlacemark);
    }






    // tabs
    document.querySelectorAll('.tabs-btn').forEach(function(tabsBtn) {
            tabsBtn.addEventListener('click', function(event) {
                const path = event.currentTarget.dataset.path
                document.querySelectorAll('.section-work__tabs-content').forEach(function(sectionWorkTabsContent) {
                    sectionWorkTabsContent.classList.remove('tabs__content--active')
                })
                document.querySelectorAll('.tabs-btn').forEach(function(tabsActiv) {
                    tabsActiv.classList.remove('tabs__btn--active')
                })
                document.querySelector(`[data-target="${path}"]`).classList.add('tabs__content--active')
                document.querySelector(`[data-path="${path}"]`).classList.add('tabs__btn--active')
            })
        })
        // hero-swiper
    const swiper = new Swiper('.swiper', {
            slidesPerView: 1,
            loop: true,
            // пагинация
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                effect: 'cube',
            },
            autoplay: {
                delay: 3000,
            },
            keyboard: {
                enabled: true,
                onlyInViewport: false,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true,
            }
        })
        // questions-accordion
    $(function() {
        $("#accordion").accordion({
            icons: false,
            heightStyle: 'content',
            animate: 500,
            active: false,
            collapsible: true,
        });
    });
})
