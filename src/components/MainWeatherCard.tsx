import React from 'react'
import { Card, CardContent, CardTitle } from './ui/card'

const MainWeatherCard = ({WeatherImage, ImageDescription, DayOfYear, Origins, Temperature}: {WeatherImage:string, ImageDescription:string, DayOfYear:string, Origins:string, Temperature:{CurrentWeather:number, HighTemp:number, LowTemp:number}}) => {
  return (
    <Card className='flex flex-row justify-between'>
        <CardContent>
            <img src={WeatherImage} alt={ImageDescription} />
        </CardContent>
        <CardContent className='text-center'>
            <CardTitle>
            {DayOfYear}
            </CardTitle>
            <p>{Origins}</p>
            <p>{ImageDescription + " " + Temperature.CurrentWeather}</p>
            <p>High: {Temperature.HighTemp}</p>
            <p>Low: {Temperature.LowTemp}</p>
        </CardContent>
    </Card>
  )
}

export default MainWeatherCard