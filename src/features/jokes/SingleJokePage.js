import React from 'react'
import { useSelector } from 'react-redux'

export const SingleJokePage = ({ match }) => {
    const { jokeId } = match.params

    const joke = useSelector(state => 
        state.jokes.find(joke => joke.id === jokeId)
    )

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
            </article>
        </section>
    )
}