import {AirPollution} from "types/airPollution"
import {Location} from "types/location"
import {Weather} from "types/weather"

const API_KEY = process.env.NEXT_PUBLIC_API_KEY

const BASE_URL = "https://api.openweathermap.org"

const WEATHER_URL = `${BASE_URL}/data/2.5/weather`
const AIR_POLLUTION_URL = `${BASE_URL}/data/2.5/air_pollution`
const GEOCODING_URL = `${BASE_URL}/geo/1.0/zip`

const getWeather = async (zip: Location["zip"]): Promise<Weather> => {
    const url = new URL(WEATHER_URL)

    const params = new URLSearchParams({
        zip,
        units: "imperial",
        appid: API_KEY,
    })

    url.search = params.toString()

    const response = await fetch(url.toString())
    const json = await response.json()

    const weather: Weather = {
        temperature: json.main.temp,
    }

    return weather
}

const getAirPollution = async (
    lat: Location["lat"],
    lon: Location["long"],
): Promise<AirPollution> => {
    const url = new URL(AIR_POLLUTION_URL)

    const params = new URLSearchParams({
        lat: lat.toString(),
        lon: lon.toString(),
        appid: API_KEY,
    })

    url.search = params.toString()

    const response = await fetch(url.toString())
    const json = await response.json()

    const airPollution: AirPollution = {
        quality: json.list[0].main.aqi,
    }

    return airPollution
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

export {getAirPollution, getLocation, getWeather}
