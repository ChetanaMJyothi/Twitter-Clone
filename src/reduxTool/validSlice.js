import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const validSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    isValidUser: (state) => {
      state.value = true;
    },
    
  },
})
export const { isValidUser } = validSlice.actions

export default validSlice.reducer