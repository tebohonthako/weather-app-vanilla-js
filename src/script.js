// seperation of concerns tells us to create seperate functions that do one specific task 
function refreshWeather(response) {
    let tempElement = document.querySelector('#temp');
    let cityElement = document.querySelector('#city');
    let descriptionElement = document.querySelector('#description');
    let humidityElement = document.querySelector('#humidity');
    let windElement = document.querySelector('#wind');
    let timeElement = document.querySelector('#date-and-time');
    let dateAndTimeElement = new Date(response.data.time * 1000)

;
    tempElement.innerHTML = Math.round(response.data.temperature.current);
    cityElement.innerHTML = response.data.city;
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windElement.innerHTML = `${response.data.wind.speed}km/h`;
    timeElement.innerHTML = formatDate(date);
   
}

function formatDate() {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesdat',
        'Thursday',
        'Friday',
        'Saturday'
    ]
let day = days[date.getDay()];
return `${day} ${hours} : ${minutes}`; 
}

function searchCity(city) {
    apiKey = '8c106b65dft3cb9cbd6a0a0oc1dc9e43';
    apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiURL).then(refreshWeather)
}

document.addEventListener('DOMContentLoaded', (event) => {
    function handleSearchSubmit(event) {
        event.preventDefault();
        let searchInput = document.querySelector("#search-form-input");
        searchCity(searchInput.value)
    } 

    let searchFormElement = document.querySelector("#search-form");
    searchFormElement.addEventListener("submit", handleSearchSubmit);
    searchCity('London');
});
