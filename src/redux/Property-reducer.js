const SET_PROPPERTY_VALUE = 'SET_PROPPERTY_VALUE'

let initialState = {
    PropertyValue: 500000
}

const PropertyReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_PROPPERTY_VALUE:
            return {
                ...state,
                PropertyValue: action.value == '' ? '' : Number(action.value)
            }
        
        default: return state;
    }

}

export const setPropertyValue = (value) => ({ type: SET_PROPPERTY_VALUE, value });




export default PropertyReducer;