import { useEffect, useReducer } from "react";
import { todoReducer } from "./todo-reducer";


const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'To laugh till cry',
    //     done: false
    // },
];

const initializer = ()=>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, initializer);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const todosCount= todos.length;
    
    const todosLength = todos.filter(todo=> !todo.done).length;
    
    const handleAddCat = (todo) => {
        dispatch({
            type: '[TODO] Add Todo',
            payload: todo,
        });
    }

    const handleDeleteTodo = (id) =>{
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    const handleOnToggleTodo = id =>{
        console.log(id);
        dispatch({
            type: '[TODO] mark as done',
            payload: id
        });
    }
  return {
    todos,
    todosCount,
    todosLength,
    handleAddCat,
    handleDeleteTodo,
    handleOnToggleTodo
  }
}
