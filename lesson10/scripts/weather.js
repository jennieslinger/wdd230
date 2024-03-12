//key = d772ce126aa0f794c9cbc6e9a63c8e68;
//Trier, Germany lat & lon = 49.74804729798613, 6.634341752773694

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.63&units=imeperial&appid=d772ce126aa0f794c9cbc6e9a63c8e68';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data); //temporary
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
    currentTemp.innerHTML = '${data.weather)&deg;F';
    const iconsrc = 'https://openweathermap.org/img/w/${_____}._____';
    let desc = data.weather[0].______;
    weatherIcon.setAttribute('___', ____);
    weatherIcon.setAttribute('___', ___);
    captionDesc.textContent = '${desc}';
}