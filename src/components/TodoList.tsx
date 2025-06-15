import TodoItem from "./TodoItem";
import { Todo } from "src/models/todo";
import React, { useCallback } from "react";
import { useAppSelector } from "src/hooks/useAppHooks";

type Props = {
    todos: Todo[];
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
    onToggleComplete: (id: string) => void;
    onSetTitle: (id: string, title: string) => void;
};

export default function TodoList({
    onEdit,
    onDelete,
    onToggleComplete,
    onSetTitle,
}: Props) {
    const todos = useAppSelector((state) => state.todos);
    console.log(todos);

    const Item = useCallback(
        ({ todo }: { todo: Todo }) => {
            return (
                <TodoItem
                    todo={todo}
                    onEdit={() => onEdit(todo.id)}
                    onToggleComplete={() => onToggleComplete(todo.id)}
                    onDelete={() => onDelete(todo.id)}
                    onSetTitle={(title) => onSetTitle(todo.id, title)}
                />
            );
        },
        [onEdit, onDelete, onToggleComplete, onSetTitle]
    );

    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <Item key={todo.id} todo={todo} />
            ))}
        </ul>
    );
}
