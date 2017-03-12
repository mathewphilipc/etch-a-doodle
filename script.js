var size = 4;

$(document).ready(function() {
  $(".col1").text("hello other world");
  $("td").css('background-color','white');
  $(".box").hover(
    function() {
      //$(this).text("Hover effect!");
    }
  );
  $(".box").mouseover(
    function() {
      //$(this).text("MO effect!");
      $(this).css('background-color', 'red');
      $(this).css('color', 'red');
    }
  );
  $("td").mouseover(
    function() {
      //var bgColor = $(this).css("background-color");
      //if (bgColor==="rgb(10,10,10)") {
      //  $(this).css('background-color', 'red');
      //}
      //$(this).text("MO effect!");
      $(this).css('background-color', 'red');
    }
  );
})
