import { configureStore } from "@reduxjs/toolkit";
import {counterSlice} from './Reduser'

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
})