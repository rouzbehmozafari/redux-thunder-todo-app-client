import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
    // status: (state,action) => {
    //     state.todosList[action.payload.id].completed = action.payload.completed
    // },
  },
})

export const { addNewTask,removeTask } = tasksSlice.actions

export default tasksSlice.reducer