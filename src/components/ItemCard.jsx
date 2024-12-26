import React from "react";

const ItemCard = ({ item, onClick, isAnswered }) => {
  const bgColor = isAnswered ? "bg-green-200" : "bg-gray-300";
  const hoverColor = isAnswered ? "" : "hover:bg-gray-500 cursor-pointer";

  const borderColor =
    item.difficulty === "EASY"
      ? "border-green-400"
      : item.difficulty === "MEDIUM"
      ? "border-blue-400"
      : "border-red-400";

  return (
    <div
      onClick={onClick}
      className={`${bgColor} ${borderColor} ${hoverColor} shadow-lg border-l-4 w-1/2 rounded-full py-2 px-5 text-white md:text-[1.5rem] font-bold tracking-widest`}
    >
      {item.name}
    </div>
  );
};

export default ItemCard;
