import {Location} from "types/location"
import {Weather} from "types/weather"

const mockLocation: Location = {
    lat: 10,
    long: 20,
    name: "Austin",
    zip: "12345",
}

const mockWeather: Weather = {
    temperature: 72,
    airQuality: 1,
}

export {mockLocation, mockWeather}
