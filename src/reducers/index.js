import { combineReducers } from 'redux';
import repoReducer from './repoList'

const rootReducer = combineReducers({
    repoReducer,
})

export default rootReducer;