import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'


const WeatherCard = ({ Day, WeatherImage, ImageDescription, Temperature }: { Day: string, WeatherImage: string, ImageDescription: string, Temperature:{HighTemp:number, LowTemp:number} }) => {
    return (
        <Card className='flex items-center'>
            <CardHeader>
                <CardTitle>
                    {Day}
                </CardTitle>
                <CardContent>
                    <div>
                        <img className='' src={WeatherImage} alt={ImageDescription} />
                    </div>
                    <p>
                        {ImageDescription}
                    </p>
                </CardContent>
                <CardFooter>
                    <p>
                        {Temperature.HighTemp + "/" + Temperature.LowTemp}
                    </p>
                </CardFooter>
            </CardHeader>
        </Card>
    )
}

export default WeatherCard