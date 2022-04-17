import {useEffect, useState} from "react"
import {Location} from "types/location"
import {Weather} from "types/weather"
import {getWeather} from "utils/openWeather"

const useWeather = (locations: Location[]): Record<string, Weather> => {
    const [weather, setWeather] = useState<Record<string, Weather>>({})

    const getWeatherForLocations = async (locations: Location[]) => {
        const weatherPromises = locations.map(location => getWeather(location))

        const weatherResults = await Promise.all(weatherPromises)

        const newWeather = weatherResults.reduce((acc, curr, index) => {
            const location = locations[index]
            acc[location.zip] = curr

            return acc
        }, {} as Record<string, Weather>)

        setWeather(newWeather)
    }

    useEffect(() => {
        getWeatherForLocations(locations)

        const id = setInterval(async () => {
            getWeatherForLocations(locations)
        }, 5000)

        return () => {
            clearInterval(id)
        }
    }, [locations])

    return weather
}

export default useWeather
