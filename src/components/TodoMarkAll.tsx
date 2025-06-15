import { useAppSelector, useAppDispatch } from "src/hooks/useAppHooks";
import { markAllCompleted, markAllActive } from "src/redux/slices/todoSlice";

export default function TodoMarkAll() {
    const todos = useAppSelector((state) => state.todos);
    const dispatch = useAppDispatch();
    const numTodos = todos.length;
    const numCompletedTodos = todos.filter((t) => t.completed).length;

    const allCompleted = numCompletedTodos === numTodos;

    const labelText = `Mark all as ${allCompleted ? "active" : "complete"}`;

    const onClick = () => {
        if (allCompleted) {
            dispatch(markAllActive());
        } else {
            dispatch(markAllCompleted());
        }
    };

    if (numTodos == 0) {
        return null;
    }

    return (
        <>
            <input
                readOnly
                id="toggle-all"
                className="toggle-all"
                type="checkbox"
                checked={allCompleted}
                onClick={onClick}
            />
            <label htmlFor="toggle-all" title={labelText}>
                {labelText}
            </label>
        </>
    );
}
