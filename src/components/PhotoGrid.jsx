import React from 'react';        
import PhotoCard from './PhotoCard';           

export default function PhotoGrid({ photos, onCardClick }) { 
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {photos.map(photo => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          onClick={onCardClick}                      
        />
      ))}
    </div>
  );
}