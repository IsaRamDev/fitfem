function Home() {
  return (
    <div className="p-4">
      <div className="grid gap-4 md:grid-cols-2">
        <section className="p-4 border rounded shadow">
          <h2 className="text-xl mb-4">Perfil</h2>
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
              📸
            </div>
            <div>
              <p><strong>Nombre:</strong> Usuario</p>
              <p><strong>Edad:</strong> 25 años</p>
              <p><strong>Peso:</strong> 70 kg</p>
              <p><strong>Altura:</strong> 1.70 m</p>
              <p><strong>Género:</strong> Femenino</p>
              <p><strong>Actividad:</strong> Moderada</p>
            </div>
          </div>
        </section>
        
        <section className="p-4 border rounded shadow">
          <h2 className="text-xl mb-4">Medidas Corporales</h2>
          <ul>
            <li>Cintura: 70 cm</li>
            <li>Pierna: 55 cm</li>
            <li>Brazo: 35 cm</li>
            <li>Pecho: 90 cm</li>
            <li>Cadera: 95 cm</li>
          </ul>
          <button className="mt-4 bg-green-500 text-white p-2 rounded hover:bg-green-600">
            + Agregar Medida
          </button>
        </section>
      </div>
    </div>
  );
}

export default Home;
