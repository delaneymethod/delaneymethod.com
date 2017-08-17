'use strict';

var $ = window.jQuery.noConflict();

let DelaneyMethod = {
	Page: {
		init: function () {
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
					var id = '#' + $(this).data('scroll-to');

					DelaneyMethod.Page.scrollTo(id);
				}
			});

			if (window.location.search.length) {
				DelaneyMethod.Page.scrollTo('#request-call-back');

				var timer = window.setTimeout(function () {
					$('.thanks').fadeOut();
				}, 5000);

				clearTimeout(timer);
			}
		},

		scrollTo: function (id) {
			$('html, body').animate({
				scrollTop: ($(id).first().offset().top - 60)
			}, 500);

			var uri = window.location.toString();

			if (uri.indexOf('?') > 0) {
				var cleanUri = uri.substring(0, uri.indexOf('?'));

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
