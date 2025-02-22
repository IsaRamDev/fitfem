import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Bascula from "./pages/Bascula";
import Gym from "./pages/Gym";
import Calendario from "./pages/Calendario";
import Alimentos from "./pages/Alimentos";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user") || null);

  const handleLogin = (status) => {
    if (status) {
      localStorage.setItem("user", "logged");
      setUser("logged");
    } else {
      localStorage.removeItem("user");
      setUser(null);
    }
  };

  return (
    <Router>
      {user ? (
        <div className="flex h-screen">
          <Navbar onLogout={() => handleLogin(false)} />
          <div className="flex-1 p-4">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/bascula" element={<Bascula />} />
              <Route path="/gym" element={<Gym />} />
              <Route path="/calendario" element={<Calendario />} />
              <Route path="/alimentos" element={<Alimentos />} />
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </div>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </Router>
  );
}

export default App;
