import uuid from 'uuid/v4'

 const  TodoReducer = (state, action) => {

    switch (action.type) {
        case "ADD":
            return [...state, { id: uuid(), task: action.task, completed: false }]
            
        case "ROMOVE":
            return state.filter(todo => todo.id !== action.id)
            
        case "TOGGLE":
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
              );
        case "EDIT":
            return state.map(todo =>
                todo.id === action.id ? { ...todo, task: action.newTask } : todo
              );
            
    
        default:
            return state;
    }


 }

 export default TodoReducer;

 
  
 // { type: "ADD",  task: "ddfdlklsflj"}
 // { type: "ROMOVE",  id: 1324490}
 // { type: "TOGGLE",  id: 1324490}
 // { type: "EDIT",  id: 1324490, newTask: "fjhgh hjghjgh"}