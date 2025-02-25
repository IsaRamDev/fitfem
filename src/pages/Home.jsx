function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Mi Perfil Fitness</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <section className="p-6 border rounded-2xl shadow-lg bg-white">
          <h2 className="text-2xl mb-4 font-semibold">Perfil</h2>
          <div className="flex items-center gap-6">
            <div className="w-28 h-28 bg-gray-200 rounded-full flex items-center justify-center text-4xl">
              📸
            </div>
            <div className="text-lg">
              <p><strong>Nombre:</strong> Usuario</p>
              <p><strong>Edad:</strong> 25 años</p>
              <p><strong>Peso:</strong> 70 kg</p>
              <p><strong>Altura:</strong> 1.70 m</p>
              <p><strong>Género:</strong> Femenino</p>
              <p><strong>Actividad:</strong> Moderada</p>
            </div>
          </div>
        </section>
        
        <section className="p-6 border rounded-2xl shadow-lg bg-white">
          <h2 className="text-2xl mb-4 font-semibold">Medidas Corporales</h2>
          <ul className="text-lg">
            <li><strong>Cintura:</strong> 70 cm</li>
            <li><strong>Pierna:</strong> 55 cm</li>
            <li><strong>Brazo:</strong> 35 cm</li>
            <li><strong>Pecho:</strong> 90 cm</li>
            <li><strong>Cadera:</strong> 95 cm</li>
          </ul>
          <button className="mt-6 bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition">
            + Agregar Medida
          </button>
        </section>
      </div>
    </div>
  );
}

export default Home;
