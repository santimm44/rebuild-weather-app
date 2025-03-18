import MainWeatherCard from '@/components/MainWeatherCard'
import React from 'react'
import sun from "../../../assets/icons/sun-solid.svg"
import WeatherCard from '@/components/WeatherCard'
const dashboard = () => {
  return (
    <div>
      <h1>
        sfkjbfb
        sjvj
      </h1>
      <MainWeatherCard WeatherImage={sun} ImageDescription="Weather" DayOfYear="Tuesday, March 18th, 2025" Origins="Stockton, CA" Temperature={{ CurrentWeather: 10, HighTemp: 5, LowTemp: 5 }} />

      <WeatherCard Day="Wednesday" WeatherImage={sun} ImageDescription="Sunny" Temperature={{HighTemp:100, LowTemp:0}}/>
    </div>
  )
}

export default dashboard