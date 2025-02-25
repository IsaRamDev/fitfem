import { NavLink, useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

function Navbar({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    onLogout();
    navigate("/");
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-gradient-to-t from-gray-800 to-gray-900 shadow-lg p-4 flex justify-between border-t md:fixed md:left-0 md:w-60 md:h-screen md:flex-col md:border-r md:bg-gray-800">
      <NavLink to="/home" className="p-2 border-b-2 border-transparent hover:border-blue-500 text-white text-lg font-semibold hover:text-blue-500 transition duration-300">
        🏠 <span className="hidden md:inline">Inicio</span>
      </NavLink>
      <NavLink to="/bascula" className="p-2 border-b-2 border-transparent hover:border-blue-500 text-white text-lg font-semibold hover:text-blue-500 transition duration-300">
        ⚖️ <span className="hidden md:inline">Báscula</span>
      </NavLink>
      <NavLink to="/gym" className="p-2 border-b-2 border-transparent hover:border-blue-500 text-white text-lg font-semibold hover:text-blue-500 transition duration-300">
        💪 <span className="hidden md:inline">Gym</span>
      </NavLink>
      <NavLink to="/calendario" className="p-2 border-b-2 border-transparent hover:border-blue-500 text-white text-lg font-semibold hover:text-blue-500 transition duration-300">
        📅 <span className="hidden md:inline">Calendario</span>
      </NavLink>
      <NavLink to="/alimentos" className="p-2 border-b-2 border-transparent hover:border-blue-500 text-white text-lg font-semibold hover:text-blue-500 transition duration-300">
        🥗 <span className="hidden md:inline">Alimentos</span>
      </NavLink>
      <button 
        onClick={handleLogout} 
        className="p-3 rounded-full hover:bg-red-600 text-white mt-4 transition duration-300 transform hover:scale-105"
      >
        <FaSignOutAlt className="text-red-500 text-2xl" />
      </button>
    </nav>
  );
}
export default Navbar;
