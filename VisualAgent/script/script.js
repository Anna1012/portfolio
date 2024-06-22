$(document).ready(function(){
   //$('body').css('background','red');


   

   $('.color-box li').click(function(){
      var i = $(this).index();
      $('.view-box > li').css('display','none');
      $('.view-box > li').eq(i).css('display','contents');
   });


   var copy = document.querySelector(".logo").cloneNode(true);
   document.querySelector(".page-06 .logo-wrap").appendChild(copy);

  });

  
