$(function(){
	$(".home").click(function(){
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
	});
});

$(function(){
$( ".tickets" ).draggable({ axis: "x" });
});
