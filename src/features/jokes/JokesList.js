import React from 'react'
import { useSelector } from 'react-redux'

export const JokesList = () => {
    const jokes = useSelector(state => state.jokes)

    const renderedJokes = jokes.map(joke => (
        <article className="joke-excerpt" key={joke.id}>
            <h3>{joke.value}</h3>
        </article>
    ))

    return (
        <section className="jokes-list">
            <h2>Jokes</h2>
            {renderedJokes}
        </section>
    )
}