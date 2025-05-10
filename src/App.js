import React from 'react';
import BingoBoard from './components/BingoBoard';
import FooterRTE from './components/FooterRTE';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 flex flex-col">
      <div className="flex-grow">
        <BingoBoard />
      </div>
      <FooterRTE />
    </div>
  );
};

export default App;

// DONE
