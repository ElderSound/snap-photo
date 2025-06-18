import React, { useState, useEffect } from 'react';                
import SearchBar from './components/SearchBar';                    
import CategoryButtons from './components/CategoryButtons';        
import PhotoGrid from './components/PhotoGrid';                     
import PhotoModal from './components/PhotoModal';    

const API_KEY = "LnmmCa4XXK7e0lCobiw4YmsLzsWM14usOETKZdvNrHO1M8l1rtSvaiQB"; 

export default function App() {
  const [query, setQuery]           = useState('mountain');         // término de búsqueda
  const [photos, setPhotos]         = useState([]);                 // array de fotos recibidas
  const [modalPhoto, setModalPhoto] = useState(null);               // foto seleccionada en modal
  const [loading, setLoading]       = useState(false);              // estado de carga
  const [error, setError]           = useState(null);               // estado de error

 
  const categories = ['Mountain', 'Beaches', 'Birds', 'Food'];     // lista de categorías,Pexels sólo ofrece /v1/search?query=… (y endpoints como “curated” o “collections”), pero no un /v1/categories que te devuelva “mountain”, “beaches”, “birds” y “food” de forma dinámica.

  useEffect(() => {                                              
    setLoading(true);
    setError(null);
    (async () => {
      try {
        const res = await fetch(
          `https://api.pexels.com/v1/search?query=${query}&per_page=16`,
          { headers: { Authorization: API_KEY } }
        );
        if (!res.ok) throw new Error(`Status ${res.status}`);
        const data = await res.json();
        setPhotos(data.photos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [query]);

  return (
    <div className="min-h-screen bg-white mt-20">                       
      <div className="max-w-5xl mx-auto p-4 text-center">           
        {/* logo*/}
        {/* <h1 className="text-5xl font-bold text-[#0f1624]  mb-6">SnapShot</h1>   */}
        <img src="/logo.png" alt="snapshot logo" className='mx-auto mb-15' />

        
        <SearchBar onSearch={setQuery} />                              
        <CategoryButtons
          categories={categories}
          onSelect={term => setQuery(term.toLowerCase())}            
        />

        {/* Título dinámico  */}
        <h2 className="mt-6 text-4xl font-semibold text-[#051c33] mb-10">
          {query.charAt(0).toUpperCase() + query.slice(1)} Images    
        </h2>

        {/* Indicador de carga */}
        {loading && (
          <div className="flex justify-center my-4">
            <div className="w-8 h-8 border-4 border-gray-200 border-t-[#0f1624] rounded-full animate-spin"></div>
          </div>
        )}

        {/* Mensaje de error */}
        {error && (
          <p className="text-center my-4 text-red-500">Error al cargar: {error}</p>
        )}

        {/* si no esta cargando ni hay errores*/}
        {!loading && !error && (
          <PhotoGrid
            photos={photos}
            onCardClick={photo => setModalPhoto(photo)}               
          />
        )}

        {/* Modal de foto */}
        <PhotoModal photo={modalPhoto} onClose={() => setModalPhoto(null)} />
      </div>
    </div>
  );
}
