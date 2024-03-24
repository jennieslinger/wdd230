//key = d772ce126aa0f794c9cbc6e9a63c8e68;
//Flagstaff lat & lon = 35.198322916347834, -111.65465089143264

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=35.20&lon=-111.65&units=imperial&appid=d772ce126aa0f794c9cbc6e9a63c8e68';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            const dailyForecast = data.daily.slice(1, 4);
            displayResults(dailyForecast);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch()

function displayResults(dailyForecast) {
    dailyForecast.forEach((day, index) => {
        const date = new Date(day.dt * 1000);
        const dayOfWeek = date.toLocaleDateString('en-US', { weekday: "long" });
        const temp = `${day.temp.day}&deg;F`;
        const iconSrc = `https://openweathermap.org/omg/w/${day.weather[0].icon}.png`;
        const desc = data.weather[0].description;

        document.querySelector(`#day-${index + 1}-name`).textContent = dayOfWeek;
        document.querySelector(`#day-${index + 1}-temp`).innerHTML = temp;
        document.querySelector(`#day-${index + 1}-icon`).setAttribute('src', iconSrc);
        document.querySelector(`#day-${index + 1}-icon`).setAttribute('src', desc);
        document.querySelector(`#day-${index + 1}-name`).textContent = desc;
    });
}