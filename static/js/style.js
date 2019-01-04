//直达顶部小火箭
$(function() {
	var e = $("#rocket-to-top"),
		t = $(document).scrollTop(),
		n,
		r,
		i = !0;
	$(window).scroll(function() {
			var t = $(document).scrollTop();
			t == 0 ? e.css("background-position") == "0px 0px" ? e.fadeOut("slow") : i && (i = !1, $(".level-2").css("opacity", 1), e.delay(100).animate({
					marginTop: "-1000px"
				},
				"normal",
				function() {
					e.css({
							"margin-top": "-125px",
							display: "none"
						}),
						i = !0
				})) : e.fadeIn("slow")
		}),
		e.hover(function() {
				$(".level-2").stop(!0).animate({
					opacity: 1
				})
			},
			function() {
				$(".level-2").stop(!0).animate({
					opacity: 0
				})
			}),
		$(".level-3").click(function() {
			function t() {
				var t = e.css("background-position");
				if(e.css("display") == "none" || i == 0) {
					clearInterval(n),
						e.css("background-position", "0px 0px");
					return
				}
				switch(t) {
					case "0px 0px":
						e.css("background-position", "-298px 0px");
						break;
					case "-298px 0px":
						e.css("background-position", "-447px 0px");
						break;
					case "-447px 0px":
						e.css("background-position", "-596px 0px");
						break;
					case "-596px 0px":
						e.css("background-position", "-745px 0px");
						break;
					case "-745px 0px":
						e.css("background-position", "-298px 0px");
				}
			}
			if(!i) return;
			n = setInterval(t, 50),
				$("html,body").animate({
					scrollTop: 0
				}, "slow");
		});
});

//导航到达顶部固定
$(document).ready(function() {
	var navOffset = $(".header-navbar").offset().top;
	$(window).scroll(function() {
		var scrollPos = $(window).scrollTop();
		if(scrollPos >= navOffset) {
			$(".header-navbar").addClass("header-fixed");
			$("footer").addClass("footer");
		} else {
			$(".header-navbar").removeClass("header-fixed");
			$("footer").removeClass("footer");
		}
	});
});

//固定footer到底部
$(function() {
	function footerPosition() {
		$("footer").removeClass("fixed-bottom");
		var contentHeight = document.body.scrollHeight,
			winHeight = window.innerHeight;
		if(!(contentHeight > winHeight)) {
			$("footer").addClass("fixed-bottom");
		}
	}
	footerPosition();
	$(window).resize(footerPosition);
});