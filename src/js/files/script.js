// Подключение функционала "Чертогов Фрилансера"
// import { isMobile } from "./functions.js";
// Подключение списка активных модулей
// import { flsModules } from "./modules.js";
//
document.addEventListener("DOMContentLoaded", function (e) {
  const fileInputs = document.querySelectorAll('input[type="file"]');
  if (fileInputs.length) {
    fileInputs.foeEach(input, (e) => {
      console.log(input);
    });
  }
});
