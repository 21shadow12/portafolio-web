import { proyectosData } from '../data/proyectos';

const AllProjects = ({ onVolver, onVerProyecto }) => {
  return (
    <div className="min-h-screen bg-slate-950 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        
        <button 
          onClick={onVolver}
          className="mb-8 flex items-center text-slate-400 hover:text-purple-400 transition-colors font-semibold"
        >
          <span className="mr-2">←</span> Volver al inicio
        </button>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">
          Todos Mis <span className="text-purple-500">Proyectos</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 2. Mapeamos la lista COMPLETA */}
          {proyectosData.map((proyecto) => (
            <div key={proyecto.id} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:-translate-y-2 transition-transform flex flex-col justify-between">
              
              <div>
                <h3 className="text-xl font-bold text-slate-100 mb-3">{proyecto.titulo}</h3>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">{proyecto.descripcion}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {proyecto.tecnologias.map((tech, index) => (
                    <span key={index} className="bg-purple-900/40 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-700/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => onVerProyecto(proyecto)}
                className="w-full bg-slate-700 hover:bg-purple-600 text-white font-medium py-2 rounded-lg transition-colors mt-auto"
              >
                Ver Proyecto
              </button>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;