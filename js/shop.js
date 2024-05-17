let hamburger__btn = document.querySelector(".header__hamburger__btn")
let hamburger__menu_close = document.querySelector(".hamburger__menu__close__btn")
let header__hamburger__menu = document.querySelector(".header__hamburger__menu")

hamburger__btn.addEventListener("click", function () {
    header__hamburger__menu.classList.add("header__hamburger__menu__active")
  });
  hamburger__menu_close.addEventListener("click", function () {
    header__hamburger__menu.classList.remove("header__hamburger__menu__active")
  });
let shop__reveiew__box = document.querySelector('.shop__reveiew__box')
let shop__reveiew__btn = document.querySelector(".shop__reveiew__btn")

// shop__reveiew__box.addEventListener('click' , function(){
//     shop__reveiew__box.classList.toggle("shop__box__active")
// })
// shop__reveiew__btn.addEventListener('click' , function(){
//     shop__reveiew__box.classList.toggle("shop__box__active")
//     shop__reveiew__btn.classList.toggle("shop__reveiew__btn__active")
// })
shop__reveiew__box.addEventListener('click' , function(){
    shop__reveiew__box.classList.toggle("shop__box__active")
    shop__reveiew__btn.classList.toggle("shop__reveiew__btn__active")
})

let shop__left__mini__img = document.querySelectorAll(".shop__left__mini__img")
let shop_left__big__img = document.querySelector(".shop_left__big__img")

shop__left__mini__img.forEach(function(item , index){
    item.addEventListener("click" , function(){
        shop_left__big__img.src = item.src  
    })
})

let select__size = document.querySelectorAll(".select__size")

select__size.forEach(function(item , index){
    item.addEventListener('click' , function(){
        select__size.forEach(function(item , index){
            item.classList.remove("select__size__active")
        })
        select__size[index].classList.add("select__size__active")
    })
})