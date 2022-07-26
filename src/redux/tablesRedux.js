//selectors
export const getAllTables = (state) => { return state.tables };
export const findTable = ({ tables }, tableId) => tables.find(table => table.id === tableId);

//creators

//actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');

//action creators
export const updateTables = (payload) => ({ type: UPDATE_TABLES, payload });
export const fetchTables = () => {
    return (dispatch) => {
        fetch('http://localhost:3131/api/tables')
            .then(res => res.json())
            .then(tables => dispatch(updateTables(tables)))
            .catch(rejected => {
                console.log('fetch rejected info: ', rejected)
            })
    }
}

export const tablesReducer = (statePart = [], action) => {
    console.log('action tablesReducer: ', action)
    switch (action.type) {
        case UPDATE_TABLES:
            return [...action.payload];
        default:
            return statePart;
    }
}

export default tablesReducer;