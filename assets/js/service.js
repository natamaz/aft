
$(document).ready(function(){

    var bars = document.querySelectorAll('.meter > .polz');
    console.clear();

    setInterval(function(){
        bars.forEach(function(bar){
            var getWidth = parseFloat(bar.dataset.progress);

            for(var i = 0; i < getWidth; i++) {
                bar.style.width = i + '%';
            }
        });
    }, 500);

    $(".scroll").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });


//Прописываем id блока,
    var target = $('.schedule');
    var winHeight = $(window).height();
    var heihgtTopToElement = $(".schedule").offset().top - $(window).scrollTop();


    //$(window).scroll(function() {
    //    var windowos = $(window).scrollTop();
    //    if ( windowos > heihgtTopToElement ) {
    //        $(".progress").addClass("active");
    //    } else {
    //        $(".progress").removeClass("active");
    //    }
    //});
    $(window).scroll(function() {
        var windowos = $(window).scrollTop();
        if ( windowos > heihgtTopToElement ) {
            $(".value").show('slow');
        }
    });

});

