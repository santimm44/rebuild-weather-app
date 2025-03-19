import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'


const WeatherCard = ({ Day, WeatherImage, ImageDescription, Temperature }: { Day: string, WeatherImage: string, ImageDescription: string, Temperature: { HighTemp: number, LowTemp: number } }) => {
    return (
        <Card className='flex items-center justify-between bg-[#D9D9D999] border-transparent w-full h-full text-[1.5rem]'>
            <CardHeader className='flex justify-center'>
                <CardTitle>
                    {Day}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div>
                    <img className='' src={`https://openweathermap.org/img/wn/${WeatherImage}@2x.png`} alt={ImageDescription} />
                </div>
                <p>
                    {ImageDescription}
                </p>
            </CardContent>
            <CardFooter>
                <p>
                    {Temperature.HighTemp + "°F / " + Temperature.LowTemp + "°F"}
                </p>
            </CardFooter>
        </Card>
    )
}

export default WeatherCard