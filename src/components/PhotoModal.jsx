import React, { useState } from 'react';                     

export default function PhotoModal({ photo, onClose }) {      
  const [imgLoading, setImgLoading] = useState(true);         

  if (!photo) return null;   // si no hay foto, no renderizamos nada

  return (
    //  cierra modal al hacer click en la zona oscura
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={onClose}                                        
    >
      
      <div
        className="bg-white p-4 rounded max-w-lg w-full relative"
        onClick={e => e.stopPropagation()}  // Evita cierre al clicar dentro de la imagen
      >
        {/* Botón de cerrar */}
        <button
          onClick={onClose}                                     
          className="absolute top-2 right-2 text-gray-600 z-20 cursor-pointer text-xl "
        >✕</button>

        {/* Contenedor de la imagen */}
        <div className="relative flex justify-center items-center mb-4 min-h-[200px]">  
          {imgLoading && (  // Mientras carga, mostrar spinner
            <div className="absolute z-10 w-16 h-16 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
          )}
          <img
            src={photo.src.original}   // URL de la imagen
            alt={photo.photographer}
            onLoad={() => setImgLoading(false)} // Desactiva spinner al cargar
            onError={() => setImgLoading(false)}  // desa ctiva el error
            className={`w-full h-auto rounded transition-opacity ${imgLoading ? 'opacity-0' : 'opacity-100'}`} // construye dinámicamente las clases de Tailwind para la etiqueta <img>, de modo que la imagen esté invisible mientras carga y luego se desvanezca al mostrarse./Opacidad según estado
          />
        </div>

        {/* creditos */}
        <p className="text-sm">
          Photo by{' '}
          <a
            href={photo.photographer_url} // Enlace al perfil del autor
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >{photo.photographer}</a>
        </p>
      </div>
    </div>
  );
}