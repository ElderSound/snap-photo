import React, { useState } from 'react';
export default function SearchBar({ onSearch }) {
    const [input, setInput] = useState('');
    const handleSubmit = e => { e.preventDefault(); onSearch(input.trim()); }; //manejador de envío del formulario del buscador, evitamos esa recarga,elimina espacios al inicio y al final,Se llama a la función de búsqueda con el término limpio.
    return (
        <form onSubmit={handleSubmit} className="flex  justify-center mb-10 max-w-[600px] mx-auto">
            <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                className="border border-gray-300 p-2 rounded-l flex-1"
                placeholder="Buscar..."
            />
            <button type="submit" className="bg-[#051c33] text-white px-4 rounded-r">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

            </button>
        </form>
    );
}