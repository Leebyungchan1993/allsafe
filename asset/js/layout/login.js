$(document).ready(function() {
    $(".hide-pw").on("click", function() {
        $(".show-pw").removeClass("d-none");
        $(this).addClass("d-none");
        $(this).parent().find(".pw-input").attr("type", "text");
    });

    $(".show-pw").on("click", function() {
        $(".hide-pw").removeClass("d-none");
        $(this).addClass("d-none");
        $(this).parent().find(".pw-input").attr("type", "password");
    });

    $("input[type=text], input[type=password]").on("keydown keyup", function() {
        if ($(".pw-input").val().length > 0 && $(".id-input").val().length > 0) {
            $(".go-login").removeClass("btn-disabled");
        } else {
            $(".go-login").addClass("btn-disabled");
        }
    });
});