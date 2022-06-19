const API_KEY = "1eee6298bc13abc8ce3c8dfa95cf8da8";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `날씨 : ${data.weather[0].main} / 온도 : ${data.main.temp}도 /`;
    });
}

function onGeoError() {
  alert("We can't find your location");
}

const locate = navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
