
export function getPropertyName(propertyFunction) {
    return /\.([^.;]+);?\s*\}$/.exec(propertyFunction.toString())[1];
}

export function getNewStateWithChangeValue(state, propName, value) {
    const newState = Object.assign({}, state);
    newState[propName] = value;
    return newState;
}
