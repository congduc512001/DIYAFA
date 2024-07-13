$(document).ready(function () {
   header();
   jQuery(window).scroll(function() {
       header();
   });
    $(document).on("click", ".header_menu", function () {
       $(".menu").addClass("open");
       $('body').addClass('none_scroll');
    });
    $(document).on("click", ".close", function () {
        $(".menu").removeClass("open");
        $('body').removeClass('none_scroll');
     });
});
function header() {
   // Scroll article
   jQuery(window).scroll(function(event) {
       var scroll = jQuery(window).scrollTop();
       if (scroll > 200) {
           jQuery('.header_center').addClass('white');
       } else {
           jQuery('.header_center').removeClass('white');
       }
   });
}