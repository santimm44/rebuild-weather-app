 const APIKEY = process.env.NEXT_PUBLIC_APIKEY

const weatherForecast = async (searchCity:string) => {
    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${APIKEY}&units=imperial`)
    const data: weatherForeCastInterface  = await response.json()
    return data
}
const servifiveDayWeatherInformationce = async (searchCity:string) => {
    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=${APIKEY}&units=imperial`)
    const data:fiveDayForecastInterface = await response.json()
    return data
}

export {weatherForecast, servifiveDayWeatherInformationce}