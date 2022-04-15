import WeatherCard from "components/WeatherCard"
import {render, screen} from "@testing-library/react"

test("renders", () => {
    render(<WeatherCard />)
    expect(screen.getByText("WeatherCard"))
})
