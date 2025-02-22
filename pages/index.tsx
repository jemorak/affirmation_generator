import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [affirmation, setAffirmation] = useState('Click "Generate" to see an affirmation');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleClick(): Promise<void> {
    setLoading(true);
    setError('');
    setAffirmation('');

    try {
      // Add a unique timestamp to bypass caching
      const url = `https://api.allorigins.win/get?url=${encodeURIComponent('https://www.affirmations.dev/')}?t=${new Date().getTime()}`;
      
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch affirmation');

      const data = await response.json();
      const parsedData = JSON.parse(data.contents);
      setAffirmation(parsedData.affirmation);
      console.log('Button clicked. Affirmation:', parsedData.affirmation);
    } catch (err) {
      setError('Failed to fetch. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-display">
      <main className="border-4 border-blue-950 rounded-3xl p-10 m-6 bg-white flex flex-col items-center justify-center">
        <h1 className="font-bold text-xl">Affirmations Generator</h1>
       
        <div className="font-semibold border-4 border-black rounded-md p-10 m-5  text-center bg-emerald-50">
          
          {loading ? <p>Loading...</p> : <p>"{affirmation}"</p>}
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <button 
          className="font-semibold border-2 border-black rounded-md p-5 m-5 bg-blue-300 hover:bg-blue-500 hover:text-white"
          onClick={handleClick}
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate'}
        </button>
      </main>
    </div>
  );
}
