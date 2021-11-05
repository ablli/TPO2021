const slider = document.querySelector("#slider");
let slidersection = document.querySelectorAll(".slider__section");
let slidersectionLast = slidersection[slidersection.length -1]; 

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', slidersectionLast);

function Next(){
    let sliderselectionfirts = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft ="-200%";
    slider.style.transition= "all 0.5s";
    setTimeout(function(){
        slider.style.transition="none";
        slider.insertAdjacentElement(`beforeend`,slidersectionfirts);
        slider.style.marginLeft ="-100%";
    },500);
}
function Prev(){
    let sliderSection = document.querySelectorAll(".slider__selection");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0" 
    slider.style.transition= "all 0.5s";
    setTimeout(function(){
        slider.style.transition="none"
        slider.insertAdjacentElement(`beforeend`,sliderSectionfirts);
        slider.style.marginLeft ="-100%";
    },500);
}
btnRight.addEventListener(`click`,function(){
    Next();
});
btnLeft.addEventListener(`click`,function(){
    Prev();
});

