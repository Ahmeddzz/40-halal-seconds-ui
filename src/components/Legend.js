import React from "react";
import Brightness3Icon from '@mui/icons-material/Brightness3';
const difficulties = [
  { name: "EASY", color: "text-green-300" },
  { name: "MEDIUM", color: "text-blue-300" },
  { name: "HARD", color: "text-red-300" }, 
];

const Legend = () => {
  return (
    <div className="flex items-center justify-start gap-4 md:p-4">
      {difficulties.map((difficulty, index) => (
        <div key={index} className="flex items-center gap-2">
          <div
            
            title={difficulty.name}
          >
            
          </div>
          <Brightness3Icon className={`w-10 h-10 rounded-full ${difficulty.color}`}/>
          <span className="text-gray-800 font-medium">{difficulty.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Legend;
