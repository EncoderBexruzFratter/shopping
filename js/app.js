let hamburger__btn = document.querySelector(".header__hamburger__btn");
let hamburger__menu_close = document.querySelector(
  ".hamburger__menu__close__btn"
);
let header__hamburger__menu = document.querySelector(
  ".header__hamburger__menu"
);

hamburger__btn.addEventListener("click", function () {
  header__hamburger__menu.style.display = "block";
});
hamburger__menu_close.addEventListener("click", function () {
  header__hamburger__menu.style.display = "none";
});

let featured__list__box = document.querySelectorAll(".featured__list__box");
let featured__title = document.querySelectorAll(".featured__title");

featured__list__box.forEach(function (item, index) {
  item.addEventListener("click", function () {
    featured__list__box.forEach(function (item, index) {
      item.style.height = "29px";
    });
    featured__list__box[index].style.height = "auto";
    featured__title.forEach(function(item , index){
        item.style.marginBottom = "0px"
    })
    featured__title[index].style.marginBottom = "30px"
  });
});
