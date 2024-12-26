import { useEffect, useState } from "react";
import CreateGameForm from "./CreateGameForm";
import { createGame } from "../state/game/Action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [formData, setFormData] = useState({
    teamOne: "",
    teamTwo: "",
    difficulty: "MEDIUM",
    numberOfItems: 5,
    maximumPoints: 100
  });
  const dispatch = useDispatch();
  const { game } = useSelector((store) => store);
  const navigate = useNavigate();
  const [isGameCreated, setIsGameCreated] = useState(false);

  const handleCreateGame = async (request) => {
    await dispatch(createGame(request));
    setIsGameCreated(true);
  };

  useEffect(() => {
    if (isGameCreated && game?.id) {
      navigate(`/game/${game.id}`);
    }
  }, [game, isGameCreated, navigate]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateGame(formData);
  };
  return (
    <div className="w-full h-screen flex items-center justify-center bg-green-100">
      <div className="w-full h-[70vh] flex items-center justify-center mx-auto">
        <CreateGameForm
          handleSubmit={handleSubmit}
          formData={formData}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};

export default HomePage;
