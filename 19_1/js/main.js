jQuery(document).ready (function() {
		jQuery('.hamburger').click(function() {
				jQuery(this).toggleClass('is-active')
			//	jQuery('.navigation').toggleClass('hiden')
				jQuery('.navigation').toggleClass('hiden')
		});

		jQuery('.slick-slider').slick({
								dots: false,
								autoplay: true,
								arrows: false,
  							autoplaySpeed: 3000
							});
		jQuery('.slick-slider-desktop').slick({
								dots: false,
								autoplay: true,
								arrows: true,
  							autoplay: false
							});

});