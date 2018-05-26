import { Action, ActionReducerMap } from '@ngrx/store';
import { Figure } from './../models/figure.model';
import { FiguresActions, LoadFigureViewModel, TogglePopup, FigureActions, ToggleLoading } from '../actions/figure.actions';
import { getPropertyName, getNewStateWithChangeValue } from '../shared/functions';

// Section 1
const initialState: Figure = {
    figureViewModel: {
        name: '',
        description: '',
        images: ['']
    },
    isPopupVisible: false,
    loading: false
};

// TODO fix this action type
function loadFigureData(state: Figure, action: LoadFigureViewModel) {
    return getNewStateWithChangeValue(state, getPropertyName(() => state.figureViewModel), action.payload.figureViewModel);
}

function togglePopup(state: Figure, action: TogglePopup) {
    return getNewStateWithChangeValue(state, getPropertyName(() => state.isPopupVisible), action.payload.isPopupVisible);
}

function toggleLoadingScreen(state: Figure, action: ToggleLoading) {
    return getNewStateWithChangeValue(state, getPropertyName(() => state.loading), action.payload.loading);

}

const actionsMap = {
    [FiguresActions.LOAD_FIGURE_DATA]: loadFigureData,
    [FiguresActions.TOGGLE_POPUP]: togglePopup,
    [FiguresActions.TOGGLE_LOADING]: toggleLoadingScreen
};

export function figureReducers(state: Figure = initialState, action: FigureActions) {
    return actionsMap[action.type] ? actionsMap[action.type](state, action) : state;
}

