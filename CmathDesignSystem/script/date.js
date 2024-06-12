$(document).ready(function(){
    $(".datepicker").datepicker({ minDate: 0 });
  var holidays = {
    "0101":{type:0, title:"신정"},
    "0301":{type:0, title:"삼일절"},
    "0505":{type:0, title:"어린이날"},
    "0606":{type:0, title:"현충일"},
    "0815":{type:0, title:"광복절"},
    "1003":{type:0, title:"개천절"},
    "1009":{type:0, title:"한글날"},
    "1225":{type:0, title:"크리스마스"},

    "0209":{type:0, title:"설날"},
    "0210":{type:0, title:"설날"},
    "0211":{type:0, title:"설날"},
    "0918":{type:0, title:"추석"},
    "0919":{type:0, title:"추석"},
    "0920":{type:0, title:"추석"},
    "0517":{type:0, title:"석가탄신일"}
  };




  jQuery(function($){
    $.datepicker.regional['ko'] = {
        closeText: '닫기',
        prevText: '',
        nextText: '',
        currentText: '오늘',
        monthNames: ['1월','2월','3월','4월','5월','6월',
        '7월','8월','9월','10월','11월','12월'],
        monthNamesShort: ['1월','2월','3월','4월','5월','6월',
        '7월','8월','9월','10월','11월','12월'],
        dayNames: ['일','월','화','수','목','금','토'],
        dayNamesShort: ['일','월','화','수','목','금','토'],
        dayNamesMin: ['일','월','화','수','목','금','토'],
        weekHeader: 'Wk',
        dateFormat: 'yy-mm-dd',
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: true,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ko']);

    $('#booking_date').datepicker({
        showOn: 'both',
        buttonImage: '&amp;lt;?=$g4[path]?&amp;gt;/img/calendar.gif',
        buttonImageOnly: true,
        buttonText: "달력",
        changeMonth: true,
        changeYear: true,
        showButtonPanel: true,
        yearRange: 'c-99:c+99',
        minDate: '+1d',
        beforeShowDay: function(day) {
          var result;
          var holiday = holidays[$.datepicker.formatDate("mmdd",day )];
          var thisYear = $.datepicker.formatDate("yy", day);

          // exist holiday?
          if (holiday) {
          if(thisYear == holiday.year || holiday.year == "") {
              result = [false, "date-holiday", holiday.title];
          }
          }

          if(!result) {
          switch (day.getDay()) {
              case 0: // is sunday?
                result = [false, "date-sunday"];
                break;
              case 6: // is saturday?
                result = [true, "date-saturday"];
                break;
              default:
                result = [true, ""];
                break;
          }
          }

          return result;
        }
    });
  });


      
});