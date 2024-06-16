// Подключение функционала "Чертогов Фрилансера"
// import { isMobile } from "./functions.js";
// Подключение списка активных модулей
// import { flsModules } from "./modules.js";
//
document.addEventListener("DOMContentLoaded", function (e) {
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
