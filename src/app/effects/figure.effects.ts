import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs/operators';
import { GoogleVisionService, GoogleVisionResponse } from '../services/google-vision.service';
import { FiguresActions, FindFigure } from '../actions/figure.actions';
import { FigureInfoService } from '../services/figure-info.service';

@Injectable()
export class FigureEffects {

    @Effect()
    public login$ = this.actions$
        // Listen for the 'LOGIN' action
        .ofType(FiguresActions.FIND_FIGURE)
        .pipe(
            switchMap((action: FindFigure) => {
                return this.googleService.findFigure(action.imgBase64);
            }),
            map((responses: GoogleVisionResponse) => {
                const rawId = responses.responses[0].landmarkAnnotations[0].mid;
                return rawId.substring(rawId.lastIndexOf('/'));
            }),
            switchMap(figureId => this.figureService.getFigureDetails(figureId)),
            map((response) => {
                debugger
                console.log(response);
            }));

    constructor(
        private actions$: Actions,
        private googleService: GoogleVisionService,
        private figureService: FigureInfoService
    ) { }

}
