/**
 *
 * @author		Sean Delaney
 * @company		DelaneyMethod
 */

'use strict';

let DelaneyMethod;

const $ = this.jQuery.noConflict();

if (DelaneyMethod === undefined) {
	DelaneyMethod = {};
}

DelaneyMethod = {
	Page: {
		segments: [],
		init: function () {
			Materialize.fadeInImage('#intro');

			$('.modal').modal({
				dismissible: false
			});

			$('.parallax').parallax();

			$('.button-collapse').sideNav({
				menuWidth: 210,
				edge: 'right',
				closeOnClick: true,
				draggable: true
			});

			$('a, button').on('click', function () {
				if ($(this).data('scroll-to')) {
					const id = '#' + $(this).data('scroll-to');
					$('html, body').animate({
						scrollTop: ($(id).first().offset().top - 60)
					}, 500);
				}
			});
		}
	}
};

$(window).on('load', function () {
	DelaneyMethod.Page.init();
});

$(window).bind('orientationchange', function () {
	$('.button-collapse').sideNav('hide');
});
