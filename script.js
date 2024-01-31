const scroll = new LocomotiveScroll({
    el: document.querySelector('#wrapper'),
    smooth: true
});

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "3",
        centeredSlides: false,
        spaceBetween: 120,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
    });
}

swiperAnimation();