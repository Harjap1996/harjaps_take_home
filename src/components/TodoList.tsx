import TodoItem from "./TodoItem";
import { Todo, Priority } from "src/models/todo";
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
    const filter = useAppSelector((state) => state.filter);
    const dispatch = useAppDispatch();

    const visibleTodos = todos.filter((todo: Todo) => {
        if (filter === "all") return true;
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true;
    });

    const priorityOrder: Priority[] = ["high", "medium", "low"];
    const sorted = [...visibleTodos].sort(
        (a, b) =>
            priorityOrder.indexOf(a.priority) -
            priorityOrder.indexOf(b.priority)
    );

    return (
        <ul className="todo-list">
            {sorted.map((todo: Todo) => (
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
