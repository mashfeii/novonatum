// Подключение функционала "Чертогов Фрилансера"
import { _slideUp, _slideDown, _slideToggle } from "./functions.js";
// Подключение списка активных модулей
// import { flsModules } from "./modules.js";
//
document.addEventListener("DOMContentLoaded", function(e) {
  const fileInputs = document.querySelectorAll('input[type="file"]');
  if (fileInputs.length) {
    fileInputs.forEach((input) => {
      input.addEventListener("change", function(e) {
        const fileName = e.target.files[0].name;
        e.target
          .closest("label")
          .querySelector(".form__file-text").textContent = fileName;
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", function() {
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
