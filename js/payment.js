// ONCLICK BRING UP MODAL

var serviceBox = $('#services .services-box');
var modal_wrap = $('.modal-wrap');

$('.btn-transparent').click(function(){
  $('#services .remove').css("display", "none");
  serviceBox.addClass('animate-out');
  modal_wrap.addClass('animate-in');
  setTimeout(function(){
    serviceBox.css('display', 'none');
    modal_wrap.css('display', 'block');
    $('.cognito form').css('margin', '0 auto');
  }, 500);
});


// JAVASCRIPT FOR ANIMATING THE MODAL

$('.btn-transparent2').click(function(){
  var modal_body = $('.is-showing');
  if (modal_body.hasClass('modal-body-step-1')){
    oneToTwoTrans(modal_body);
  } else if (modal_body.hasClass('modal-body-step-2')){
    twoToThreeTrans(modal_body);
  } else if (modal_body.hasClass('modal-body-step-3')){
    threeTrans(modal_body);
  } else {
    fourTrans();
  }
});

function oneToTwoTrans (body){
  body.addClass('animate-out');
  $('.modal-body-step-2').addClass('animate-in');
  setTimeout(function(){
    body.removeClass('is-showing');
    $('.modal-body-step-2').addClass('is-showing');
    body.removeClass('animate-out');
  }, 500);
}

function twoToThreeTrans(body){
  $('.modal-body-step-2').removeClass('animate-in');
  body.addClass('animate-out');
  $('.modal-body-step-3').addClass('animate-in');
  setTimeout(function(){
    body.removeClass('is-showing');
    $('.modal-body-step-3').addClass('is-showing');
  }, 500);
}

function threeTrans(body){
  $('.modal-body-step-3').removeClass('animate-in');
  body.addClass('animate-out');
  $('.modal-body-step-4').addClass('animate-in');
  setTimeout(function(){
    body.removeClass('is-showing');
    $('.modal-body-step-4').addClass('is-showing');
  }, 500);
}

function fourTrans(body){
  $('.modal-body-step-4').removeClass('animate-in');
}
