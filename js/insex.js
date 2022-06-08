const menuBtn = document.querySelector(".btn__menu")
const navigation = document.querySelector(".navigation")
const navCloseBtn = document.querySelector(".btn__close")
const blurOverlay = document.querySelector(".blur__overlay")

menuBtn.addEventListener("click",function(){
    navigation.style.right = "0";
    blurOverlay.style.display = "block"

})
navCloseBtn.addEventListener("click",function(){
    navigation.style.right = "-22%";
    blurOverlay.style.display = "none"
})





new fullpage("#fullpage",{
    autoScrolling:true,
    scrollBar:true,
})