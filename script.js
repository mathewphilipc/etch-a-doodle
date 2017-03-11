var size = 4;

$(document).ready(function() {
  $(".col1").text("hello other world");
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
      //$(this).text("MO effect!");
      $(this).css('background-color', 'red');
      $(this).css('color', 'red');
    }
  );
})
