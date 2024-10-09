import React,{useReducer} from 'react'
import TodoItems from './todo-items-store'


function TodoReducer(curr_state,action) {

    let newTodoItem = curr_state;
  
    if(action.type === "NEW_ITEM"){
        newTodoItem=[...curr_state, action.payload.dataFromInput]
    }
    else if(action.type === "DELETE_ITEM"){
        newTodoItem = curr_state.filter(todo => todo.id !== action.payload.id);

    }
  return newTodoItem
  
  }

export default TodoReducer

export const TodoItemsContextProvider = ({children})=>{
    const [todos,dispatchTodoItem] = useReducer(TodoReducer,[])

    const handleTodo = (todo) => {
        const newItemAction = {
          type: "NEW_ITEM",
          payload:{
            dataFromInput: todo
          }
        };
    
        dispatchTodoItem(newItemAction)
      }
    
      const handleDelete = (id) => {
        const deleteItemAction = {
          type: "DELETE_ITEM",
          payload:{
            id: id
          }
        };
    
        dispatchTodoItem(deleteItemAction)  }

        return <TodoItems.Provider value={{
            todos,
            handleTodo,
            handleDelete
        }}>
            {children}
        </TodoItems.Provider>
}