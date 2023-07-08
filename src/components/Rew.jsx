import React from "react";

const Rew = () => {
  return (
    <div className="bg-blue-950 p-3 shadow-lg">
      <div className="flex flex-col items-center sm:flex-row sm:justify-between">
        <div className="flex items-center mb-4 sm:mb-0">
          <div className="ml-4">
            <p className="text-white">Your Screws: 500</p>
          </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Claim Reward
        </button>
      </div>
    </div>
  );
};

export default Rew;
