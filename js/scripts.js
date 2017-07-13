$(document).ready(function() {
  $("#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
    $("ul#user").append("<li>This is green line!</li>");
    $("ul#webpage").append("<li>Why green there!!</li>");
    $("#user").children("li").click(function() {
      $(this).remove();
    });
    $("#webpage").children("li").click(function() {
      $(this).remove();
    })
  });
  $("#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
    $("ul#user").append("<li>This is yellow page</li>")
    $("#user").children("li").click(function() {
      $(this).remove();
    });
    $("ul#webpage").append("<li>Why yellow there!!</li>");
    $("#webpage").children("li").click(function() {
      $(this).remove();
    });
  });
  $("#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
    $("ul#user").append("<li>This is red line</li>")
    $("ul#webpage").append("<li>Why red there!!</li>");
    $("#user").children("li").click(function() {
      $(this).remove();
    });
    $("#webpage").children("li").click(function() {
      $(this).remove();
    });
    });
  });
