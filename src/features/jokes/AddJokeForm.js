import React, { useState } from 'react'

export const AddJokeForm = () => {
    const [value, setValue] = useState('')

    const onValueChanged = e => setValue(e.target.value)

    return (
        <section>
            <h2>Add a New Joke</h2>
            <form>
                <label htmlFor="jokeValue">Joke:</label>
                <textarea 
                    id="jokeValue"
                    name="jokeValue"
                    value={value}
                    onChange={onValueChanged}
                />
                <button type="button">Save Joke</button>
            </form>
        </section>
    )
}