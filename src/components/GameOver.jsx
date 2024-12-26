import React from 'react';
import { useSelector } from 'react-redux';

const GameOver = () => {
  const { game } = useSelector((store) => store);

  const winner =
    game.game.pointsTeamOne > game.game.pointsTeamTwo
      ? game.game.nameTeamOne
      : game.game.nameTeamTwo;

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="p-10 bg-white shadow-2xl rounded-3xl transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <h1 className="text-6xl font-extrabold text-red-600 mb-8">
          Game Over
        </h1>
        <p className="text-3xl mb-6">
          The winner is:{" "}
          <span className="font-bold text-green-600">
            {winner}
          </span>
        </p>
        <div className="mt-6 bg-gray-50 p-6 rounded-lg shadow-inner">
          <p className="text-xl mb-4">
            Team:{" "}
            <span className="font-bold text-blue-700">
              {game.game.nameTeamOne}
            </span>{" "}
            - <span className="text-gray-700">{game.game.pointsTeamOne} points</span>
          </p>
          <p className="text-xl">
            Team:{" "}
            <span className="font-bold text-blue-700">
              {game.game.nameTeamTwo}
            </span>{" "}
            - <span className="text-gray-700">{game.game.pointsTeamTwo} points</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameOver;
