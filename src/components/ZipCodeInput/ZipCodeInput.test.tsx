import ZipCodeInput from "components/ZipCodeInput"
import {render, screen} from "@testing-library/react"

test("renders", () => {
    render(<ZipCodeInput />)
    expect(screen.getByText("ZipCodeInput"))
})
