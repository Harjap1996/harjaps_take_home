import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo, Priority } from "src/models/todo";

interface SetTitlePayload {
    id: string;
    title: string;
}

interface UpdatePriorityPayload {
    id: string;
    priority: Priority;
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
        markAllCompleted: (state) => {
            state.forEach((t) => {
                t.completed = true;
            });
        },
        markAllActive: (state) => {
            state.forEach((t) => {
                t.completed = false;
            });
        },
        updatePriority: (
            state,
            action: PayloadAction<UpdatePriorityPayload>
        ) => {
            const todo = state.find((item) => item.id === action.payload.id);
            if (todo) todo.priority = action.payload.priority;
        },
    },
});

export const {
    add: addTodo,
    toggle: toggleTodo,
    remove: deleteTodo,
    startEdit: startEditTodo,
    setTitle: setTitleTodo,
    clearCompleted,
    markAllCompleted,
    markAllActive,
    updatePriority,
} = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
