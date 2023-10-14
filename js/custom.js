$(function(){

	
	$('.the-slider-inner').bxSlider({
		useCSS: false,
		auto: true,
		controls: true,
		pager: true,
		autoHover: true,
		responsive: true,
		nextSelector: '#slider-next',
		prevSelector: '#slider-prev',
		nextText: '<i class="fa fa-angle-right"></i>',
		prevText: '<i class="fa fa-angle-left"></i>'
	});
		
		$(".header .open-menu").click(function() {
			
			$("header .navBar ul").slideToggle();
			
		});
	
	$(".sectors .tabs-sectors li").click(function () {
		
		var myButton = $(this).attr("id");
		
		$(this).addClass("active").siblings().removeClass("active");
		
		$(".sectors .tabs2 .tab").hide();
		
		$("." + myButton).fadeIn(1000);
		
	});
	

	$.scrollIt({topOffset: 0});
		
	
	
});
