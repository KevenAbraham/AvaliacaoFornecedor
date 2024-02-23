$(".menu-item").click(function () {
    var $currentSubMenu = $(this).find(".sub-menu");
    $(".sub-menu").not($currentSubMenu).slideUp();
    $(".menu-item").not($(this)).removeClass("active");
    $(".menu_vector").not($(this).find(".menu_vector")).css("transform", "none"); // Resetar a rotação do vetor dos outros itens do menu
    $currentSubMenu.slideToggle();
    $(this).toggleClass("active");
 
    $(this).find(".menu_vector").css("transform", ""); // Resetar a rotação do vetor do item clicado
});