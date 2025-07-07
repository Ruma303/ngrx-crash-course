import { createAction, props } from "@ngrx/store";

export const addMessage = createAction(
  '[Message Component] Add Message',
  props<{ message: string }>()
);