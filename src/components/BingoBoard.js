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

  const resetGame = () => {
    setCalledNumbers([]);
    setLastCalled(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-2 sm:p-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 sm:mb-4 gap-1 sm:gap-2">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 text-center sm:text-left">Bingo Reactivo para Escuelas</h1>
        <div className="flex gap-1 sm:gap-2 justify-center">
          <button 
            onClick={callNumber}
            className="px-3 py-1 sm:px-4 sm:py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-md text-xs sm:text-sm"
          >
            Sacar Número
          </button>
          <button 
            onClick={resetGame}
            className="px-3 py-1 sm:px-4 sm:py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-md text-xs sm:text-sm"
          >
            Reiniciar
          </button>
        </div>
      </div>

      {lastCalled !== null && (
        <div className="mb-2 sm:mb-4 text-center">
          <h2 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Último número:</h2>
          <div className="flex justify-center">
            <BingoBall number={lastCalled} isCalled={true} />
          </div>
        </div>
      )}

      <div className="grid grid-cols-5 xs:grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-1 sm:gap-2">
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
