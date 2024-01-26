import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
    name:'user',
    initialState:null,
    reducers:{
        addUser: (state, action) => {
            return action.payload;
        },
        removeUser: (state, action) => {
            return null;
        }
    }
});

export const {addUser, removeUser} = userReducer.actions;

export default userReducer.reducer;