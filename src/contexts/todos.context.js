import React , { createContext } from 'react';
import TodoReducer from '../reducers/Todo.reducer'
import useLocalStorageRducer from '../hooks/useLocalStorageRducer'


const defaultTodos = [
    {
        id: 1,
        task: "said said said",
        completed: false
    },
    {
        id: 2,
        task: "labriki labriki",
        completed: false
    }
];

export const TodosContext = createContext();
export const DispatchContext = createContext()


export function TodosProvider(props) {

    const [todos, dispatch] = useLocalStorageRducer("todos", defaultTodos, TodoReducer);
    
    return (
        <TodosContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )

}


