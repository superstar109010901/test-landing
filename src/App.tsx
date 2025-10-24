import './App.css'
import { LandingPage } from './pages/Landing'
import CatalogDemo from './pages/CatalogDemo'
import NavBarDemo from './pages/NavBarDemo'
import HeaderDemo from './pages/HeaderDemo'
import HeadCatalogDemo from './pages/HeadCatalogDemo'
import { useState } from 'react'
import Dashboard from './pages/Dashboard'

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'catalog' | 'navbar' | 'header' | 'headcatalog' | 'dashboard'>('dashboard')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <nav className="p-4">
        <div className="flex gap-4 justify-center">
          <button 
            onClick={() => setCurrentPage('landing')}
            className={`px-4 py-2 rounded ${currentPage === 'landing' ? 'bg-green-600 text-white' : 'bg-gray-600 text-gray-300'}`}
          >
            Landing Page
          </button>
          <button 
            onClick={() => setCurrentPage('catalog')}
            className={`px-4 py-2 rounded ${currentPage === 'catalog' ? 'bg-green-600 text-white' : 'bg-gray-600 text-gray-300'}`}
          >
            Catalog Demo
          </button>
          <button 
            onClick={() => setCurrentPage('navbar')}
            className={`px-4 py-2 rounded ${currentPage === 'navbar' ? 'bg-green-600 text-white' : 'bg-gray-600 text-gray-300'}`}
          >
            NavBar Demo
          </button>
          <button 
            onClick={() => setCurrentPage('header')}
            className={`px-4 py-2 rounded ${currentPage === 'header' ? 'bg-green-600 text-white' : 'bg-gray-600 text-gray-300'}`}
          >
            Header Demo
          </button>
          <button 
            onClick={() => setCurrentPage('headcatalog')}
            className={`px-4 py-2 rounded ${currentPage === 'headcatalog' ? 'bg-green-600 text-white' : 'bg-gray-600 text-gray-300'}`}
          >
            Head Catalog Demo
          </button>
        </div>
      </nav>
      
      {currentPage === 'dashboard' ? <Dashboard /> : currentPage === 'landing' ? <LandingPage /> : currentPage === 'catalog' ? <CatalogDemo /> : currentPage === 'navbar' ? <NavBarDemo /> : currentPage === 'header' ? <HeaderDemo /> : <HeadCatalogDemo />}
    </div>
  )
}

export default App
