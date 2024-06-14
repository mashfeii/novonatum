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
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
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
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
  // Добавление классов слайдера
  // при необходимости отключить
  bildSliders();

  let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar");
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
});
