import React from "react";

const TeamCard = ({ name, points, pointsOtherTeam,currentTurn }) => {
  const borderColor =
    points > pointsOtherTeam
      ? "border-green-300"
      : points === pointsOtherTeam
      ? "border-yellow-300"
      : "border-red-300";

      const glowEffect = currentTurn
      ? "relative ring-blue-500 ring-opacity-50 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-blue-500 before:via-purple-500 before:to-blue-500 before:blur-xl before:opacity-50"
      : "";
  return (
    <div
      className={`bg-gray-100 ${borderColor} ${glowEffect} border-4 shadow-lg rounded-lg p-2 md:p-4 w-48 h-36 text-center m-2`}
    >
        
      <p className="text-xl font-bold tracking-wider text-green-800">{name}</p>
      <p className="text-2xl text-purple-600 mt-2 font-bold tracking-wider">{points} Points</p>
    </div>
  );
};

export default TeamCard;
