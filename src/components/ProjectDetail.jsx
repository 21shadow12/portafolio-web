const ProjectDetail = ({ proyecto, onVolver }) => {
  return (
    <div className="min-h-screen bg-slate-950 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Botón para regresar */}
        <button 
          onClick={onVolver}
          className="mb-8 flex items-center text-slate-400 hover:text-purple-400 transition-colors font-semibold"
        >
          <span className="mr-2">←</span> Volver atrás
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* LADO IZQUIERDO: Título, Descripción y Tecnologías */}
          <div className="md:col-span-1 flex flex-col space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              {proyecto.titulo}
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              {proyecto.descripcion}
            </p>
            
            <div>
              <h4 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-3">Tecnologías usadas</h4>
              <div className="flex flex-wrap gap-2">
                {proyecto.tecnologias.map((tech, index) => (
                  <span key={index} className="bg-purple-900/40 text-purple-300 text-sm font-semibold px-3 py-1 rounded-full border border-purple-700/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* LADO DERECHO: Video y GitHub */}
          <div className="md:col-span-2 flex flex-col">
            {/* Contenedor del Video (Mantiene la proporción 16:9) */}
            <div className="aspect-video bg-slate-900 rounded-xl overflow-hidden border border-slate-700 shadow-2xl shadow-purple-500/10">
              <iframe 
                className="w-full h-full" 
                // Usamos un video de Youtube de prueba si el proyecto no tiene uno asignado
                src={proyecto.video || "https://www.youtube.com/embed/dQw4w9WgXcQ"} 
                title="Demostración del proyecto" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>

            {/* Enlace a GitHub */}
            <a 
              href={proyecto.github || "https://github.com/21shadow12"} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 rounded-lg transition-colors border border-slate-600"
            >
              <span className="mr-3 text-xl">💻</span> 
              Ver código fuente en GitHub
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;