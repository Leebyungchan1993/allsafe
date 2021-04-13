$(document).ready(function () {

    $('.wish-btn').click(function () {
        $(this).toggleClass('active');
    });

    $('.alert-close-btn').click(function () {
        $('.login-alert-wrap').css('display', 'none');
    });


    $('.search-detail-box ul li .list-btn').click(function () {
        $('.content-list-wrap').show();
    });

    $('.search-detail-box ul li .map-btn').click(function () {
        $('.content-list-wrap').hide();
    });

    $('.top-search-box > .top-search-btn').click(function () {
        $('.top-menu-search-box > input').attr('placeholder', '').focus().attr('readonly', false).focusout().attr('placeholder', '방역업체 찾기');
    });

    $('.main-wish-box > i').click(function () {
        $('.login-alert-wrap').css('display', 'flex');
    });

    $('.modal-bg').click(function () {
        $('.modal-wrap').css('display', 'none');
    });
});