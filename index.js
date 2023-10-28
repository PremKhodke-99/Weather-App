// const apikey = "6e24c09cede08a00a88ce8c8e394c755";
const searchBtn = document.querySelector(".search button");

searchBtn.addEventListener("click", () => {
    const cityName = document.querySelector(".search input").value;
    init(cityName);
})

async function init(cityName) {
    const apiKey = "6e24c09cede08a00a88ce8c8e394c755"; //got key and url from openweathermap.org
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`);

    if (response.status === 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    } else {
        let data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        const weatherIcon = document.querySelector(".weather-icon");

        if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "weather-app-img/images/clouds.png";
        }
        else if (data.weather[0].main === "Clear") {
            weatherIcon.src = "weather-app-img/images/clear.png";
        }
        else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "weather-app-img/images/drizzle.png";
        }
        else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "weather-app-img/images/mist.png";
        }
        else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "weather-app-img/images/rain.png";
        }
        else if (data.weather[0].main === "Snow") {
            weatherIcon.src = "weather-app-img/images/snow.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }


}
