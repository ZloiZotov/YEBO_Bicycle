$('.wrapper').addClass('loaded');

$('.icon-menu').click(function(event) {
    $(this).toggleClass('active');      
    $('.menu__body').toggleClass('active');
    $('body').toggleClass('lock'); // Запрет скроллинга во время открытого меню на мобилках
});


function ibg() { $.each($(".ibg"), function (i, g) { 0 < $(this).find("img").length && $(this).css("background-image", 'url("' + $(this).find("img").attr("src") + '")') }) } ibg();


