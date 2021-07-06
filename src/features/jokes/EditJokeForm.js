import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'

import { jokeUpdated } from './jokesSlice'

export const EditJokeForm = ({ match }) => {
    const { jokeId } = match.params

    const joke = useSelector(state => 
        state.jokes.find(joke => joke.id === jokeId)
    )

    const [value, setValue] = useState(joke.value)
    const [url, setUrl] = useState(joke.url)

    const dispatch = useDispatch()
    const history = useHistory()

    const onValueChanged = e => setValue(e.target.value)
    const onUrlChanged = e => setUrl(e.target.value)

    const onSaveJokeClicked = () => {
        if (value && url) {
            dispatch(jokeUpdated({ id: jokeId, value, url }))
            history.push(`/jokes/${jokeId}`)
        }
    }

    return (
        <section>
            <h2>Edit Joke</h2>
            <form>
                <div>
                    <label htmlFor="jokeValue">Joke Value:</label>
                </div>
                <div>
                    <textarea 
                        id="jokeValue"
                        name="jokeValue"
                        placeholder="Tell a joke."
                        value={value}
                        onChange={onValueChanged}
                    />
                </div>
                <div>
                    <label htmlFor="jokeUrl">Url:</label>
                </div>
                <div>
                    <input
                        id="jokeUrl"
                        name="jokeUrl"
                        value={url}
                        onChange={onUrlChanged}
                    />
                </div>
            </form>
            <button type="button" onClick={onSaveJokeClicked}>
                Save Joke
            </button>
        </section>
    )
}