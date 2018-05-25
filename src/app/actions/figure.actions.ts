import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Figure } from './../models/figure.model';
import { FigureViewModel } from '../figure/figure-view/figure-view.viewmodel';

export const FiguresActions = {
    FIND_FIGURE: 'This will make a search for the figure',
    FETCH_FIGURE_DATA: 'This will fetch the data for the figure from our db',
    LOAD_FIGURE_DATA: 'This will load the data to the store',
    TOGGLE_POPUP: 'This will toggle the popup',
    GOOGLE_VISION_OK: 'This will be returned if google vision did found the figure',
    GOOGLE_VISION_FAILED: 'This will be returned if google vision did not found the figure',
};

export class FindFigure implements Action {
    readonly type = FiguresActions.FIND_FIGURE;
    constructor(public imgBase64: string) { }
}

export class FetchFigureData implements Action {
    readonly type = FiguresActions.FETCH_FIGURE_DATA;
}

export class LoadFigureData implements Action {
    readonly type = FiguresActions.LOAD_FIGURE_DATA;
    constructor(public figureData: FigureViewModel) { }
}

export class TogglePopup implements Action {
    readonly type = FiguresActions.TOGGLE_POPUP;
    constructor(public payload: boolean) { }
}

export class GoogleVisionOk implements Action {
    readonly type = FiguresActions.GOOGLE_VISION_OK;
    constructor(public figureId: string) { }
}

export class GoogleVisionFailed implements Action {
    readonly type = FiguresActions.GOOGLE_VISION_FAILED;
}

export type FigureActions = TogglePopup | LoadFigureData;
