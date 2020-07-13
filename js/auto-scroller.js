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

function scroll_to_slide(i) {
  if (i >= 0 && i < num_slide) {
    slide = i;
    $('#navdot li').removeClass('active');
    $($('#navdot li')[i]).addClass('active');
    $("#slide" + i)[0].scrollIntoView(true);
  }
  if (i != 0) {
    document.getElementById("brand-logo").style.width = "2%";
  } else {
    document.getElementById("brand-logo").style.width = "8%";
  }
}

var scrolling = function(e) {
  if (Math.abs(e.deltaY) > 50) {
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