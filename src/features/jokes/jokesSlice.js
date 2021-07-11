import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: '1',
        value: 'Chocolate rainbows love Chuck norris',
        url: 'https://www.google.com/chocolate'
    },
    {
        id: '2',
        value: 'Vanilla muffins',
        url: 'https://www.google.com/vanilla'
    }
]

const jokesSlice = createSlice({
    name: 'jokes',
    initialState,
    reducers: {}
})

export default jokesSlice.reducer