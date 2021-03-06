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
    ToggleLoading,
    LoadAllFigures,
    UpdateFoundedLocations
} from '../actions/figure.actions';
import { FigureInfoService } from '../services/figure-info.service';
import { Observable, from, of } from 'rxjs';
import { FigureViewModel } from '../figure/figure-view/figure-view.viewmodel';

@Injectable()
export class FigureEffects {

    @Effect()
    public onFindFigure$ = this.actions$
        .ofType(FiguresActions.FIND_FIGURE)
        .pipe(
            switchMap((action: FindFigure) => this.googleService.findFigure(action.imgBase64)),
            switchMap((responses: GoogleVisionResponse) => {
                let result;
                // we want to check if google vision founded the figure
                if (responses.responses.length > 0 && Object.keys(responses.responses[0]).length > 0) {
                    const googleResponse = responses.responses[0].landmarkAnnotations[0];
                    let rawId = googleResponse.mid;
                    let locationMarker;
                    rawId = rawId.substring(rawId.lastIndexOf('/'));

                    // if so we want to return the GoogleVisionOk
                    if (responses.responses[0].landmarkAnnotations[0].locations != null &&
                        responses.responses[0].landmarkAnnotations[0].locations.length > 0) {
                        locationMarker = responses.responses[0].landmarkAnnotations[0].locations[0].latLng;
                    }

                    result = from([new GoogleVisionOk(rawId), new UpdateFoundedLocations(locationMarker)]);
                } else {
                    // else we want to return GoogleVisionFailed
                    result = [new ToggleLoading(false), new GoogleVisionFailed()];
                }
                return result;
            }));

    @Effect()
    public onFetchFigureData = this.actions$
        .ofType(FiguresActions.GOOGLE_VISION_OK)
        .pipe(
            switchMap((action: GoogleVisionOk) => this.figureService.getFigureDetails(action.payload)),
            switchMap((response: FigureViewModel) =>
                // when we have the response we want to hide the loading screen
                from([
                    new LoadFigureViewModel(response),
                    new ToggleLoading(false),
                    new TogglePopup(true),
                ])));

    @Effect()
    public onFindFigureFailed = this.actions$
        .ofType(FiguresActions.GOOGLE_VISION_FAILED)
        .pipe(
            switchMap(() => from([
                new LoadFigureViewModel({ description: 'Picture was not found in our archives' } as any),
                new TogglePopup(true)])
            ));

    @Effect()
    public onFetchAllFigures = this.actions$
        .ofType(FiguresActions.FETCH_ALL_FIGURES)
        .pipe(
            switchMap(() => this.figureService.getAllFigures()),
            map((response) => new LoadAllFigures(response))
        );

    constructor(
        private actions$: Actions,
        private googleService: GoogleVisionService,
        private figureService: FigureInfoService
    ) { }

}
