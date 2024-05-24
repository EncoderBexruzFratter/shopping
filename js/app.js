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

let featured__list__box = document.querySelectorAll(".featured__list__box");
let featured__title = document.querySelectorAll(".featured__title");


featured__list__box.forEach(function(item , index){
  item.addEventListener("click" , function(){

    featured__title.forEach(function(item , index){
      item.style.paddingBottom = "0px"
    })
    featured__title[index].style.paddingBottom = "15px"
    featured__list__box.forEach(function(item){
      item.classList.remove("featured__active")
    })
    
    featured__list__box[index].classList.add("featured__active")
    if(featured__list__box[index].computedStyleMap.height = "298ppx"){
      let featured__active = document.querySelector(".featured__active")
      featured__active.addEventListener('click' , function(){
        featured__list__box[index].classList.remove("featured__active")
      })
    }
  })
})
