const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "73a14e7935995da20228876316ea1e06"; //Dont use this pls, use your own

weatherForm.addEventListener("submit", async event => {
    event.preventDefault(); //prevents default of page refresh on form

    const city = cityInput.value;

    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWatherInfo(weatherData);
        }
        catch(error) {
            console.error(error);
            displayError(error);
        }
    }
    else {
        displayError("Please Enter a city");
    }
 });

async function getWeatherData(city) {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`; 

    const response = await fetch(apiURL);
    if (!response.ok){
        throw new Error("Could not fetch weather data");
    }
    return await response.json();
}

function displayWatherInfo(data) {
    const {name: city,
        main: {temp, humidity}, 
        weather:[{description, id}]} = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const getWeatherEmoji = document.createElement("p");

    cityDisplay.textContent = city;
    

    cityDisplay.classList.add("cityDisplay")

    card.appendChild(cityDisplay);

}

function getWeatherEmoji(weatherId) {

}

function displayError(message) {
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}