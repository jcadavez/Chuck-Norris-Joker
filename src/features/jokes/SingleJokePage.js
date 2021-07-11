import React from 'react'
import { useSelector } from 'react-redux'

export const SingleJokePage = () => {
    const joke = useSelector(state => state.app.joke)

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
        </section>
    )
}