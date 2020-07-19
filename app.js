const api = {
    key: "b88c039e6aca3109a8ea3b13cfcdea29",
    baseURL: "http://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search_box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(eve) {
    if (eve.keyCode == 13) {
        getResults(searchbox.value);

    }
}

function getResults(query) {
    fetch(`${api.baseURL}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);

}
function displayResults(weather) {
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

    let weatherel = document.querySelector('.current .weather');
    weatherel.innerText = `${weather.weather[0].main}`;

    let hilow = document.querySelector('.hilow');
    hilow.innerText = `${weather.main.temp_min}°C/${weather.main.temp_max}°C`
}
