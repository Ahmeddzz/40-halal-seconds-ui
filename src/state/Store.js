
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { cardReducer } from "./card/Reducer";
import { gameReducer } from "./game/Reducer";

const rootReducer = combineReducers({
    card: cardReducer,
    game: gameReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));