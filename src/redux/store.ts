import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {},
});

//Represents the complete state tree shape.
export type RootState = ReturnType<typeof store.getState>;

//Represents the store’s dispatch function.
export type AppDispatch = typeof store.dispatch;
