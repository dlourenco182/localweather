$(document).ready(function() {

    var long;
    var lat;
    var api;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            long = parseFloat(position.coords.longitude.toFixed(2));
            lat = parseFloat(position.coords.latitude.toFixed(2));
            api = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&APPID=80a02ad027f661042d5d7effacd085f2";
            $.getJSON(api, function(data) {
                var weatherType = data.weather[0].description;
                var kelvin = data.main.temp;
                var windSpeed = data.wind.speed;
                var city = data.name;
                var icon = '<img src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png">';
                $("#inputweather").append("<br>City: " + city);
                $("#inputweather").append("<br>Time: " + icon);
                $("#inputweather").append("<br>Description: " + weatherType);
                $("#inputweather").append("<br>Temp: " + kelvin + "(k)");
            });
        });
    }
});