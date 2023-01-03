$(".btn-hide").click(function() {$(".hw").hide();});
$("p").click(function() {$(this).hide();});
$(".btn-hide-first").click(function() {$("p:first").hide();});
$(".hw").hover(function(){$(this).css("background-color", "green");});
$(".db-click").dblclick(function() {$("h5").text('You clicked twice');});
$("h5").hover(function(){$("h5").css("background-color", "green");},function(){$("h5").css("color", "red");})