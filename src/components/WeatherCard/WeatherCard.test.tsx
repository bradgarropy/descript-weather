import {render, screen} from "@testing-library/react"
import WeatherCard from "components/WeatherCard"

test("renders", () => {
    render(<WeatherCard />)
    expect(screen.getByText("WeatherCard"))
})
