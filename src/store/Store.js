
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlices";
import postSlice from "./postSlice"

const store = configureStore({
    reducer:{
        auth:authSlice,
        posts:postSlice
        //Todo Lets add some more slices for posts
    }
});

export default store;