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
    editTask: (state,action) => {
        const indx = state.findIndex(i => i.id === action.payload.id)
        state[indx].deadline = action.payload.newDeadline
        state[indx].desc = action.payload.newDesc
    },
  },
})

export const { addNewTask,removeTask,editTask } = tasksSlice.actions

export default tasksSlice.reducer