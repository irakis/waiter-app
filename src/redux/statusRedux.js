//selectors
export const getAllOptions = (state) => { return state.status };

//actions
const createActionName = actionName => `app/status/${actionName}`;
const UPDATE_STATUS = createActionName('UPDATE_STATUS');

//action creators
const updateStatus = (payload) => ({ type: UPDATE_STATUS, payload }, console.log(payload));

export const fetchStatus = () => {
    fetch('http://localhost:3131/api/status')
        .then(res => res.json())
        .then(status => updateStatus(status))
        .catch(rejected => {
            console.log('fetch rejected info: ', rejected)
        })
}

export const statusReducer = (statePart = [], action) => {
    
    console.log('action statusReducer: ', action)
    switch (action.type) {
        case UPDATE_STATUS:
            return [...action.payload];
        default:
            return statePart;
    }
}
export default statusReducer;