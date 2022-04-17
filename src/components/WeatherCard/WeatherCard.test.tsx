import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import WeatherCard from "components/WeatherCard"
import {mockLocation, mockWeather} from "test-utils/mocks"

const mockOnDelete = jest.fn()

test("shows weather card", () => {
    render(
        <WeatherCard
            location={mockLocation}
            weather={mockWeather}
            onDelete={mockOnDelete}
        />,
    )

    expect(screen.getByText(mockLocation.name))
    expect(screen.getByLabelText("delete"))
    expect(screen.getByText(mockWeather.temperature))
    expect(screen.getByText("°"))
    expect(screen.getByText("Air Quality"))
    expect(screen.getByLabelText("quality"))
})

test("shows empty weather card", () => {
    render(
        <WeatherCard
            location={mockLocation}
            weather={null}
            onDelete={mockOnDelete}
        />,
    )

    expect(screen.queryByText(mockLocation.name)).not.toBeInTheDocument()
})

test("deletes weather card", () => {
    render(
        <WeatherCard
            location={mockLocation}
            weather={mockWeather}
            onDelete={mockOnDelete}
        />,
    )

    userEvent.click(screen.getByLabelText("delete"))
    expect(mockOnDelete).toHaveBeenCalledTimes(1)
})
