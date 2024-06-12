// skrollr.init({
// 	forceHeight: false,
// 	mobileCheck: function () {
// 		if (
// 			/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(
// 				navigator.userAgent || navigator.vendor || window.opera
// 			)
// 		) {
// 			// mobile device
// 		}
// 	},
// });

const spyEls = document.querySelectorAll(".content > section");

spyEls.forEach(function (spyEl) {
	new ScrollMagic.Scene({
		triggerElement: spyEl, //보여짐의 여부를 감시할 요소를 지정
		triggerHook: 0.85, //스크롤 훅 위치
	})
		.setClassToggle(spyEl, "vertical")
		.addTo(new ScrollMagic.Controller());
});