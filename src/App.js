import React from 'react';
import BingoBoard from './components/BingoBoard';
import FooterRTE from './components/FooterRTE';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-4 sm:py-6 flex flex-col">
      <div className="flex-grow flex items-center justify-center">
        <BingoBoard />
      </div>
      <FooterRTE />
    </div>
  );
};

export default App;

// DONE
