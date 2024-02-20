$(".menu-item").click(function () {
    var $currentSubMenu = $(this).find(".sub-menu");
    $(".sub-menu").not($currentSubMenu).slideUp();
    $currentSubMenu.slideToggle();
    $(this).toggleClass("active");
});
