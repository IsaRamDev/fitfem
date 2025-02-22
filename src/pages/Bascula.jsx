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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Balanza de Calorías</h1>
      <div>
        {alimentos.map((alimento, index) => (
          <div key={index} className="mb-4 p-4 border rounded">
            <input 
              type="text" 
              placeholder="Nombre del alimento" 
              value={alimento.nombre}
              onChange={(e) => actualizarAlimento(index, "nombre", e.target.value)}
              className="border p-2 mr-2"
            />
            <input 
              type="number" 
              placeholder="Proteínas (g)" 
              value={alimento.proteinas}
              onChange={(e) => actualizarAlimento(index, "proteinas", parseFloat(e.target.value))}
              className="border p-2 mr-2"
            />
            <input 
              type="number" 
              placeholder="Carbohidratos (g)" 
              value={alimento.carbohidratos}
              onChange={(e) => actualizarAlimento(index, "carbohidratos", parseFloat(e.target.value))}
              className="border p-2 mr-2"
            />
            <input 
              type="number" 
              placeholder="Grasas (g)" 
              value={alimento.grasas}
              onChange={(e) => actualizarAlimento(index, "grasas", parseFloat(e.target.value))}
              className="border p-2 mr-2"
            />
            <input 
              type="number" 
              placeholder="Vegetales (g)" 
              value={alimento.vegetales}
              onChange={(e) => actualizarAlimento(index, "vegetales", parseFloat(e.target.value))}
              className="border p-2"
            />
            <p className="mt-2">Calorías: {alimento.calorias}</p>
          </div>
        ))}
        <button onClick={agregarAlimento} className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
          + Agregar Alimento
        </button>
      </div>
      <div className="mt-6">
        <h2 className="text-xl">Total Calorías: {totalCalorias}</h2>
        <h2 className="text-xl">Calorías Recomendadas: {caloriasRecomendadas.toFixed(2)}</h2>
        <h2 className="text-xl">
          Excedente/Deficit: {(totalCalorias - caloriasRecomendadas).toFixed(2)} kcal
        </h2>
      </div>
    </div>
  );
}

export default Bascula;
