import {createAction} from "@reduxjs/toolkit";

export const ActionType = {
  LOAD_COMMENTS: `data/loadComments`,
  ADD_COMMENTS: `data/addComments`,

  SET_MODAL_OPEN: `app/setModalOpen`
};

export const loadComments = createAction(ActionType.LOAD_COMMENTS, (comments) => {
  return {
    payload: comments
  }
});

export const addComment = createAction(ActionType.ADD_COMMENTS, (comment) => {
  return {
    payload: comment
  }
});

export const setModalOpen = createAction(ActionType.SET_MODAL_OPEN, (status) => {
  return {
    payload: status
  }
});
