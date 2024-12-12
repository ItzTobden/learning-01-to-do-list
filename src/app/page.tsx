'use client'

import { useMutation, useQuery } from 'convex/react'
import React, { useState } from 'react'
import { api } from '../../convex/_generated/api'

const HomePage = () => {
    const [text, setText] = useState('')
    const createTodo = useMutation(api.todo.createTodo)
    const todos = useQuery(api.todo.getTodos)

    return (
        <div className='w-full h-screen flex flex-col'>
            <form 
                className='w-1/4 justify-center flex gap-5 p-10 m-10 bg-gray-400'
                onSubmit={e => {
                    e.preventDefault()
                    // TODO: call mutation here
                    createTodo({
                        text
                })
            }}>
                <input 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} 
                    className='text-black w-1/2 h-10'
                />
                <button>Create</button>
            </form>
            {todos?.map((todos) => {
                return <div 
                    key={todos._id}
                    className='p-10 ml-10 bg-slate-400 w-1/4 text-lg'
                >
                    {todos.text}
                </div>
            })}
        </div>
    )
}

export default HomePage