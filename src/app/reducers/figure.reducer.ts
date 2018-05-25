import { Action } from '@ngrx/store';
import { Figure } from './../models/figure.model';
import { FiguresActions, LoadFigureData, TogglePopup, FigureActions } from '../actions/figure.actions';
import { getPropertyName, getNewStateWithChangeValue } from '../shared/functions';

// Section 1
const initialState: Figure = {
    figureViewModel: {
        name: '',
        description: '',
        images: ['']
    },
    isPopupVisible: false
};

// TODO fix this action type
function loadFigureData(state: Figure, action: any) {
    return getNewStateWithChangeValue(state, getPropertyName(() => state.figureViewModel), action.figureData);
}

function togglePopup(state: Figure, action: TogglePopup) {
    return getNewStateWithChangeValue(state, getPropertyName(() => state.isPopupVisible), action.payload);
}

const actionsMap = {
    [FiguresActions.LOAD_FIGURE_DATA]: loadFigureData,
    [FiguresActions.TOGGLE_POPUP]: togglePopup,
};

export function figureReducers(state: Figure = initialState, action: FigureActions) {
    return actionsMap[action.type] ? actionsMap[action.type](state, action) : state;
}
