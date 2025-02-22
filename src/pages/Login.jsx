import { useState } from "react";

function Login({ onLogin }) {
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
      localStorage.setItem("user", "logged");
      onLogin(true);
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }
    const userData = { username, password };
    localStorage.setItem("userData", JSON.stringify(userData));
    setIsRegister(false);
    setError("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">
          {isRegister ? "Crear Cuenta" : "Iniciar Sesión"}
        </h2>
        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={isRegister ? handleRegister : handleLogin} className="flex flex-col">
          <label className="mb-2">Usuario</label>
          <input
            type="text"
            className="border p-2 rounded mb-4"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="mb-2">Contraseña</label>
          <input
            type="password"
            className="border p-2 rounded mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isRegister && (
            <>
              <label className="mb-2">Confirmar Contraseña</label>
              <input
                type="password"
                className="border p-2 rounded mb-4"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </>
          )}
          <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            {isRegister ? "Registrar" : "Iniciar Sesión"}
          </button>
        </form>

        <div className="text-center mt-4">
          {!isRegister ? (
            <>
              <a href="#" className="text-blue-500 text-sm">¿Olvidaste tu contraseña?</a>
              <p className="text-sm mt-2">
                ¿No tienes cuenta?{" "}
                <button onClick={() => setIsRegister(true)} className="text-blue-500">
                  Regístrate
                </button>
              </p>
            </>
          ) : (
            <p className="text-sm">
              ¿Ya tienes cuenta?{" "}
              <button onClick={() => setIsRegister(false)} className="text-blue-500">
                Inicia sesión
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
