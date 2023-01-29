// info on model lines and bike models

export const modelList = [
  {
    model: "Шоссе",
    description:
      "На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно.",
    background: {
      background1: "./images/chaussee1.png",
      background2: "./images/chaussee2.png",
    },
    terrain: "./images/hill-terrain.png",
    bikes: {
      bike1: {
        name: "Cervelo Caledonia-5",
        link: "https://www.sigmasports.com/item/Cervelo/Caledonia-5-Ultegra-Disc-Road-Bike-2021/RDEN",
        img: "./images/bikes/shossey-bike1.svg",
      },
      bike2: {
        name: "Cannondale Systemsix Himod",
        link: "https://www.sigmasports.com/item/Cannondale/SystemSix-HiMOD-Ultegra-Di2-Disc-Road-Bike-2021/R82J",
        img: "./images/bikes/shossey-bike2.svg",
      },
      bike3: {
        name: "Trek Domane SL-7",
        link: "https://www.sigmasports.com/item/Trek/Domane-SL-7-Force-eTap-AXS-Disc-Road-Bike-2021/RULF",
        img: "./images/bikes/shossey-bike3.svg",
      },
    },
  },
  {
    model: "Грэвел",
    description:
      "Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью.",
    background: {
      background1: "./images/gravel1.png",
      background2: "./images/gravel2.png",
    },
    terrain: "./images/rough-terrain.png",
    bikes: {
      bike1: {
        name: "Cervelo Aspero GRX 810",
        link: "https://www.sigmasports.com/item/Cervelo/Aspero-GRX-810-1x-Disc-Gravel-Bike-2021/RJDE",
        img: "./images/bikes/gravel-bike1.svg",
      },
      bike2: {
        name: "Specialized S-Works Diverge",
        link: "https://www.sigmasports.com/item/Specialized/S-Works-Diverge-Gravel-Bike-2020/NVJ9",
        img: "./images/bikes/gravel-bike2.svg",
      },
      bike3: {
        name: "Cannondale Topstone Lefty 3",
        link: "https://www.sigmasports.com/item/Cannondale/Topstone-Carbon-Lefty-3-Disc-Gravel-Road-Bike-2021/PUC8",
        img: "./images/bikes/gravel-bike3.svg",
      },
    },
  },

  {
    model: "TT",
    description:
      "TT — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрый и аэродинамичный.",
    background: {
      background1: "./images/tt1.png",
      background2: "./images/tt2.png",
    },
    terrain: "./images/flat-terrain.png",
    bikes: {
      bike1: {
        name: "Specialized S-Works Shiv",
        link: "https://www.sigmasports.com/item/Specialized/S-Works-Shiv-Disc-Limited-Edition-Triathlon-Bike-2019/K8P9",
        img: "./images/bikes/tt-bike1.svg",
      },
      bike2: {
        name: "BMC Timemachine 01 ONE",
        link: "https://www.sigmasports.com/item/BMC/Timemachine-01-One-Force-Disc-TT-Triathlon-Bike-2021/S835",
        img: "./images/bikes/tt-bike2.svg",
      },
      bike3: {
        name: "Cervelo P-Series",
        link: "https://www.sigmasports.com/item/Cervelo/P-Series-Ultegra-Di2-TT-Triathlon-Bike-2021/RM6Q",
        img: "./images/bikes/tt-bike3.svg",
      },
    },
  },
];
