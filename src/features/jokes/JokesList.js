import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { selectAllJokes, fetchJoke } from './jokesSlice'

export const JokesList = () => {
    const dispatch = useDispatch()
    const jokes = useSelector(selectAllJokes)

    const jokeStatus = useSelector(state => state.jokes.status)
    const error = useSelector(state => state.jokes.error)

    useEffect(() => {
        if (jokeStatus === 'idle') {
            dispatch(fetchJoke())
        }
    }, [jokeStatus, dispatch])

    let content 

    if (jokeStatus === 'loading') {
        content = <div className="loader">Loading...</div>
    } else if (jokeStatus === 'succeeded') {
        const renderedJokes = jokes.map(joke => (
            <article className="joke-excerpt" key={joke.id}>
                <h3>{joke.value}</h3>
                <p className="joke-content">{joke.url}</p>
                <Link to={`/jokes/${joke.id}`} className="button muted-button">
                    View Joke
                </Link>
            </article>
        ))
        content = renderedJokes;
    } else if (jokeStatus === 'failed') {
        content = <div>{error}</div>
    }

    return (
        <section className="jokes-list">
            <h2>Jokes</h2>
            {content}
        </section>
    )
}