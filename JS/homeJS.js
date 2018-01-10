/*When the document loads, run both the quote slideshow and the image
slideshow */
$(document).ready(function() {
  $.fn.SlickQuoteSlideshow();
  $.fn.SlickImgSlideshow();
});

$.fn.SlickQuoteSlideshow = function(){
  //The slider.js library is used to create an automatic slideshow of text
  $("#quoteSlideshow").slick({
    //Prevents dots and arrows from appearing under the slideshow
    dots:false,
    arrows:false,
    /*The slideshow is a horizontal slideshow rather than vertical, and quotes
    are centered when being displayed */
    horizontal:true,
    centerMode:true,
    /*The slideshow quote changes every 5 seconds, and only one image is shown
    at a time. Three quotes containers are within the slideshow */
    autoplay: true,
    autoplaySpeed:5000,
    slidesToShow:1,
    slidesToScroll:3,
  });
}

$.fn.SlickImgSlideshow = function(){
  //The slider.js library is used to create an automatic slideshow of images
  $("#imageSlideshow").slick({
    //Displays dots under the image slideshow, but hides arrows
    dots:true,
    arrows:false,
    /*The slideshow is a horizontal slideshow rather than vertical, and objects
    are centered when being displayed */
    horizontal:true,
    centerMode:true,

    /*The slideshow image changes every 5 seconds, and only one image is shown
    at a time. Four image containers are within the slideshow */
    autoplay:true,
    autoplaySpeed:5000,
    slidesToShow:1,
    slidesToScroll:4
  });
}
