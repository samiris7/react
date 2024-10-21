import { createSlice } from "@reduxjs/toolkit";
import { getPostsFromLocal, setPostsToLocal } from "../Shared/localstorage";



export const postSlice = createSlice({
  name: 'postSlice',
  initialState: {
    posts: getPostsFromLocal()
  },
  reducers: {

    addPost: (state, action) => {
      state.posts.push(action.payload);
      setPostsToLocal(state.posts);
    },


    updatePost: (state, action) => {
      state.posts = state.posts.map((post) => {
        return post.id === action.payload.id ? action.payload : post;
      });
      setPostsToLocal(state.posts);
    },
    removePost: (state, action) => {
      state.posts.splice(action.payload, 1);
      setPostsToLocal(state.posts);
    }


  }
});

export const { addPost, removePost, updatePost } = postSlice.actions;