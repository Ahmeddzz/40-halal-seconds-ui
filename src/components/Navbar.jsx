import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="px-2 sm:px-5 sticky top-0 z-50 py-2 sm:py-[0.8rem] bg-[#76b897] lg:px-20 flex items-center justify-between shadow-lg">
      <h1
        onClick={() => navigate("/")}
        className="cursor-pointer text-[3rem] tracking-wide sm:tracking-widest font-bold text-white mx-auto text-center"
      >
        <span className="text-yellow-400 text-[4rem]">40</span> Halal Seconds
      </h1>
    </div>
  );
};

export default Navbar;
