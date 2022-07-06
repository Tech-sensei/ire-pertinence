/**********
Navbar
********/

"use strict";
// const hamburger = document.querySelector(".nav-menu__ham");
// const cancel = document.querySelector(".nav-menu__cancel");
// const sidebar = document.querySelector(".sidebar");
// const link = document.querySelector(".nav-links__link");

// const toggleSidebar = function () {
//   sidebar.classList.toggle("hidden");
// };

// [hamburger, cancel, link].forEach((cur) => {
//   cur.addEventListener("click", toggleSidebar);
// });

/*==================== SHOW MENU ====================*/
const navClose = 'bx-x';
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // Validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      // We add the show-menu class to the div tag with the nav__menu class
      toggle.classList.toggle(navClose);
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*=============== QUESTIONS ACCORDION ===============*/
const accordionItems = document.querySelectorAll(
  ".faqs__container--right_question"
);

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".question__header");

  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");

    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".question__content");

  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};

// const numbers = [
//         68,
//         -68,
//         27,
//         94,
//         72,
//         -25,
//         -51,
//         32,
//         10,
//         64,
//         -94,
//         4,
//         34,
//         -86,
//         90,
//         81,
//         20,
//         -56,
//         -91,
//         -50
//     ];

// let sum = 0

// for(const item of numbers){
//   sum += item // sum+item = sum
// }
// console.log(sum);

//     const num = [
//       17, 0, 67, 41, 49, 21, 1, 86, 76, 2, 54, 14, 93, 84, 14, 77, 35, 7, 29,
//       64,
//     ];

//     const evenArr = []
//     for (const even of num){
//       if (even % 2 ===0){
//         evenArr.push(even)
//       }
//     }

//     console.log(evenArr.length);

//     //  °F = (°C × 9/5) + 32 ==  °F = (°C × 1.8) + 32;

//          const celToFer = [
//         24,
//         30,
//         14,
//         -8,
//         22,
//         17,
//         -5,
//         25,
//         2,
//         25,
//         10,
//         10,
//         28,
//         33,
//         39,
//         28,
//         23,
//         -1,
//         2,
//         -4
//     ]

//     const Fahrenheit =[]
//     for (const convert of celToFer){
//      const convertFah = Math.trunc((convert * 9/5) + 32)
//      Fahrenheit.push(convertFah)
//       // Math.trunc(Math.ceil(convertFah));
//     }
//     console.log(Fahrenheit);

//     // console.log(Math.round(Fahrenheit[0]));

//     // for(const round of Fahrenheit){
//     //   convert.push((Math.round(round)));
//     // }

//     // console.log(convert);
