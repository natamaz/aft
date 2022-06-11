
$(document).ready(function(){
    <!-- плагины -->
    $(".phone_mask").mask("+7 (000) 000 00 00", {
        placeholder: ""
    });
    <!-- конец плагины -->



    <!-- меню -->
    $("#navToggle").click(function() {
        $(this).toggleClass("active");
        $(".overlay").toggleClass("open");
        // this line ▼ prevents content scroll-behind
        $("body").toggleClass("locked");
        $(".text_anime").toggleClass("none");

    });
    $(".scrollToggle").click(function() {
        $("#navToggle").toggleClass("active");
        $(".overlay").toggleClass("open");
        $("body").toggleClass("locked");
    });
    <!-- конец меню -->

    <!-- скролл-->
    $(".scroll").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    $(".down").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    <!-- конец скролл -->



    $("#fl_inp").change(function(){
        var filename = $(this).val().replace(/.*\\/, "");
        $("#fl_nm").html(filename);
    });

});

$(document).ready(function() {

    $(".main_input_file").change(function() {

        var f_name = [];

        for (var i = 0; i < $(this).get(0).files.length; ++i) {

            f_name.push(" " + $(this).get(0).files[i].name);

        }

        $("#f_name").val(f_name.join(", "));
    });

});