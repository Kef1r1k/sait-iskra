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
// $('.iskraline').clone().appendTo(".iskra");
// $('.infoline').clone().appendTo(".info");
// $('.afishaline').clone().appendTo(".afisha");
// $('.line1').clone().appendTo("#line1container");
// $('.line2').clone().appendTo("#container2");
});

$(function(){
	$(".scroll").click(function(){
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
	});
});
$(function(){
  $(".back").click(function() {
    window.history.back();
  });
});


// $(function(){
// $( ".tickets" ).draggable({ axis: "x" });
// });

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
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 1000,
      nextArrow: "<img src='img/arrow.svg' class='next' alt='2'>",
      responsive:[
        {
        breakpoint: 800,
      settings: {
        arrows: false,
        nextArrow: false,
        dots: true,
      },
    }
  ]
  });
});
$(function(){
  $('.buy').click(function(){
    $('.forma').show(250),
    $('.background').show(200);
  });
});
$(function(){
  $('.register').click(function(){
    $('.question').show(250),
    $('.background').show(200);
  });
});
$(function(){
  $('.continue').click(function(){
    $('.question').hide(200),
    $('.forma').show(250);
});
});


$(function(){
  $('.cross').click(function(){
    $('.forma').hide(200),
    $('.question').hide(200),
    $('.background').hide(250);
  });
});

$(function(){
  $('.complete').click(function(){
    $('.forma').hide(200),
    $('.forma_after').show(250),
    $('.forma_after').delay(2900).hide(200),
    $('.background').delay(3200).hide(200);
  });
    });
    $(window).resize(function () {
    $('.js-slider').not('.slick-initialized').slick('resize');
});

$(window).on('orientationchange', function () {
    $('.js-slider').not('.slick-initialized').slick('resize');
});

    $(function(){
      $('.slidergallery').slick({
        slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2500,
          speed: 1000,
      });
    });

    $(function(){
      $('.ticketgallery').slick({
        slidesToShow: 1.08,
        centerMode: true,
        dots: true,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2500,
          speed: 1000,
          responsive:[
            {
            breakpoint: 1024,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         infinite: true,
         dots: true,
         centerMode: false,
       },
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         infinite: true,
         dots: true,
         centerMode: false,
       },
     },
   ],
      });
        $(".ticketgallery").slick('setPosition');
    });
