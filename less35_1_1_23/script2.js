$(document).ready(function() {
    $("#b1").click(function() {
        $("#hw1").html("<mark>Hello</mark> there");
    })

    $("#b2").click(function() {
        $("#hw2").text($("#hw1").attr("id"));
    })

    $("#b3").click(function() {
        $("#hw3").text($("#i1").val());
    })


})