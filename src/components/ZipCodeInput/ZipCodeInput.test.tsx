import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import ZipCodeInput from "components/ZipCodeInput"
import {mockLocation} from "test-utils/mocks"

const mockOnSubmit = jest.fn()

test("shows zip code input", () => {
    render(<ZipCodeInput onSubmit={mockOnSubmit} />)
    expect(screen.getByLabelText("Zip Code"))
})

test("accepts zip code input", () => {
    render(<ZipCodeInput onSubmit={mockOnSubmit} />)
    userEvent.type(screen.getByLabelText("Zip Code"), mockLocation.zip)
    expect(screen.getByLabelText("Zip Code")).toHaveValue(mockLocation.zip)
})

test("only accepts five characters", () => {
    render(<ZipCodeInput onSubmit={mockOnSubmit} />)
    userEvent.type(screen.getByLabelText("Zip Code"), "123456789")
    expect(screen.getByLabelText("Zip Code")).toHaveValue(mockLocation.zip)
})

test("submits zip code", () => {
    render(<ZipCodeInput onSubmit={mockOnSubmit} />)

    userEvent.type(screen.getByLabelText("Zip Code"), mockLocation.zip)
    userEvent.click(screen.getByText("Add"))

    expect(screen.getByLabelText("Zip Code")).toHaveValue("")
    expect(mockOnSubmit).toHaveBeenCalledTimes(1)
    expect(mockOnSubmit).toHaveBeenCalledWith(mockLocation.zip)
})
