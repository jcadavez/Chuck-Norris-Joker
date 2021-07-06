import { createSlice } from '@reduxjs/toolkit'

const initialState = [
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
]

const jokesSlice = createSlice({
    name: 'jokes',
    initialState,
    reducers: {
        jokeAdded(state, action) {
            state.push(action.payload)
        }
    }
})

export const { jokeAdded } = jokesSlice.actions

export default jokesSlice.reducer