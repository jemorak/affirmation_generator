import { useState } from "react";

export default function Home() {
  const [affirmation, setAffirmation] = useState('');
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
      <main className="flex flex-col items-center justify-center">
        <h1>Affirmations Generator</h1>
        <h2>Click 'Generate' to generate an affirmation</h2>
        <div className="border-4 border-black rounded-md p-10 m-5  text-center bg-emerald-50">
          
          {loading ? <p>Loading...</p> : <p>{affirmation}</p>}
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <button 
          className="border-2 border-black rounded-md p-5 m-5 bg-green-300 hover:bg-green-500"
          onClick={handleClick}
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate'}
        </button>
      </main>
    </div>
  );
}
