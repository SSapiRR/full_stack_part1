$(document).ready(function() {
    $("#b1").click(function() {
        $("#hw").animate({top:'300px'}).animate({left:'300px'}).fadeOut("slow");
    });


    $("#b2").click(function() {
        $("#hw2").show("slow").fadeIn("slow");
    });

    $("#hw3").click(function() {
        $(this).css("background-color", "green");
    })
});

