// Get the input field
const cityInput = document.querySelector("#city");

// Get the submit button
const submitBtn = document.querySelector("#submitBtn");

// Get the weather container
const weatherContainer = document.querySelector("#weather");

// Add event listener for submit button
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  // Get the city from the input field
  const city = cityInput.value;
  // Fetch weather data from OpenWeatherMap API
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b0022d29684849d1a9346729cde03ef0`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      print_details(data);
    })

    .catch(error => {
      console.error("Error:", error);
    });

});
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function (position) {
    var latitude1 = position.coords.latitude;
    var longitude1 = position.coords.longitude;
    wet_lat_lon(latitude1, longitude1)

      .catch(error => {
        console.error("Error:", error);
      });
    // console.log("Latitude: " + position.coords.latitude);
    // console.log("Longitude: " + position.coords.longitude);
  });
} else {
  console.log("Geolocation is not supported by this browser.");
}
navigator.geolocation.getCurrentPosition(function (position) {
  // console.log("Latitude: " + position.coords.latitude);
  // console.log("Longitude: " + position.coords.longitude);
}, function (error) {
  var latitude2 = 51.5085;
  var longitude2 = -0.1257;
  wet_lat_lon(latitude2, longitude2);

  console.log("Error: " + error.message);
});

/// call by lattitude & longitude;

function wet_lat_lon(lat, lon) {

  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=b0022d29684849d1a9346729cde03ef0`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      print_details(data);
    })

};


function print_details(data){
  document.getElementById("location").innerHTML= `<h3>${data.name}</h3>`
  ;
  var pressure1 = Math.round((data.main.pressure / 760) * 100);
      pressure1 = pressure1 / 100;
      document.getElementById("parameter1").innerHTML = `
        <h3>Temperature: ${data.main.temp} °C</h3>
      `;
      document.getElementById("parameter2").innerHTML = `
        <h3>Pressure: ${pressure1} atm</h3>
      `;
      document.getElementById("parameter3").innerHTML = `
        <h3>Feels Like: ${data.main.feels_like} °C </h3>
      `;
      document.getElementById("parameter4").innerHTML = `
        <h3>Humidity: ${data.main.humidity} </h3>
      `;
      document.getElementById("parameter5").innerHTML = `
        <h3>Visibility: ${data.visibility} </h3>
      `;
      document.getElementById("parameter6").innerHTML = `
        <h3>Sunrise: ${data.sys.sunrise} </h3>
      `;
      document.getElementById("parameter7").innerHTML = `
        <h3>Sunset: ${data.sys.sunset} </h3>
      `;
      document.getElementById("parameter8").innerHTML = `
        <h3>Description: ${data.weather[0].description}</h3>
      `;
}

