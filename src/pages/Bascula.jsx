import { useState, useEffect } from "react";
import { getUserProfile } from "../utils/userData";

function Bascula() {
  const [profile, setProfile] = useState({});
  const [alimentos, setAlimentos] = useState([
    { nombre: "", proteinas: null, carbohidratos: null, grasas: null, vegetales: null, calorias: null },
  ]);
  const [totalCalorias, setTotalCalorias] = useState(0);
  const [caloriasRecomendadas, setCaloriasRecomendadas] = useState(0);

  useEffect(() => {
    const perfil = getUserProfile();
    setProfile(perfil);
    calcularCaloriasRecomendadas(perfil);
  }, []);

  const calcularCaloriasRecomendadas = (perfil) => {
    if (perfil.peso && perfil.altura && perfil.edad && perfil.genero && perfil.actividad) {
      let tmb = perfil.genero === "masculino" 
        ? 88.36 + (13.4 * perfil.peso) + (4.8 * perfil.altura) - (5.7 * perfil.edad)
        : 447.6 + (9.2 * perfil.peso) + (3.1 * perfil.altura) - (4.3 * perfil.edad);

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

  const actualizarAlimento = (index, campo, valor) => {
    const nuevosAlimentos = [...alimentos];
    nuevosAlimentos[index][campo] = valor;
    nuevosAlimentos[index].calorias = (nuevosAlimentos[index].proteinas * 4) + (nuevosAlimentos[index].carbohidratos * 4) + (nuevosAlimentos[index].grasas * 9);
    setAlimentos(nuevosAlimentos);
    calcularTotalCalorias(nuevosAlimentos);
  };

  const calcularTotalCalorias = (alimentos) => {
    const total = alimentos.reduce((acc, item) => acc + item.calorias, 0);
    setTotalCalorias(total);
  };

  const agregarAlimento = () => {
    setAlimentos([...alimentos, { nombre: "", proteinas: null, carbohidratos: null, grasas: null, vegetales: null, calorias: null }]);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Balanza de Calorías</h1>
        <div className="space-y-6">
          {alimentos.map((alimento, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg shadow-sm border">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <input 
                  type="text" 
                  placeholder="Nombre del alimento" 
                  value={alimento.nombre}
                  onChange={(e) => actualizarAlimento(index, "nombre", e.target.value)}
                  className="border p-2 rounded w-full"
                />
                <input 
                  type="number" 
                  placeholder="Proteínas (g)" 
                  value={alimento.proteinas}
                  onChange={(e) => actualizarAlimento(index, "proteinas", parseFloat(e.target.value))}
                  className="border p-2 rounded w-full"
                />
                <input 
                  type="number" 
                  placeholder="Carbohidratos (g)" 
                  value={alimento.carbohidratos}
                  onChange={(e) => actualizarAlimento(index, "carbohidratos", parseFloat(e.target.value))}
                  className="border p-2 rounded w-full"
                />
                <input 
                  type="number" 
                  placeholder="Grasas (g)" 
                  value={alimento.grasas}
                  onChange={(e) => actualizarAlimento(index, "grasas", parseFloat(e.target.value))}
                  className="border p-2 rounded w-full"
                />
                <input 
                  type="number" 
                  placeholder="Vegetales (g)" 
                  value={alimento.vegetales}
                  onChange={(e) => actualizarAlimento(index, "vegetales", parseFloat(e.target.value))}
                  className="border p-2 rounded w-full"
                />
              </div>
              <p className="mt-4 text-lg font-semibold">Calorías: {alimento.calorias || 0}</p>
            </div>
          ))}
          <button 
            onClick={agregarAlimento} 
            className="bg-green-500 text-white p-2 rounded hover:bg-green-600 w-full">
            + Agregar Alimento
          </button>
        </div>
        <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow">
          <h2 className="text-2xl font-semibold">Resumen</h2>
          <p className="text-xl mt-4">Total Calorías Consumidas: <span className="font-bold">{totalCalorias}</span></p>
          <p className="text-xl">Calorías Recomendadas: <span className="font-bold">{caloriasRecomendadas.toFixed(2)}</span></p>
          <p className="text-xl">Excedente/Deficit: <span className={`font-bold ${totalCalorias > caloriasRecomendadas ? 'text-red-500' : 'text-green-500'}`}>
            {(totalCalorias - caloriasRecomendadas).toFixed(2)} kcal
          </span></p>
        </div>
      </div>
    </div>
  );
}

export default Bascula;
