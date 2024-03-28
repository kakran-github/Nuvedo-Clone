const slides=document.querySelectorAll(".slide");

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
        if(counter>2){
            counter=0;
        }
        else if(counter<0){
            counter=2;
        }
        slide.style.transform=`translateX(-${counter*100}%)`
    })
}