import { GET_GAME_CARDS_FAILURE, GET_GAME_CARDS_REQUEST, GET_GAME_CARDS_SUCCESS } from "./ActionTypes"

const initialState = {
    cards: [],
    loading: false,
    error: null,
    success: null,
}

export const cardReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_GAME_CARDS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case GET_GAME_CARDS_SUCCESS:
            return {
                ...state,
                loading: false,
                cards: action.payload.items
            };
        case GET_GAME_CARDS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}
