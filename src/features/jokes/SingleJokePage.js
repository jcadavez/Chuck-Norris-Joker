import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchJoke } from './jokesSlice'

export const SingleJokePage = () => {
    const dispatch = useDispatch()
    const joke = useSelector(state => state.app.joke)
    const jokeStatus = useSelector(state => state.app.status)

    const onGetJokeClicked = () => {
        dispatch(fetchJoke())
    }

    let content; 
    if (jokeStatus === 'failed') {
        content = (
            <article>
                <h2>Error getting joke!</h2>
            </article>
        )
    } else {
        content = (
            <article className="joke">
                <h2>{joke.value}</h2>
                <img
                    src={joke.icon_url}
                    alt="Chuck Norris Pic"
                />
                <p className="joke-url">{joke.url}</p>
            </article>
        )
    }

    return (
        <section>
            {content}
            <button type="button" onClick={onGetJokeClicked}>
                Get a Chuck Norris Joke
            </button>
        </section>
    )
}