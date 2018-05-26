import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs/operators';
import { GoogleVisionService, GoogleVisionResponse } from '../services/google-vision.service';
import {
    FiguresActions,
    FindFigure,
    LoadFigureViewModel, TogglePopup,
    GoogleVisionOk,
    GoogleVisionFailed,
    ToggleLoading
} from '../actions/figure.actions';
import { FigureInfoService } from '../services/figure-info.service';
import { Observable, from } from 'rxjs';
import { FigureViewModel } from '../figure/figure-view/figure-view.viewmodel';

@Injectable()
export class FigureEffects {

    @Effect()
    public onFindFigure$ = this.actions$
        .ofType(FiguresActions.FIND_FIGURE)
        .pipe(
            switchMap((action: FindFigure) => this.googleService.findFigure(action.imgBase64)),
            map((responses: GoogleVisionResponse) => {
                let result;
                // we want to check if google vision founded the figure
                if (responses.responses.length > 0 && Object.keys(responses.responses[0]).length > 0) {
                    let rawId = responses.responses[0].landmarkAnnotations[0].mid;
                    rawId = rawId.substring(rawId.lastIndexOf('/'));
                    // if so we want to return the GoogleVisionOk
                    result = new GoogleVisionOk(rawId);
                } else {
                    // else we want to return GoogleVisionFailed
                    result = [new ToggleLoading({ loading: false }), new GoogleVisionFailed()];
                }
                return result;
            }));

    @Effect()
    public onFetchFigureData = this.actions$
        .ofType(FiguresActions.GOOGLE_VISION_OK)
        .pipe(
            switchMap((action: GoogleVisionOk) => this.figureService.getFigureDetails(action.figureId)),
            switchMap((response: FigureViewModel) =>
                // when we have the response we want to hide the loading screen
                from([
                    new LoadFigureViewModel({ figureViewModel: response }),
                    new TogglePopup({ isPopupVisible: true }),
                    new ToggleLoading({ loading: false })])));

    @Effect()
    public onFindFigureFailed = this.actions$
        .ofType(FiguresActions.GOOGLE_VISION_FAILED)
        .pipe(switchMap(() =>
            from([new LoadFigureViewModel({ figureViewModel: { description: 'Not found' } } as any),
            new TogglePopup({ isPopupVisible: true })])
        ));

    constructor(
        private actions$: Actions,
        private googleService: GoogleVisionService,
        private figureService: FigureInfoService
    ) { }

}
