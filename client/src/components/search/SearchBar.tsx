import { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Handle search logic here
    console.log('Searching for:', searchTerm);
  };

  const handleFilters = () => {
    // Handle filters logic here
    console.log('Opening filters');
  };

  return (
    <div className="flex items-center w-full">
      <input
        type="text"
        className="w-full border border-gray-300 rounded-lg py-2 px-4 mr-2 focus:outline-none"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white rounded-lg py-2 px-4"
        onClick={handleSearch}
      >
        Search
      </button>
      <button
        className="bg-gray-500 text-white rounded-lg py-2 px-4 ml-2"
        onClick={handleFilters}
      >
        Filters
      </button>
    </div>
  );
};

export default SearchBar;
