import React from 'react';

const PhotoCard = ({ photo, isFav, toggleFav, category }) => {
  return (
    // FINAL HOVER EXPERIENCE DESIGN
    <div className="group bg-white rounded-3xl overflow-hidden 
                    transition-all duration-500 ease-out relative 
                    border border-gray-100/50 
                    transform hover:-translate-y-3 hover:scale-[1.03]
                    shadow-sm hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] 
                    hover:border-blue-100 active:scale-100
                    cursor-pointer">
      
      {/* 1. Subtle Radial Highlight (Background light effect on hover) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

      {/* 2. Like Button */}
      <button 
        onClick={() => toggleFav(photo.id)}
        className={`absolute top-4 right-4 z-10 p-2.5 rounded-full backdrop-blur-sm transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-90 ${
          isFav 
            ? 'bg-red-50 text-red-500 shadow-lg' 
            : 'bg-white/60 text-gray-400 hover:bg-white hover:text-gray-600'
        }`}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill={isFav ? "currentColor" : "none"} 
          viewBox="0 0 24 24" 
          strokeWidth="1.5" 
          stroke="currentColor" 
          className="w-5 h-5 transition-colors duration-300"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      </button>

      {/* 3. Hover Image Interaction */}
      <div className="overflow-hidden h-60 relative">
        {/* <img 
          src={`https://picsum.photos/id/${photo.id}/500/400`} 
          alt={photo.author} 
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          loading="lazy"
        /> */}
        <img 
  src={`https://picsum.photos/500/400?random=${photo.id}`} 
  alt={photo.author} 
  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
  loading="lazy"
/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* 4. Text Area */}
      <div className="p-5 relative bg-white transition-colors duration-300 group-hover:bg-transparent">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[11px] bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
            {category === 'all' ? 'Photography' : category}
          </span>
          <span className="text-gray-400 text-xs font-mono">ID: #{photo.id}</span>
        </div>
        
        <p className="text-gray-500 text-xs font-medium mb-1">Captured By</p>
        <h3 className="text-xl font-bold text-gray-900 truncate leading-tight group-hover:text-blue-600 transition-colors">
          {photo.author}
        </h3>
      </div>
    </div>
  );
};

export default PhotoCard;