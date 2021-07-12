import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    joke: {
        value: 'This is the initial state',
        url: 'https://www.google.com/vanilla'
    },
    status: 'idle',
    error: null
}

export const fetchJoke = createAsyncThunk('app/fetchjoke', async () => {
    let response = await fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
    const { id, value, url } = response;
    return { id: id, value: value, url: url };
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
            const { value, url } = action.payload;
            state.joke = { value: value, url: url};
            state.error = null
        },
        [fetchJoke.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})

export default jokesSlice.reducer