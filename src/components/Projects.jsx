import { proyectosData } from '../data/proyectos';

const Projects = ({ onVerTodos, onVerProyecto }) => {

  const proyectosDestacados = proyectosData.slice(0,3);

  return (
    <section id="proyectos" className="w-full max-w-6xl mx-auto pt-24 px-6 pb-20">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
        Mis <span className="text-purple-500">Proyectos</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* 3. Mapeamos nuestra nueva lista cortada */}
        {proyectosDestacados.map((proyecto) => (
          <div key={proyecto.id} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-100 mb-3">{proyecto.titulo}</h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">{proyecto.descripcion}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {proyecto.tecnologias.map((tech, index) => (
                <span key={index} className="bg-purple-900/40 text-purple-300 text-xs font-semibold px-3 py-1 rounded-full border border-purple-700/50">
                  {tech}
                </span>
              ))}
            </div>

            <button 
              onClick={() => onVerProyecto(proyecto)}
              className="mt-6 w-full bg-slate-700 hover:bg-purple-600 text-white font-medium py-2 rounded-lg transition-colors"
            >
              Ver Proyecto
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button 
          onClick={onVerTodos}
          className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-full font-bold transition-all"
        >
          Ver todos los proyectos →
        </button>
      </div>
    </section>
  );
};

export default Projects;