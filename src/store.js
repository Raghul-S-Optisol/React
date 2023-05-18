import { configureStore } from "@reduxjs/toolkit"
import tasksReducer from './slices/tasksSlice'
//import { composeWithDevTools } from 'redux-devtools-extension';

export const store = configureStore({
    reducer: {
        tasks:tasksReducer,
    }
})