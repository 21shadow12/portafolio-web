const Projects = () => {
  // 1. EL ARREGLO DE DATOS (Tu información)
  const misProyectos = [
    {
      id: 1,
      titulo: "App de gestion de hoteles Checkeasy",
      descripcion: "[Fue un proyecto universitario de segundo semestre para la clase de POO donde hicimos una app de gestion de hoteles la cual hace consultas, checkin, checkout y reservas e implementamos de base de datos mysql yo me encargué principalmente de las consultas y las reservas]",
      tecnologias: ["Java", "Mysql", "JavaFX"]
    },
    {
      id: 2,
      titulo: "App de reconocimiento de objetos con IA para Stardew valley",
      descripcion: "[Fue un proyecto de cuarto semestre para la asignatura estructura de datos en el cual decidimos implementar IA para reconocer objetos en Stardew Valley y algunas estructuras de datos ]",
      tecnologias: ["java", "python", "tensorflow"]
    },
    {
      id: 3,
      titulo: "app de delivery",
      descripcion: "[Proyecto de negocio para implementar una App al estilo rappi, didi y uber eats en municipios o pueblos donde esta no funcione]",
      tecnologias: ["React", "Tailwind", "Node.js"]
    }
  ];

  // 2. EL COMPONENTE (La interfaz)
  return (
    <section id="proyectos" className="w-full max-w-6xl mx-auto mt-20 px-6 pb-20">      
      {/* Título de la sección */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
        Mis <span className="text-purple-500">Proyectos</span>
      </h2>

      {/* 3. EL GRID (La cuadrícula responsiva) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* 4. EL BUCLE MAP (Renderizando las tarjetas) */}
        {misProyectos.map((proyecto) => (
          
          <div 
            key={proyecto.id} 
            className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20"
          >
            {/* Título inyectado desde el arreglo */}
            <h3 className="text-xl font-bold text-slate-100 mb-3">
              {proyecto.titulo}
            </h3>
            
            {/* Descripción inyectada desde el arreglo */}
            <p className="text-slate-400 mb-6 text-sm leading-relaxed">
              {proyecto.descripcion}
            </p>

            {/* Bucle anidado para las "píldoras" de tecnologías */}
            <div className="flex flex-wrap gap-2">
              {proyecto.tecnologias.map((tech, index) => (
                <span 
                  key={index} 
                  className="bg-purple-900/40 text-purple-300 text-xs font-semibold px-3 py-1 rounded-full border border-purple-700/50"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Botón de Enlace (Por ahora no lleva a ningún lado) */}
            <button className="mt-6 w-full bg-slate-700 hover:bg-slate-600 text-white font-medium py-2 rounded-lg transition-colors">
              Ver Proyecto
            </button>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Projects;