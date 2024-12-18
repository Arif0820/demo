
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function clickopan() {
    opandata=document.getElementById("bar")
    opandata.style.display = "none"
    closedata=document.getElementById("close")
    closedata.style.display = "block"
    menudata=document.querySelector(".menus")
    menudata.classList.add("show")
}
function clickclose() {
    opandata=document.getElementById("bar")
    opandata.style.display = "block"
    closedata=document.getElementById("close")
    closedata.style.display = "none"
    menudata=document.querySelector(".menus")
    menudata.classList.remove("show")
} 




    
function All(){
   mendata=document.getElementById("men")
   mendata.style.display = "none"
   womendata=document.getElementById("women")
   womendata.style.display = "none"
   kidsdata=document.getElementById("kid")
   kidsdata.style.display = "none"
   alldata=document.getElementById("all")
   alldata.style.display = "block"
}

function Men(){
   alldata=document.getElementById("all")
   alldata.style.display = "none"
   womendata=document.getElementById("women")
   womendata.style.display = "none"
   kidsdata=document.getElementById("kid")
   kidsdata.style.display = "none"
   mendata=document.getElementById("men")
   mendata.style.display = "block"
}

function Women(){
   alldata=document.getElementById("all")
   alldata.style.display = "none"
   mendata=document.getElementById("men")
   mendata.style.display = "none"
   kidsdata=document.getElementById("kid")
   kidsdata.style.display = "none"
   womendata=document.getElementById("women")
   womendata.style.display = "block"
}

function Kids(){
   alldata=document.getElementById("all")
   alldata.style.display = "none"
   womendata=document.getElementById("women")
   womendata.style.display = "none"
   mendata=document.getElementById("men")
   mendata.style.display = "none"
   kidsdata=document.getElementById("kid")
   kidsdata.style.display = "block"
}




 