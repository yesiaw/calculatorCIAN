const SET_TABLE_VALUE = 'SET_TABLE_VALUE'

let initialState = {
    Tabledata: []

}

const TableReducer = (state = initialState, action) => {
    // debugger

    switch (action.type) {
        case SET_TABLE_VALUE:
            return {
                ...state,
                Tabledata: [...action.data] ,
                
            }

        default: return state;
    }

}

export const setTableValue = (data) => ({ type: SET_TABLE_VALUE, data });




export default TableReducer;