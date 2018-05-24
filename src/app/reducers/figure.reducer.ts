import { Action } from '@ngrx/store';
import { Figure } from './../models/figure.model';
import { FiguresActions, LoadFigureData } from '../actions/figure.actions';

// Section 1
const initialState: Figure = {
    name: '',
    description: '',
    images: ['']
};

function loadFigureData(state: Figure, action: any) {
    return action.figureData;
}

const actionsMap = {
    [FiguresActions.LOAD_FIGURE_DATA]: loadFigureData
};

// Section 2
export function figureReducers(state: Figure = initialState, action: Action) {
    return actionsMap[action.type] ? actionsMap[action.type](state, action) : state;
}
