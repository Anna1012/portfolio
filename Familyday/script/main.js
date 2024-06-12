

$(document).ready(function(){





    var infoBtn = $('.agree-info p');
    var prototionBtn = $('.agree-promotion p');
    var receipt = $('.right-btn');

    var popupInfo =$('.popup-wrap-info');
    var popupprototion =$('.popup-wrap-promotion');
    var popupevent =$('.popup-wrap-event');

    var closeBtn = $('.close-btn');



    //팝업창
    infoBtn.on('click',function(){
        popupInfo.addClass('show');
        $('body').css('overflow','hidden');
        // $(document).mouseup(function (e){
        //     if(popupInfo.has(e.target).length==0) {
        //         popupInfo.removeClass('show');
        //         $('body').css('overflow','auto');
                
        //     }
           
        // });
    });
    prototionBtn.on('click',function(){
        popupprototion.addClass('show');
        $('body').css('overflow','hidden');
        // $(document).mouseup(function (e){
        //     if(popupprototion.has(e.target).length==0) {
        //         popupprototion.removeClass('show');
        //         $('body').css('overflow','auto');
        //     }
        // });
        
    });

    //X 또는 확인버튼 눌렀을 때 팝업창 닫기
    receipt.on('click',function(){
        popupevent.addClass('show');
        $('body').css('overflow','hidden');
        // $(document).mouseup(function (e){
        //     if(popupevent.has(e.target).length==0) {
        //         popupevent.removeClass('show');
        //         $('body').css('overflow','auto');
        //     }
        // });

    });

    

    /*팝업창 닫기 */
    closeBtn.on('click',function(){
        $(this).closest('[class^="popup-wrap-"]').removeClass('show');
        $('body').css('overflow','auto');
        
    });

    /*상단에 투표*/
    $('.swiper-slide').on('click',function(){
        $('.swiper-slide').removeClass('select');
        $(this).addClass('select');
    });

    // SWIPER
    new Swiper('.container-select .swiper-container', {
        slidesPerView: "auto",//한번에 보여 줄 슬라이드 개수
        spaceBetween: 14, //슬라이드 사이 여백
        slidesOffsetBefore:20,
        speed: 1000,
        grabCursor: true,
        mousewheelControl: true,
        keyboardControl: true,
        // loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false
        },
    });

    new Swiper('.event .swiper-container', {
        slidesPerView: "auto",//한번에 보여 줄 슬라이드 개수
        spaceBetween: 10, //슬라이드 사이 여백
        speed: 1000,
        grabCursor: true,
        mousewheelControl: true,
        keyboardControl: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false
        },
    });

    /*인증번호 전송 클릭*/
    $('.send').click(function(){
        $('#code').css('display','block');
    });





});
/*skrollr 오류*/
skrollr.init({
	forceHeight: false,
	mobileCheck: function () {
		if (
			/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(
				navigator.userAgent || navigator.vendor || window.opera
			)
		) {
			// mobile device
		}
	},
});

// 전화번호 하이픈 자동입력 하기
const autoHyphen = (target) => {
    target.value = target.value
    .replace(/[^0-9]/g, '')
    .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
}


//   function snackbar() {
//     var snack = document.querySelector(".snackbar");
    
//     snack.classList.add("show");
//     setTimeout(function(){
//         snack.classList.remove('show')
//      }, 3000);
//   }
$('.right-btn').click(function(){
    $('.snackbar').addClass('show');
    setTimeout(function(){
        $('.snackbar').removeClass('show')
    }, 3000);
});

//전체선택
$(".agree-all input").click(function() {
    if($(".agree-all input").is(":checked")) $("input[name=layout]").prop("checked", true);
    else $("input[name=layout]").prop("checked", false);
});

$("input[name=layout]").click(function() {
    var total = $("input[name=layout]").length;
    var checked = $("input[name=layout]:checked").length;

    if(total != checked) $(".agree-all input").prop("checked", false);
    else $(".agree-all input").prop("checked", true); 
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();