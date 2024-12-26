import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import GameBoard from "../components/GameBoard";
import Navbar from "../components/Navbar";

const Routers = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/game/:id' element={<GameBoard />} />
        </Routes>
    </div>
  )
}

export default Routers;