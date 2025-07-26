const weatherForm = document.querySelector('form')
const card = document.querySelector('.card-city')

const temp = document.querySelector('.temp')
const [cityName, weekDay, fullDate] = card.children
const [weatherEmoji, weatherDesc] = document.querySelector('.card-emoji').children

const feelsLike = document.querySelector('#feelsLike')
const clouds = document.querySelector('#cloudiness')
const UV = document.querySelector('#UV')

const humidity = document.querySelector("#humidity")
const wind = document.querySelector('#wind')

const apiKey = 'a008dadb0be1cac66555d8d817ad6d98'

function renderFirstCity() {

}

weatherForm.addEventListener('submit', async e => {
    e.preventDefault()

    const inpCity = e.target.location.value
    if (inpCity) {
        try{
            const weatherData = await GetData(inpCity)
            renderCity(weatherData, inpCity)
        }catch(error){
            displayError(error)
        }
    } else {
        displayError('Enter a Valid City')
    }
})
function renderCity(data,city) {
    const date = new Date(data.current.dt * 1000)

    const dataTemp = data.current.temp
    const dataCity = city
    const weekDay = date.toLocaleDateString(undefined, { weekday: 'long' })
    const fullDate = date.toLocaleDateString() 
    const weatherEmojiCode = data.current.weather[0].icon
    const weatherDescription = data.current.weather[0].description
    const dataFeelsLike = data.current.feels_like
    const dataCloudiness = data.current.clouds
    const dataUVIndex = data.current.uvi
    const dataHumidity = data.current.humidity
    const dataWindSpeed = data.current.wind_speed * 3.6
}
function displayError(error) {
    console.log(`error: ${error}`) // temporary solution
}
async function GetData(city) {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    const response = await fetch(apiURL)

    if(!response){
        const errorData = await response.json()
        console.error("API error:", errorData)
        throw new Error(`API Error ${response.status}`)
    }
    const data = await response.json()
    console.log(data)
    return data
}