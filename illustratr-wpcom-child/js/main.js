console.log("js/main.js");
// var api;

jQuery(document).ready(function(jQuery) {
    // DOM loaded

    // jQuery(".ug-gallery-wrapper, .ug-slider-wrapper, .ug-slider-inner").css( "height", "100vh !important" );

    // jQuery(".ug-gallery-wrapper, .ug-slider-wrapper, .ug-slider-inner").css( "height", jQuery(window).height() + "px" );

    // jQuery(".ug-gallery-wrapper, .ug-slider-wrapper, .ug-slider-inner, .ug-gallery-wrapper .ug-slider-wrapper").css( "height", jQuery(window).height() + "px!important" );

    jQuery(window).load(function(){
        // jQuery("#unitegallery_1_1").unitegallery().resize(jQuery(window).width(),jQuery(window).height());

        console.log( jQuery(".unite-gallery").offset().top );

        jQuery('html, body').delay( 200 ).animate({
            scrollTop: jQuery(".unite-gallery").offset().top
        }, 1200, "easeInOutCubic");

    });

var wWidth = jQuery(window).width();
jQuery(window).on('resize', function(){
    // if (  wWidth != jQuery(window).width() ) {
        // Set new height of gallery wrapper slider
        // var win = jQuery(this); // this = window
        jQuery(".ug-gallery-wrapper, .ug-slider-wrapper, .ug-slider-inner").css( "height", jQuery(window).height() + "px" );
    // }

});


});