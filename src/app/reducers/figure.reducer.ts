import { Action, ActionReducerMap, ActionReducer } from '@ngrx/store';
import { Figure } from './../models/figure.model';
import { FiguresActions, LoadFigureViewModel, TogglePopup, FigureActions, ToggleLoading, LoadAllFigures } from '../actions/figure.actions';
import { getPropertyName, getNewStateWithChangeValue } from '../shared/functions';

// Section 1
const initialState: Figure = {
    figureViewModel: {
        name: '',
        description: '',
        images: [''],
        locations: {
            latitude: -1,
            longitude: -1
        }
    },
    isPopupVisible: false,
    loading: false,
    markers: []
};

// TODO fix this action type
function loadFigureData(state: Figure, action: LoadFigureViewModel) {
    return getNewStateWithChangeValue(state, getPropertyName(() => state.figureViewModel), action.payload);
}

function togglePopup(state: Figure, action: TogglePopup) {
    return getNewStateWithChangeValue(state, getPropertyName(() => state.isPopupVisible), action.payload);
}

function toggleLoadingScreen(state: Figure, action: ToggleLoading) {
    return getNewStateWithChangeValue(state, getPropertyName(() => state.loading), action.payload);
}

function loadMarkers(state: Figure, action: LoadAllFigures) {
    return getNewStateWithChangeValue(state, getPropertyName(() => state.markers), action.payload.markers);
}
const actionsMap: ActionsMaps<Figure> = {
    [FiguresActions.LOAD_FIGURE_DATA]: loadFigureData,
    [FiguresActions.TOGGLE_POPUP]: togglePopup,
    [FiguresActions.TOGGLE_LOADING]: toggleLoadingScreen,
    [FiguresActions.LOAD_ALL_FIGURES]: loadMarkers
};

export function figureReducers(state: Figure = initialState, action: FigureActions) {
    return actionsMap[action.type] ? actionsMap[action.type](state, action) : state;
}

interface ActionsMaps<T> { [actionType: string]: ActionReducer<T>; }
