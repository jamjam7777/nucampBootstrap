$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").onclick(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });
});

$(function() {
    $("#loginButton").onclick(function(){
        $("#loginModal").modal("show");
    }   
});

$(function() {
    $("#reserveButton").onclick(function(){
        $("#reserveModal").modal("show");
    }
});

