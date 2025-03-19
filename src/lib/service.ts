'use client'
import { useAppContext } from "@/context/context"


//const searchCityName:string = "stockton"


const weatherForecast = async () => {

    const {searchCity}=useAppContext();

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${APIKEY}&units=imperial`,{
        cache: 'force-cache'
    })
    const data: weatherForeCastInterface  = await response.json()
    return data
}
const servifiveDayWeatherInformationce = async () => {
    const{searchCity}=useAppContext();

    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=${APIKEY}&units=imperial`,{
        cache: 'force-cache'
    })
    const data:fiveDayForecastInterface = await response.json()
    return data
}
// const success = async () => {
//     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`)
//     const data = await response.json()
//     return data
// }

export {weatherForecast, servifiveDayWeatherInformationce}