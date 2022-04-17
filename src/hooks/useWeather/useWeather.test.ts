import {renderHook} from "@testing-library/react-hooks"
import { useWeather } from "hooks"

test("renders hook", () => {
    const {result} = renderHook(() => useWeather())
    expect(result.current).toBeUndefined()
})
