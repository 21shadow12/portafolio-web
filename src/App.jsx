import { useState } from 'react'; 
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import AllProjects from './components/AllProjects'; 
import ProjectDetail from './components/ProjectDetail'; // IMPORTAMOS EL NUEVO COMPONENTE

function App() {
  const [viendoTodos, setViendoTodos] = useState(false);
  const [proyectoActivo, setProyectoActivo] = useState(null); // NUEVO ESTADO

  // Pantalla 3: Detalle de un proyecto individual
  if (proyectoActivo) {
    return (
      <ProjectDetail 
        proyecto={proyectoActivo} 
        onVolver={() => {
          setProyectoActivo(null);
          window.scrollTo(0, 0);
        }} 
      />
    );
  }

  // Pantalla 2: Galería de todos los proyectos
  // Pantalla 2: Galería de todos los proyectos
  if (viendoTodos) {
    return (
      <AllProjects 
        onVolver={() => {
          setViendoTodos(false);
          window.scrollTo(0, 0);
        }}
        // ¡NUEVO!: Le pasamos la instrucción de abrir el proyecto
        onVerProyecto={(proyecto) => {
          setProyectoActivo(proyecto);
          window.scrollTo(0, 0);
        }} 
      />
    );
  }

  // Pantalla 1: Tu Portafolio Principal
  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <Navbar />

      <main className="flex flex-col items-center justify-center px-6 pt-32 pb-20">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white text-center mb-6 tracking-tight">
          Hola, soy <br/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
            Juan Diego Lasso
          </span>
        </h1>
        
        <p className="text-xl text-slate-400 text-center max-w-2xl mb-10 leading-relaxed">
          Ingeniero de Sistemas y Desarrollador de Software. Transformo problemas complejos en soluciones web y móviles eficientes, escalables y limpias.
        </p>

        <div className="flex space-x-4">
          <button 
            onClick={() => document.getElementById('proyectos').scrollIntoView({ behavior: 'smooth' })}
            className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-purple-500/30"
          >
            Ver Proyectos
          </button>
          
          <a 
            href="/Juan_Diego_Lasso_CV.pdf" 
            download="Juan_Diego_CV.pdf"
            className="flex items-center justify-center border border-slate-600 hover:border-slate-400 text-slate-300 px-8 py-3 rounded-full font-bold text-lg transition-colors cursor-pointer"
          >
            Descargar CV
          </a>
        </div>
      </main>

      {/* Le pasamos la nueva función al componente Projects */}
      <Projects 
        onVerTodos={() => {
          setViendoTodos(true);
          window.scrollTo(0, 0);
        }} 
        onVerProyecto={(proyecto) => {
          setProyectoActivo(proyecto);
          window.scrollTo(0, 0);
        }}
      />
      
      <Skills />
      <Contact />
    </div>
  );
}

export default App;