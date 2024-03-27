const slides=document.querySelectorAll(".page1 img");

slides.forEach(function(slide,index){
    slide.style.left=`${index*100}%`
})
var counter=0;
const goNext=function(){
    counter++;
    slideImage();
}

const goPrev=function(){
    counter--;
    slideImage();
}

function slideImage(){
    slides.forEach(function(slide){
        slide.style.transform=`translateX(-${counter*100}%)`
    })
}


