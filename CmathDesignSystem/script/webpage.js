$(document).ready(function () {
  // $(".snb span").click(function () {
  //   $(".snb span").removeClass("on");
  //   $(this).addClass("on");
  //   $(".snb ul ul").removeClass("on");
  //   $(this).parent("li").find("ul").toggleClass("on");
  // });
  // $(".snb li li").click(function () {
  //   $(".snb li li").removeClass("on");
  //   $(this).addClass("on");
  // });

  /*scroll*/
  var menu = $(".snb ul ul li");
  var contents = $(".part-wrap .part");
  

  
  menu.click(function (e) {
    e.preventDefault();
  
    
    let i = $(this).index();
    var section = contents.eq(i);
    console.log(section);
    var ot = section.offset().top - 160;

    $("html, body").animate({ scrollTop: ot });
    console.log(section.offset().top);
  });
  $(window).scroll(function () {
    var sct = $(window).scrollTop();

    contents.each(function () {
      let i = $(this).index();
      if ($(this).offset().top - 380 <= sct) {
        $(".snb").find("span.on").parent("li").find("ul li").removeClass("on");
        $(".snb")
          .find("span.on")
          .parent("li")
          .find("ul li")
          .eq(i)
          .addClass("on");
      }
    });
  });

  var mainMenu = $(".snb span").parent("li");

  // mainMenu.click(function () {
  //   $(window).resize();
    

  //   let i = $(this).index();
  //   $(".part-wrap").removeClass('show');
  //   $(".part-wrap").eq(i).addClass('show');
    
  // });
});
