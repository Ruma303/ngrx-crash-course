import { createReducer, on } from "@ngrx/store";
import { addMessage } from "./message.actions";

export const initialState = '';

export const messageReducer = createReducer(
  initialState,
  on(addMessage, (state, { message }) => message),
);