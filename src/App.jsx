
// import React, { useState, useMemo, useReducer } from 'react';
// import Header from './Component/Header.jsx';
// import PhotoCard from './Component/PhotoCard.jsx';
// import { usePhotos } from './hooks/usePhotos.jsx';

// const favReducer = (state, action) => {
//   switch (action.type) {
//     case 'TOGGLE_FAV':
//       return state.includes(action.id) ? state.filter(id => id !== action.id) : [...state, action.id];
//     default: return state;
//   }
// };

// export default function App() {
//   const [search, setSearch] = useState('');
//   const [category, setCategory] = useState('all');
//   const [favourites, dispatch] = useReducer(favReducer, []);
  
//   const { photos, loading } = usePhotos(category);
//   const categories = ['all', 'nature', 'animals', 'architecture', 'tech'];

//   const filteredPhotos = useMemo(() => {
//     return photos.filter(p => p.author.toLowerCase().includes(search.toLowerCase().trim()));
//   }, [search, photos]);

//   return (
//     <div className="min-h-screen bg-gray-50 p-4 md:p-10 font-sans text-gray-900">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Branding */}
//         <div className="text-center mb-10">
//           <h1 className="text-5xl font-black text-blue-600 tracking-tighter uppercase italic">
//             Snap<span className="text-gray-900">Gallery</span>
//           </h1>
         
//         </div>

//         <Header 
//           search={search} setSearch={setSearch} 
//           category={category} setCategory={setCategory} 
//           categories={categories} 
//         />

//         {/* Search Feedback */}
//         {search && (
//           <div className="mb-8 p-4 bg-white rounded-2xl border-l-4 border-blue-500 shadow-sm flex justify-between items-center animate-in fade-in slide-in-from-left-4 duration-500">
//             <p className="text-gray-600">
//               Showing <span className="font-bold text-blue-600">{filteredPhotos.length}</span> results for 
//               <span className="ml-2 font-bold px-3 py-1 bg-blue-50 rounded-full text-blue-700">"{search}"</span>
//             </p>
//             <button onClick={() => setSearch('')} className="text-xs font-bold text-red-400 hover:text-red-600 uppercase tracking-widest">Clear</button>
//           </div>
//         )}

//         {/* Loading State */}
//         {loading ? (
//           <div className="flex flex-col h-64 items-center justify-center space-y-4">
//              <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
//              <p className="text-blue-600 font-bold animate-pulse">Fetching Photos...</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//             {filteredPhotos.map(photo => (
//               <PhotoCard 
//                 key={photo.id} 
//                 photo={photo} 
//                 category={category}
//                 isFav={favourites.includes(photo.id)}
//                 toggleFav={(id) => dispatch({ type: 'TOGGLE_FAV', id })}
//               />
//             ))}
//           </div>
//         )}

//         {/* No Results */}
//         {!loading && filteredPhotos.length === 0 && (
//           <div className="text-center py-32 bg-white rounded-3xl border-2 border-dashed border-gray-100">
//             <p className="text-3xl text-gray-300 font-black italic">No authors found matching your search</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



import React, { useState, useMemo, useReducer, useEffect } from 'react';
import Header from './Component/Header.jsx';
import PhotoCard from './Component/PhotoCard.jsx';
import { usePhotos } from './hooks/usePhotos.jsx';

// 1. Reducer for Favourites Logic
const favReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_FAV':
      const newState = state.includes(action.id) 
        ? state.filter(id => id !== action.id) 
        : [...state, action.id];
      return newState;
    case 'SET_INITIAL':
      return action.payload;
    default: 
      return state;
  }
};

export default function App() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  
  // 2. Favourites State with useReducer
  const [favourites, dispatch] = useReducer(favReducer, []);
  
  // Custom Hook for fetching photos
  const { photos, loading } = usePhotos(category);
  const categories = ['all', 'nature', 'animals', 'architecture', 'tech'];

  // 3. Persisting Favourites to LocalStorage (Mandatory Task)
  useEffect(() => {
    const saved = localStorage.getItem('snap_favs');
    if (saved) {
      dispatch({ type: 'SET_INITIAL', payload: JSON.parse(saved) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('snap_favs', JSON.stringify(favourites));
  }, [favourites]);

  // 4. Optimization: useMemo for filtering search results
  const filteredPhotos = useMemo(() => {
    return photos.filter(p => 
      p.author.toLowerCase().includes(search.toLowerCase().trim())
    );
  }, [search, photos]);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-10 font-sans text-gray-900">
      <div className="max-w-7xl mx-auto">
        
        {/* App Branding */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-black text-blue-600 tracking-tighter uppercase italic">
            Snap<span className="text-gray-900">Gallery</span>
          </h1>
          <p className="text-gray-400 font-medium mt-2 text-sm uppercase tracking-widest">
            React Assignment Project
          </p>
        </div>

        {/* Search and Category Filter Component */}
        <Header 
          search={search} setSearch={setSearch} 
          category={category} setCategory={setCategory} 
          categories={categories} 
        />

        {/* Search Feedback: Results Counter */}
        {search && (
          <div className="mb-8 p-4 bg-white rounded-2xl border-l-4 border-blue-500 shadow-sm flex justify-between items-center animate-pulse">
            <p className="text-gray-600">
              Found <span className="font-bold text-blue-600">{filteredPhotos.length}</span> results for 
              <span className="ml-2 font-bold px-3 py-1 bg-blue-50 rounded-full text-blue-700">"{search}"</span>
            </p>
            <button 
              onClick={() => setSearch('')} 
              className="text-xs font-bold text-red-400 hover:text-red-600 uppercase tracking-widest transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Loading and Gallery Logic */}
        {loading ? (
          <div className="flex flex-col h-64 items-center justify-center space-y-4">
             <div className="w-12 h-12 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin"></div>
             <p className="text-blue-600 font-bold tracking-widest uppercase text-xs">Fetching Gallery...</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredPhotos.map(photo => (
                <PhotoCard 
                  key={photo.id} 
                  photo={photo} 
                  category={category}
                  isFav={favourites.includes(photo.id)}
                  toggleFav={(id) => dispatch({ type: 'TOGGLE_FAV', id })}
                />
              ))}
            </div>

            {/* Empty State Logic */}
            {filteredPhotos.length === 0 && (
              <div className="text-center py-32 bg-white rounded-3xl border-2 border-dashed border-gray-100 shadow-inner">
                <p className="text-3xl text-gray-300 font-black italic">No authors found matching "{search}"</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}