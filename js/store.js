let hamburger__btn = document.querySelector(".header__hamburger__btn")
let hamburger__menu_close = document.querySelector(".hamburger__menu__close__btn")
let header__hamburger__menu = document.querySelector(".header__hamburger__menu")

hamburger__btn.addEventListener("click" , function(){
    header__hamburger__menu.style.display = "block"
})
hamburger__menu_close.addEventListener("click" , function(){
    header__hamburger__menu.style.display = "none"
})

let store__box = document.querySelectorAll("#store__box")
let store__left__sale__box__btn = document.querySelectorAll(".store__left__sale__box__btn")
let store__left__sale__box__top = document.querySelectorAll('.store__left__sale__box__top')
store__box.forEach(function(item , index){
    item.addEventListener('click' , function(){
        store__box.forEach(function(item , index){
            item.style.height = "30px"
        })
        store__box[index].style.height = "auto"
        store__left__sale__box__btn.forEach(function(item , index){
            item.classList.remove("active__btn")
        })
        store__left__sale__box__btn[index].classList.add("active__btn")
        store__left__sale__box__top.forEach(function(item , index){
            item.classList.remove("store__left__sale__box__top__active")
        })
        store__left__sale__box__top[index].classList.add("store__left__sale__box__top__active")
    })
})
store__left__sale__box__btn.forEach(function(item , index){
    item.addEventListener('click' , function(){
        store__box.forEach(function(item , index){
            item.style.height = "30px"
        })
        store__box[index].style.height = "auto"
        store__left__sale__box__btn.forEach(function(item , index){
            item.classList.remove("active__btn")
        })
        store__left__sale__box__btn[index].classList.add("active__btn")
    })
})

let filter = document.querySelector(".filter")
let store__left = document.querySelector(".store__left")
let store__left__close__btn = document.querySelector(".store__left__close__btn")
filter.addEventListener('click' , function(){
    store__left.style.display = "block"
})
store__left__close__btn.addEventListener('click' , function(){
    store__left.style.display = "none"
})