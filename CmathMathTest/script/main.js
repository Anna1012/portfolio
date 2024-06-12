$(document).ready(function(){
    $('.share-btn').click(function(){
        $('.popup-wrap').addClass('show');
        
    });

    // 외부영역 클릭 시 팝업 닫기
    $(document).mouseup(function (e){
        var LayerPopup = $(".popup-wrap");
        if(LayerPopup.has(e.target).length === 0){
            LayerPopup.removeClass("show");
        }
    });

    /*링크복사 모바일*/
    $('.share-popup .copylink').click(function(){
        $('.snake-bar').addClass('show');
        setTimeout(function(){
            $('.snake-bar').removeClass('show');
        },2000)
    });
    /*링크복사 pc*/
    $('.pc .copylink').click(function(){
        $('.link-btn .com').addClass('show');
        setTimeout(function(){
            $('.link-btn .com').removeClass('show');
        },2000)
    });

    $('.swiper-wrapper td:not(.disabled)').click(function(){
        $('.swiper-wrapper td').removeClass('select');
        $(this).addClass('select');
    });

    $('.time-wrap .time-btn:not(.disabled)').click(function(){
        $('.time-wrap .time-btn').removeClass('select');
        $(this).addClass('select');
    });

    /*input disabled*/
    $(".input-text-container input:disabled").parent('.input-wrap').css('background','#F7F8F8');
    $(".input-date-container input:disabled").parent('.input-wrap').css('background','#F7F8F8');
    $(".input-number-container input:disabled").parent('.input-wrap').css('background','#F7F8F8');
    $(".input-search-container input:disabled").parent('.input-wrap').css('background','#F7F8F8');
    $(".input-search-container input:disabled").siblings('img').css('opacity','0.2');

    /*보기 누를시 팝업*/
    $('.info-btn').click(function(){
        $('.popup-wrap').css('display','block');
        $('.popup-wrap .popup-info').addClass('show');
    });
    $('.promotion-btn').click(function(){
        $('.popup-wrap').css('display','block');
        $('.popup-wrap .popup-promotion').addClass('show');
    });
    $('.popup-wrap [class*="popup-"]').find('.icon-wrap').click(function(){
        $('.popup-wrap').css('display','none');
        $(this).parent('div').removeClass('show');
    });
    $('.popup-wrap [class*="popup-"]').find('.close').click(function(){
        $('.popup-wrap').css('display','none');
        $(this).parent('div').removeClass('show');
    });

    /*전체동의*/
    $(".checkform .all").click(function() {
		if($(".checkform .all > input").is(":checked")) $("input[name=layout]").prop("checked", true);
		else $("input[name=layout]").prop("checked", false);
	});
	$(".checkform input[name=layout]").click(function() {
		var total = $(".checkform input[name=layout]").length;
		var checked = $(".checkform input[name=layout]:checked").length;

		if(total != checked) $(".checkform .all > input").prop("checked", false);
		else $(".checkform .all > input").prop("checked", true); 
	});
     /*예약조회에서 .aca-aca-reserv 높이*/
     var footerH = $('footer').height();
    //  $('.aca-info').meight($(document).height() - footerH - 55 - 20 - 80);
    $('.aca-reserv').css('min-height',$(document).height() - footerH - 55 - 20 - 80)
   
    
});
 



function clip(){
    var url = '';
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    url = 'window.location.href';
    textarea.value = url;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
 };
 const autoHyphen = (target) => {
    target.value = target.value
    .replace(/[^0-9]/, '')
    .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
}