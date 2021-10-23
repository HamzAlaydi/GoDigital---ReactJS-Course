import { createStore, combineReducers } from "redux";
import counterReducer from "./reducers/counter";
import gamesReducer from "./reducers/games";

const rootReducer = combineReducers({
    cr: counterReducer,
    gr: gamesReducer,
})

const store = createStore(rootReducer);

export default store;