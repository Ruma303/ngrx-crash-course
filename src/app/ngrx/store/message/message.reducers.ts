import { createReducer, on } from "@ngrx/store";
import { addMessage, updateMessage } from "./message.actions";

export const initialState = '';

export const messageReducer = createReducer(
  initialState,
  on(addMessage, (state, { message }) => message),
  on(updateMessage, (state, { message }) => message)
);