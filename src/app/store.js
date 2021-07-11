import { configureStore } from "@reduxjs/toolkit";

import jokesReducer from '../features/jokes/jokesSlice'

export default configureStore({
    reducer: {
        jokes: jokesReducer
    }
})