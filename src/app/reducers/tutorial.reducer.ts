import { Action } from '@ngrx/store';
import { Figure } from './../models/figure.model';
import * as TutorialActions from './../actions/figure.actions';

// Section 1
const initialState: Figure = {
    name: 'Initial Tutorial',
    description: 'http://google.com',
    imgUrl: ''
};

// Section 2
export function reducer(state: Figure[] = [initialState], action: TutorialActions.Actions) {
    // Section 3
    switch (action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];
        default:
            return state;
    }
}
