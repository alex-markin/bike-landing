// переменные
const bikeLine = [
  {
    name: "Шоссе",
    text: "На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно.",
    firstImg: "../images/chaussee1.png",
    secondImg: "../images/chaussee2.png"
  },
  {
    name: "Грэвел",
    text: "Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью.",
    firstImg: "../images/gravel1.png",
    secondImg: "../images/gravel1.png"
  },
  {
    name: "ТТ",
    text: "ТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный.",
    firstImg: "../images/tt1.png",
    secondImg: "../images/tt2.png"
  }
]

const modelLine = document.querySelector('.model-line');
const arrowLeft = modelLine.querySelector('.arrows__arrow_type_left');
const arrowRight = modelLine.querySelector('.arrows__arrow_type_right');
const lineName = modelLine.querySelector('.section__title');
const lineText = modelLine.querySelector('.section__text');
const linePics = modelLine.querySelectorAll('.model-line__pic')
let current = 0;


// function changeLine(i) {
//   lineName.textContent = bikeLine[i].name;
//   lineText.textContent = bikeLine[i].text;
//   linePics[0].src = bikeLine[i].firstImg;
//   linePics[1].src = bikeLine[i].secondImg;
//   current++;
// }

// arrowRight.addEventListener('click', changeLine(1));
// console.log(bikeLine[0].firstImg);



// burger menu
const menuBtn = document.querySelector('.header__menu-btn');
const btnElements = menuBtn.querySelectorAll('.header__btn-element');
const menu = document.querySelector('.mobile-menu');
const page = document.querySelector('.page');
const navLink = document.querySelectorAll('.navbar__link_mobile')



function openMenu() {
  menu.classList.toggle('mobile-menu_active');
  page.classList.toggle('page_lock');
}

function transformButton() {
  btnElements.forEach(item => {
    item.classList.toggle('header__btn-element_active');
  });
}

menuBtn.addEventListener('click', () => {
  openMenu();
  transformButton();
});

navLink.forEach(item => {
  item.addEventListener('click', () => {
    openMenu();
    transformButton();
  });
});

// light-dark theme switcher

const themeSwitchers = document.querySelectorAll('.theme_switcher__switcher');
const themeSwitcherFields = document.querySelectorAll('.theme_switcher__switcher-field');
const root = document.documentElement;
const leftArrow = document.querySelector('.arrows__arrow_type_left');
const rightArrow = document.querySelector('.arrows__arrow_type_right');

function toggleSwitcher() {
  themeSwitchers.forEach(switcher => {
    switcher.classList.toggle('theme_switcher__switcher_dark');
  });
}

function switchTheme() {
  const theme = document.querySelector('#theme');
  if (theme.getAttribute('href') == './vendor/light-theme-variables.css') {
    theme.href = './vendor/dark-theme-variables.css';
    leftArrow.classList.toggle('arrows__arrow_type_left-white');
    rightArrow.classList.toggle('arrows__arrow_type_right-white');
  } else {
    theme.href = './vendor/light-theme-variables.css';
    leftArrow.classList.toggle('arrows__arrow_type_left-white');
    rightArrow.classList.toggle('arrows__arrow_type_right-white');
  };
}

themeSwitcherFields.forEach(item => {
  item.addEventListener('click', () => {
    toggleSwitcher();
    switchTheme();
  });
});

