import { combineReducers, createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',

  initialState: {
    value: 110,
    gridData: [],
    name:'www'
  },

  reducers: {
    increment: (state) => state.value += 1,
    decrement: (state) => state.value -= 1,
    incrementByAmount: (state, action) => state.value += action.payload,
  },


})

export const printName = createSlice({
    name: 'print',
    initialState: {
      name: 'abu bakr'
    },
  
    reducers: {
      updateState(state,action){
        state.name = action.payload
      }
    },
  })

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const { reducers } = printName.actions
export default counterSlice.reducer

