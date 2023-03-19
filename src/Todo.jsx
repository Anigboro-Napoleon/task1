import React, { useState } from 'react'
import { TiDelete } from 'react-icons/ti'

const Todo = () => {
    const [input, setInput] = useState('')
    const [todoList, settodoList] = useState([])
    const [error, setError] = useState(false)

    const addTodo = (todo) => {
        input.length === 0 ? setError(true) : null
        if (input.length > 0) {
            const todoData = [...todoList, todo]
            settodoList(todoData)
            setInput("")
            setError(false)
        }
    }

    const delTodo = (id) => {
        const newTodo = todoList.filter(todo => todo !== id)
        settodoList(newTodo)
    }
    
    return (
        <div>
            <h1>Todo</h1>
            <div className="input">
                <input
                    className='todo-input' type="text" placeholder='what do you plan to do today'
                    value={input} onChange={(e) => setInput(e.target.value)}
                />
                <button type='submit' onClick={() => addTodo(input)}>
                    Add
                </button>
            </div>
            {error && input.length <= 0 ? <p className='error'>Please fill the form field</p> : ""}
            <div className="todo-list">
                <ul>
                    {
                        todoList.map(todo => (
                            <div className='todo-box' key={todo}>
                                <li>{todo}</li>
                                <button onClick={() => delTodo(todo)}>
                                    <TiDelete className='del-icon' />
                                </button>
                            </div>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Todo