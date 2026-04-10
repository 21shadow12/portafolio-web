import { useState } from 'react';

const Contact = () => {
  // Estado para mostrarle al usuario qué está pasando con su mensaje
  const [estadoEnvio, setEstadoEnvio] = useState("");

  const enviarMensaje = async (event) => {
    event.preventDefault();
    setEstadoEnvio("Enviando mensaje...");

    const form = event.target;
    const formData = new FormData(form);

    try {
      // 🔥 REEMPLAZA ESTO CON TU CÓDIGO DE FORMSPREE 🔥
      const response = await fetch("https://formspree.io/f/xlgoqreg?", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setEstadoEnvio("¡Mensaje enviado con éxito! Te responderé muy pronto.");
        form.reset(); // Limpia el formulario
      } else {
        setEstadoEnvio("Hubo un error al enviar. Por favor, intenta de nuevo.");
      }
    } catch (error) {
      setEstadoEnvio("Error de red. Revisa tu conexión a internet.");
    }
  };

  return (
    <section id="contacto" className="w-full max-w-6xl mx-auto pt-24 px-6 pb-20">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
        Ponte en <span className="text-purple-500">Contacto</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 md:p-12">
        
        {/* Lado Izquierdo: Tu información */}
        <div className="flex flex-col justify-center space-y-6">
          <h3 className="text-2xl font-bold text-slate-100">¿Tienes un proyecto en mente?</h3>
          <p className="text-slate-400 leading-relaxed">
            Actualmente estoy disponible para trabajo freelance. Si necesitas una aplicación web, móvil o una solución de software a medida, escríbeme y lo hacemos realidad.
          </p>
          <div className="space-y-4 mt-4">
            <div className="flex items-center text-slate-300">
              <span className="text-purple-500 text-xl mr-4">📍</span>
              Bogotá, Colombia
            </div>
            <div className="flex items-center text-slate-300">
              <span className="text-purple-500 text-xl mr-4">✉️</span>
              {/* Pon tu correo real aquí para que lo vean directamente */}
              juandilassomo@gmail.com
            </div>
          </div>
        </div>

        {/* Lado Derecho: Formulario conectado a Formspree */}
        <form onSubmit={enviarMensaje} className="flex flex-col space-y-5">
          
          <input 
            type="text" 
            name="name" 
            required 
            placeholder="Tu Nombre" 
            className="w-full bg-slate-900/50 text-white border border-slate-700 rounded-lg py-3 px-4 focus:outline-none focus:border-purple-500" 
          />
          
          <input 
            type="email" 
            name="email" 
            required 
            placeholder="tu@email.com" 
            className="w-full bg-slate-900/50 text-white border border-slate-700 rounded-lg py-3 px-4 focus:outline-none focus:border-purple-500" 
          />
          
          <textarea 
            name="message" 
            required 
            placeholder="Cuéntame sobre tu proyecto..." 
            className="w-full bg-slate-900/50 text-white border border-slate-700 rounded-lg py-3 px-4 focus:outline-none focus:border-purple-500 h-32 resize-none"
          ></textarea>
          
          <button 
            type="submit" 
            className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-purple-500/30 w-full"
          >
            Enviar Mensaje
          </button>

          {/* Mensaje de éxito o error */}
          {estadoEnvio && (
            <p className={`text-center font-medium mt-2 ${estadoEnvio.includes('éxito') ? 'text-green-400' : 'text-purple-400'}`}>
              {estadoEnvio}
            </p>
          )}

        </form>
      </div>
    </section>
  );
};

export default Contact;