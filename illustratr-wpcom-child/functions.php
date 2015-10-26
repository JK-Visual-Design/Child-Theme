<?php
/**
 * JK-Visual-Design Custom Functions
 *
 */

/* Enqueue Scripts */
function jk__custom_scripts_method() {
  wp_enqueue_script(
    'jk-custom-script',
    get_stylesheet_directory_uri() . '/js/main.js',
    array( 'jquery' ) // requires jQuery
  );
}
add_action( 'wp_enqueue_scripts', 'jk__custom_scripts_method' );

?>
