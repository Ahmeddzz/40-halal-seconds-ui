import { api } from "../../config/Api";
import { GET_GAME_CARDS_FAILURE, GET_GAME_CARDS_REQUEST, GET_GAME_CARDS_SUCCESS } from "./ActionTypes";


export const getGameCards = (gameId) => async (dispatch) => {
    dispatch({ type: GET_GAME_CARDS_REQUEST })

    try {
        const { data } = await api.get(`/cards/game/${gameId}`
        );

        dispatch({ type: GET_GAME_CARDS_SUCCESS, payload: data })
        console.log("GET_GAME_CARDS_REQUEST: ", data)
    } catch (error) {
        dispatch({ type: GET_GAME_CARDS_FAILURE, payload: error })
        console.log("Catch ERROR - ", error)
    }
}