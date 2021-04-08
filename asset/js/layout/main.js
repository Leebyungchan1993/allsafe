$(document).ready(function () {
    $('.searchbtn').click(function () {
        $('.list-wrap').css('display', 'block');
        // $('.search-box').css('display','none');
    });

    $('.list-close-btn').click(function () {
        $('.list-wrap').css('display', 'none');
    });

    $('.list-btn').click(function () {
        $('.search-box').css('display', 'none');
        $('.search-detail-wrap').css('display', 'block');
    });

    $('.return-map-btn').click(function(){
        $('.search-detail-wrap').css('display', 'none');
        $('.search-box').css('display', 'block');
    });

    $('.wish-btn').click(function () {
        $(this).toggleClass('on');
    });

    $('.modal-wrap > .modal-bg > .content-box').click(function(){
        $('.modal-wrap').hide();
        $('.search-box').hide();
        $('.search-detail-wrap').show();
    });

});