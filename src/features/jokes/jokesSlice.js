import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    joke: {
        value: 'This is the initial state',
        url: 'https://www.google.com/vanilla',
        icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png'
    },
    status: 'idle',
    error: null
}

export const fetchJoke = createAsyncThunk('app/fetchjoke', async () => {
    let response = await fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
    const { id, value, url, icon_url } = response;
    return { id: id, value: value, url: url, icon_url: icon_url };
})

const jokesSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchJoke.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchJoke.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            const { value, url, icon_url } = action.payload;
            state.joke = { value: value, url: url, icon_url: icon_url };
            state.error = null
        },
        [fetchJoke.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})

export default jokesSlice.reducer