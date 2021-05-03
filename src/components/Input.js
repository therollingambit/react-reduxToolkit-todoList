import React, { useState } from 'react'
import '../styles/Input.css';

import { useDispatch } from 'react-redux';
import { saveTodo } from '../features/todoSlice';

const Input = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch()

    const addTodo = () => {
        console.log(`adding ${input}`);

        dispatch(saveTodo({
            item: input,
            done: false,
            id: Date.now() //unique
        }))
        setInput('') //clear input
    }

    return (
        <div className='input'>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={addTodo}>Add</button>
        </div>
    )
}

export default Input;
