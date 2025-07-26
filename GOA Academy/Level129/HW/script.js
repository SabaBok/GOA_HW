const weatherForm = document.querySelector('form')
const card = document.querySelector('.card-city')
const recCities = document.querySelectorAll('.main-right-cities div')

const temp = document.querySelector('.temp')
const [cityName, weekDay, fullDate] = card.children
const [weatherEmoji, weatherDesc] = document.querySelector('.card-emoji').children

const feelsLike = document.querySelector('#feelsLike')
const clouds = document.querySelector('#cloudiness')
const windDir = document.querySelector('#windDir')

const humidity = document.querySelector("#humidity")
const wind = document.querySelector('#wind')

const apiKey = 'a008dadb0be1cac66555d8d817ad6d98'

const Cities = [
    "New York",
    "London",
    "Tokyo",
    "Paris",
    "Sydney",
    "Moscow",
    "Beijing",
    "Mumbai",
    "Cairo",
    "São Paulo",
    "Mexico City",
    "Los Angeles",
    "Istanbul",
    "Seoul",
    "Bangkok",
    "Buenos Aires",
    "Lagos",
    "Jakarta",
    "Toronto",
    "Dubai",
    "Singapore",
    "Berlin",
    "Rome",
    "Madrid",
    "Chicago",
    "Karachi",
    "Hong Kong",
    "Lima",
    "Tehran",
    "Cape Town",
    "Amsterdam"
]
const randCities = new Set([])
while(randCities.size<9){
    const randNum = Math.floor(Math.random() * Cities.length)
    if(randCities)
    randCities.add(Cities[randNum])
    //console.lozg(Cities[randNum ])
}


async function renderFirstCity() {
    const randNumb = Math.floor(Math.random() * Cities.length)

    const data = await GetData(Cities[randNumb])
    renderCity(data,Cities[randNumb])
}
async function renderRecCities() {
    let neededRandCities = [...randCities]
    for(let i of recCities){
        const randNumber = Math.floor(Math.random() * randCities.size)
        //console.log(neededRandCities[randNumber])
        const data = await GetData(neededRandCities[randNumber])
        i.innerHTML =`
            <p>${neededRandCities[randNumber]} <span>${data.main.temp} &deg;C</p>
            <i class="weatherIcon"></i>
        `
        setWeatherIconByDescription(data.weather[0].description)

        i.addEventListener('click',() => renderCity(data, neededRandCities[randNumber]))
    }
}
renderFirstCity()
renderRecCities()

weatherForm.addEventListener('submit', async e => {
    e.preventDefault()

    const inpCity = e.target.location.value
    if (inpCity) {
        try {
            const weatherData = await GetData(inpCity)
            renderCity(weatherData, inpCity)
        } catch (error) {
            displayError(error)
        }
    } else {
        displayError('Enter a Valid City')
    }
})
function renderCity(data, city) {
    const date = new Date(data.dt * 1000)

    const dataTemp = data.main.temp
    const dataCity = city
    const dataWeekDay = date.toLocaleDateString(undefined, { weekday: 'long' })
    const dataFullDate = date.toLocaleDateString()
    const weatherEmojiCode = data.weather[0].icon
    const weatherDescription = data.weather[0].description
    const dataFeelsLike = data.main.feels_like
    const dataCloudiness = data.clouds.all
    const dataHumidity = data.main.humidity
    const dataWindSpeed = data.wind.speed * 3.6

    temp.textContent = `${Math.round(dataTemp)}°C`
    cityName.textContent = dataCity
    weekDay.textContent = dataWeekDay
    fullDate.textContent = dataFullDate
    weatherEmoji.src = `https://openweathermap.org/img/wn/${weatherEmojiCode}@2x.png`
    setWeatherIconByDescription(weatherDescription)
    weatherDesc.textContent = weatherDescription
    feelsLike.textContent = `Feels like: ${Math.round(dataFeelsLike)}°C`
    clouds.textContent = `Cloudiness: ${dataCloudiness}%`
    humidity.textContent = `Humidity: ${dataHumidity}%`
    wind.textContent = `Wind: ${dataWindSpeed.toFixed(1)} km/h`
    windDir.textContent = `Wind Direction: ${degToCompass(data.wind.deg)}`
}
async function GetData(city) {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    const response = await fetch(apiURL)

    if (!response) {
        const errorData = await response.json()
        console.error("API error:", errorData)
        throw new Error(`API Error ${response.status}`)
    }
    const data = await response.json()
    //console.log(data)
    return data
}

// custom functions
function degToCompass(deg) {
    const directions = [
        "N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE",
        "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"
    ]
    const index = Math.round(deg / 22.5) % 16
    return directions[index]
}
function setWeatherIconByDescription(description) {
    const iconMap = {
        // Clear
        "clear sky": "fa-sun",

        // Clouds
        "few clouds": "fa-cloud-sun",
        "scattered clouds": "fa-cloud",
        "broken clouds": "fa-cloud",
        "overcast clouds": "fa-cloud",

        // Rain
        "light rain": "fa-cloud-rain",
        "moderate rain": "fa-cloud-showers-heavy",
        "heavy intensity rain": "fa-cloud-showers-heavy",
        "very heavy rain": "fa-cloud-showers-heavy",
        "extreme rain": "fa-cloud-showers-heavy",
        "freezing rain": "fa-cloud-meatball",
        "light intensity shower rain": "fa-cloud-rain",
        "shower rain": "fa-cloud-showers-heavy",
        "heavy intensity shower rain": "fa-cloud-showers-heavy",
        "ragged shower rain": "fa-cloud-showers-heavy",

        // Drizzle
        "light intensity drizzle": "fa-cloud-drizzle",
        "drizzle": "fa-cloud-drizzle",
        "heavy intensity drizzle": "fa-cloud-drizzle",

        // Thunderstorm
        "thunderstorm with light rain": "fa-bolt",
        "thunderstorm with rain": "fa-bolt",
        "thunderstorm with heavy rain": "fa-bolt",
        "light thunderstorm": "fa-bolt",
        "thunderstorm": "fa-bolt",
        "heavy thunderstorm": "fa-bolt",
        "ragged thunderstorm": "fa-bolt",
        "thunderstorm with light drizzle": "fa-bolt",
        "thunderstorm with drizzle": "fa-bolt",
        "thunderstorm with heavy drizzle": "fa-bolt",

        // Snow
        "light snow": "fa-snowflake",
        "snow": "fa-snowflake",
        "heavy snow": "fa-snowflake",
        "sleet": "fa-cloud-meatball",
        "light shower sleet": "fa-cloud-meatball",
        "shower sleet": "fa-cloud-meatball",
        "light rain and snow": "fa-cloud-snow",
        "rain and snow": "fa-cloud-snow",
        "light shower snow": "fa-snowflake",
        "shower snow": "fa-snowflake",
        "heavy shower snow": "fa-snowflake",

        // Atmosphere / Fog
        "mist": "fa-smog",
        "smoke": "fa-smog",
        "haze": "fa-smog",
        "sand/dust whirls": "fa-smog",
        "fog": "fa-smog",
        "sand": "fa-smog",
        "dust": "fa-smog",
        "volcanic ash": "fa-smog",
        "squalls": "fa-wind",
        "tornado": "fa-tornado"
    }

    const key = description.toLowerCase()
    const iconClass = iconMap[key] || "fa-question"

    const iconElement = document.querySelectorAll(".weatherIcon")
    for(let i of iconElement){
        i.className = "fa-solid " + iconClass
    }
}
