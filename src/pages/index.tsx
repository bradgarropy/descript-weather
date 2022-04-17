import SEO from "@bradgarropy/next-seo"
import Layout from "components/Layout"
import WeatherCard from "components/WeatherCard"
import ZipCodeInput from "components/ZipCodeInput"
import {useWeather} from "hooks"
import {FC, useEffect, useState} from "react"
import IndexPageStyles from "styles/IndexPage.module.css"
import {Location} from "types/location"
import {getLocation} from "utils/openWeather"

const IndexPage: FC = () => {
    const [locations, setLocations] = useState<Location[]>([])
    const weather = useWeather(locations)

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
            <SEO title="descript weather" />

            <div className={IndexPageStyles.header}>
                <h1>Weather</h1>
                <ZipCodeInput onSubmit={handleAddLocation} />
            </div>

            <div className={IndexPageStyles.weatherCardList}>
                {locations.map(location => {
                    return (
                        <WeatherCard
                            key={location.zip}
                            location={location}
                            weather={weather[location.zip]}
                            onDelete={handleDeleteLocation}
                        />
                    )
                })}
            </div>
        </Layout>
    )
}

export default IndexPage
