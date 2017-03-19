$(document).ready(function(){
	$(window).bind('scroll', function(){
		 var navHeight = $(window).height() - 61;
		//alert(navHeight);
		if($(window).scrollTop() > navHeight){
			$('.navbar').addClass('fixed');
		}
		else{
			$('.navbar').removeClass('fixed');
		}
		
	});
});

$(window).on('beforeunload', function(){
    $(window).scrollTop(0);
});