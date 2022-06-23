$(function(){
// var image = $('.art1', '.sewing1', '.vyish1');
//
//   $('.block').click(function(){
// $('.image').removeClass(image);
//   });
  // $('.art').click(function(){
  //   $('.image').empty();
  //   $('.art1').appendTo('.image');
  // });
  // $('.vyish').click(function(){
  //   $('.image').addClass('vyish1');
  // });
  $('.sewing').click(function(){
    $('.image').find('*').removeClass('active');
    $('.sewing1').addClass('active');
    $('.comment').find('*').removeClass('active');
    $('.v2').addClass('active');
  });
  $('.art').click(function(){
    $('.image').find('*').removeClass('active');
    $('.art1').addClass('active');
  });
  $('.vyish').click(function(){
    $('.image').find('*').removeClass('active');
    $('.vyish1').addClass('active');
    $('.comment').find('*').removeClass('active');
    $('.v3').addClass('active');
    });
    $('.biser').click(function(){
      $('.image').find('*').removeClass('active');
      $('.biser1').addClass('active');
  });
  $('.origami').click(function(){
    $('.image').find('*').removeClass('active');
    $('.origami1').addClass('active');
    $('.comment').find('*').removeClass('active');
    $('.v4').addClass('active');
  });
  $('.vuaz').click(function(){
    $('.image').find('*').removeClass('active');
    $('.vuaz1').addClass('active');
    $('.comment').find('*').removeClass('active');
    $('.v4').addClass('active');
  });
  $('.milo').click(function(){
    $('.image').find('*').removeClass('active');
    $('.milo1').addClass('active');
    $('.comment').find('*').removeClass('active');
    $('.v1').addClass('active');
  });
  $('.makrame').click(function(){
    $('.image').find('*').removeClass('active');
    $('.makrame1').addClass('active');
    $('.comment').find('*').removeClass('active');
    $('.v2').addClass('active');
  });
  $('.svechi').click(function(){
    $('.image').find('*').removeClass('active');
    $('.svechi1').addClass('active');
  });
  $('.gonch').click(function(){
    $('.image').find('*').removeClass('active');
    $('.gonch1').addClass('active');
    $('.comment').find('*').removeClass('active');
    $('.v4').addClass('active');
  });

});
