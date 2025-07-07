import { createAction, props } from '@ngrx/store';
import { Message } from '../../../services/message.service';

export const loadMessages = createAction('[Message] Load Messages');

export const loadMessagesSuccess = createAction(
  '[Message] Load Messages Success',
  props<{ messages: Message[] }>()
);

export const loadMessagesFailure = createAction(
  '[Message] Load Messages Failure',
  props<{ error: any }>()
);