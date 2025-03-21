'use client'

import { useAppContext } from '@/context/context'
import { servifiveDayWeatherInformationce, weatherForecast } from '@/lib/service'
import React, { useState, useEffect } from 'react'
import MainWeatherCard from './MainWeatherCard'
import WeatherCard from './WeatherCard'

const CardsContainer = () => {
    const myAppContext = useAppContext()

    let returnedData: fiveDayForecastInterface = {
        list: [{
            main: {
                temp_min: 0,
                temp_max: 0
            },
            weather: [{
                description: "#",
                icon: "#"
            }],
        }]
    }
    let weatherForecastVariable: weatherForeCastInterface = {
        name: "",
        weather: [{
            description: "",
            icon: ""
        }],
        main: {
            temp: 0,
            temp_min: 0,
            temp_max: 0
        }
    }



    let [weatherHighTemp, setWeatherHighTemp] = useState<number[]>([])
    let [weatherLowTemp, setWeatherLowTemp] = useState<number[]>([])
    let [weatherIcon, setWeatherIcon] = useState<string[]>([]);
    let [weatherdescription, setWeatherDescription] = useState<string[]>([])

    let [cityName, setCityName] = useState("Stockton")
    let [currentWeatherDescription, setCurrentWeatherDescription] = useState("")
    let [currentWeatherIcon, setCurrentWeatherIcon] = useState("")
    let [currentTemp, setCurrentTemp] = useState(0)
    let [highTemp, setHighTemp] = useState(0)
    let [lowTemp, setLowTemp] = useState(0)

    // let [weatherLowTempVar, setWeatherLowTempVar] = useState<number>(1000)
    let [weatherHighTempVar, setWeatherHighTempVar] = useState<number>(0)
    let [weatherIconVar, setWeatherIconVar] = useState<string>("")
    let [weatherdescriptionVar, setWeatherDescriptionVar] = useState<string>("")

    useEffect(() => {
        const fetchFunctions = async () => {
            returnedData = await servifiveDayWeatherInformationce(myAppContext.searchCity)
            weatherForecastVariable = await weatherForecast(myAppContext.searchCity)

            setWeatherHighTemp([])
            setWeatherLowTemp([])
            setWeatherDescription([])
            setWeatherIcon([])

            setWeatherHighTempVar(returnedData.list[0].main.temp_max)
            // setWeatherLowTempVar(returnedData.list[0].main.temp_min)
            tempFunction()

            setCurrentWeatherIcon(weatherForecastVariable.weather[0].icon)
            setCityName(returnedData.city.name + " from the " + returnedData.city.country)
            setCurrentTemp(weatherForecastVariable.main.temp)
            setHighTemp(weatherForecastVariable.main.temp_max)
            setLowTemp(weatherForecastVariable.main.temp_min)
            setCurrentWeatherDescription(weatherForecastVariable.weather[0].description)
        }
        fetchFunctions()
    }, [myAppContext.searchCity])

    const currentDate = new Date()
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    const tempFunction = () => {


        console.log("Line 69: Checking returned data in tempfunction", returnedData)
        let tempNumArray: number[] = [999, 999, 999, 999, 999, 999]


        //for loop to alter the cards
        for (let i = 0; i < 40; i++) {

            if (i % 8 == 0) {

                console.log(returnedData.list[i].main.temp_min, "In if statement #1")

                setWeatherLowTemp(existingArray => [...existingArray, returnedData.list[i].main.temp_min]);//Not pushing anything into the set array
                setWeatherHighTemp(existingArray => [...existingArray, returnedData.list[i].main.temp_max]);
                setWeatherIcon(existingArray => [...existingArray, returnedData.list[i].weather[0].icon]);
                setWeatherDescription(existingArray => [...existingArray, returnedData.list[i].weather[0].description]);

                // weatherLowTempVar = returnedData.list[i].main.temp_min;
                weatherHighTempVar = returnedData.list[i].main.temp_max;
                console.log("Checking the lowtemp: if statement #1", weatherLowTemp)
                console.log("Checking the icon: if statement #1", weatherIcon)


            }
            console.log("Below low temp: ", tempNumArray[Math.floor(i/8)] + " " + returnedData.list[i].main.temp_min)
            if (tempNumArray[Math.floor(i/8)] > returnedData.list[i].main.temp_min) {
                console.log("New low temp at I: " + i)
                tempNumArray[Math.floor(i / 8)] = returnedData.list[i].main.temp_min;
            }

            if (weatherHighTempVar < returnedData.list[i].main.temp_max) {
                setWeatherHighTempVar(returnedData.list[i].main.temp_max);
                weatherdescription[i == 0 ? 0 : Math.floor(i / 8)] = returnedData.list[i].weather[0].description;
                weatherIcon[i == 0 ? 0 : Math.floor(i / 8)] = returnedData.list[i].weather[0].icon;
                setWeatherIcon(existingArray => [...existingArray, returnedData.list[i].weather[0].icon])
            }


            if (i == 39) {
                // setWeatherLowTemp(existingArray => [...existingArray, weatherLowTempVar]);
                setWeatherLowTemp(tempNumArray);
                
                setWeatherHighTemp(existingArray => [...existingArray, weatherHighTempVar]);
                setWeatherIcon(existingArray => [...existingArray, weatherIconVar]);
                setWeatherDescription(existingArray => [...existingArray, weatherdescriptionVar]);
            }
        }

        // let temp = [...weatherLowTemp]
        // temp.shift()
        // setWeatherLowTemp(temp)

        // temp = [...weatherHighTemp]
        // temp.shift()
        // setWeatherHighTemp(temp)
    }

    const dayOfTheWeek = (addedDay: number) => {
        let day: number = currentDate.getDay(); // returns a number between 0(sunday)-6(Saturday)
        let returnDay: number = addedDay + day;
        if (returnDay > 6) {
            returnDay -= 7;
        }
        return returnDay
    }

    //may need to place in a useEffect()
    let weatherCardsArray: (string | number)[][] = []

    for (let i = 0; i < 5; i++) {
        weatherCardsArray.push([weatherLowTemp[i], weatherHighTemp[i], weatherIcon[i], weatherdescription[i], days[dayOfTheWeek(i + 1)]])
    }

    useEffect(() => {

        console.log(weatherCardsArray)
    }, [weatherCardsArray])

    useEffect(() => {

        console.log('low temp', weatherLowTemp)
    }, [weatherLowTemp])

    return (
        <div>
            <MainWeatherCard WeatherImage={currentWeatherIcon} ImageDescription={currentWeatherDescription} DayOfYear={`${days[currentDate.getDay()]}, ${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getFullYear()}`} Origins={cityName} Temperature={{ CurrentWeather: currentTemp, HighTemp: highTemp, LowTemp: lowTemp }} />

            <div className='grid grid-cols-5 w-4/5 gap-x-2'>
                {

                    weatherCardsArray.map((cardValues, index) => {
                        return (
                            <div key={index} >
                                <WeatherCard Day={cardValues[4] as string} WeatherImage={cardValues[2] as string} ImageDescription={cardValues[3] as string} Temperature={{ HighTemp: Number(cardValues[1]), LowTemp: Number(cardValues[0]) }} />

                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default CardsContainer