import { useState } from "react";

function Gym() {
  const [activeTab, setActiveTab] = useState("ejercicios");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-green-500 mb-6 text-center">Página de Gym</h1>
        
        <div className="flex border-b mb-6">
          <button 
            className={`p-3 flex-1 text-center ${activeTab === "ejercicios" ? "border-b-4 border-green-500 font-semibold text-green-500" : "text-gray-500 hover:text-green-500"}`} 
            onClick={() => setActiveTab("ejercicios")}
          >
            Ejercicios
          </button>
          <button 
            className={`p-3 flex-1 text-center ${activeTab === "rutinas" ? "border-b-4 border-green-500 font-semibold text-green-500" : "text-gray-500 hover:text-green-500"}`} 
            onClick={() => setActiveTab("rutinas")}
          >
            Rutinas
          </button>
        </div>

        {activeTab === "ejercicios" && (
          <div>
            <h2 className="text-2xl mb-4 font-semibold">Ejercicios</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-4 bg-gray-50 rounded-xl shadow">
                <h3 className="font-bold text-green-500 mb-2">Torso</h3>
                <ul>
                  <li><a href="#" className="text-blue-500 hover:underline">Press de banca</a></li>
                  <li><a href="#" className="text-blue-500 hover:underline">Dominadas</a></li>
                </ul>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl shadow">
                <h3 className="font-bold text-green-500 mb-2">Pierna</h3>
                <ul>
                  <li><a href="#" className="text-blue-500 hover:underline">Sentadillas</a></li>
                  <li><a href="#" className="text-blue-500 hover:underline">Prensa</a></li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === "rutinas" && (
          <div>
            <h2 className="text-2xl mb-4 font-semibold">Rutinas</h2>
            <div className="p-4 bg-gray-50 rounded-xl shadow">
              <ul className="space-y-3">
                <li><a href="/rutina1.pdf" className="text-green-500 hover:underline">Rutina de volumen</a></li>
                <li><a href="/rutina2.pdf" className="text-green-500 hover:underline">Rutina de definición</a></li>
                <li><a href="/rutina3.pdf" className="text-green-500 hover:underline">Rutina para glúteos</a></li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Gym;
