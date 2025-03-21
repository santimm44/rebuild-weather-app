
import React from 'react'
import { Card, CardContent, CardTitle } from './ui/card'

const MainWeatherCard = ({WeatherImage, ImageDescription, DayOfYear, Origins, Temperature}: {WeatherImage:string, ImageDescription:string, DayOfYear:string, Origins:string, Temperature:{CurrentWeather:number, HighTemp:number, LowTemp:number}}) => {
  return (
    <Card className='flex flex-row bg-[#D9D9D999] border-transparent justify-between w-4/5 text-[2rem]'>
        <CardContent>
            <img src={`https://openweathermap.org/img/wn/${WeatherImage}@2x.png`} alt={ImageDescription} />
        </CardContent>
        <CardContent className='text-center'>
            <CardTitle>
            {DayOfYear}
            </CardTitle>
            <p>{Origins}</p>
            <p>{ImageDescription}</p>
            <p>{Temperature.CurrentWeather}°F</p>
            <p>High: {Temperature.HighTemp}°F</p>
            <p>Low: {Temperature.LowTemp}°F</p>
        </CardContent>
    </Card>
  )
}

export default MainWeatherCard