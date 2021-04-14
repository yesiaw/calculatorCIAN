const SET_PERCENT_VALUE = 'SET_PERCENT_VALUE'

let initialState = {
    PercentValue: 1
}

const PercentReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_PERCENT_VALUE:
            return {
                ...state,
                PercentValue: action.value == '' ? '' : Number(action.value)
            }

        default: return state;
    }

}

export const setPercentValue = (value) => ({ type: SET_PERCENT_VALUE, value });




export default PercentReducer;