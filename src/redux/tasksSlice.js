import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const fetchUrl = 'https://redux-thunder-todo-server.herokuapp.com/todos'
const addNewTaskUrl = 'https://redux-thunder-todo-server.herokuapp.com/addNewTask'
const removeTaskUrl = 'https://redux-thunder-todo-server.herokuapp.com/removeTask'

const getTasksAsync = createAsyncThunk('tasks/getTasksAsync', async ()=>{
  const {data} = await axios.get(fetchUrl)
  return data
})
const addTasksAsync = createAsyncThunk('tasks/addTasksAsync', async (payload)=>{
  const response = await axios.post(addNewTaskUrl,payload)

  if (response.data ==='added to db'){
    console.log('added to DB successfully')
    return payload
  }
  else if (response.data ==='error adding to db'){
    throw  new Error({ message: 'Rejected' })
  }
})

const removeTaskAsync = createAsyncThunk('tasks/removeTask',async (payload)=>{
  const response = await axios.post(removeTaskUrl,payload)

  if (response.data ==='removed from db'){
    console.log('removed from db successfully')
    return payload
  }
  else if (response.data ==='error removing from db'){
    throw  new Error({ message: 'Rejected' })
  }
})

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState : [],
  reducers: {
    addNewTask: (state , action) => { 
        state.push(action.payload)
    },
    removeTask: (state,action) => {
      return state.filter(i=> i.id != action.payload)
    },
    editTask: (state,action) => {
        const indx = state.findIndex(i => i.id === action.payload.id)
        state[indx].deadline = action.payload.newDeadline
        state[indx].desc = action.payload.newDesc
    },
  },
  extraReducers : {
    [getTasksAsync.fulfilled] : (state,action) => {
      console.log(action.payload)
      return action.payload
    },
    [addTasksAsync.fulfilled] : (state,action) => {
      state.push(action.payload)
    },
    [addTasksAsync.rejected] : (state,action) => {
      console.log('rejected')
    },
    [removeTaskAsync.fulfilled] : (state,action) => {
      return state.filter(i => i._id != action.payload.idToRemove)
    }
  }
})

export const { addNewTask,removeTask,editTask } = tasksSlice.actions
export {getTasksAsync,addTasksAsync,removeTaskAsync}
export default tasksSlice.reducer