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
    <nav className="fixed bottom-0 left-0 w-full bg-white shadow-md p-4 flex justify-between border-t md:fixed md:left-0 md:w-60 md:h-screen md:flex-col md:border-r">
      <NavLink to="/home" className="p-2 border rounded hover:text-blue-500">🏠 <span className="hidden md:inline">Inicio</span></NavLink>
      <NavLink to="/bascula" className="p-2 border rounded hover:text-blue-500">⚖️ <span className="hidden md:inline">Báscula</span></NavLink>
      <NavLink to="/gym" className="p-2 border rounded hover:text-blue-500">💪 <span className="hidden md:inline">Gym</span></NavLink>
      <NavLink to="/calendario" className="p-2 border rounded hover:text-blue-500">📅 <span className="hidden md:inline">Calendario</span></NavLink>
      <NavLink to="/alimentos" className="p-2 border rounded hover:text-blue-500">🥗 <span className="hidden md:inline">Alimentos</span></NavLink>
      <button onClick={handleLogout} className="p-2 rounded hover:bg-red-600 mt-4">
        <FaSignOutAlt className="text-red-500 text-2xl" />
      </button>
    </nav>
  );
}
export default Navbar;
