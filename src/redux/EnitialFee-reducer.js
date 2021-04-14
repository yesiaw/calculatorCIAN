const SET_ENITIALFEE_VALUE = 'SET_ENITIALFEE_VALUE'

let initialState = {
    EnitialFeeValue: 0
}

const EnitialFeeReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_ENITIALFEE_VALUE:
            return {
                ...state,
                EnitialFeeValue: action.value == '' ? '' : Number(action.value)
            }
        
        default: return state;
    }

}

export const setEnitialFeeValue = (value) => ({ type: SET_ENITIALFEE_VALUE, value });




export default EnitialFeeReducer;