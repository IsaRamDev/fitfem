import { useState, useEffect } from "react";
import { getUserProfile } from "../utils/userData";

function Alimentos() {
  const [activeTab, setActiveTab] = useState("calorias");
  const [caloriasRecomendadas, setCaloriasRecomendadas] = useState(0);

  useEffect(() => {
    const perfil = getUserProfile();
    calcularCaloriasRecomendadas(perfil);
  }, []);

  const calcularCaloriasRecomendadas = (perfil) => {
    if (perfil.peso && perfil.altura && perfil.edad && perfil.genero && perfil.actividad) {
      let tmb = perfil.genero === "femenino" 
        ? 447.6 + (9.2 * perfil.peso) + (3.1 * perfil.altura) - (4.3 * perfil.edad)
        : 88.36 + (13.4 * perfil.peso) + (4.8 * perfil.altura) - (5.7 * perfil.edad);

      const multiplicadorActividad = {
        baja: 1.2,
        ligera: 1.375,
        moderada: 1.55,
        alta: 1.725,
        muyAlta: 1.9,
      };

      setCaloriasRecomendadas(tmb * multiplicadorActividad[perfil.actividad]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-green-500 mb-6 text-center">Página de Alimentos</h1>
        <div className="flex border-b mb-6">
          <button 
            className={`p-3 flex-1 text-center ${activeTab === "calorias" ? "border-b-4 border-green-500 font-semibold text-green-500" : "text-gray-500 hover:text-green-500"}`} 
            onClick={() => setActiveTab("calorias")}
          >
            Calorías Personalizadas
          </button>
          <button 
            className={`p-3 flex-1 text-center ${activeTab === "platillos" ? "border-b-4 border-green-500 font-semibold text-green-500" : "text-gray-500 hover:text-green-500"}`} 
            onClick={() => setActiveTab("platillos")}
          >
            Platillos Saludables
          </button>
        </div>

        {activeTab === "calorias" && (
          <div>
            <h2 className="text-2xl mb-4 font-semibold">Calorías Personalizadas</h2>
            <p>Calorías recomendadas: {caloriasRecomendadas.toFixed(2)}</p>
            <div className="mt-4">
              <h3 className="font-bold">Listas de alimentos:</h3>
              <ul>
                <li><a href="/carbohidratos.pdf" className="text-blue-500 hover:underline">Carbohidratos</a></li>
                <li><a href="/vegetales.pdf" className="text-blue-500 hover:underline">Vegetales</a></li>
                <li><a href="/proteinas.pdf" className="text-blue-500 hover:underline">Proteínas</a></li>
                <li><a href="/grasas.pdf" className="text-blue-500 hover:underline">Grasas</a></li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === "platillos" && (
          <div>
            <h2 className="text-2xl mb-4 font-semibold">Platillos Saludables</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[...Array(20)].map((_, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-xl shadow">
                  <a 
                    href={`https://www.youtube.com/watch?v=video${index}`} 
                    className="text-green-500 hover:underline" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Receta saludable {index + 1}
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Alimentos;
