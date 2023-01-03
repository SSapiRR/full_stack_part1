$(document).ready(function() {
    $("#b1").click(function() {
        $("#hw").before('<mark>Hello </mark>')
    })

    $("#b2").click(function() {
        $("#ul1").append('<li>new item</li>')
    })

    $("#c").click(function() {
        $("#ul1").empty();
    });
});