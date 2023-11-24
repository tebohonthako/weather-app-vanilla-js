function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector('#search-form-input');
    let cityElement = document.querySelector('#city');
    cityElement.innerHTML = searchInput.value;
    console.log(searchInput.value);
} 


// select the search form where u input city you to be searched 
let searchElement = document.querySelector('#search-form-input');
searchElement.addEventListener("submit", handleSearchSubmit);