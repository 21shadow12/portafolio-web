const Contact = () => {
  return (
    // El id="contacto" es crucial para que el botón de la barra de navegación funcione
    <section id="contacto" className="w-full max-w-6xl mx-auto mt-10 px-6 pb-20">
      
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
        Ponte en <span className="text-purple-500">Contacto</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 md:p-12">
        
        {/* Lado Izquierdo: Información Directa */}
        <div className="flex flex-col justify-center space-y-6">
          <h3 className="text-2xl font-bold text-slate-100">¿Tienes un proyecto en mente?</h3>
          <p className="text-slate-400 leading-relaxed">
            Actualmente estoy disponible para trabajo freelance y nuevas oportunidades. 
            Si necesitas una aplicación web, móvil o una solución de software a medida, escríbeme y lo hacemos realidad.
          </p>
          
          <div className="space-y-4 mt-4">
            <div className="flex items-center text-slate-300">
              <span className="text-purple-500 text-xl mr-4">📍</span>
              Bogotá, Colombia
            </div>
            <div className="flex items-center text-slate-300">
              <span className="text-purple-500 text-xl mr-4">✉️</span>
              juandilassomo@gmail.com
            </div>
          </div>
        </div>

        {/* Lado Derecho: Formulario */}
        <form className="flex flex-col space-y-5">
          <div>
            <label className="block text-slate-400 text-sm font-bold mb-2" htmlFor="nombre">
              Nombre
            </label>
            <input 
              className="w-full bg-slate-900/50 text-white border border-slate-700 rounded-lg py-3 px-4 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all" 
              id="nombre" 
              type="text" 
              placeholder="¿Cómo te llamas?" 
            />
          </div>
          
          <div>
            <label className="block text-slate-400 text-sm font-bold mb-2" htmlFor="email">
              Correo Electrónico
            </label>
            <input 
              className="w-full bg-slate-900/50 text-white border border-slate-700 rounded-lg py-3 px-4 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all" 
              id="email" 
              type="email" 
              placeholder="tu@email.com" 
            />
          </div>
          
          <div>
            <label className="block text-slate-400 text-sm font-bold mb-2" htmlFor="mensaje">
              Mensaje
            </label>
            <textarea 
              className="w-full bg-slate-900/50 text-white border border-slate-700 rounded-lg py-3 px-4 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all h-32 resize-none" 
              id="mensaje" 
              placeholder="Cuéntame sobre tu proyecto..."
            ></textarea>
          </div>
          
          {/* Nota: Por ahora es un botón visual. Luego podemos conectarlo a un servicio como Formspree para que los correos te lleguen de verdad */}
          <button 
            type="button"
            className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-purple-500/30 w-full mt-2"
          >
            Enviar Mensaje
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;