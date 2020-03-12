$(document).ready(function(){
	// header change color
	$(window).on('scroll', function(){
		var scrollDistence = $(window).scrollTop();
		var $header = $('.js-header')

		if (scrollDistence > 80) {
			$header.addClass('headerColorChange')
		} else {
			$header.removeClass('headerColorChange')
		}
	})

	// stellar plugin init
	if (screen.width > 768) {
		$(window).stellar();
	}

})