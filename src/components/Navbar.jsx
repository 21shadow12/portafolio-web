const Navbar = () => {
  return (
    <nav className="bg-slate-900 border-b border-slate-800 text-slate-300 py-4 px-8 flex justify-between items-center shadow-lg">
      {/* Logo o Nombre */}
      <div className="text-2xl font-extrabold text-white tracking-tight">
        Juan<span className="text-purple-500">.dev</span>
      </div>

      {/* Enlaces de Navegación */}
      <ul className="hidden md:flex space-x-8 font-medium">
        <li className="hover:text-purple-400 cursor-pointer transition-colors">Inicio</li>
        <li 
        onClick={() => document.getElementById('proyectos').scrollIntoView({behavior: 'smooth' })}
        className="hover:text-purple-400 cursor-pointer transition-colors">Proyectos</li>
        <li 
        onClick={()=> document.getElementById('habilidades').scrollIntoView({behavior: 'smooth'})}
        className="hover:text-purple-400 cursor-pointer transition-colors">Habilidades</li>
      </ul>

      {/* Botón de Llamado a la Acción */}
      <button 
      onClick={() => document.getElementById('contacto').scrollIntoView({behavior: 'smooth'})}
      className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg font-semibold transition-all transform hover:scale-105">
        Contactar
      </button>
    </nav>
  );
};

export default Navbar;