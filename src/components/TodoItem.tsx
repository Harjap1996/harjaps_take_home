import React, { useState, ChangeEvent, MouseEvent } from "react";
import clsx from "clsx";
import { Todo } from "src/models/todo";

import InputEdit from "./InputEdit";

interface Props {
    todo: Todo;
    onEdit: () => void;
    onDelete: () => void;
    onToggleComplete: () => void;
    onSetTitle: (title: string) => void;
    onChangeDueDate: (date: string) => void;
}

export default function TodoItem({
    todo,
    onEdit,
    onDelete,
    onToggleComplete,
    onSetTitle,
    onChangeDueDate,
}: Props) {
    const [isEditingDate, setIsEditingDate] = useState(false);

    const onChangeCheckbox = (_: ChangeEvent<HTMLInputElement>) => {
        onToggleComplete();
    };

    const onDoubleClickLabel = (_: MouseEvent<HTMLLabelElement>) => {
        onEdit();
    };

    return (
        <li
            key={todo.id}
            className={clsx({
                editing: todo.editing,
                completed: todo.completed,
            })}
        >
            <div className="view">
                <input
                    className="toggle"
                    type="checkbox"
                    onChange={onChangeCheckbox}
                    checked={todo.completed}
                />
                <label onDoubleClick={onDoubleClickLabel}>{todo.title}</label>
                <span className={`priority-badge ${todo.priority}`}>
                    {todo.priority.charAt(0).toUpperCase() +
                        todo.priority.slice(1)}
                </span>

                {todo.dueDate &&
                    (isEditingDate ? (
                        <input
                            type="date"
                            value={todo.dueDate}
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                onChangeDueDate(e.target.value)
                            }
                            onBlur={() => setIsEditingDate(false)}
                            autoFocus
                            className="due-date-input"
                        />
                    ) : (
                        <span
                            className="due-date-text"
                            onDoubleClick={(e: MouseEvent) => {
                                e.stopPropagation();
                                setIsEditingDate(true);
                            }}
                        >
                            {new Date(todo.dueDate).toLocaleDateString()}
                        </span>
                    ))}
                <button className="destroy" onClick={() => onDelete()} />
            </div>
            <InputEdit
                title={todo.title}
                editing={todo.editing}
                onSetTitle={onSetTitle}
            />
        </li>
    );
}
