import React, { useState } from "react";

interface DashboardProps {
  username: string;
}

const Dashboard: React.FC<DashboardProps> = ({ username }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-6 flex justify-between items-center shadow-lg">
        <div className="flex items-center">
          <button onClick={toggleSidebar} className="p-3 hover:bg-blue-700 rounded-full transition-all duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="ml-4 text-2xl font-bold tracking-tight">Mi Aplicación</h1>
        </div>
        <div className="flex items-center">
          <span className="mr-4 font-semibold">Bienvenido, {username}</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className={`bg-gradient-to-r from-gray-800 to-gray-900 text-white w-64 transition-all duration-300 transform fixed 
            h-full ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <nav className="p-6">
            <ul className="space-y-4">
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-700 transition-all duration-200">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-700 transition-all duration-200">
                  Perfil
                </a>
              </li>
              <li>
                <a href="#" className="block p-3 rounded-lg hover:bg-gray-700 transition-all duration-200">
                  Configuración
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className={`flex-1 p-8 bg-gray-100 overflow-y-auto transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contenido Principal</h2>
          <p className="text-gray-700">Aquí irá el contenido de tu aplicación.</p>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
