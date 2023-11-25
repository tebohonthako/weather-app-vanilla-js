// seperation of concerns tells us to create seperate functions that do one specific task 
function refreshWeather(response) {
    let tempElement = document.querySelector('#temp');
    tempElement.innerHTML = Math.round(response.data.temperature.current);
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
        let cityElement = document.querySelector("#city");
        cityElement.innerHTML = searchInput.value; 
        searchCity(searchInput.value)
    } 

    let searchFormElement = document.querySelector("#search-form");
    searchFormElement.addEventListener("submit", handleSearchSubmit);
});
