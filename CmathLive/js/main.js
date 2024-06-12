const spyEls = document.querySelectorAll('.scroll-spy');
spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, //보여짐의 여부를 감시할 요소를 지정
            triggerHook: .8, //스크롤 훅 위치
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});

const showBtns = document.querySelectorAll('.show-text');
const agree = document.querySelector('.agree');
const agreeCont =  document.querySelector('.agree_cont');

showBtns.forEach((showBtn) => {
    showBtn.addEventListener('click', function() {
        showBtn.parentNode.nextElementSibling.classList.toggle('on');
    });
});





