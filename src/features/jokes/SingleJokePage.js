import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchJoke } from './jokesSlice'

export const SingleJokePage = () => {
    const dispatch = useDispatch()
    const joke = useSelector(state => state.app.joke)

    const onGetJokeClicked = () => {
        dispatch(fetchJoke())
    }

    if (!joke) {
        return (
            <section>
                <h2>Error finding joke!</h2>
            </section>
        )
    }

    return (
        <section>
            <article className="joke">
                <h2>{joke.value}</h2>
                <p className="joke-url">{joke.url}</p>
            </article>
            <button type="button" onClick={onGetJokeClicked}>
                Get a Chuck Norris Joke
            </button>
        </section>
    )
}