const Skills = () => {
  // 1. EL ARREGLO DE DATOS (Categorizado)
  const categoriasHabilidades = [
    {
      titulo: "Lenguajes & Backend",
      icono: "⚙️",
      habilidades: ["Java", "Python", "SQL / PostgreSQL / MySQL / SQLlite", "Node.js"]
    },
    {
      titulo: "Frontend & UI",
      icono: "🎨",
      habilidades: ["React", "JavaScript", "Tailwind CSS", "HTML/CSS"]
    },
    {
      titulo: "Herramientas & Otros",
      icono: "🚀",
      habilidades: ["Git & GitHub", "Desarrollo Móvil", "PyQt", "Vite"]
    }
  ];

  // 2. LA INTERFAZ
  return (
    // Importante: le ponemos el id="habilidades" para el scroll suave
    <section id="habilidades" className="w-full max-w-6xl mx-auto mt-10 px-6 pb-20">
      
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
        Mis <span className="text-purple-500">Habilidades</span>
      </h2>

      {/* Grid para las 3 categorías */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {categoriasHabilidades.map((categoria, index) => (
          <div 
            key={index} 
            className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-colors"
          >
            <div className="text-4xl mb-4">{categoria.icono}</div>
            <h3 className="text-xl font-bold text-slate-100 mb-6">
              {categoria.titulo}
            </h3>
            
            {/* Lista de habilidades dentro de la categoría */}
            <ul className="space-y-3">
              {categoria.habilidades.map((hab, i) => (
                <li key={i} className="flex items-center text-slate-300">
                  <span className="text-purple-500 mr-2">▹</span>
                  {hab}
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Skills;