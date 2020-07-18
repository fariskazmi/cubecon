var slide_threshold = 50;
var slide = 0;
var num_slide = $('.slide').length;

var swipedetect = new Hammer(document.body);
swipedetect.get('swipe').set({direction: Hammer.DIRECTION_VERTICAL});

swipedetect.on('swipedown', function(e) {
  scroll_to_slide(slide - 1);
});

swipedetect.on('swipeup', function(e) {
  scroll_to_slide(slide + 1);
})

function div_appear(object, text_object, text){
    text_object.innerHTML = text
    object.style.display = "block"
    object.style.opacity = 0.05
    setTimeout(function(){ object.style.opacity = 0.10 }, 25);
    setTimeout(function(){ object.style.opacity = 0.15 }, 50);
    setTimeout(function(){ object.style.opacity = 0.20 }, 75);
    setTimeout(function(){ object.style.opacity = 0.25 }, 100);
    setTimeout(function(){ object.style.opacity = 0.30 }, 125);
    setTimeout(function(){ object.style.opacity = 0.35 }, 150);
    setTimeout(function(){ object.style.opacity = 0.40 }, 175);
    setTimeout(function(){ object.style.opacity = 0.45 }, 200);
    setTimeout(function(){ object.style.opacity = 0.50 }, 225);
    setTimeout(function(){ object.style.opacity = 0.55 }, 250);
    setTimeout(function(){ object.style.opacity = 0.60 }, 275);
    setTimeout(function(){ object.style.opacity = 0.65 }, 300);
    setTimeout(function(){ object.style.opacity = 0.70 }, 325);
    setTimeout(function(){ object.style.opacity = 0.75 }, 350);
    setTimeout(function(){ object.style.opacity = 0.80 }, 375);
    setTimeout(function(){ object.style.opacity = 0.85 }, 400);
    setTimeout(function(){ object.style.opacity = 0.90 }, 425);
    setTimeout(function(){ object.style.opacity = 0.95 }, 450);
    setTimeout(function(){ object.style.opacity = 1.00 }, 475);

    setTimeout(function(){
        setTimeout(function(){ object.style.opacity = 0.95 }, 25);
        setTimeout(function(){ object.style.opacity = 0.90 }, 50);
        setTimeout(function(){ object.style.opacity = 0.85 }, 75);
        setTimeout(function(){ object.style.opacity = 0.80 }, 100);
        setTimeout(function(){ object.style.opacity = 0.75 }, 125);
        setTimeout(function(){ object.style.opacity = 0.70 }, 150);
        setTimeout(function(){ object.style.opacity = 0.65 }, 175);
        setTimeout(function(){ object.style.opacity = 0.60 }, 200);
        setTimeout(function(){ object.style.opacity = 0.55 }, 225);
        setTimeout(function(){ object.style.opacity = 0.50 }, 250);
        setTimeout(function(){ object.style.opacity = 0.45 }, 275);
        setTimeout(function(){ object.style.opacity = 0.40 }, 300);
        setTimeout(function(){ object.style.opacity = 0.35 }, 325);
        setTimeout(function(){ object.style.opacity = 0.30 }, 350);
        setTimeout(function(){ object.style.opacity = 0.25 }, 375);
        setTimeout(function(){ object.style.opacity = 0.20 }, 400);
        setTimeout(function(){ object.style.opacity = 0.15 }, 425);
        setTimeout(function(){ object.style.opacity = 0.10 }, 450);
        setTimeout(function(){ object.style.opacity = 0.05 }, 475);
        setTimeout(function(){ object.style.opacity = 0.00; object.style.display = "none" }, 500);
    }, 1000);
}

function scroll_to_slide(i) {
  if (i >= 0 && i < num_slide) {
    slide = i;
    $('#navdot li').removeClass('active');
    $($('#navdot li')[i]).addClass('active');
    $("#slide" + i)[0].scrollIntoView(true);
  }
  if (i > 0) {
    document.getElementById("brand-logo").style.width = "2%";
  } else {
    document.getElementById("brand-logo").style.width = "8%";
  }
  if (i == 2){
    setTimeout(function(){ div_appear(document.getElementById("between-slides"), document.getElementById("between-slides-text"), "SERVICES")}, 200);
  }
  if (i == 3){
    setTimeout(function(){ div_appear(document.getElementById("between-slides2"), document.getElementById("between-slides-text2"), "PROJECTS")}, 200);
  }
}

scrolling = function(e) {
  if (Math.abs(e.deltaY) > slide_threshold) {
    window.removeEventListener('wheel', scrolling, true);
    window.removeEventListener('scroll', scrolling, true);
    if (e.deltaY > 0) {
      scroll_to_slide(slide + 1);
    } else {
      scroll_to_slide(slide - 1);
    }
    setTimeout(function() {
      window.addEventListener('wheel', scrolling, true);
      window.addEventListener('scroll', scrolling, true);
      
    }, 500);
  }
}

window.addEventListener('wheel', scrolling, true);
window.addEventListener('scroll', scrolling, true);
if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
    slide_threshold = 0;
}