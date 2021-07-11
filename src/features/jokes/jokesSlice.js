import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    joke: {
        value: 'Chocolate muffins',
        url: 'www.google.com/vanilla'
    },
    status: 'idle',
    error: null
}

const jokesSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {}
})

export default jokesSlice.reducer