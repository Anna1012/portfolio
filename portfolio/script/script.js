 $(document).ready(function(){
   setTimeout(none,3000);
   function none(){
      $('.start').css('display','none')
      $('body').removeClass();
   }

   $('.copy').click(function(){
      $(this).find('b').animate({ opacity: 1}, 500).delay(100).animate({ opacity: 0}, 500);
      stop();
   });

   /*top icon*/

   var section = $('.page2');
   $('.top').click(function(){
      var ot = section.offset().top;
		$('html, body').animate({scrollTop:ot});
   });

   $(window).scroll(function(){
      var height = $(document).scrollTop();
      var ot2 = $('.career-table-wrap').offset().top;
      if( height > ot2){
         $('.top').fadeIn();
      } else {
         $('.top').fadeOut();
      }
   });












 });




