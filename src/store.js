import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todo/todoSlice";
// import counterReducer from '../features/counter/counterSlice'

const store = configureStore({
    // All Reducers
    reducer: {
        todoReducer: todoReducer,
        counterReducer: todoReducer, // For Counter Slice
        blogReducer: todoReducer, // For Blog Slice
        shopReducer: todoReducer, // For E Commerce
        // counter: counterReducer,
    }
})

export default store;