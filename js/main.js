'use strict';

let arrow = document.querySelector('.header__arrow');
arrow.addEventListener('click', () => {
    window.scrollTo({ top: 800, behavior: 'smooth' });
});

let swiperHeader = new Swiper('.mySwiperHeader', {
    effect: 'fade',
    direction: 'vertical',
    pagination: {
        el: '.back__pagination',
        clickable: true,
    },
});

let swiperMain = new Swiper('.mySwiperNews', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.main__arrow_next',
        prevEl: '.main__arrow_prev',
    },
    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30
        },
    },
});

window.addEventListener(
    'load',
    function () {
        let item = document.querySelectorAll('.gallery__img');
        Lightense(item);
    },
    false
);

function initMap() {
    let icon = {
        url: './img/svg/pin.svg',
        scaledSize: new google.maps.Size(40, 40),
    };

    let map = new google.maps.Map(document.querySelector('.map'), {
        center: { lat: 40.664112, lng: -73.897329 },
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

function grid() {
    let btnGallery = document.querySelector('.gallery__button');
    let gallery = document.querySelector('.gallery__town');

    btnGallery.addEventListener('click', () => {
        btnGallery.classList.toggle('active');
        gallery.classList.toggle('active');
    });
}

grid();

function scrollFunction() {
    let flyL = document.querySelector('.projects__img_left');
    let flyR = document.querySelector('.projects__img_right');

    if (document.documentElement.scrollTop >= 700 && window.innerWidth >= 1500) {
        flyL.style.left = '170px';
        flyL.style.top = '55px';
    }

    if (document.documentElement.scrollTop >= 700 && window.innerWidth < 1500) {
        flyL.style.top = '55px';
    }

    if (document.documentElement.scrollTop >= 1000 && window.innerWidth >= 1500) {
        flyR.style.right = '170px';
        flyR.style.top = '55px';
    }

    if (document.documentElement.scrollTop >= 1000 && window.innerWidth < 1500) {
        flyR.style.top = '55px';
    }
}

window.addEventListener('scroll', scrollFunction);
