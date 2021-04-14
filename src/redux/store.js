import { combineReducers, createStore } from "redux";
import EnitialFeeReducer from "./EnitialFee-reducer";
import PropertyReducer from "./Property-reducer";
import YearsReducer from './YearsValue-reducer'
import PercentReducer from './Percent-reducer'
import TableReducer from "./table-reducer";
let reducers = combineReducers({
    PropertyPage: PropertyReducer,
    EnitialFeePage: EnitialFeeReducer,
    YearsPage: YearsReducer,
    PercentPage: PercentReducer,
    TablePage: TableReducer
})

let store = createStore(reducers);

export default store;
