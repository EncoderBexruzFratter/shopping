let hamburger__btn = document.querySelector(".header__hamburger__btn")
let hamburger__menu_close = document.querySelector(".hamburger__menu__close__btn")
let header__hamburger__menu = document.querySelector(".header__hamburger__menu")

hamburger__btn.addEventListener("click" , function(){
    header__hamburger__menu.style.display = "block"
})
hamburger__menu_close.addEventListener("click" , function(){
    header__hamburger__menu.style.display = "none"
})
let shop__reveiew__box = document.querySelector('.shop__reveiew__box')
let shop__reveiew__btn = document.querySelector(".shop__reveiew__btn")

// shop__reveiew__box.addEventListener('click' , function(){
//     shop__reveiew__box.classList.toggle("shop__box__active")
// })
shop__reveiew__btn.addEventListener('click' , function(){
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