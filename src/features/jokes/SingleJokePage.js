import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectJokeById } from './jokesSlice'

export const SingleJokePage = ({ match }) => {
    const { jokeId } = match.params

    const joke = useSelector(state => selectJokeById(state, jokeId))

    if (!joke) {
        return (
            <section>
                <h2>Joke not found!</h2>
            </section>
        )
    }

    return (
        <section>
            <article className="joke">
                <h2>{joke.value}</h2>
                <p className="joke-url">{joke.url}</p>
                <Link to={`/editJoke/${joke.id}`} className="button">
                    Edit Joke
                </Link>
            </article>
        </section>
    )
}