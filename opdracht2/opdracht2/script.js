var slideIndex = 1;
var carouselHasFocus = false;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex - 1].className += " active";
}

function keyboardSlide(e) {
  if (typeof e !== 'undefined') {
    if (carouselHasFocus && e.keyCode === 37) {
      // Previous
      slideIndex.showSlides( 'prev' );
      return false;
    } else if (carouselHasFocus && e.keyCode === 39) {
      // Next
      slideIndex.showSlides( 'next' );
      return false;
    }
  }
}

  $carousel.on( 'slid.bs.carousel', function () {
	  carouselHasSlid = true;
	} );
  

var slideIndex = 1;
var carouselHasFocus = false;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex - 1].className += " active";
}

function keyboardSlide(e) {
  if (typeof e !== 'undefined') {
    if (carouselHasFocus && e.keyCode === 37) {
      // Previous
      slideIndex.showSlides( 'prev' );
      return false;
    } else if (carouselHasFocus && e.keyCode === 39) {
      // Next
      slideIndex.showSlides( 'next' );
      return false;
    }
  }
}

  $carousel.on( 'slid.bs.carousel', function () {
	  carouselHasSlid = true;
	} );
  

