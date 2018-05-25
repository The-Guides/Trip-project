import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs/operators';
import { GoogleVisionService, GoogleVisionResponse } from '../services/google-vision.service';
import { FiguresActions, FindFigure, LoadFigureData, TogglePopup } from '../actions/figure.actions';
import { FigureInfoService } from '../services/figure-info.service';
import { Observable, from } from 'rxjs';

@Injectable()
export class FigureEffects {

    @Effect()
    public onFindFigure$ = this.actions$
        .ofType(FiguresActions.FIND_FIGURE)
        .pipe(
            switchMap((action: FindFigure) => this.googleService.findFigure(action.imgBase64)),
            map((responses: GoogleVisionResponse) => {
                const rawId = responses.responses[0].landmarkAnnotations[0].mid;
                return rawId.substring(rawId.lastIndexOf('/'));
            }),
            switchMap(figureId => this.figureService.getFigureDetails(figureId)),
            switchMap((response) => from([new LoadFigureData(response as any), new TogglePopup(true)])));

    constructor(
        private actions$: Actions,
        private googleService: GoogleVisionService,
        private figureService: FigureInfoService
    ) { }

}
