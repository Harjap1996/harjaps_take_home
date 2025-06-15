import { useEffect, useRef } from "react";
import { v4 as uuid } from "uuid";
import { useAppDispatch } from "src/hooks/useAppHooks";
import { addTodo } from "src/redux/slices/todoSlice";

export default function NewTodoInput() {
    const dispatch = useAppDispatch();
    const inputRef = useRef<HTMLInputElement | null>(null);

    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && inputRef.current != null) {
            dispatch(
                addTodo({
                    id: uuid(),
                    title: inputRef.current.value.trim(),
                    completed: false,
                    editing: false,
                })
            );
            inputRef.current.value = "";
        }
    };

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <input
            className="new-todo"
            ref={inputRef}
            placeholder="What needs to be done?"
            onKeyPress={onKeyPress}
        />
    );
}
