//Cozumel long & lat = 20.424554686294382, -86.9212992049814

//key = d772ce126aa0f794c9cbc6e9a63c8e68;

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const currentHumid = document.querySelector('#current-humid');
const tempMax = document.querySelector('#temp-max');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.425&lon=-86.92&units=imperial&appid=d772ce126aa0f794c9cbc6e9a63c8e68';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); //temporary
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch()

function displayResults(data) {
    currentTemp.innerHTML = ` ${data.main.temp}&deg;`;
    const iconsrc = 'https://openweathermap.org/img/w/${data.weather[0].icon}.png';
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    currentHumid.innterHTML = ` ${data.main.humidity}`;
    tempMax.textContent = ` ${data.main.temp_max}&deg;`;
}

/*function displayResults(dailyForecast) {
    dailyForecast.forEach((day, index) => {
        const date = new Date(day.dt * 1000);
        const dayOfWeek = date.toLocaleDateString('en-US', { weekday: "long" });
        const temp = `${day.temp.day}&deg;F`;
        const iconSrc = `https://openweathermap.org/omg/w/${day.weather[0].icon}.png`;
        const desc = day.weather[0].description;

        document.querySelector(`#day-${index + 1}-name`).textContent = dayOfWeek;
        document.querySelector(`#day-${index + 1}-temp`).innerHTML = temp;
        document.querySelector(`#day-${index + 1}-icon`).setAttribute('src', iconSrc);
        document.querySelector(`#day-${index + 1}-icon`).setAttribute('alt', desc);
        document.querySelector(`#day-${index + 1}-name`).textContent = desc;
    });
}

window.addEventListener('load', async () => {
    const weatherData = await fetchWeatherData();
    updateWeatherCard(weatherData);
});*/