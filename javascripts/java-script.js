$(function(){
	$(".home").click(function(){
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
	});
});

$(function(){
$( ".tickets" ).draggable({ axis: "x" });
});

$(function(){
$('.next').on('click', function(){
	var currentimg = $('.active');
	var nextimg = currentimg.next();

	if (nextimg.length) {
		currentimg.removeClass('active').css('z-index', -10);
		nextimg.addClass('active').css('z-index', 10);
	}
});
});

$(function(){
$('.prev').on('click', function(){
	var currentimg = $('.active');
	var previmg = currentimg.prev();

	if (previmg.length) {
		currentimg.removeClass('active').css('z-index', -10);
		previmg.addClass('active').css('z-index', 10);
	}
});
});

$(function(){
	$('.karta').on('click', function(){
		$('.footer').css( {'top':'170vh'})
			$('.screen2').slideDown(500)
	});
});
