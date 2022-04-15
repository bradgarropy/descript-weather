import SEO from "@bradgarropy/next-seo"
import Layout from "components/Layout"
import WeatherCard from "components/WeatherCard"
import ZipCodeInput from "components/ZipCodeInput"
import {FC, useEffect, useState} from "react"
import IndexPageStyles from "styles/IndexPage.module.css"
import {AirPollution} from "types/airPollution"
import {Location} from "types/location"
import {Weather} from "types/weather"
import {getAirPollution, getLocation, getWeather} from "utils/openWeather"

const IndexPage: FC = () => {
    const [locations, setLocations] = useState<Location[]>([])
    const [weather, setWeather] = useState<Record<string, Weather>>({})

    const [airPollution, setAirPollution] = useState<
        Record<string, AirPollution>
    >({})

    useEffect(() => {
        const id = setInterval(async () => {
            const weatherPromises = locations.map(location =>
                getWeather(location.zip),
            )

            const weatherResults = await Promise.all(weatherPromises)

            const newWeather = weatherResults.reduce((acc, curr, index) => {
                const location = locations[index]
                acc[location.zip] = curr

                return acc
            }, {} as Record<string, Weather>)

            setWeather(newWeather)

            const airPollutionPromises = locations.map(location =>
                getAirPollution(location.lat, location.long),
            )

            const airPollutionResults = await Promise.all(airPollutionPromises)

            const newAirPollution = airPollutionResults.reduce(
                (acc, curr, index) => {
                    const location = locations[index]
                    acc[location.zip] = curr

                    return acc
                },
                {} as Record<string, AirPollution>,
            )

            setAirPollution(newAirPollution)
        }, 5000)

        return () => {
            clearInterval(id)
        }
    }, [locations])

    useEffect(() => {
        const execute = async () => {
            // TODO: make this better
            const weatherPromises = locations.map(location =>
                getWeather(location.zip),
            )

            const weatherResults = await Promise.all(weatherPromises)

            const newWeather = weatherResults.reduce((acc, curr, index) => {
                const location = locations[index]
                acc[location.zip] = curr

                return acc
            }, {} as Record<string, Weather>)

            setWeather(newWeather)

            const airPollutionPromises = locations.map(location =>
                getAirPollution(location.lat, location.long),
            )

            const airPollutionResults = await Promise.all(airPollutionPromises)

            const newAirPollution = airPollutionResults.reduce(
                (acc, curr, index) => {
                    const location = locations[index]
                    acc[location.zip] = curr

                    return acc
                },
                {} as Record<string, AirPollution>,
            )

            setAirPollution(newAirPollution)
        }

        execute()
    }, [locations])

    const handleAddLocation = async zip => {
        const location = await getLocation(zip)

        if (!location.zip) {
            return
        }

        const exists = locations.some(l => l.zip === zip)

        if (exists) {
            return
        }

        setLocations([...locations, location])
    }

    const handleDeleteLocation = (location: Location) => {
        const newLocations = locations.filter(l => l.zip !== location.zip)
        setLocations(newLocations)
    }

    return (
        <Layout>
            <SEO title="next starter" />

            <div className={IndexPageStyles.header}>
                <h1>Weather</h1>
                <ZipCodeInput onSubmit={handleAddLocation} />
            </div>

            <div className={IndexPageStyles.weatherCardList}>
                {locations.map(location => {
                    if (!weather[location.zip] || !airPollution[location.zip]) {
                        return null
                    }

                    return (
                        <WeatherCard
                            key={location.zip}
                            location={location}
                            weather={weather[location.zip]}
                            airPollution={airPollution[location.zip]}
                            onDelete={handleDeleteLocation}
                        />
                    )
                })}
            </div>
        </Layout>
    )
}

export default IndexPage
