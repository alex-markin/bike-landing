// variables

import {
  menuBtn,
  navLink,
  themeSwitcherFields,
  arrowLeft,
  arrowRight,
  bikesNav,
  bikesSelector,
  bikeModels,
  sliderDots,
} from "./components/globalConsts.js";

import { toggleSwitcher, switchTheme } from "./components/swithTheme.js";

import { openMenu, transformButton } from "./components/openMobileMenu.js";

import { modelList } from "./components/bikeTypes.js";
import { handleBikeSelection } from "./components/handleBikeSelection.js";

import { prevSlide, nextSlide, slideModels } from "./components/slideModels.js";

// model lines slider

slideModels(0);

arrowLeft.addEventListener("click", () => {
  prevSlide();
});

arrowRight.addEventListener("click", () => {
  nextSlide();
});

// bike series handler

bikesNav.forEach((btn) => {
  btn.addEventListener("click", (evt) => {
    const evtValue = evt.target.textContent;
    bikesNav.forEach((btn) => {
      btn.classList.remove("bikes__nav-link_active");
    });

    handleBikeSelection(evtValue, btn, modelList);
  });
});

bikesSelector.addEventListener("change", (evt) => {
  const evtValue = evt.target.value;
  const btn = undefined;
  handleBikeSelection(evtValue, btn, modelList);
});

// mobile bikes slider

// mobile menu handling

menuBtn.addEventListener("click", () => {
  openMenu();
  transformButton();
});

navLink.forEach((item) => {
  item.addEventListener("click", () => {
    openMenu();
    transformButton();
  });
});

// enable theme color switch

themeSwitcherFields.forEach((item) => {
  item.addEventListener("click", () => {
    toggleSwitcher();
    switchTheme();
  });
});
