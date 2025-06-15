import Link from "next/link";
import clsx from "clsx";
import { Filter } from "src/models/filter";
import { useAppSelector, useAppDispatch } from "src/hooks/useAppHooks";
import { clearCompleted } from "src/redux/slices/todoSlice";
import { setFilter } from "src/redux/slices/filterSlice";

export default function TodoFooter() {
    const todos = useAppSelector((state) => state.todos);
    const filter = useAppSelector((state) => state.filter);
    const dispatch = useAppDispatch();

    const numTodos = todos.length;
    const numActiveTodos = todos.filter((t) => !t.completed).length;
    if (numTodos == 0) {
        return null;
    }

    return (
        <footer className="footer">
            <span className="todo-count">
                {numActiveTodos} item{numActiveTodos !== 1 && "s"} left
            </span>

            <ul className="filters">
                {(["all", "active", "completed"] as Filter[]).map((f) => (
                    <li key={f}>
                        <a
                            onClick={() => dispatch(setFilter(f))}
                            className={clsx({ selected: filter === f })}
                        >
                            {f.charAt(0).toUpperCase() + f.slice(1)}
                        </a>
                    </li>
                ))}
            </ul>

            {numActiveTodos < numTodos && (
                <button
                    className="clear-completed"
                    onClick={() => dispatch(clearCompleted())}
                >
                    Clear completed
                </button>
            )}
        </footer>
    );
}
