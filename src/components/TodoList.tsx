import TodoItem from "./TodoItem";
import { Todo } from "src/models/todo";
import React from "react";
import { useAppSelector, useAppDispatch } from "src/hooks/useAppHooks";
import {
    toggleTodo,
    deleteTodo,
    startEditTodo,
    setTitleTodo,
} from "src/redux/slices/todoSlice";

export default function TodoList() {
    const todos = useAppSelector((state) => state.todos);
    const dispatch = useAppDispatch();

    return (
        <ul className="todo-list">
            {todos.map((todo: Todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggleComplete={() => dispatch(toggleTodo(todo.id))}
                    onDelete={() => dispatch(deleteTodo(todo.id))}
                    onEdit={() => dispatch(startEditTodo(todo.id))}
                    onSetTitle={(title) =>
                        dispatch(setTitleTodo({ id: todo.id, title }))
                    }
                />
            ))}
        </ul>
    );
}
