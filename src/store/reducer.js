import {createReducer} from "@reduxjs/toolkit";
import {addComment, loadComments, setModalOpen} from "./action";
import {Comments} from "../mocks/comments";

const initialState = {
  comments: Comments,
  isModalOpen: false
}

const rootReducer = createReducer(initialState, (builder => {
  builder.addCase(loadComments, (state, action) => {
    state.comments = action.payload;
  });
  builder.addCase(addComment, (state, action) => {
    state.comments = [...state.comments, action.payload]
  });
  builder.addCase(setModalOpen, (state, action) => {
    state.isModalOpen = action.payload
  });
  builder.addDefaultCase((state, action) => {});
}));

export default rootReducer;
