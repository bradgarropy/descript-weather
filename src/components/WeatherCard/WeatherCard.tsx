import {TrashIcon} from "@heroicons/react/outline"
import {FC} from "react"
import {Location} from "types/location"
import {Weather} from "types/weather"

import WeatherCardStyles from "./WeatherCard.module.css"

type WeatherCardProps = {
    location: Location
    weather: Weather
    onDelete: (location: Location) => void
}

const airQualityColors = {
    1: "#16a34a",
    2: "#a3e635",
    3: "#fcd34d",
    4: "#f97316",
    5: "#dc2626",
}

const WeatherCard: FC<WeatherCardProps> = ({location, weather, onDelete}) => {
    if (!weather) {
        return null
    }

    return (
        <div className={WeatherCardStyles.card}>
            <div className={WeatherCardStyles.cardHeader}>
                <span>{location.name}</span>

                <button
                    type="button"
                    className={WeatherCardStyles.delete}
                    onClick={() => onDelete(location)}
                >
                    <TrashIcon
                        aria-label="delete"
                        className={WeatherCardStyles.deleteIcon}
                    />
                </button>
            </div>

            <div className={WeatherCardStyles.stats}>
                <div className={WeatherCardStyles.temperature}>
                    <span className={WeatherCardStyles.temperatureValue}>
                        {Math.floor(weather.temperature)}
                    </span>

                    <span className={WeatherCardStyles.degrees}>°</span>
                </div>

                <div className={WeatherCardStyles.airQuality}>
                    <span>Air Quality </span>

                    <div
                        aria-label="quality"
                        style={{
                            width: "0.75rem",
                            height: "0.75rem",
                            borderRadius: "100%",
                            backgroundColor:
                                airQualityColors[weather.airQuality],
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default WeatherCard
