import React, { useState } from 'react';

interface CounterProps {
  initialCount?: number; // Optional initial count
}

const Counter: React.FC<CounterProps> = (props) => {
  const [count, setCount] = useState<number>(props.initialCount || 0); // Type state as number

  const increment = () => {
    setCount(count + 1);
  };

  return (
<div className="w-screen h-screen bg-[#E7EBDE] text-[#453a44] flex items-center justify-center">
  <div className="w-[70%] h-[85%] bg-[#fffff0] border border-gray-300 rounded-lg shadow-md hover:shadow-xs transition p-8">
    <h1 className="mt-5  text-4xl text-[#786577] text-center ">Daily Report</h1>
    <div className="mt-5 font-bold border-b-4 border-[#786577]"/>
    <div className="grid grid-cols-2 gap-4">
      <p className="mt-10 ml-10 text-[#786577] text-left ">Total Daily Insulin:</p>
      <p className="mt-10  text-[#786577] text-left">Total Daily Carbs:</p>
      <p className="mt-5 ml-10 text-[#786577] text-left">Highest BG:</p>
      <p className="mt-5  text-[#786577] text-left"># of carb boluses:</p>
      <p className="mt-5 ml-10 text-[#786577] text-left">Lowest BG:</p>
      <p className="mt-5  text-[#786577] text-left">Percent of day with basal increased:</p>
    </div>
    </div>
  </div>

  );
};

export default Counter;
