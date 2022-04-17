import {renderHook} from "@testing-library/react-hooks"
import {useWeather} from "hooks"
import {mockLocation, mockWeather} from "test-utils/mocks"
import {getWeather} from "utils/openWeather"

jest.useFakeTimers()
jest.mock("utils/openWeather")

const mockGetWeather = jest.mocked(getWeather)
mockGetWeather.mockResolvedValue(mockWeather)

test("renders hook", () => {
    const {result} = renderHook(() => useWeather([mockLocation]))
    expect(result.current).toEqual({})
})
