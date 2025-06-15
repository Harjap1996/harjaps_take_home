import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./slices/todoSlice";

export const store = configureStore({
    reducer: { todoReducer },
});

//Represents the complete state tree shape.
export type RootState = ReturnType<typeof store.getState>;

//Represents the store’s dispatch function.
export type AppDispatch = typeof store.dispatch;
