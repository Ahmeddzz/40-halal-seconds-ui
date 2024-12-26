import axios from "axios";

const API_URL = 'http://localhost:8080/api/v1/game'
const GameService = {
    getGameItems: function(id) {
        return axios.get(API_URL);
    }
};

export default GameService;