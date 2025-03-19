import MainWeatherCard from '@/components/MainWeatherCard'
import React from 'react'
import WeatherCard from '@/components/WeatherCard'
import { servifiveDayWeatherInformationce, weatherForecast } from '@/lib/service'


const dashboard = async () => {

  const currentDate = new Date()
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  const weatherForecastVariable: weatherForeCastInterface = await weatherForecast()


  const returnedData = await servifiveDayWeatherInformationce()

  let weatherLowTemp: number[] = [];
  let weatherLowTempVar: number = returnedData.list[0].main.temp_min;
  let weatherHighTemp: number[] = [];
  let weatherHighTempVar: number = returnedData.list[0].main.temp_max;
  let weatherIcon: string[] = [];
  let weatherIconVar: string = "";
  let weatherdescription: string[] = [];
  let weatherdescriptionVar: string = "";

  //for loop to alter the cards
  for (let i = 0; i < 40; i++) {
    if (i % 8 == 0) {
      weatherLowTemp.push(weatherLowTempVar);
      weatherHighTemp.push(weatherHighTempVar);
      weatherIcon.push(returnedData.list[i].weather[0].icon);
      weatherdescription.push(returnedData.list[i].weather[0].description);

      weatherLowTempVar = returnedData.list[i].main.temp_min;
      weatherHighTempVar = returnedData.list[i].main.temp_max;
    }
    if (weatherLowTempVar > returnedData.list[i].main.temp_min) {
      weatherLowTempVar = returnedData.list[i].main.temp_min;
    }
    if (weatherHighTempVar < returnedData.list[i].main.temp_max) {
      weatherHighTempVar = returnedData.list[i].main.temp_max;
      weatherdescription[i == 0 ? 0 : Math.floor(i / 8)] = returnedData.list[i].weather[0].description;
      weatherIcon[i == 0 ? 0 : Math.floor(i / 8)] = returnedData.list[i].weather[0].icon;
    }
    if (i == 39) {
      weatherLowTemp.push(weatherLowTempVar);
      weatherHighTemp.push(weatherHighTempVar);
      weatherIcon.push(weatherIconVar);
      weatherdescription.push(weatherdescriptionVar);
    }
  }
  let tempVARI: any = weatherLowTemp.shift()
  tempVARI = weatherHighTemp.shift()
  
  const dayOfTheWeek= (addedDay:number) => {
    let day:number = currentDate.getDay(); // returns a number between 0(sunday)-6(Saturday)
    let returnDay:number = addedDay + day;
    if (returnDay > 6) {
        returnDay -= 7;    }
    return returnDay
}


  let weatherCardsArray: (string | number)[][] = []

  for (let i = 0; i < 5; i++) {
    weatherCardsArray.push([weatherLowTemp[i], weatherHighTemp[i], weatherIcon[i], weatherdescription[i], days[dayOfTheWeek(i+1)]])
  }

  return (
    <div className='flex flex-col justify-around min-h-screen items-center '>
      <MainWeatherCard  WeatherImage={weatherForecastVariable.weather[0].icon} ImageDescription={weatherForecastVariable.weather[0].description} DayOfYear={`${days[currentDate.getDay()]}, ${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getFullYear()}`} Origins={weatherForecastVariable.name} Temperature={{ CurrentWeather: weatherForecastVariable.main.temp, HighTemp: weatherForecastVariable.main.temp_max, LowTemp: weatherForecastVariable.main.temp_min }} />
      
      <div className='grid grid-cols-5 w-4/5 gap-x-2'>
        {
          weatherCardsArray.map((cardValues, index) => {
            return (
              <div key={index} >
                <WeatherCard Day={cardValues[4].toString()} WeatherImage={cardValues[2].toString()} ImageDescription={cardValues[3].toString()} Temperature={{ HighTemp: Number(cardValues[1]), LowTemp: Number(cardValues[0]) }} />

              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default dashboard