function ibg(){$.each($(".ibg"),function(i,s){0<$(this).find("img").length&&$(this).css("background-image",'url("'+$(this).find("img").attr("src")+'")')})}$(".wrapper").addClass("loaded"),$(".icon-menu").click(function(i){$(this).toggleClass("active"),$(".menu__body").toggleClass("active"),$("body").toggleClass("lock")}),ibg();