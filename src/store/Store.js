
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlices";

const store = configureStore({
    reducer:{
        auth:authSlice,

        //Todo Lets add some more slices for posts
    }
});

export default store;