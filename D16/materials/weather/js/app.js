$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=New%20York,NY&units=imperial&apikey=", function(data) {
  console.log(data);
});