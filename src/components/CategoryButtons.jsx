import React from 'react';                                          
export default function CategoryButtons({ categories, onSelect }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center px-6 my-10 max-w-[600px] mx-auto">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}                              
          className="px-8 py-1 bg-[#051c33] text-white rounded hover:bg-[#13233f]"
        >{cat}</button>
      ))}
    </div>
  );
}