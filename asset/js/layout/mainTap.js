var tabOn = "map";

function loCation() {
    var mainBtt = document.querySelector('.main-btn');
    var location = document.getElementsByName('location')[0];
    var location2 = document.getElementsByName('location2')[0];
    var idx = location.selectedIndex;
    var idx2 = location2.selectedIndex;

    if (idx > 0 && idx2 > 0) {
        $(".main-btn").each(function () {
            $(this).css('pointer-events','all');
        });
        tabStateChange();
    } else {
        $(".main-btn").each(function () {
            $(this).removeClass("on").css('pointer-events','none');
        });
    }
}

function tabStateChange() {
    $(".main-btn").each(function () {
        if ($(this).attr("data-val") == tabOn) {
            $(this).addClass("on");
        } else {
            $(this).removeClass("on");
        }
    });
}

function changeTab(tabcode) {
    tabOn = tabcode;
    tabStateChange();
}