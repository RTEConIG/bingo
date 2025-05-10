import React from 'react';

const BingoBall = ({ number, isCalled }) => {
  return (
    <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm md:text-base shadow-lg transition-all duration-300 ${isCalled ? 'bg-red-500 scale-110' : 'bg-blue-500'}`}>
      {number}
    </div>
  );
};

export default BingoBall;
