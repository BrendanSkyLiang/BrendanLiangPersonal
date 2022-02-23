window.addEventListener('load', () => {
  let long;
  let lat;
  // Accesing Geolocation of User
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      // Storing Longitude and Latitude in variables
      console.log(position)
      long = position.coords.longitude;
      lat = position.coords.latitude;
      console.log('lat')
      const apiKey = '1142346d1944719788744d7d9581c093';
      const base = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=" + apiKey + "&units=metric";

      // Using fetch to get data
      fetch(base)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const tempC = data.main.temp;
          const place = data.name;
          // const icon = data.weather[0].icon;

          // const iconURL = 'http://openweathermap.org/img/wn/' + icon + '@2x.png'

          // Converting Epoch(Unix) time to GMT
          // const sunriseGMT = new Date(sunrise * 1000);
          // const sunsetGMT = new Date(sunset * 1000);
          
          // Interacting with DOM to show data
          tempC.textContent = `${tempC.toFixed(2)} °C`;
          document.getElementById("temperature").innerHTML = tempC.toFixed(1) + '°C'
          // var img = document.createElement('img')
          // img.src = iconURL;
          // document.getElementById("tempIcon").appendChild(img);
          place.textContent = `${place}`;
          document.getElementById("place").innerHTML = place
          // desc.textContent = `${description}`;

          // sunriseDOM.textContent = `${sunriseGMT.toLocaleDateString()}, ${sunriseGMT.toLocaleTimeString()}`;
          // sunsetDOM.textContent = `${sunsetGMT.toLocaleDateString()}, ${sunsetGMT.toLocaleTimeString()}`;
        });
    });
  } else {
    document.getElementById("temperature").innerHTML = 'temperature error'
    document.getElementById("place").innerHTML = 'loc error'
  }

});
