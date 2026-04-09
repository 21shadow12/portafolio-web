import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      {/* Aquí importamos tu nueva barra de navegación */}
      <Navbar />

      {/* Sección Principal (Hero Section) */}
      <main className="flex flex-col items-center justify-center px-6 mt-24">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white text-center mb-6 tracking-tight">
          Hola, soy <br/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Juan Diego Lasso
          </span>
        </h1>
        
        <p className="text-xl text-slate-400 text-center max-w-2xl mb-10 leading-relaxed">
          Ingeniero de Sistemas y Desarrollador de Software. Transformo problemas complejos en soluciones web y móviles eficientes, escalables y limpias.
        </p>

        <div className="flex space-x-4">
          <button 
          onClick={() => document.getElementById('proyectos').scrollIntoView({behavior: 'smooth'})}
          className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-purple-500/30">
            Ver Proyectos 
          </button>
          <div className="flex space-x-4">
        <a 
          href="/JUAN DIEGO LASSO RESUME ESPAÑOL G.pdf" 
          download="JUAN DIEGO LASSO RESUME ESPAÑOL G.pdf"
          className="flex items-center justify-center border border-slate-600 hover:border-slate-400 text-slate-300 px-8 py-3 rounded-full font-bold text-lg transition-colors cursor-pointer"
        >
          Descargar CV
        </a>
</div>
        </div>
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;