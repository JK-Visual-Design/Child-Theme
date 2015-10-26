// var api;

jQuery(document).ready(function($) {
    // DOM loaded

    // $(".ug-gallery-wrapper, .ug-slider-wrapper, .ug-slider-inner").css( "height", "100vh !important" );

    // $(".ug-gallery-wrapper, .ug-slider-wrapper, .ug-slider-inner").css( "height", $(window).height() + "px" );

    // $(".ug-gallery-wrapper, .ug-slider-wrapper, .ug-slider-inner, .ug-gallery-wrapper .ug-slider-wrapper").css( "height", $(window).height() + "px!important" );

    $(window).load(function(){
        // $("#unitegallery_1_1").unitegallery().resize($(window).width(),$(window).height());
        $('html, body').delay( 200 ).animate({
            scrollTop: $(".unite-gallery").offset().top
        }, 1200, "easeInOutCubic");

    });

var wWidth = $(window).width();
$(window).on('resize', function(){
    // if (  wWidth != $(window).width() ) {
        // Set new height of gallery wrapper slider
        // var win = $(this); // this = window
        $(".ug-gallery-wrapper, .ug-slider-wrapper, .ug-slider-inner").css( "height", $(window).height() + "px" );
    // }

});


});