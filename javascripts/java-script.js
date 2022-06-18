$(document).ready(function() {
    $("body").css("display", "none");

    $("body").fadeIn(50);

	$("a.button").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(400, redirectPage);
	});
	function redirectPage() {
		window.location = linkLocation;
	}
});

$(function(){
$('.iskraline').clone().appendTo(".iskra");
$('.infoline').clone().appendTo(".info");
$('.afishaline').clone().appendTo(".afisha");
$('.line1').clone().appendTo("#line1container");
$('.line2').clone().appendTo("#container2");
});

$(function(){
	$(".home").click(function(){
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
	});
});

$(function(){
$( ".tickets" ).draggable({ axis: "x" });
});

// $(function(){
// $('.next').on('click', function(){
// 	var currentimg = $('.active');
// 	var nextimg = currentimg.next();
//
// 	if (nextimg.length) {
// 		currentimg.removeClass('active').css({'z-index': '-10'}).fadeOut(200);
// 		nextimg.addClass('active').css({'z-index': '10'}).fadeIn(200);
// 	}
// });
// });
//
// $(function(){
// $('.prev').on('click', function(){
// 	var currentimg = $('.active');
// 	var previmg = currentimg.prev();
//
// 	if (previmg.length) {
// 		currentimg.removeClass('active').css('z-index', -10).fadeOut(200);
// 		previmg.addClass('active').css('z-index', 10).fadeIn(200);
// 	}
// });
// });


$(function(){

	$('.karta').on('click', function(){

		$('.footer').css( {'top':'170vh'})
			$('.screen2').slideDown(500)
	});
});

$(function (){
            $(".karta").click(function (){
                $('html, body').animate({
                    scrollTop: $(".map").offset().top
                }, 2000);
            });
        });

$(function(){
  $('.ticket_slider').slick({
    slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 1000,
      nextArrow: "<img src='img/arrow.svg' class='next' alt='2'>",

  });
})
