$(document).ready(function(){

    var drop = $('.pc');
    var disableddrop = $('.disabled');
    var option = $('.basic .option');
    drop.click(function(){
        $(this).find(option).toggleClass('on');

        $(document).mouseup(function (e){
            var container = $('.option');
            if( container.has(e.target).length === 0){
            $(container).addClass('on');
            }
        });
    });

    $(option).find('li').click(function(){
        var object = $(this).html();
        $(this).closest('.select-ph').children('p').text(object);
        $(this).closest('.select-ph').children('p').css('color','#000');
    });

    /*cascader*/
    
    var cascader = $('.cascader');
    var option2 = $('.cascader .option');
    cascader.click(function(){
        $(this).find(option2).removeClass('on');
        option2.find('li').click(function(){
            $(this).siblings('li').find('ul').removeClass('on');
            $(this).children('ul').addClass('on');
            $(this).siblings('li').css('background','#fff');
            $(this).css('background','var(--cmath-navy2-color)');
        });
    });
    /*선택을 세 개 할 때 */


    



    /*tab-text-01*/
    $('.tab-text-01 label').click(function(){
        var i = $(this).index();
        var tabTextContents = $('.wrap-tab-text-01 div');
        $('.tab-text-01 label').removeClass('on')
        $(this).addClass('on');
        $(tabTextContents).removeClass('on');
        $(tabTextContents).eq(i).addClass('on');
    });

    /*tab-text-02*/
    var max_tw = 0;
    $(".tab-text-02 label").each(function(){
    var tw = parseInt($(this).css("width"));
        if(max_tw < tw){ max_tw = tw + 1; }
    });
    $(".tab-text-02 label").each(function(){
        $(this).css({width:max_tw});
    });
    $('.tab-text-02 label').click(function(){
        var i = $(this).index();
        $('.tab-text-02 section label')
        var tabTextContents = $('.wrap-tab-text-02 div');
        $('.tab-text-02 label').removeClass('on')
        $(this).addClass('on');
        $(tabTextContents).removeClass('on');
        $(tabTextContents).eq(i).addClass('on');

        if($('.tab-text-02 label').hasClass("on") === true) {
            var i = $(this).index();
           $('.tab-text-02 .stress').animate({
               left: i * max_tw
           },350);
        }

    });

    /*tab-text-03*/

    var max_w = 0;
       $(".tab-text-03 label").each(function(){
    var w = parseInt($(this).css("width"));
        if(max_w < w){ max_w = w + 1; }
    });
    $(".tab-text-03 label").each(function(){
        $(this).css({width:max_w});
    });

    $('.tab-text-03 label').click(function(){
        var i = $(this).index();
        var tabTextContents = $('.wrap-tab-text-03 div');
        $('.tab-text-03 label').removeClass('on')
        $(this).addClass('on');
        $(tabTextContents).removeClass('on');
        $(tabTextContents).eq(i).addClass('on');
    });

    /*tab-text-04*/
    var max_w = 0;
    $(".tab-text-04 label").each(function(){
    var w = parseInt($(this).css("width"));
        if(max_w < w){ max_w = w + 1; }
    });
    $(".tab-text-04 label").each(function(){
        $(this).css({width:max_w});
    });


    $('.tab-text-04 label').click(function(){
        var i = $(this).index();
        var tabTextContents = $('.wrap-tab-text-04 div');
        $('.tab-text-04 label').removeClass('on')
        $(this).addClass('on');
        $(tabTextContents).removeClass('on');
        $(tabTextContents).eq(i).addClass('on');
    });


    /*tab-text-05*/
    var max_w = 0;
    $(".tab-text-05 label").each(function(){
    var w = parseInt($(this).css("width"));
        if(max_w < w){ max_w = w + 1; }
    });
    $(".tab-text-05 label").each(function(){
        $(this).css({width:max_w});
    });

    $('.tab-text-05 label').click(function(){
        var i = $(this).index();
        var tabTextContents = $('.wrap-tab-text-05 div');
        $('.tab-text-05 label').removeClass('on')
        $(this).addClass('on');
        $(tabTextContents).removeClass('on');
        $(tabTextContents).eq(i).addClass('on');
    });

    /*tab-text-06*/
    var max_w = 0;
    $(".tab-text-06 label").each(function(){
    var w = parseInt($(this).css("width"));
        if(max_w < w){ max_w = w + 1; }
    });
    $(".tab-text-06 label").each(function(){
        $(this).css({width:max_w});
    });

    $('.tab-text-06 label').click(function(){
        var i = $(this).index();
        var tabTextContents = $('.wrap-tab-text-06 > div');
        $('.tab-text-06 label').removeClass('on')
        $(this).addClass('on');
        $(tabTextContents).removeClass('on');
        $(tabTextContents).eq(i).addClass('on');
    });

    /*tab-icon-01*/
    $('.tab-icon-01 .tabs').click(function(){
        var i = $(this).index();
        var tabTextContents = $('.wrap-tab-icon-01 > div');
        $('.tab-icon-01 .tabs').removeClass('on')
        $(this).addClass('on');
        $(tabTextContents).removeClass('on');
        $(tabTextContents).eq(i).addClass('on');
    });

    /*tab-icon-02*/
    var max_wi = 0;
    $(".tab-icon-02 .tabs").each(function(){
    var w = parseInt($(this).css("width"));
        if(max_wi < w){ max_wi = w + 1; }
    });
    $(".tab-icon-02 .tabs").each(function(){
        $(this).css({width:max_wi});
    });

    $('.tab-icon-02 .tabs').click(function(){
        var i = $(this).index();
        var tabTextContents = $('.wrap-tab-icon-02 > div');
        $('.tab-icon-02 .tabs').removeClass('on')
        $(this).addClass('on');
        $(tabTextContents).removeClass('on');
        $(tabTextContents).eq(i).addClass('on');

        if($('.tab-icon-02 .tabs').hasClass("on") === true) {
            var ii = $(this).index();
           $('.tab-icon-02 .stress').animate({
               left: i * max_wi
           },350);
        }

    });

    /*tab-icon-03*/
    var max_w = 0;
    $(".tab-icon-03 .tabs").each(function(){
    var w = parseInt($(this).css("width"));
        if(max_w < w){ max_w = w + 2; }
    });
    $(".tab-icon-03 .tabs").each(function(){
        $(this).css({width:max_w});
    });

    $('.tab-icon-03 .tabs').on('click',function(){
        var i = $(this).index();
        var tabTextContents = $('.wrap-tab-icon-03 > div');
        $('.tab-icon-03 .tabs').removeClass('on')
        $(this).addClass('on');
        $(tabTextContents).removeClass('on');
        $(tabTextContents).eq(i).addClass('on');
    });



   


    /*input*/
    $('.input-text-container input').on('focus',function(){
        $(this).parents('.input-wrap').addClass('focus');
    });
    $('.input-number-container input').on('focus',function(){
        $(this).parents('.input-wrap').addClass('focus');
    });
    $('.input-text-container input').on('blur',function(){
        $(this).parents('.input-wrap').removeClass('focus');
    });
    $('.input-number-container input').on('blur',function(){
        $(this).parents('.input-wrap').removeClass('focus');
    });
    $(".input-text-container input:disabled").parent('.input-wrap').css('background','#F7F8F8');
    $(".input-date-container input:disabled").parent('.input-wrap').css('background','#F7F8F8');
    $(".input-number-container input:disabled").parent('.input-wrap').css('background','#F7F8F8');
    $(".input-search-container input:disabled").parent('.input-wrap').css('background','#F7F8F8');
    $(".input-search-container input:disabled").siblings('img').css('opacity','0.2');
    

    /*input time*/

    $('.input-time-container .input-wrap').on('click', function(){
        $(this).next('.time-wrap').addClass('on');
        $('.time-wrap .submit-btns p').on('click',function(){
            $(this).closest('.time-wrap').removeClass('on');
        });
    });
    

    $('.input-time-container .disabled').on('click', function(){
        $(this).find('.time-wrap').removeClass('on');
    });





    $('.input-time-container li').on('click',function(event){
        event.preventDefault();
        var ti = $(this).index();
        var obheight = $(this).parents('ul').height() - ($(this).height()/2);
        var st = ti * 40
        $(this).parents('ul').animate({scrollTop:st - (obheight/2)}, 300);
        

    
        $(this).parents('ul').find('li').removeClass('clicked');
        $(this).toggleClass('clicked');
        


        
    });

    $(document).mouseup(function (e){
        var container = $('.time-wrap');
        if( container.has(e.target).length === 0){
        container.removeClass('on');
        }
    });

    /*password show hide */
    $('.input-password-container img.show').on('click',function(){
        $(this).prev('input').toggleClass('active');
        if($(this).prev('input').hasClass('active')){
            $(this).prev('input').attr('type','text');
            $(this).attr('src','./img/b_1px/icon_hide_b_1pt.png');
        }else{
            $(this).prev('input').attr('type','password');
            $(this).attr('src','./img/b_1px/icon_show_b_1pt.png');
        }
    });
    
        $('.active').attr('type','text');


    /*input search */
    var oldVal="";
    $(".search-text").each(function(){
        $(this).on("change keyup paste", function() {
            var search = $(this).val();
            if(search == oldVal) {
                $(this).next('.btnClear').css('display','none')
            } else {
                $(this).next('.btnClear').css('display','block');
            }
            });	   
    });
    var btnClear = document.querySelectorAll('.btnClear');
    btnClear.forEach(function(btn){
        btn.addEventListener('click', function(){
            btn.parentNode.querySelector('input').value = "";
            btn.parentNode.querySelector('input').focus();
            $(this).css('display','none');
        })
    })


    /*table*/
    $('.table-drop.pc').on('click',function(){
        $(this).find('ul ul').toggleClass('on');
        var tabledrop = $('.table-drop.pc ul ul');

        $(document).mouseup(function (e){
            if( tabledrop.has(e.target).length === 0){
            $(tabledrop).removeClass('on');
            }
        });

        
        $(tabledrop).find('li').click(function(){
            var object = $(this).html();
            $(this).closest('.select-st').children('p').text(object);
            $(this).closest('.select-st').children('p').css('color','#000');
        });

    });

    $('.table-01 .switch-checkbox').change(function(){
        if( $(this).is(':checked') ){
            $(this).nextAll('.switch-label').text('재원');
        } else {
            $(this).nextAll('.switch-label').text('퇴원');
        }
    });
    $('.pagenation-container').find('.num').on('click',function(){
        $(this).siblings('.num').removeClass('on');
        $(this).addClass('on');
    });

    /*code 보여주고 끄기*/
    $('.codeshow').click(function(){
        $(this).next('.code-wrap').show();
    });
    $('.code-wrap .icon-wrap').click(function(){
        $(this).parent('.code-wrap').hide();
    });


});
/* 전화번호 하이픈 자동입력*/

const autoHyphen = (target) => {
    target.value = target.value
    .replace(/[^0-9]/, '')
    .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
}

