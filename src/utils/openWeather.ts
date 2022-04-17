import {Location} from "types/location"
import {AirQuality, Temperature, Weather} from "types/weather"

const API_KEY = process.env.NEXT_PUBLIC_API_KEY

const BASE_URL = "https://api.openweathermap.org"

const WEATHER_URL = `${BASE_URL}/data/2.5/weather`
const AIR_POLLUTION_URL = `${BASE_URL}/data/2.5/air_pollution`
const GEOCODING_URL = `${BASE_URL}/geo/1.0/zip`

const getWeather = async (location: Location): Promise<Weather> => {
    const promises = [getTemperature(location), getAirQuality(location)]
    const [temperature, airQuality] = await Promise.all(promises)

    const weather: Weather = {
        temperature,
        airQuality,
    }

    return weather
}

const getTemperature = async (location: Location): Promise<Temperature> => {
    const url = new URL(WEATHER_URL)

    const params = new URLSearchParams({
        zip: location.zip,
        units: "imperial",
        appid: API_KEY,
    })

    url.search = params.toString()

    const response = await fetch(url.toString())
    const json = await response.json()

    const temperature: Temperature = json.main.temp
    return temperature
}

const getAirQuality = async (location: Location): Promise<AirQuality> => {
    const url = new URL(AIR_POLLUTION_URL)

    const params = new URLSearchParams({
        lat: location.lat.toString(),
        lon: location.long.toString(),
        appid: API_KEY,
    })

    url.search = params.toString()

    const response = await fetch(url.toString())
    const json = await response.json()

    const airQuality: AirQuality = json.list[0].main.aqi
    return airQuality
}

const getLocation = async (zip: Location["zip"]): Promise<Location> => {
    const url = new URL(GEOCODING_URL)

    const params = new URLSearchParams({
        zip,
        appid: API_KEY,
    })

    url.search = params.toString()

    const response = await fetch(url.toString())
    const json = await response.json()

    const location: Location = {
        name: json.name,
        zip: json.zip,
        lat: json.lat,
        long: json.lon,
    }

    return location
}

export {getAirQuality, getLocation, getTemperature, getWeather}
