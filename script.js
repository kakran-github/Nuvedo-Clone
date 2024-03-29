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

const scroller = document.querySelector('.scroller-page1');

window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    scroller.classList.add('scrolled');
  } else {
    scroller.classList.remove('scrolled');
  }
});

window.addEventListener('scroll', function() {
    var nav = document.querySelector('.nav');
    
    if (window.scrollY > 0) {
      nav.classList.add('scrollednav');
    } else {
      nav.classList.remove('scrollednav');
    }
  });

  window.addEventListener('scroll', function() {
    var nav = document.querySelector('.nav');
    var navImg = document.querySelector('.nav img'); // Select the image within the navigation

    if (window.scrollY > 60) {
      nav.classList.add('scrollednav1'); // Add the 'fixed' class when scrolling begins
      navImg.classList.add('invert'); // Add the 'invert' class to the image when scrolling begins
    } else {
      nav.classList.remove('scrollednav1'); // Remove the 'fixed' class when scrolling back to the top
      navImg.classList.remove('invert'); // Remove the 'invert' class from the image when scrolling back to the top
    }
  });

 