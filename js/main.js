'use strict'

let arrow = document.querySelector('.header__arrow');
arrow.addEventListener('click', () => {
    window.scrollTo({ top: 1100, behavior: 'smooth' });
});

let swiperHeader = new Swiper('.mySwiperHeader', {
    effect: 'fade',
    pagination: {
        el: '.back__pagination',
        clickable: true,
    },
});

let swiperMain = new Swiper('.mySwiperNews', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.main__arrow_next',
        prevEl: '.main__arrow_prev',
    },
});

window.addEventListener(
    'load',
    function () {
        var el = document.querySelectorAll('.gallery__img');
        Lightense(el);
    },
    false
);

function initMap() {
    const icon = {
        url: './img/svg/marker6.svg',
        scaledSize: new google.maps.Size(30, 30),
    };

    const map = new google.maps.Map(document.querySelector('.map'), {
        center: { lat: 40.6912018, lng: -73.9110138 },
        zoom: 12,
        styles: [
            {
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#f5f5f5',
                    },
                ],
            },
            {
                elementType: 'labels.icon',
                stylers: [
                    {
                        visibility: 'off',
                    },
                ],
            },
            {
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#616161',
                    },
                ],
            },
            {
                elementType: 'labels.text.stroke',
                stylers: [
                    {
                        color: '#f5f5f5',
                    },
                ],
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#bdbdbd',
                    },
                ],
            },
            {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#eeeeee',
                    },
                ],
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#757575',
                    },
                ],
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#e5e5e5',
                    },
                ],
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#9e9e9e',
                    },
                ],
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#ffffff',
                    },
                ],
            },
            {
                featureType: 'road.arterial',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#757575',
                    },
                ],
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#dadada',
                    },
                ],
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#616161',
                    },
                ],
            },
            {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#9e9e9e',
                    },
                ],
            },
            {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#e5e5e5',
                    },
                ],
            },
            {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#eeeeee',
                    },
                ],
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [
                    {
                        color: '#c9c9c9',
                    },
                ],
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [
                    {
                        color: '#9e9e9e',
                    },
                ],
            },
        ],
    });

    let marker = new google.maps.Marker({
        position: { lat: 40.6912018, lng: -73.9110138 },
        map,
        title: 'FATHER KNOWS BEST',
        icon: icon,
        animation: google.maps.Animation.DROP,
        open() {
            let info = new google.maps.InfoWindow({
                content: `<div ><img src="./img/officee.webp" alt="cafe" class="popup">
                <p>This is our great office. We will be glad to see you during office hours.</p></div>`,
            });
            this.addListener('click', function () {
                info.open(map, this);
            });
        },
    });
    marker.open();
}

window.initMap = initMap;
