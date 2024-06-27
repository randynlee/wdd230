const weatherInfo = document.getElementById('weather-info');

const apiKey = "bb093eb64f2002a8f5ad046776e9b654";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=imperial&q=West Jordan,us&appid=${apiKey}`;


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


function displayResultsStretch(data) {
    // format temperature to show zero decimal points
    const formattedTemp = `${data.main.temp.toFixed(0)}°F`;

    // set weather icon
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    // capitalize each word in the weather description
    const desc = data.weather[0].description.split(' ');
    const capitalizedDesc = desc.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    // update weather info span
    weatherInfo.innerHTML = `<div id="weather-info-container"><img src="${iconsrc}" alt="Weather Icon"> <p>${formattedTemp} - ${capitalizedDesc}</p></div>`;
}

apiFetch();