import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import { useDispatch, useSelector } from "react-redux";
import { getGameCards } from "../state/card/Action";
import Legend from "./Legend";
import { Button } from "@mui/material";
import { getGameById, updateGameScore } from "../state/game/Action";
import { useParams } from "react-router-dom";
import TeamCard from "./TeamCard";
import GameOver from "./GameOver";

const GameBoard = () => {
  const { card, game } = useSelector((store) => store);
  const { id } = useParams();
  const INITIAL_COUNTER = 5;
  const [timer, setTimer] = useState(INITIAL_COUNTER);
  const [gameOver, setGameOver] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [currentTeam, setCurrentTeam] = useState("TEAM_ONE");
  const [clickedItems, setClickedItems] = useState({});
  const [allowClickCard, setAllowClickCard] = useState(true);
  const [showPopupZeroPoints, setshowPopupZeroPoints] = useState(false);
  const [showPopupAllPoints, setshowPopupAllPoints] = useState(false);
  const dispatch = useDispatch();

  const handleNextCard = () => {
    dispatch(getGameById(id));
    dispatch(getGameCards(id));
    setShowButton(false);
    setTimer(INITIAL_COUNTER);
    setCurrentTeam((prevTeam) =>
      prevTeam === "TEAM_ONE" ? "TEAM_TWO" : "TEAM_ONE"
    );
    setClickedItems([]);
    setAllowClickCard(true);
  };

  useEffect(() => {
    handleNextCard();
    setGameOver(game.game.gameOver);
  }, []);

  const handleItemCardClick = (item) => {
    console.log(allowClickCard);
    if (clickedItems[item.name] || !allowClickCard) return;
    console.log(allowClickCard);
    const request = {
      gameId: id,
      team: currentTeam,
      difficulty: item.difficulty,
    };
    setClickedItems((prev) => ({ ...prev, [item.name]: true }));
    setGameOver(game.game.gameOver);
    console.log("handle item click: ", request);
    dispatch(updateGameScore(request));
  };

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setShowButton(true);
      setAllowClickCard(false);

      if (Object.keys(clickedItems).length === 0) {
        setshowPopupZeroPoints(true);
      }
      if (Object.keys(clickedItems).length === game.game.numberOfItems) {
        setshowPopupAllPoints(true);
      }
    }
  }, [timer]);

  return (
    <div className="flex flex-col items-center w-full h-screen gap-3 bg-green-100 relative space-y-5 p-3 md:p-1">
      {!gameOver ? (
        <>
          <Legend />
          <div className="flex flex-row items-center sm:items-start justify-between w-full px-1 md:px-5 mt-0">
            <TeamCard
              name={game.game.nameTeamOne}
              points={game.game.pointsTeamOne}
              pointsOtherTeam={game.game.pointsTeamTwo}
              currentTurn={currentTeam === "TEAM_ONE" ? true : false}
            />
            <div className="h-1/7 flex flex-col items-center justify-center mt-10 md:mt-5">
              <h2 className="text-[2rem] sm:text-[3rem] text-white font-bold text-center">
                {timer}
              </h2>
              <p className="text-md sm:text-lg text-gray-700 mt-2 text-center">
                Current Turn:{" "}
                <span className="font-bold">
                  {currentTeam === "TEAM_ONE"
                    ? game.game.nameTeamOne
                    : game.game.nameTeamTwo}
                </span>
              </p>
              <p className="text-md sm:text-lg text-gray-700 mt-2 text-center">
                Points to Win:{" "}
                <span className="font-bold"> {game.game.maximumPoints}</span>
              </p>
            </div>
            <TeamCard
              name={game.game.nameTeamTwo}
              points={game.game.pointsTeamTwo}
              pointsOtherTeam={game.game.pointsTeamOne}
              currentTurn={currentTeam === "TEAM_TWO" ? true : false}
            />
          </div>
          <div className="flex flex-col items-center w-full sm:w-1/2 gap-4 mt-5 sm:mt-0">
            {card.cards.map((item) => (
              <ItemCard
                key={item.name}
                item={item}
                onClick={() => handleItemCardClick(item)}
                isAnswered={!!clickedItems[item.name]}
              />
            ))}
            <div className="mt-2">
              {showButton && (
                <Button
                  variant="contained"
                  className="py-3 px-6 sm:py-[1.25rem] sm:px-[2.5rem] rounded-full text-lg bg-green-300 hover:bg-green-400 text-white shadow-lg transition-transform transform hover:scale-105"
                  onClick={handleNextCard}
                  color="success"
                >
                  Next Card
                </Button>
              )}
            </div>
          </div>
          {showPopupZeroPoints && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg font-bold text-red-600 text-center items-center justify-center">
                Kheir in sha Allah <span className="text-[3rem]">🤲</span>
              </p>
              <div className="flex justify-center mt-5">
                <Button
                  variant="outlined"
                  className="text-sm py-1 px-3"
                  onClick={() => setshowPopupZeroPoints(false)}
                >
                  Yallah next
                </Button>
              </div>
            </div>
          )}
          {showPopupAllPoints && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg font-bold text-red-600 text-center items-center justify-center">
                Allahu Akbar <span className="text-[3rem]">☝️</span>
              </p>
              <div className="flex justify-center mt-5">
                <Button
                  variant="outlined"
                  className="text-sm py-1 px-3"
                  onClick={() => setshowPopupAllPoints(false)}
                >
                  Yallah next
                </Button>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <GameOver />
        </>
      )}
    </div>
  );
};

export default GameBoard;
