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
			$('.parallax').parallax();

			$('a[href$=".zip"],a[href$=".txt"],a[href$=".docx"],a[href$=".doc"],a[href$=".xls"],a[href$=".xlsx"],a[href$=".pdf"],a[href$=".ppt"],a[href$=".pptx"]').on('click', function () {
				window.open(this.href);

				return false;
			});

			$('a').filter(function () {
				return this.hostname && this.hostname !== location.hostname;
			}).click(function () {
				window.open(this.href);

				return false;
			});

			$('a[href*="#"]:not([href="#"], .open)').on('click', function () {
				if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
					const target = $(this.hash);

					target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

					if (target.length) {
						$('html, body').animate({
							scrollTop: (target.offset().top - 20)
						}, 500);
					}
				}

				return false;
			});
		}
	}
};

$(window).on('load', function () {
	DelaneyMethod.Page.init();
});
