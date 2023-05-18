import { createContext, useReducer } from "react";


export const TasksContext = createContext();

const tasksReducer =(state,action) =>{
    switch(action.type){
        case 'ADD_TASK':
            const no = Math.random()*100
            let task = {...action.payload,no}
            return {...state,tasksList:[...state.tasksList,task]}
        case 'REMOVE_TASK':
            let list = state.tasksList.filter((task) => task.no !== action.payload.no)
            return {...state,tasksList:list}
        case 'UPDATE_TASK':
            let updateList = state.tasksList.map((task) =>
                task.id === action.payload.id ? action.payload:task
            )
            return {...state,tasksList:[...updateList]}
        case 'GET_TASK':
            return state.tasksList
        case 'SET_SELECTED_TASK':
            return {...state,selectedTask:{...action.payload}}
        case 'GET_SELECTED_TASK':
            return state.selectedTask
        default:
            return state
    }

}

export const TasksContextProvider = ({children}) =>{
    const [state,dispatch] = useReducer(tasksReducer,{
        tasksList:[],
        selectedTask:{}
    })
    return(
        <TasksContext.Provider value={{state,dispatch}}>
            {children}
        </TasksContext.Provider>
    )
}