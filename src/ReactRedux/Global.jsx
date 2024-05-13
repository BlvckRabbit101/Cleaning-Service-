import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user:null
}

const Global = createSlice({
  name: 'second',
  initialState,
  reducers: {
    loginUser: (state,{payload})=>{
        state.user = payload
    }
  }
});

export const {loginUser} = Global.actions

export default Global.reducer