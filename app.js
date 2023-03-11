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

function print_details(data) {
  var cityName = data.name;
  fetch(`https://api.unsplash.com/search/photos/?query=${cityName}&&orientation=landscape&client_id=kdNwYs_92jQnTGqAGr4n3Y8QyPs9TLKVnncRGhQ4JzQ`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      var imageurl = data.results[1].urls.raw;
      console.log(imageurl);
      document.getElementById("body").style.backgroundImage = `url(${imageurl})`;
    })
  document.getElementById("city").value = data.name;
  var pressure1 = Math.round((data.main.pressure / 760) * 100);
  pressure1 = pressure1 / 100;
  document.getElementById("parameter1").innerHTML = `
        <br><h3 class="temp">Min Temperature: ${data.main.temp_min}°C</h3><br><br>
        <h3 class="temp">Temperature: <h1>${data.main.temp}°C </h1></h3>
        <h3 class="temp">Max Temperature: ${data.main.temp_max}°C</h3><br><br>
        <h3 class="temp">Feels Like: ${data.main.feels_like} °C </h3>
      `;
  document.getElementById("parameter2").innerHTML = `
        <h3>Weather Description:<br> ${data.weather[0].description}</h3><div id="description_icon"></div>
      `;
  document.getElementById("parameter3").innerHTML = `
        <h3>Humidity: ${data.main.humidity} </h3>
        <h3>Visibility: ${data.visibility} </h3>
      `;
       fetch(`https://api.ipgeolocation.io/timezone?apiKey=42f69e7bb91947bc99311b5b9ffeb49c&lat=${data.coord.lat}&long=${data.coord.lon}`) 
    .then(response => response.json()) 
    .then(data2 => { 
      console.log(data2); 
      var time=data2.time_24[0] + data2.time_24[1]; 
      console.log(time);
      if(time>=6 && time<18){ 
        if(data.weather[0].description=="clear sky"){ 
          document.getElementById("description_icon") .innerHTML=`<img class="imic" src="/images/01d@2x.png">`;
        }else if(data.weather[0].description=="few clouds"){ 
          document.getElementById("description_icon") .innerHTML=`<img class="imic" src="/images/02d@2x.png">`;
          // 2 
        }else if(data.weather[0].description=="scattered clouds"){ 
          document.getElementById("description_icon") .innerHTML=`<img class="imic" src="/images/03d@2x.png">`;
          // 3 
        }else if(data.weather[0].description=="broken clouds"){ 
          document.getElementById("description_icon") .innerHTML=`<img class="imic" src="/images/04d@2x.png">`;
          // 4 
        }else if(data.weather[0].description=="shower rain"){ 
          document.getElementById("description_icon") .innerHTML=`<img class="imic" src="/images/09d@2x.png">`;
          // 9 
        }else if(data.weather[0].description=="rain"){ 
          document.getElementById("description_icon") .innerHTML=`<img class="imic" src="/images/10d@2x.png">`;
          // 10 
        }else if(data.weather[0].description=="thunderstorm"){ 
          document.getElementById("description_icon") .innerHTML=`<img class="imic" src="/images/11d@2x.png">`;
          // 11 
        }else if(data.weather[0].description=="snow"){ 
          document.getElementById("description_icon") .innerHTML=`<img class="imic" src="/images/13d@2x.png">`;
          // 13 
        }else if(data.weather[0].description=="mist"){ 
          document.getElementById("description_icon") .innerHTML=`<img class="imic" src="/images/50d@2x.png">`;
          // 50 
        }else if(data.weather[0].description=="haze"){
          document.getElementById("description_icon") .innerHTML=`<img class="imic" src="/images/02d@2x.png">`;
          //new image
        }
      }else{ 
        if(data.weather[0].description=="clear sky"){ 
          document.getElementById("description_icon") .innerHTML=`<img class="imic" src="/images/01n@2x.png">`;
          // 1 
        }else if(data.weather[0].description=="few clouds"){ 
          document.getElementById("description_icon") .innerHTML=`<img class="imic" src="/images/02n@2x.png">`;
          // 2 
        }else if(data.weather[0].description=="scattered clouds"){ 
          document.getElementById("description_icon") .innerHTML=`<img class="imic" src="/images/03n@2x.png">`;
          // 3 
        }else if(data.weather[0].description=="broken clouds"){ 
          document.getElementById("description_icon") .innerHTML=`<img class="imic" src="/images/04n@2x.png">`;
          // 4 
        }else if(data.weather[0].description=="shower rain"){ 
          document.getElementById("description_icon") .innerHTML=`<img class="imic" src="/images/09n@2x.png">`;
          // 9 
        }else if(data.weather[0].description=="rain"){ 
          document.getElementById("description_icon") .innerHTML=`<img class="imic" src="/images/10n@2x.png">`;
          // 10 
        }else if(data.weather[0].description=="thunderstorm"){ 
          document.getElementById("description_icon") .innerHTML=`<img class="imic" src="/images/11n@2x.png">`;
          // 11 
        }else if(data.weather[0].description=="snow"){ 
          document.getElementById("description_icon") .innerHTML=`<img class="imic" src="/images/13n@2x.png">`;
          // 13 
        }else if(data.weather[0].description=="mist"){ 
          document.getElementById("description_icon") .innerHTML=`<img class="imic" src="/images/50n@2x.png">`;
          // 50 
        } 
      } 
      // Changes Started
      var sunrisetime=data.sys.sunrise;
      var sunsettime=data.sys.sunset;
      console.log(sunrisetime);
      console.log(data2.date_time_wti[26]);
      var sign=data2.date_time_wti[26];
      console.log(sign);

      
      var date = new Date(sunrisetime * 1000);
      var time1=date.toGMTString('en-US',{hour12: false,});
      var date2=new Date(sunsettime * 1000);
      var time4=date2.toGMTString('en-US',{hour12: false,});
      var  time2 = time1.slice(-11, -4);
      var  time3 = time4.slice(-11, -4);
      var offset_hour=data2.date_time_wti.slice(26,29);
      var offset_minute=data2.date_time_wti.slice(29,31);
  document.getElementById("parameter4").innerHTML = `
        <h3>Sunrise: ${time2} ${offset_hour}:${offset_minute} </h3>
        <h3>Sunset: ${time3} ${offset_hour}:${offset_minute} </h3>
      `;
        // Changes ended
    }) 
      
      
    
  document.getElementById("parameter5").innerHTML = `
        <h3>Pressure: ${pressure1}atm</h3>
        <h3>Wind Speed: ${data.wind.speed}Km/h</h3>
        <h3>Wind Degree: ${data.wind.deg}°</h3>
      `;  
    
}




  
 
 
 
