$(document).ready(function () {
    //Area
    $("#area").click(function () {
        var a = $("#width").val();
        var b = $("#height").val();
        $("#resultA").val((+a) * (+b));
    });
    //Circumference
    $("#circumference").click(function () {
        var a = $("#width").val();
        var b = $("#height").val();
        $("#resultB").val(2 * (+a) + 2 * (+b));
    });
});