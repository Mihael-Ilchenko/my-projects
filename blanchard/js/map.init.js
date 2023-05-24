// window.addEventListener('DOMContentLoaded', function() {
ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [55.7588937552434, 37.61449430186081],
            zoom: 14,
            controls: ['geolocationControl', 'zoomControl']
        }, {
            suppressMapOpenBlock: true,
            geolocationControlSize: "large",
            geolocationControlPosition: { top: "230px", right: "10px" },
            geolocationControlFloat: 'none',
            zoomControlSize: "small",
            zoomControlFloat: "none",
            zoomControlPosition: { top: "160px", right: "10px" }
        }


    )
    myMap.behaviors.disable(['scrollZoom']);
    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [35.759441151758544, 37.61537952721116]
        }
    });
    var myPlacemark = new ymaps.Placemark([55.75839145524345, 37.61370430186081], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/__contacts/map-icon.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [0, -20],
    });
    myMap.geoObjects.add(myGeoObject);
    myMap.geoObjects.add(myPlacemark);
}
// })
