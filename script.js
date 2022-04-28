new Swiper('.intro-block__slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    loop: true
});

let spacesSlider = new Swiper('.spaces-block', {
    navigation: {
        nextEl: '.arrow-nav-block__next-btn',
        prevEl: '.arrow-nav-block__prev-btn'
    },
    pagination: {
        el: '.spaces-block__nav-container',
        clickable: true
    },
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true
});

let spacesSliderIndex = document.querySelector('.spaces-block__nav-index');

spacesSlider.on('slideChange', function() {
    spacesSliderIndex.innerHTML = spacesSlider.realIndex + 1;
});

new Swiper('.reviews-block__list-container', {
    navigation: {
        nextEl: '.reviews-block__nav-arrows .arrow-nav-block__next-btn',
        prevEl: '.reviews-block__nav-arrows .arrow-nav-block__prev-btn'
    },
    pagination: {
        el: '.reviews-block__nav-container',
        clickable: true
    },
    slidesPerView: 2.33,
    loop: true
});

let gallerySwiper = new Swiper('.gallery-block', {
    navigation: {
        nextEl: '.gallery-block__nav-arrows .arrow-nav-block__next-btn',
        prevEl: '.gallery-block__nav-arrows .arrow-nav-block__prev-btn'
    },
    slidesPerView: 2.92,
    loop: true,
    slidesOffsetBefore: 80
});


let facilitiesBtns = document.querySelectorAll('.facilities-block__item-btn');
let facilitiesImage = document.querySelector('.facilities-block__image');

facilitiesBtns.forEach((item) => item.addEventListener('click', facilitiesBtnActive));

function facilitiesBtnActive(event) {
    facilitiesBtns.forEach((item) => item.classList.remove('facilities-block__item-btn_active'));
    event.target.classList.add('facilities-block__item-btn_active');
    facilitiesImage.src = `./assets/img/facilities-image${event.target.dataset.index}.png`;
}