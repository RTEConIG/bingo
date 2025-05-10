import React from 'react';

const BingoBall = ({ number, isCalled }) => {
  return (
    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg transition-all duration-300 ${isCalled ? 'bg-red-500 scale-110' : 'bg-blue-500'}`}>
      {number}
    </div>
  );
};

export default BingoBall;