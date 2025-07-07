import { createAction } from "@ngrx/store";

export const addMessage = createAction(
  '[Message Component] Add Message',
  (message: string) => ({ message })
);

export const updateMessage = createAction(
  '[Message Component] Update Message',
  (message: string) => ({ message })
);