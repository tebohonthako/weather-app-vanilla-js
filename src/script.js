document.addEventListener('DOMContentLoaded', (event) => {
    function handleSearchSubmit(event) {
        event.preventDefault();
        let searchInput = document.querySelector("#search-form-input");
        let cityElement = document.querySelector("#city");
        cityElement.innerHTML = searchInput.value; 
    } 

    let searchFormElement = document.querySelector("#search-form");
    searchFormElement.addEventListener("submit", handleSearchSubmit);
});



// API intergration 
apiKey = '8c106b65dft3cb9cbd6a0a0oc1dc9e43';
apiURL = 'https://api.shecodes.io/weather/v1/current?query={query}&key=8c106b65dft3cb9cbd6a0a0oc1dc9e43';