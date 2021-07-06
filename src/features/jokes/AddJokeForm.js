import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { jokeAdded } from './jokesSlice'

export const AddJokeForm = () => {
    const [value, setValue] = useState('')
    const [url, setUrl] = useState('')

    const dispatch = useDispatch()

    const onValueChanged = e => setValue(e.target.value)
    const onUrlChanged = e => setUrl(e.target.value)

    const onSaveJokeClicked = () => {
        if (value && url) {
            dispatch(jokeAdded({ value, url }))
        }

        setValue('')
        setUrl('')
    }

    return (
        <section>
            <h2>Add a New Joke</h2>
            <form>
                <div>
                    <label htmlFor="jokeValue">Joke:</label>
                </div>
                <div>
                    <textarea
                        id="jokeValue"
                        name="jokeValue"
                        value={value}
                        onChange={onValueChanged}
                    />
                </div>
                <div>
                    <label htmlFor="jokeUrl">Url:</label>
                </div>
                <div>
                    <input
                        type="text"
                        id="jokeUrl"
                        name="jokeUrl"
                        value={url}
                        onChange={onUrlChanged}
                    />
                </div>
                <button type="button" onClick={onSaveJokeClicked}>
                    Save Joke
                </button>
            </form>
        </section>
    )
}