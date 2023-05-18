import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    tasksList:[],
    selectedTask:{},
    isLoading:false,
    error:''
}

//GET
export const getTasksFromServer = createAsyncThunk(
    "tasks/getTasksFromServer",
    async (_,{rejectWithValue})=>{
        const response= await fetch('http://localhost:8080/tasks ')
        if(response.ok){
            const jsonResponse = await response.json()
            return jsonResponse
        }else{
            return rejectWithValue({error:"Not a valid task"})
        }
    }
) 

//POST
export const addTasksToServer = createAsyncThunk(
    "tasks/addTasksToServer",
    async (task,{rejectWithValue})=>{
        const options ={
            method :'POST',
            body : JSON.stringify(task),
            headers : {
                "content-type" : " application/json; charset = UTF-8 "
            }
        }
        const response= await fetch('http://localhost:8080/tasks',options)
        if(response.ok){
            const jsonResponse = await response.json()
            return jsonResponse
        }else{
           return rejectWithValue({error:"Unable to add task!!"})
        }
    }
) 

//UPDATE
export const updateTaskInServer = createAsyncThunk(
    "tasks/updateTaskInServer",
    async (task,{rejectWithValue})=>{
        const options ={
            method :'PATCH',
            body : JSON.stringify(task),
            headers : {
                "content-type" : " application/json; charset = UTF-8 "
            }
        }
        const response= await fetch('http://localhost:8080/tasks/'+task.id,options)
        if(response.ok){
            const jsonResponse = await response.json()
            return jsonResponse
        }else{
           return rejectWithValue({error:"Unable to update task!!"})
        }
    }
) 

//DELETE
export const deleteTaskFromServer = createAsyncThunk(
    "tasks/deleteTaskFromServer",
    async (task,{rejectWithValue})=>{
        const options ={
            method :'DELETE',
        }
        const response= await fetch('http://localhost:8080/tasks/'+task.id,options)
        if(response.ok){
            const jsonResponse = await response.json()
            return jsonResponse
        }else{
           return rejectWithValue({error:"Unable to delete task!!"})
        }
    }
) 

const tasksSlice = createSlice({
    name:'tasksSlice',
    initialState,
    reducers: {
        addTaskToList:(state,action) => {
            const id = Math.random() * 100
            let task = {...action.payload,id}
            state.tasksList.push(task)
        },
        removeTaskFromList:(state,action) => {
            state.tasksList = state.tasksList.filter((task) => task.id !== action.payload.id)
        },
        updateTaskInList:(state,action) => {
            state.tasksList = state.tasksList.map((task) => task.id === action.payload.id ? action.payload : task )
        },
        setSelectedTask:(state,action) => {
            state.selectedTask = action.payload
        }

    },extraReducers:(builder)=>{
        builder
        .addCase(getTasksFromServer.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getTasksFromServer.fulfilled,(state,action)=>{
            state.isLoading = false
            state.error = ''
            state.tasksList = action.payload
        })
        .addCase(getTasksFromServer.rejected,(state,action)=>{
            state.error = action.payload.error
            state.isLoading = false
            state.tasksList = []
        })
        .addCase(addTasksToServer.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(addTasksToServer.fulfilled,(state,action)=>{
            state.isLoading = false
            state.error = ''
            state.tasksList.push(action.payload)
        })
        .addCase(addTasksToServer.rejected,(state,action)=>{
            state.error = action.payload.error
            state.isLoading = false
        })
        .addCase(updateTaskInServer.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(updateTaskInServer.fulfilled,(state,action)=>{
            state.isLoading = false
            state.error = ''
            state.tasksList = state.tasksList.map((task) => task.id === action.payload.id ? action.payload : task )
        })
        .addCase(updateTaskInServer.rejected,(state,action)=>{
            state.error = action.payload.error
            state.isLoading = false
        })
        .addCase(deleteTaskFromServer.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(deleteTaskFromServer.fulfilled,(state,action)=>{
            state.isLoading = false
            state.error = ''
        })
        .addCase(deleteTaskFromServer.rejected,(state,action)=>{
            state.error = action.payload.error
            state.isLoading = false
        })
    }

})

export const {addTaskToList,removeTaskFromList,updateTaskInList,setSelectedTask} = tasksSlice.actions

export default tasksSlice.reducer