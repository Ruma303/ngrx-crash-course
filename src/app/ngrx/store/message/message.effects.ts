import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadMessages, loadMessagesSuccess, loadMessagesFailure } from './message.actions';
import { MessageService } from '../../../services/message.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class MessageEffects {

  private actions$ = inject(Actions);
  private messageService = inject(MessageService);

  loadMessages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMessages),
      switchMap(() =>
        this.messageService.getMessages().pipe(
          map(messages => loadMessagesSuccess({ messages })),
          catchError(error => of(loadMessagesFailure({ error })))
        )
      )
    )
  );
}
