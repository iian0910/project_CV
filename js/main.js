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

	// from
	var $form = $('form#contact-form'),
		url = 'https://script.google.com/macros/s/AKfycbw66o6P59WAZJC7S5LzY48WTUZ-ihvEuUoTpphvn1QZngLynqKs/exec'

	$('#submit-form').on('click', function (e) {
		e.preventDefault();
		var jqxhr = $.ajax({
			url: url,
			method: "GET",
			dataType: "json",
			data: $form.serialize()
		}).success(
			$('#userName').val(""),
			$('#userTel').val(""),
			$('#userEmail').val(""),
			$('#userText').val("")
		);
	})

})