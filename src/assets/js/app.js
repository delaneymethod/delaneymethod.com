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

					DelaneyMethod.Page.scrollTo(id);
				}
			});

			if (window.location.search.length) {
				DelaneyMethod.Page.scrollTo('#request-call-back');

				window.setTimeout(function () {
					$('.thanks').fadeOut();
				}, 5000);
			}
		},

		scrollTo: function (id) {
			$('html, body').animate({
				scrollTop: ($(id).first().offset().top - 60)
			}, 500);

			const uri = window.location.toString();

			if (uri.indexOf('?') > 0) {
				const cleanUri = uri.substring(0, uri.indexOf('?'));

				window.history.replaceState({}, document.title, cleanUri);
			}
		}
	}
};

$(window).on('load', function () {
	DelaneyMethod.Page.init();
});

$(window).bind('orientationchange', function () {
	$('.button-collapse').sideNav('hide');
});
