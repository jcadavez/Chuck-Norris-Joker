import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    jokes: [
        { 
            id: '1', 
            value: 'Everybody thinks the Galaxy Note 7 is explosive. In fact it is only Chuck Norris who tries to send a WhatsApp message with a selfie to his fans.', 
            url: 'https://api.chucknorris.io/jokes/H9ASnHczQBG0Dj_a7eoRhw' 
        },
        { 
            id: '2',
            value: 'Chuck Norris uspio uraditi zadaću da mu prođu svi autotestovi troll:',
            url: 'https://api.chucknorris.io/jokes/AnBWx135Qf2t-CF9DFMiLw'
        }
    ],
    status: 'idle',
    error: null
}

export const fetchJoke = createAsyncThunk('jokes/fetchJokes', async () => {
    let response = await fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
    const { id, value, url } = response;
    return { id : id, value : value, url : url };
})

const jokesSlice = createSlice({
    name: 'jokes',
    initialState,
    reducers: {
        jokeAdded: {
            reducer(state, action) {
                state.jokes.push(action.payload)
            },
            prepare(value, url) {
                return {
                    payload: {
                        id : nanoid(),
                        value,
                        url
                    }
                }
            }
        },
        jokeUpdated(state, action) {
            const { id, value, url } = action.payload 
            const existingJoke = state.jokes.find(joke => joke.id === id)
            if (existingJoke) {
                existingJoke.value = value;
                existingJoke.url = url;
            }
        }
    },
    extraReducers: {
        [fetchJoke.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchJoke.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.jokes = state.jokes.concat( [action.payload] )
        },
        [fetchJoke.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})

export const { jokeAdded, jokeUpdated } = jokesSlice.actions

export default jokesSlice.reducer

export const selectAllJokes = state => state.jokes.jokes

export const selectJokeById = (state, jokeId) => 
    state.jokes.jokes.find(joke => joke.id === jokeId)
