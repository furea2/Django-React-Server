import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import { TodoList } from "./List";

const initialTodos: Array<Todo> = [
    {text: "Walk the dog", complete: true},
    {text: "Write app", complete: false}
];

const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState(initialTodos);

    const toggleTodo: ToggleTodo = selectedTodo => {
        const newTodos = todos.map(todo => {
            if (todo === selectedTodo) {
                return {
                    ...todo,
                    complete: !todo.complete
                };
            }
            return todo;
        });
        setTodos(newTodos);
    }
    return (
        <React.Fragment>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
        </React.Fragment>
    );
}

export default TodoApp;