function fillSlider(){
    let sliderContainer = $(".slider-container");
    for (let g = 0; g < gameData.length && g < 5; g++ ) {
        let { key, gameTitle } = gameData[g];

        let sliderTemplate = 
        `
        <div class="slider-preview">
            <div class="hit-area">
                <a href="./gamepage.html?gm=${key}"><i class="far fa-arrow-alt-circle-right"></i></a>
            </div>
            <div class="slider-title"><h4>${gameTitle}</h4></div>
            <div class="slider-preview-cover"><img src="images/games/${key}-cover.jpg"></div>
            <div class="slider-preview-thumbs">
                <div><img src="images/games/${key}-thumb1.jpg"></div>
                <div><img src="images/games/${key}-thumb2.jpg"></div>
            </div>
        </div>
        `
        sliderContainer.append(sliderTemplate);
        $('.slider-pages').append('<div class="dot" onclick="dotSlides('+(g + 1)+')"></div>');
    }
}

//Game Preview Slider
var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function dotSlides(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = $(".slider-preview");
    var dots = $(".dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides.eq(i).hide();
    }
    for (i = 0; i < dots.length; i++) {
        dots.eq(i).removeClass('active');
    }
    slides.eq(slideIndex-1).fadeIn(1000);
    dots.eq(slideIndex-1).addClass('active');
}

$(document).ready(function(){

    fetch('/games')
        .then((response) => response.json())
        .then((data) => gameData = data)
        .then(() => {
            fillSlider();
            showSlides();
        
            //ACTIVATE SLIDER 
            $('.slide-left').click(function(){
                plusSlides(-1);
            });
            
            $('.slide-right').click(function(){
                plusSlides(1);
            });
        })
        .catch((err) => console.error(err));
});

