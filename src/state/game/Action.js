import { api } from "../../config/Api";
import { CREATE_GAME_FAILURE, CREATE_GAME_REQUEST, CREATE_GAME_SUCCESS, GET_GAME_BY_ID_FAILURE, GET_GAME_BY_ID_REQUEST, GET_GAME_BY_ID_SUCCESS, GET_GAME_CARDS_FAILURE, GET_GAME_CARDS_REQUEST, GET_GAME_CARDS_SUCCESS, UPDATE_GAME_SCORE_FAILURE, UPDATE_GAME_SCORE_REQUEST, UPDATE_GAME_SCORE_SUCCESS } from "./ActionTypes";


export const createGame = (request) => async (dispatch) => {
    dispatch({ type: CREATE_GAME_REQUEST })
    try {
        const { data } = await api.post(`/games`, request);

        dispatch({ type: CREATE_GAME_SUCCESS, payload: data })
        console.log("CREATE_GAME_REQUEST: ", data)
    } catch (error) {
        dispatch({ type: CREATE_GAME_FAILURE, payload: error })
        console.log("Catch ERROR - ", error)
    }
}

export const getGameById = (gameId) => async (dispatch) => {
    dispatch({ type: GET_GAME_BY_ID_REQUEST })
    try {
        const { data } = await api.get(`/games/${gameId}`);

        dispatch({ type: GET_GAME_BY_ID_SUCCESS, payload: data })
        console.log("GET_GAME_BY_ID_REQUEST: ", data)
    } catch (error) {
        dispatch({ type: GET_GAME_BY_ID_FAILURE, payload: error })
        console.log("Catch ERROR - ", error)
    }
}

export const updateGameScore = (request) => async (dispatch) => {
    dispatch({ type: UPDATE_GAME_SCORE_REQUEST })
    try {
        const { data } = await api.put(`/games/update-score`, request);

        dispatch({ type: UPDATE_GAME_SCORE_SUCCESS, payload: data })
        console.log("UPDATE_GAME_SCORE_REQUEST: ", data)
    } catch (error) {
        dispatch({ type: UPDATE_GAME_SCORE_FAILURE, payload: error })
        console.log("Catch ERROR - ", error)
    }
}