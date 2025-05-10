import React, { useState } from 'react';
import BingoBall from './BingoBall';
import { BINGO_NUMBERS } from '../mock/numbers';

const BingoBoard = () => {
  const [calledNumbers, setCalledNumbers] = useState([]);
  const [lastCalled, setLastCalled] = useState(null);

  const callNumber = () => {
    const availableNumbers = BINGO_NUMBERS.filter(n => !calledNumbers.includes(n));
    if (availableNumbers.length === 0) return;

    const randomIndex = Math.floor(Math.random() * availableNumbers.length);
    const newNumber = availableNumbers[randomIndex];
    
    setCalledNumbers([...calledNumbers, newNumber]);
    setLastCalled(newNumber);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Bingo Reactivo</h1>
        <button 
          onClick={callNumber}
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-md"
        >
          Sacar Número
        </button>
      </div>

      {lastCalled && (
        <div className="mb-8 text-center">
          <h2 className="text-xl font-semibold mb-4">Último número:</h2>
          <div className="flex justify-center">
            <BingoBall number={lastCalled} isCalled={true} />
          </div>
        </div>
      )}

      <div className="grid grid-cols-10 gap-3">
        {BINGO_NUMBERS.map(number => (
          <BingoBall 
            key={number} 
            number={number} 
            isCalled={calledNumbers.includes(number)} 
          />
        ))}
      </div>
    </div>
  );
};

export default BingoBoard;