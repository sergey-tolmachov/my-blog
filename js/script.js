$(document).ready(function(){
        $("#menu, #subsc-btn").on("click","a", function (event) {
            event.preventDefault();

            var id  = $(this).attr('href'),

                top = $(id).offset().top-150;

            $('body,html').animate({scrollTop: top}, 1000);
        });
    });