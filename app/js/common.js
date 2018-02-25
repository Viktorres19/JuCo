$(function() {

	// swiper
	var swiper = new Swiper('.swiper-container', {
	    pagination: '.swiper-pagination',
	    paginationClickable: true,
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev',
	    spaceBetween: 30
	});

/* burger-menu */
	$('a.menu-trigger').click(function(){
		$('.menu nav ul').slideToggle(500);
	});	
	$(window).resize(function() {
		if($(window).width() > 800) {
			$('.menu nav ul').removeAttr('style');
		}
	});

});
