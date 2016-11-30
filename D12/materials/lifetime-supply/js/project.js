console.log("is it working?")

$("button").on("click", function() {
  

var currentAge = $("#age").val();
  
var maxAge = $("#max-age").val();

var typeofdrink = $("#item").val();

var num-per-day = $("#num-per-day").val();

var maxNumberofDrinks = (maxAge - currentAge) * howManyPerDay * 365;
$("#solution").text(maxNumberofDrinks);
$("#drink").text(typeofdrink);


});