$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    $(".noun").text($("input#noun").val());
    $(".verb").text($("input#verb").val());
    $(".petName").text($("input#petName").val());
    $(".rockband").text($("input#rockband").val());
    $(".adverb").text($("input#adverb").val());
    $(".adjective").text($("input#adjective").val());
    $("#story").show();
    event.preventDefault();
  });
});
