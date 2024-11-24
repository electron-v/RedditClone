import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts : [],
}

const postSlice = createSlice({
    name:'posts',
    initialState:initialState,
    reducers:{
        updatePost(state, action){
            state.posts = state.posts?.map((post) => (
                post.$id===action.payload.$id ? action.payload : post
            ))
        },
        
        addPost(state, action){
            state.posts = [...state.posts, action.payload];
        },

        deleteCurrentPost(state,action){
            state.posts = state.posts?.filter((post)=> post.$id !== action.payload.$id)
        },

        addAllPosts(state,action){
            state.posts = action.payload;
        }

    }
});
export const {updatePost,addPost,addAllPosts,deleteCurrentPost} = postSlice.actions;
export default postSlice.reducer;