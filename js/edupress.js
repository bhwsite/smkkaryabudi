var edupress = edupress || {},
    $ = jQuery;

/** Global Variables */

var $edupressDocument = $( document );

/** Activate primary menu toggles */

edupress.headerMenuToggles = {

	init: function() {

		$(".site-toggle-anchor").click(function(){
			$("#site-mobile-menu").toggleClass("is-visible");
			$(".site-toggle-anchor").toggleClass("is-visible");
			$(".site-toggle-label").toggleClass("is-visible");
			$(".site-toggle-icon").toggleClass("is-visible");
		});

		$(".sub-menu-toggle").click(function(){
			$(this).next().toggleClass("is-visible");
			$(this).toggleClass("is-visible");
		});

	},

} // edupress.headerMenuToggles

/** Activate superfish menu */

edupress.menuSuperfish = {

	init: function() {

		$('.sf-menu').superfish({
			'speed': 'fast',
			'delay' : 0,
			'animation': {
				'height': 'show'
			}
		});

	},

} // menuSuperfish

$edupressDocument.ready( function() {

	edupress.menuSuperfish.init();
	edupress.headerMenuToggles.init();

} );

jQuery(document).ready(function($) { 
	'use strict';

	var $document = $(document);
	var $window = $(window);


	jQuery("#ilovewp-featured-tabs").flexslider({
		selector: ".ilovewp-tabs > .ilovewp-tab",
		animation: "slide",
		controlNav: false,
		directionNav: false,
		animationLoop: true,
		slideshow: false,
		itemWidth: 195,
		itemMargin: 0,
		minItems: 2,
		maxItems: 4,
		asNavFor: '#ilovewp-featured-content'
	});

	jQuery("#ilovewp-featured-content").flexslider({
		selector: ".ilovewp-slides > .ilovewp-slide",
		animation: "slide",
		animationLoop: true,
		initDelay: 500,
		smoothHeight: false,
		slideshow: true,
		slideshowSpeed: 5000,
		pauseOnAction: false,
		pauseOnHover: false,
		controlNav: false,
		directionNav: false,
		useCSS: true,
		touch: false,
		animationSpeed: 450,
		sync: "#ilovewp-featured-tabs"
	});

});