$(document).ready(function(){
        $("#menu, #subsc-btn").on("click","a", function (event) {
            event.preventDefault();

            var id  = $(this).attr('href'),

                top = $(id).offset().top-150;

            $('body,html').animate({scrollTop: top}, 1000);
        });
    });


$(document).ready(function() {
	$("#like").click(function() {
		$(".like-line-btn").toggleClass("pulse");
		$(".like-line-btn").toggleClass("like-btn");
	});
});


$(document).ready(function() {
	$("#icon-like").click(function() {
		$(".icon-like-pressed").toggleClass("pulse");
		$(".icon-like-pressed").toggleClass("icon-like-pressed2");
		$(".next").toggleClass("likes-numbers");
		$(".likes-numbers").toggleClass("next");
	});
});