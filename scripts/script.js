var swiper = new Swiper(".mySwiperOne", {
  slidesPerView: 3,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 4500,
  allowTouchMove: false,
  breakpoints: {
    // در سایز تبلت، نمایش 2 محتوا
    768: {
      slidesPerView: 4,
    },
    // در سایز موبایل، نمایش 1 محتوا
    480: {
      slidesPerView: 3,
    },
    // در سایز دسکتاپ، نمایش 3 محتوا
    1200: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".mySwiperTwo", {

  slidesPerView: "auto",
  grabCursor: true,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",

  },
  autoplay: {
    delay: 2800,
    disableOnInteraction: false,
  },
  breakpoints: {
    // در سایز تبلت، نمایش 2 محتوا
    768: {
      slidesPerView: 2,
    },
    // در سایز موبایل، نمایش 1 محتوا
    480: {
      slidesPerView: 1,
    },
    // در سایز دسکتاپ، نمایش 3 محتوا
    1200: {
      slidesPerView: 3,
    },
  },

});

var swiper5 = new Swiper(".swiperComment", {
  effect: "flip",
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-comment-next",
    prevEl: ".swiper-comment-prev",
  },

});
