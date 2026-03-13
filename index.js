const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "73a14e7935995da20228876316ea1e06"; //Dont use this pls, use your own

weatherForm.addEventListener("submit", event => {
    event.preventDefault(); //prevents default of page refresh on form

    const city = cityInput.value;

    if (city) {

    }
    else {
        displayError("Please Enter a city")
    }
 })

async function getWeatherData(city) {

}

function displayWatherInfo(data) {

}

function getWeatherEmoji(weatherId) {

}

function displayError(message) {

}