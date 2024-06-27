// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=Germany&appid=$bb093eb64f2002a8f5ad046776e9b654';

async function apiFetch() {
    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResultsStretch(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

function displayResultsStretch(data) {
    // format temperature to show zero decimal points
    const formattedTemp = `${data.main.temp.toFixed(0)}&deg;C`;
    currentTemp.innerHTML = formattedTemp;

        // set weather icon
        const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        weatherIcon.setAttribute('src', iconsrc);
    
        // capitalize each word in the weather description
        const desc = data.weather[0].description.split(' ');
        const capitalizedDesc = desc.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
        // set weather description
        captionDesc.textContent = capitalizedDesc;
    }

    apiFetch();