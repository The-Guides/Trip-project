import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Figure } from './../models/figure.model';

// Section 2

export const FiguresActions = {
    FIND_FIGURE: 'This will make a search for the figure',
    FETCH_FIGURE_DATA: 'This will fetch the data for the figure from our db',
    LOAD_FIGURE_DATA: 'This will load the data to the store',
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
    constructor(public figureData: any) { }
}
