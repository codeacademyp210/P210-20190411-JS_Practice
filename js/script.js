"use strict";

var headers = document.querySelectorAll(".section-header");
for(let i=0; i < headers.length; i++){
    headers[i].addEventListener("click", function(){
        this.nextElementSibling.classList.toggle("active");
    });
}



var navIcon = document.querySelector(".nav-icon");
navIcon.addEventListener("click", function(){
    var nav = document.querySelector(".navigation");
    nav.style.transform = "translateX(0)"
    document.querySelector("section").style.transform = "translateX(" + nav.scrollWidth + "px)";
});

var closeIcon = document.querySelector(".nav-close");
closeIcon.addEventListener("click", function(){
    var nav = document.querySelector(".navigation");
    nav.style.transform = "translateX(-" + nav.scrollWidth + "px)";
    
    document.querySelector("section").style.transform = "translateX(0)";
});