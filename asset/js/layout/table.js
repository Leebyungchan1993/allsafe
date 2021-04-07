$(document).ready(function () {
    $('.notice-content-wrap > a').click(function () {
        $(this).parent().find('.sub-box').slideToggle().parent().
        siblings().find('.sub-box').css('display','none');
    });
});