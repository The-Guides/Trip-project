import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Figure } from './../models/figure.model';

// Section 2

export const FiguresActions = {
    FIND_FIGURE: 'This will make a search for the figure'
};

export const ADD_TUTORIAL = '[TUTORIAL] Add';
export const REMOVE_TUTORIAL = '[TUTORIAL] Remove';

// Section 3
export class AddTutorial implements Action {
    readonly type = ADD_TUTORIAL;

    constructor(public payload: Figure) { }
}

export class RemoveTutorial implements Action {
    readonly type = REMOVE_TUTORIAL;

    constructor(public payload: number) { }
}

export class FindFigure implements Action {
    readonly type = FiguresActions.FIND_FIGURE;
}
export type Actions = AddTutorial | RemoveTutorial;
