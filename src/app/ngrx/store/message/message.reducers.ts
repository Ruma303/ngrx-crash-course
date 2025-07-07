import { createReducer, on } from '@ngrx/store';
import { loadMessages, loadMessagesSuccess, loadMessagesFailure } from './message.actions';
import { Message } from '../../../services/message.service';

export interface MessageState {
  messages: Message[];
  loading: boolean;
  error: any;
}

export const initialState: MessageState = {
  messages: [],
  loading: false,
  error: null
};

export const messageReducer = createReducer(
  initialState,
  on(loadMessages, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(loadMessagesSuccess, (state, { messages }) => ({
    ...state,
    loading: false,
    messages
  })),
  on(loadMessagesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);