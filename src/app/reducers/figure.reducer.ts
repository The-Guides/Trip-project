import { Action } from '@ngrx/store';
import { Figure } from './../models/figure.model';
import { FiguresActions, LoadFigureData } from '../actions/figure.actions';
import { getPropertyName, getNewStateWithChangeValue } from '../shared/functions';

// Section 1
const initialState: Figure = {
    figureViewModel: {
        name: '',
        description: '',
        images: ['']
    }
};

function loadFigureData(state: Figure, action: any) {
    return getNewStateWithChangeValue(state, getPropertyName(() => state.figureViewModel), action.figureData);
}

const actionsMap = {
    [FiguresActions.LOAD_FIGURE_DATA]: loadFigureData
};

// Section 2
export function figureReducers(state: Figure = initialState, action: Action) {
    return actionsMap[action.type] ? actionsMap[action.type](state, action) : state;
}
