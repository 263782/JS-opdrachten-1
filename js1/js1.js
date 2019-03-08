$(document).ready(function() {
    $("#area").click(function() {
      var a = $("#radius").val();
      $("#resultA").val((22 / 7) * (+a) * (+a));
    });
    $("#perimeter").click(function() {
      var a = $("#radius").val();
      $("#resultP").val((2) * (22 / 7) * (+a));
    });
  });