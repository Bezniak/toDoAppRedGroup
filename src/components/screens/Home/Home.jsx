import React, {useState} from 'react';
import TodoItem from "./item/TodoItem";
import CreateTodoField from "./create-todo-field/Create-todo-field";


const data = [
    {
        id: 1,
        title: 'Learn useMemo hook',
        isCompleted: false,
    },
    {
        id: 2,
        title: 'Read 20 pages of the book',
        isCompleted: false,
    },
    {
        id: 3,
        title: 'Do some shopping',
        isCompleted: true,
    },
]

export const Home = () => {

    const [todos, setTodos] = useState(data);

    const changeTodo = (id) => {
        const copy = [...todos];
        const current = copy.find(t => t.id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const removeTodo = (id) => {
        setTodos([...todos].filter(t => t.id !== id))
    }

    return (
        <div className='text-white w-4/5 mx-auto'>
            <h1 className='text-2xl font-bold text-center mb-10'>Start your day with us! </h1>
            <CreateTodoField setTodos={setTodos} todos={todos}/>

            {todos.map(todo => (
                <TodoItem key={todo.id}
                          todo={todo}
                          changeTodo={changeTodo}
                          removeTodo={removeTodo}
                />
            ))}
        </div>
    );
};