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

    $(".agree-checkbox").on("change", function() {
        var allchecked = true;
        $(".agree-checkbox").each(function(i, v) {
            if (!$(v).prop("checked")) allchecked = $(v).prop("checked");
        });

        $(".all-checked").prop("checked", allchecked);
    });

    $(".all-checked").on("change", function() {
        $(".agree-checkbox").prop("checked", $(this).prop("checked"))
    });
});