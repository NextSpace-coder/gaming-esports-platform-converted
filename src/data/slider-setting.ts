// slider setting
export const gallery_slider_setting = {
    centeredSlides: true,
    centeredSlidesBounds: true,
    spaceBetween: 30,
    freeMode: false,
    observer: true,
    observeParents: true,
    breakpoints: {
      1920: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
  };