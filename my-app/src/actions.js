import uuid from 'uuid';


export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';


export function addComment(text) {
  return {
    type: ADD_COMMENT,
    id: uuid.v4(),
    text
  }
}

export function editComment(id, text) {
  return {
    type: EDIT_COMMENT,
    id,
    text
  }
}

export function deleteComment(id) {
  return {
    type: DELETE_COMMENT,
    id
  }
}

export function thumbUpComment(id) {
  return {
    type: THUMB_UP_COMMENT,
    id
  }
}

export function thumbDownComment(id) {
  return {
    type: THUMB_DOWN_COMMENT,
    id
  }
}