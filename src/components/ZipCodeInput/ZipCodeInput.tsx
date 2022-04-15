import {FC, FormEventHandler, useState} from "react"
import {Location} from "types/location"

import ZipCodeInputStyles from "./ZipCodeInput.module.css"

type ZipCodeInputProps = {
    onSubmit: (zip: Location["zip"]) => void
}

const ZipCodeInput: FC<ZipCodeInputProps> = ({onSubmit}) => {
    const [zip, setZip] = useState("")

    const handleSubmit: FormEventHandler = event => {
        event.preventDefault()
        onSubmit(zip)
        setZip("")
    }

    return (
        <form className={ZipCodeInputStyles.form} onSubmit={handleSubmit}>
            <label htmlFor="zip">Zip Code</label>

            <input
                required
                type="text"
                id="zip"
                placeholder="123456"
                autoComplete="postal-code"
                inputMode="numeric"
                maxLength={5}
                minLength={5}
                pattern="\d{5}"
                value={zip}
                onChange={event => setZip(event.target.value)}
            />

            <button type="submit">Add</button>
        </form>
    )
}

export default ZipCodeInput
