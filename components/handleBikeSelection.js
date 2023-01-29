import { bikeModels } from "./globalConsts.js";

export function handleBikeSelection(evtValue, btn, modelList) {
  for (let i = 0; i < modelList.length; i++) {
    if(modelList[i].model == evtValue) {
      bikeModels.forEach((model, j) => {
        const link = model.querySelector('.bikes__link');
        const img = model.querySelector('.bike-card_type_normal');
        const name = model.querySelector('.bike-card__model-name');

        model.style.opacity = 0;

        setTimeout(() => {
          link.href = modelList[i].bikes[`bike${j + 1}`].link;
          img.src = modelList[i].bikes[`bike${j + 1}`].img;
          name.textContent = modelList[i].bikes[`bike${j + 1}`].name;
          model.style.opacity = 1;
          if (btn != undefined) {
            btn.classList.add('bikes__nav-link_active')
          }
        }, 500)
      })
    }
  }
}