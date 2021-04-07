$(document).ready(function(){

    $(".gnb").stop().css("left", "-"+ $(".gnb").outerWidth() +"px");
$(".mobile-gnb-wrap").hide();

var menu_flag = false;
$(".gnb-open").on("click", function() {
   if (!menu_flag) {
       $("html,body").css("overflow", "hidden");
       $(".mobile-gnb-wrap").show();
       $(".gnb").stop().animate({
           left : 0
       }, 300);

       menu_flag = true;
   }
});

$(".gnb-close").on("click", function() {
   if (menu_flag) {
       $("html,body").css("overflow", "visible");
       $(".gnb").stop().css("left", "-"+ $(".gnb").outerWidth() +"px");
       $(".mobile-gnb-wrap").hide();

       menu_flag = false;
   }
});
});