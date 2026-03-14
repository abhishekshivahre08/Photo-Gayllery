import React from 'react';

const Header = ({ search, setSearch, category, setCategory, categories }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm mb-10 space-y-4">
      <input
        type="text"
        placeholder="Search by author name..."
        className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-blue-400 outline-none transition-all shadow-inner"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-6 py-2 rounded-full font-semibold capitalize transition-all ${
              category === cat ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;