import { _slideUp, _slideDown, _slideToggle } from "./functions.js";

document.addEventListener("DOMContentLoaded", function () {
  const fileInputs = document.querySelectorAll('input[type="file"]');
  if (fileInputs.length) {
    fileInputs.forEach((input) => {
      input.addEventListener("change", function (e) {
        const fileName = e.target.files[0].name;
        e.target
          .closest("label")
          .querySelector(".form__file-text").textContent = fileName;
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const functionShowMoreBlocks = document.querySelectorAll(".functions");

  functionShowMoreBlocks.forEach((block) => {
    const showMoreButton = block.querySelector("[data-showmore-button]");
    const showMoreContent = block.querySelector("[data-showmore-content]");

    showMoreButton.addEventListener("click", () => {
      showMoreButton.classList.toggle("_active");
      _slideToggle(showMoreContent);
    });
  });
});

window.addEventListener("load", function () {
  // case for no slider pages
  if (document.querySelectorAll(".reviews__slider").length == 0) return;
  // case for mobile
  if (window.matchMedia("(max-width: 991.98px)").matches) return;

  // on desktop -- hide
  document.querySelectorAll(".reviews__slide-text").forEach((el) => {
    const paragraph = el.children[0];
    if (paragraph.offsetHeight == el.offsetHeight) return;

    el.classList.add("_overflowed");
    let isOpened = false;

    const button = document.createElement("button");
    button.classList.add("reviews__slide-overflow");
    button.classList.add("button");
    button.textContent = "Читать далее";

    button.addEventListener("click", function () {
      el.classList.toggle("_shown");
      button.textContent = isOpened ? "Читать далее" : "Скрыть";
      isOpened = !isOpened;
    });

    el.closest(".reviews__slide").insertAdjacentElement("beforeend", button);
  });
});
