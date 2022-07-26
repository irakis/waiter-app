//selectors
export const getAllOptions = (state) => { return state.status};

//actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_STATUS = createActionName('UPDATE_STATUS');

export const statusReducer = (statePart = [], action) => {
    switch (action.type) {
        case UPDATE_STATUS:
            return [...action.payload];
        default:
            return statePart;
    }
}
export default statusReducer;