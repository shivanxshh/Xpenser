import {combineReducers,legacy_createStore as createStore} from 'redux'
import { expenseReducer } from '../reducers/expenses'

const reducer=combineReducers({   //combine all the reducers
    expenses:expenseReducer
});

const initialState={};
const store=createStore(reducer,initialState);
export default store;