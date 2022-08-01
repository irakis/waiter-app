//selectors
export const getAllTables = (state) => { return state.tables };
export const findTable = ( { tables } , tableId) => tables.find(table => table.id === tableId);

//creators

//actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const UPDATE_API_TABLES = createActionName('UPDATE_API_TABLES')
const ADD_TABLES = createActionName('ADD_TABLES');

//action creators
export const updateTables = (payload) => ({ type: UPDATE_TABLES, payload });
export const updateApiTables = (payload) => ({ type: UPDATE_API_TABLES, payload });
export const updateAddTables = (payload) => ({ type: ADD_TABLES , payload});


export const fetchTables = () => {
    return (dispatch) => {
        fetch('http://localhost:3131/api/tables')
            .then(res => res.json())
            .then(tables => dispatch(updateTables(tables)))
            .catch(rejected => {
                console.log('fetch rejected info: ', rejected)
            })
    }
};

export const fetchUpdateRequest = ({ editTable }) => {
    console.log('redux fetch:', editTable);
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editTable)
    }

    return (dispatch) => {
        fetch(`http://localhost:3131/api/tables/${editTable.id}`, requestOptions)
            .then(response => response.json())
            .then ((editTable) => dispatch(updateApiTables(editTable)))
            .catch (rejected => {
                console.log('fetch rejected info: ', rejected)
            }
        )
    } 
}

export const fetchAddRequest = ({ editTable }) => {
    console.log('redux fetch:', editTable);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editTable)
    }

    return (dispatch) => {
        fetch(`http://localhost:3131/api/tables/`, requestOptions)
            .then(response => response.json())
            .then ((editTable) => dispatch(updateAddTables(editTable)))
            .catch (rejected => {
                console.log('fetch rejected info: ', rejected)
            }
        )
    } 
}


export const tablesReducer = (statePart = [], action) => {
    switch (action.type) {
        case UPDATE_TABLES:
            return [...action.payload];
        case UPDATE_API_TABLES:
            return statePart.map(table => table.id === action.payload.id ? action.payload : table)
        case ADD_TABLES:
            return [...statePart, action.payload];
        default:
            return statePart;
    }
}

export default tablesReducer;