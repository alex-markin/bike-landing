import { menu, page, btnElements } from "./globalConsts.js";

export { openMenu, transformButton};


function openMenu() {
  menu.classList.toggle('mobile-menu_active');
  page.classList.toggle('page_lock');
}

function transformButton() {
  btnElements.forEach(item => {
    item.classList.toggle('header__btn-element_active');
  });
}