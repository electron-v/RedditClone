import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData : null
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
            login(state, action){
                console.log("Action.payload", action.payload);
                state.status = true;
                state.userData = action.payload;

                console.log("Action.payload 17", state.userData);
            },

            logout(state){
                state.status = false;
                state.userData = null;
            }
    }
});

export const {login,logout} = authSlice.actions;
export default authSlice.reducer;