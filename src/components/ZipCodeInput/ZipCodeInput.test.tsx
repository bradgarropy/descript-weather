import {render, screen} from "@testing-library/react"
import ZipCodeInput from "components/ZipCodeInput"

test("renders", () => {
    render(<ZipCodeInput />)
    expect(screen.getByText("ZipCodeInput"))
})
