function getWeather() {
    var temperature = document.getElementById("temperature");
    var description = document.getElementById("description");
    var location = document.getElementById("location");
    let api = "https://api.openweathermap.org/data/2.5/weather";
    let apiKey = "86abcac431bd1f434ea1e29bd6903bfe";
    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
        console.log(position);
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var image = document.getElementById("weatherImage");
    
        let url =
          api +
          "?lat=" +
          latitude +
          "&lon=" +
          longitude +
          "&appid=" +
          apiKey +
          "&units=imperial";
    
          fetch(url)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            let temp = data.main.temp;
            temperature.innerHTML = temp + "° F";
            location.innerHTML = data.name;
            description.innerHTML = data.weather[0].main;
            
            if (data.weather[0].main === 'Clouds') {
                image.setAttribute('src', 'Images/cloudy.svg');
            }
          });
    }
       
    function error() {
        console.log("error");
    }
}



