// function currentTime(timezoneIn, dtIn) {
//     let dateTime = new Date(dtIn * 1000 + (timezoneIn * 1000));

//     // Convert into 24-hour format
//     let hour = (dateTime.getHours() % 12) - 3;
//     let ampm = hour >= 12 ? 'pm' : 'am';

//     let minutes = dateTime.getMinutes();
//     let weekday = dateTime.toLocaleString('default', { weekday: 'long' });
//     let month = dateTime.toLocaleString('default', { month: 'short' });
//     let date = dateTime.getDate();
    
//     return `${hour} : ${minutes} ${ampm} - ${weekday} , ${month} ${date}`; 
// }

// console.log(currentTime(19800, 1674238430));

// https://api.ipgeolocation.io/timezone?apiKey=2858271f7cd44167bbd495a9190617da&lat=-27.4748&long=153.017
// https://openweathermap.org/img/wn/10n@2x.png