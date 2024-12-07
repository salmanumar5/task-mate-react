import {combineReducers} from 'redux'
import groupReducer from './GroupReducer';

const rootReducer = combineReducers({
    groupReducer : groupReducer
})

export default rootReducer;