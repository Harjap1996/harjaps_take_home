import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./slices/todoSlice";
import { filterReducer } from "./slices/filterSlice";

export const store = configureStore({
    reducer: { todos: todoReducer, filter: filterReducer },
});

//Represents the complete state tree shape.
export type RootState = ReturnType<typeof store.getState>;

//Represents the store’s dispatch function.
export type AppDispatch = typeof store.dispatch;
