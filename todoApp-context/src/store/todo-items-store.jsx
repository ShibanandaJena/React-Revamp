import React, { createContext, useState } from 'react'

const TodoItems = createContext({
    todos: [],
    handleTodo: ()=>{},
    handleDelete: ()=>{},
});

export default TodoItems;