let hamburger__btn = document.querySelector(".header__hamburger__btn");
let hamburger__menu_close = document.querySelector(
  ".hamburger__menu__close__btn"
);
let header__hamburger__menu = document.querySelector(
  ".header__hamburger__menu"
);

hamburger__btn.addEventListener("click", function () {
  header__hamburger__menu.classList.add("header__hamburger__menu__active")
});
hamburger__menu_close.addEventListener("click", function () {
  header__hamburger__menu.classList.remove("header__hamburger__menu__active")
});

let store__box = document.querySelectorAll("#store__box");
let store__left__sale__box__btn = document.querySelectorAll(
  ".store__left__sale__box__btn"
);
store__box.forEach(function (item, index) {
  item.addEventListener("click", function () {  
    store__box.forEach(function (item, index) {
      item.style.height = "30px";
      store__box[index].classList.toggle("close__store__box");
    });
    store__box[index].classList.toggle("close__store__box");
    let close__store__box = document.querySelector(".close__store__box")
    close__store__box.addEventListener("click" , function(){
        store__box[index].style.height = "30px";
    })
    store__box[index].style.height = "441px";
    store__left__sale__box__btn.forEach(function (item, index) {
      item.classList.remove("active__btn");
    });
    // store__left__sale__box__btn.classList.remove("active__btn");
  });
});
store__left__sale__box__btn.forEach(function (item, index) {
  item.addEventListener("click", function () {
    store__box.forEach(function (item, index) {
      item.style.height = "30px";
    });
    store__box[index].style.height = "405px";
    store__left__sale__box__btn.forEach(function (item, index) {
      item.classList.remove("active__btn");
    });
    store__left__sale__box__btn[index].classList.add("active__btn");
  });
});

// responsive

let filter = document.querySelector(".filter");
let store__left = document.querySelector(".store__left");
let store__left__close__btn = document.querySelector(
  ".store__left__close__btn"
);
filter.addEventListener("click", function () {
  store__left.style.display = "block";
});
store__left__close__btn.addEventListener("click", function () {
  store__left.style.display = "none";
});

let store__arrow__btn_1 = document.querySelector("#store__arrow__btn_1")
let store__arrow__btn_2 = document.querySelector("#store__arrow__btn_2")
let store__top__title_left = document.querySelector("#store__top__title_left")
let store__top__title__right = document.querySelector("#store__top__title_right")

store__arrow__btn_1.addEventListener("click" , function(){
  store__top__title_left.style.left = "-100%"
  store__top__title__right.style.right = "140px"
})
store__arrow__btn_2.addEventListener("click" , function(){
  store__top__title_left.style.left = "140px"
  store__top__title_right.style.right = "-100%"
})

// let inp = document.querySelector("#input");
// inp.addEventListener("input", function () {
//   let items = document.querySelectorAll(".popular__card__title");
//   items.forEach(function (item, index) {
//     if (item.querySelector(".text-xl").textContent.toLocaleLowerCase().indexOf(inp.value) > -1) {
//       item.style.display = "block";
//     } else {
//       item.style.display = "none";
//     }
//   });
// });


