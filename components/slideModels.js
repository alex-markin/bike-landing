import { modelList } from "./bikeTypes.js";
import { lineName, lineText, linePics, lineTerrain, modelLine } from "./globalConsts.js";

export { prevSlide, nextSlide, slideModels, slideIndex };

// model lines slider

let slideIndex = 0;

function prevSlide() {
  slideModels((slideIndex -= 1));
}

function nextSlide() {
  slideModels((slideIndex += 1));
}

function slideModels(n) {
  if (n >= modelList.length) {
    slideIndex = 0;
  }

  modelLine.style.opacity = 0;
  
  setTimeout(() => {
    lineName.textContent = modelList[slideIndex].model;
    lineText.textContent = modelList[slideIndex].description; 
    lineTerrain.src = modelList[slideIndex].terrain;
    linePics[0].src = modelList[slideIndex].background.background1;
    linePics[1].src = modelList[slideIndex].background.background2;

    modelLine.style.opacity = 1;
  }, 500);
}
