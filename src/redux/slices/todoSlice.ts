import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "src/models/todo";

interface SetTitlePayload {
    id: string;
    title: string;
}

const todoSlice = createSlice({
    name: "todos",
    initialState: [] as Todo[],
    reducers: {
        add: (state, action: PayloadAction<Todo>) => {
            state.push(action.payload);
        },
        toggle: (state, action: PayloadAction<string>) => {
            const todo = state.find((item) => item.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        remove: (state, action: PayloadAction<string>) =>
            state.filter((item) => item.id !== action.payload),
        startEdit: (state, action: PayloadAction<string>) => {
            const todo = state.find((item) => item.id === action.payload);
            if (todo) {
                todo.editing = true;
            }
        },
        setTitle: (state, action: PayloadAction<SetTitlePayload>) => {
            const todo = state.find((item) => item.id === action.payload.id);
            if (todo) {
                todo.title = action.payload.title;
                todo.editing = false;
            }
        },
        clearCompleted: (state) => state.filter((item) => !item.completed),
    },
});

export const {
    add: addTodo,
    toggle: toggleTodo,
    remove: deleteTodo,
    startEdit: startEditTodo,
    setTitle: setTitleTodo,
    clearCompleted,
} = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
