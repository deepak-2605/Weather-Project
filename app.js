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
  var cityName=data.name;
  fetch(`https://api.unsplash.com/search/photos/?query=${cityName}&&orientation=landscape&client_id=kdNwYs_92jQnTGqAGr4n3Y8QyPs9TLKVnncRGhQ4JzQ`)
    .then(response => response.json())
    .then(data2 => {
      console.log(data2);
      var imageurl=data2.results[1].urls.raw;
      console.log(imageurl);
      document.getElementById("body").style.backgroundImage=`url(${imageurl})`;
    })

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
    dayornight(data.coord.lat,data.coord.lon,data.weather.description);
}


function dayornight(latitude3,longitude3,description){
  fetch(`https://api.ipgeolocation.io/timezone?apiKey=2858271f7cd44167bbd495a9190617da&lat=${latitude3}&long=${longitude3}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      var time=data.time_24[0]+data.time_24[1];
      if(time>=6 && time<18){
        if(description=="clear sky"){
          
          // 1
        }else if(description=="few clouds"){
          // 2
        }else if(description=="scattered clouds"){
          // 3
        }else if(description=="broken clouds"){
          // 4
        }else if(description=="shower rain"){
          // 9
        }else if(description=="rain"){
          // 10
        }else if(description=="thunderstorm"){
          // 11
        }else if(description=="snow"){
          // 13
        }else if(description=="mist"){
          document.getElementById("description_icon").innerHTML=`<img src="/images/01d@2x.png">`;
          // 50
        }
      }else{
        if(description=="clear sky"){
          // 1
        }else if(description=="few clouds"){
          // 2
        }else if(description=="scattered clouds"){
          // 3
        }else if(description=="broken clouds"){
          // 4
        }else if(description=="shower rain"){
          // 9
        }else if(description=="rain"){
          // 10
        }else if(description=="thunderstorm"){
          // 11
        }else if(description=="snow"){
          // 13
        }else if(description=="mist"){
          document.getElementById("description_icon").innerHTML=`<img src="/images/01d@2x.png">`;
          // 50
        }
      }
    })



}
