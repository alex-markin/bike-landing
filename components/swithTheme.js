import { themeSwitchers, arrowLeft, arrowRight, bikesSelector, footerLogo } from './globalConsts.js'

export { toggleSwitcher, switchTheme };

// switch theme button function

function toggleSwitcher() {
  themeSwitchers.forEach(switcher => {
    switcher.classList.toggle('theme-switcher__switcher_dark');
  });
}

// theme switcher function

function switchTheme() {
  const lightTheme = './vendor/light-theme-variables.css';
  const darkTheme = './vendor/dark-theme-variables.css';
  const theme = document.querySelector('#theme');
  
  if (theme.getAttribute('href') == lightTheme) {
    theme.href = darkTheme;
    arrowLeft.classList.toggle('arrows__arrow_type_left-white');
    arrowRight.classList.toggle('arrows__arrow_type_right-white');
    footerLogo.classList.toggle('footer__logo_theme_dark');
    bikesSelector.classList.toggle('bikes__select_theme_black');
  } else {
    theme.href = lightTheme;
    arrowLeft.classList.toggle('arrows__arrow_type_left-white');
    arrowRight.classList.toggle('arrows__arrow_type_right-white');
    footerLogo.classList.toggle('footer__logo_theme_dark');
    bikesSelector.classList.toggle('bikes__select_theme_black');
  };
}