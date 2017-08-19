$(function(){
	var width = $(window).width();
	if( width >= 768 ){
		$(".dropdown").mouseover(function(){
			$(this).addClass('open')
		});

		$(".dropdown").mouseout(function(){
			$(this).removeClass('open')
		});
	}
})
