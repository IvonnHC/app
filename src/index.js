let now = new Date();
let p = document.querySelector("#date");
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday,",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
p.innerHTML = `${day} ${hours}:${minutes}`;

function displayWeather(response) {
  console.log(response.data);
  document.querySelector("#search-city").innerHTML = response.data.name;
  document.querySelector("#weather").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#clouds").innerHTML = response.data.weather[0].main;
}

function search(city) {
  let apiKey = "8a1e5b0b40430d8fd49a110a48ce795d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function handleSubmit(event) {
  event.preventDefault();

  let searchImput = document.querySelector("#search-imput");
  let city = searchImput.value;
  search(city);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

search("Oslo");
