import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
  emailId:"",
}

export const validSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    isValidUser: (state) => {
      state.value = true;
    },
    userName:(state, action)=>{
      state.emailId =action.payload;
    }
  },
})
export const { isValidUser, userName } = validSlice.actions

export default validSlice.reducer