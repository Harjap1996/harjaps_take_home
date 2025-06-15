import Head from "next/head";
import React from "react";
import NewTodoInput from "src/components/NewTodoInput";
import TodoFooter from "src/components/TodoFooter";
import TodoList from "src/components/TodoList";
import TodoMarkAll from "src/components/TodoMarkAll";

export default function Home() {
    return (
        <>
            <Head>
                <title>TodoMVC</title>
            </Head>

            <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <NewTodoInput />
                </header>

                <section className="main">
                    <TodoMarkAll />
                    <TodoList />
                </section>

                <TodoFooter
                    filter="all"
                    numActiveTodos={0}
                    numTodos={0}
                    onClearCompleted={() => {}}
                />
            </section>

            <footer className="info">
                <p>Double-click to edit a todo</p>
                <p>
                    Part of <a href="http://todomvc.com">TodoMVC</a>
                </p>
            </footer>
        </>
    );
}
