import { useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import clsx from "clsx";
import type { Priority } from "src/models/todo";
import { useAppDispatch } from "src/hooks/useAppHooks";
import { addTodo } from "src/redux/slices/todoSlice";

const priorities: Priority[] = ["low", "medium", "high"];

export default function NewTodoInput() {
    const dispatch = useAppDispatch();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [priority, setPriority] = useState<Priority>("medium");
    const [dueDate, setDueDate] = useState<string>("");

    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && inputRef.current != null) {
            dispatch(
                addTodo({
                    id: uuid(),
                    title: inputRef.current.value.trim(),
                    completed: false,
                    editing: false,
                    priority,
                    dueDate: dueDate || undefined,
                })
            );
            inputRef.current.value = "";
            setPriority("medium");
            setDueDate("");
        }
    };

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div className="new-todo-input">
            <input
                className="new-todo"
                ref={inputRef}
                placeholder="What needs to be done?"
                onKeyPress={onKeyPress}
            />
            <div>
                <div className="priority-buttons">
                    {priorities.map((p) => (
                        <button
                            key={p}
                            type="button"
                            className={clsx("priority-button", {
                                selected: priority === p,
                            })}
                            onClick={() => setPriority(p)}
                        >
                            {p.charAt(0).toUpperCase() + p.slice(1)}
                        </button>
                    ))}
                </div>
                <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="due-date-input"
                    title="Complete by"
                />
            </div>
        </div>
    );
}
