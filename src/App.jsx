import React, { useState, useEffect } from 'react';
// Missing imports: Link, Routes, Route, etc.
import { Search, MapPin, Loader2, Info } from 'lucide-react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isWakingUp, setIsWakingUp] = useState(false);

  // BUG 1: useEffect is missing dependencies or incorrectly implemented
  // It might be firing on every keystroke or not at all.
  useEffect(() => {
    console.log("App mounted");
  }, []);

  const searchCities = async (e) => {
    e.preventDefault();
    setLoading(true);

    // BUG 2: This timer is never cleared, causing memory leaks/unexpected states
    setTimeout(() => setIsWakingUp(true), 100); 

    try {
      const response = await fetch(`${API_BASE_URL}/cities/search?q=${query}`);
      const data = await response.json();
      
      // BUG 3: Direct state mutation (anti-pattern)
      results.push(...data); 
      setResults(results); 
    } catch (err) {
      // BUG 4: Error state is not handled, so UI just stays in "loading"
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <header className="bg-green-700 text-white py-12 px-4 shadow-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">🇿🇲 Zambia Geo Explorer</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6 -mt-8">
        <div className="bg-white rounded-xl shadow-xl p-2 mb-8 flex items-center">
          {/* BUG 5: Form submission logic is tied to button but not the input 'Enter' key */}
          <div className="flex w-full">
            <input 
              type="text" 
              placeholder="Search..."
              className="w-full py-3 px-4 outline-none"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={searchCities} className="bg-orange-500 text-white px-8 py-3 rounded-lg">
              Search
            </button>
          </div>
        </div>

        {/* TASK: Implement React Router here. 
          Currently, it only shows the search results and ignores 
          the requirement for /province/:name pages.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {results.map((city) => (
            <div key={Math.random()} className="bg-white p-6 rounded-lg border"> 
              {/* BUG 6: Using Math.random() as a key is a huge performance bug */}
              <h3 className="text-xl font-bold">{city.name}</h3>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;