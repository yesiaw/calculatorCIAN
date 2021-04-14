const SET_YEARS_VALUE = 'SET_YEARS_VALUE'

let initialState = {
    YearsValue: 1
}

const YearsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_YEARS_VALUE:
            return {
                ...state,
                YearsValue: action.value == '' ? '' : Number(action.value)
            }

        default: return state;
    }

}

export const setYearsValue = (value) => ({ type: SET_YEARS_VALUE, value });




export default YearsReducer;