import { CREATE_GAME_FAILURE, CREATE_GAME_REQUEST, CREATE_GAME_SUCCESS, GET_GAME_BY_ID_FAILURE, GET_GAME_BY_ID_REQUEST, GET_GAME_BY_ID_SUCCESS, UPDATE_GAME_SCORE_FAILURE, UPDATE_GAME_SCORE_REQUEST, UPDATE_GAME_SCORE_SUCCESS } from "./ActionTypes";

const initialState = {
    game: {
        teamOne: "",
        teamTwo: "",
        pointsTeamOne: 0,
        pointsTeamTwo: 1,
    },
    id: null,
    loading: false,
    error: null,
    success: null,
}

export const gameReducer = (state = initialState, action) => {

    switch (action.type) {
        case CREATE_GAME_REQUEST:
        case GET_GAME_BY_ID_REQUEST:
        case UPDATE_GAME_SCORE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case CREATE_GAME_SUCCESS:
            return {
                ...state,
                loading: false,
                id: action.payload,
            };
        case GET_GAME_BY_ID_SUCCESS:
        case UPDATE_GAME_SCORE_SUCCESS:
            return {
                ...state,
                loading: false,
                game: action.payload
            };
        case CREATE_GAME_FAILURE:
        case GET_GAME_BY_ID_FAILURE:
        case UPDATE_GAME_SCORE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}
