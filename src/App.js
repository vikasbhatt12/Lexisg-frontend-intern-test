
import React, { useState } from 'react';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');
  const [citation, setCitation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleQuerySubmit = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setAnswer(
        "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh , the Court held that 10% of the deceased’s annual income should be added as future prospects."
      );
      setCitation(
        "“as the age of the deceased at the time of accident was held to be about 54-55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.” (Para 7 of the document)"
      );
      setLoading(false);
    }, 1500);
  };

  const handleCitationClick = () => {
    // Simulate opening PDF in new tab
    window.open('https://indiankanoon.org/doc/183041906/', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
        <h1 className="text-2xl font-bold mb-4 text-center">Lexi Legal Assistant</h1>

        {/* Input Panel */}
        <div className="mb-6">
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Ask a legal question..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          ></textarea>
          <button
            className={`mt-3 w-full bg-blue-600 text-white p-3 rounded-lg font-semibold ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
            onClick={handleQuerySubmit}
            disabled={loading}
          >
            {loading ? 'Generating Answer...' : 'Submit Query'}
          </button>
        </div>

        {/* Answer Panel */}
        {answer && (
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <h2 className="text-lg font-semibold mb-2">Answer:</h2>
            <p className="text-gray-800">{answer}</p>
          </div>
        )}

        {/* Citation */}
        {citation && (
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h2 className="text-lg font-semibold mb-2">Citation:</h2>
            <p className="text-gray-700">
              <span
                className="text-blue-600 cursor-pointer hover:underline"
                onClick={handleCitationClick}
              >
                {citation}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
