import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { ADD_TUTORIAL, RemoveTutorial } from '../actions/figure.actions';
@Injectable()
export class FigureEffects {

    @Effect()
    public login$ = this.actions$
        // Listen for the 'LOGIN' action
        .ofType(ADD_TUTORIAL)
        .pipe(
            map(action => {
                debugger
                return new RemoveTutorial({} as any);
            }));

    constructor(
        private actions$: Actions
    ) { }
    // Map the payload into JSON to use as the request body

}
