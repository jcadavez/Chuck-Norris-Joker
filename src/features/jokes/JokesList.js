import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const JokesList = () => {
    const jokes = useSelector(state => state.jokes)

    const renderedJokes = jokes.map(joke => (
        <article className="joke-excerpt" key={joke.id}>
            <h3>{joke.value}</h3>
            <p className="joke-content">{joke.url}</p>
            <Link to={`/jokes/${joke.id}`} className="button muted-button">
                View Joke
            </Link>
        </article>
    ))

    return (
        <section className="jokes-list">
            <h2>Jokes</h2>
            {renderedJokes}
        </section>
    )
}