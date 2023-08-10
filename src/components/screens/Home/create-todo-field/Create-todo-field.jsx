import React, {useState} from 'react';

const CreateTodoField = ({setTodos, todos}) => {

    const [title, setTitle] = useState('');

    const addTodo = (title) => {
        setTodos(prev => [
            {
                id: todos.length + 1,
                title: title,
                isCompleted: false,
            },
            ...prev
        ])

        setTitle('')
    }

    return (
        <div
            className='flex items-center justify-between mt-10 mb-5 rounded-2xl border-zinc-800 border-2 px-5 py-3 w-full '>
            <input type="text"
                   value={title}
                   onChange={e => setTitle(e.target.value)}
                   onKeyDown={e => e.key === 'Enter' && addTodo(title)}
                   className='bg-transparent w-full border-none outline-none'
                   placeholder={'Add task'}
            />
        </div>
    );
};

export default CreateTodoField;