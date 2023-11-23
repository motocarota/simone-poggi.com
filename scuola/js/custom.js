(function() {
	'use strict';

	var tinyslider = function() {
		var el = document.querySelectorAll('.slider');

		if (el.length > 0) {
			var slider = tns({
				container: '.slider',
				items: 1,
				axis: "horizontal",
				controlsContainer: "#testimonial-nav",
				swipeAngle: false,
				speed: 700,
				nav: true,
				controls: true,
				autoplay: true,
				autoplayHoverPause: true,
				autoplayTimeout: 3500,
				autoplayButtonOutput: false
			});
		}
	};
	tinyslider();

})()