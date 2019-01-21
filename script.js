$(function(){
   $('.enemy').hover(
    function() {
      $(this).find('.enemy-contents').addClass('enemy-active');
    },
    function() {
      $(this).find('.enemy-contents').removeClass('enemy-active');
    }
  ); 
  
  $('.faq-list-item').click(function(){
     var $answer=$(this).find('.answer');
     if($answer.hasClass('open')){
       $answer.removeClass('open');
       $answer.slideUp();
       $(this).find('span').text('+');
     } else {
       $answer.addClass('open');
       $answer.slideDown();
        $(this).find('span').text('-');
     }
   });
   
    $('.signup-show').click(function() {
    $('#signup-modal').fadeIn();
  });

  $('#close-modal').click(function() {
    $('#signup-modal').fadeOut();
  });
  
  $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200){
                $(this).addClass('scrollin');
            }
        });
    });
 
 
});
