import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "src/models/todo";

const todoSlice = createSlice({
    name: "todos",
    initialState: [] as Todo[],
    reducers: {
        add: (state, action: PayloadAction<Todo>) => {
            state.push(action.payload);
        },
    },
});

export const { add: addTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
