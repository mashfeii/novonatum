/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper from "swiper";
import {
  Navigation,
  Pagination,
  Controller,
  Thumbs,
  EffectFade,
  Grid,
} from "swiper/modules";
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
// import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
import "swiper/scss";
import "swiper/scss/effect-fade";
import "swiper/scss/grid";

// Инициализация слайдеров
function initSliders() {
  // Перечень слайдеров
  // Проверяем, есть ли слайдер на стронице
  if (document.querySelector(".feedback__slider")) {
    const textSlider = new Swiper(".feedback__slider-text", {
      modules: [Pagination, Controller],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true,
      speed: 800,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    const authorSlider = new Swiper(".feedback__slider", {
      modules: [Navigation, Controller],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true,
      speed: 800,
      navigation: {
        prevEl: ".feedback__arrow.swiper-button-prev",
        nextEl: ".feedback__arrow.swiper-button-next",
      },
    });
    textSlider.controller.control = authorSlider;
    authorSlider.controller.control = textSlider;
  }

  if (document.querySelector(".overview__slider-thumbs")) {
    const thumbsSlider = new Swiper(".overview__slider-thumbs", {
      modules: [Thumbs],
      observer: true,
      observeParents: true,
      direction: "vertical",
      loop: true,
      slidesPerView: 4,
      spaceBetween: 22,
      speed: 800,
      breakpoints: {
        320: {
          spaceBetween: 5,
        },
        439.98: {
          spaceBetween: 10,
        },
        709.98: {
          spaceBetween: 22,
        },
      },
    });
    const mainSlider = new Swiper(".overview__slider-main", {
      modules: [Navigation, Thumbs, EffectFade],
      observer: true,
      observeParents: true,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 600,
      effect: "fade",
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },
      thumbs: {
        swiper: thumbsSlider,
        multipleActiveThumbs: false,
      },
    });
  }

  if (document.querySelector(".reviews__slider")) {
    document.querySelectorAll(".reviews__slider").forEach((slider) => {
      const prevEl = slider
        .closest(".reviews")
        .querySelector(".swiper-button-prev");
      const nextEl = slider
        .closest(".reviews")
        .querySelector(".swiper-button-next");

      new Swiper(slider, {
        modules: [Navigation],
        observer: true,
        observeParents: true,
        loop: true,
        autoHeight: true,
        slidesPerView: 2,
        spaceBetween: 31,
        speed: 800,
        navigation: {
          prevEl: prevEl,
          nextEl: nextEl,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1200: {
            spaceBetween: 31,
          },
        },
      });
    });
  }

  if (document.querySelector(".partner-info__slider")) {
    document.querySelectorAll(".partner-info__slider").forEach((slider) => {
      const prevEl = slider
        .closest(".partner-info__block")
        .querySelector(".swiper-button-prev");
      const nextEl = slider
        .closest(".partner-info__block")
        .querySelector(".swiper-button-next");
      new Swiper(slider, {
        modules: [Navigation, Grid],
        grid: {
          rows: 2,
        },
        observer: true,
        observeParents: true,
        loop: true,
        slidesPerView: 2,
        spaceBetween: 25,
        speed: 800,
        navigation: {
          prevEl: prevEl,
          nextEl: nextEl,
        },
        breakpoints: {
          320: {
            spaceBetween: 10,
          },
          479.98: {
            spaceBetween: 15,
          },
          1359.98: {
            spaceBetween: 25,
          },
        },
      });
    });
  }

  if (document.querySelector(".video__slider")) {
    document.querySelectorAll(".video__slider").forEach((slider) => {
      const prevEl = slider
        .closest(".video")
        .querySelector(".swiper-button-prev");
      const nextEl = slider
        .closest(".video")
        .querySelector(".swiper-button-next");
      const pagination = slider
        .closest(".video")
        .querySelector(".swiper-pagination");

      new Swiper(slider, {
        modules: [Navigation, Pagination],
        observer: true,
        observeParents: true,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 800,
        navigation: {
          prevEl: prevEl,
          nextEl: nextEl,
        },
        pagination: {
          el: pagination,
          clickable: true,
        },
      });
    });
  }
}

window.addEventListener("load", function(e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
});
