console.log("Hello");

var title = prompt("Whatdo you want the title to be?")

$("h1").text(title);

$("button").on("click", function() {
  var title = $("input").val();
  $("h1").text(title);
});