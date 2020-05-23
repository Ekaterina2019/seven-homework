"use strict";
const images = document.querySelectorAll('.img');
const left = document.querySelector(".left");
const right = document.querySelector(".right");

let active = 0;

right.addEventListener('click', function(){
    setNextRightImage();
})
left.addEventListener('click' , function(){
    setNextLeftImage();
})

function setNextRightImage (){
    images[active].classList.remove("active");
    if (active +1 == images.length) {
        active = 0;
    }else{
        active++;
    }
    images[active].classList.add("active");
    
}

function setNextLeftImage(){
    images[active].classList.remove('active');
    if( active -1 == -1) {
        active = images.length-1
    }else{
        active--;
    }
    images[active].classList.add("active");
    
}
