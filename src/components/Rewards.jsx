import React from 'react';
import ha from "../constants/hannah.png"
import { Tilt } from 'react-tilt'

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const Rewards = () => {
  return (
    <div className="flex flex-row  items-center justify-center bg-black p-20 h-auto ">
      <Tilt options={defaultOptions} >
  
      <div className='flex md:flex-row flex-col  items-center justify-between  bg-red-700 p-20 h-fit  m-2 rounded-2xl shadow-red-500 shadow-xl  border-black outline' > 
       <div><img
        src={ha}
        alt="Person"
        className="rounded-full h-32 w-32 mb-4 border-black outline-double"
        /></div>
      <div className="p-8">
        <h2 className="text-lg font-bold mb-2">Hannah Baker</h2>
        <p className="text-black mb-1">Age: 17</p>
        <p className="text-black mb-1">Menstrual cycle: 5-6 days</p>
        <p className="text-black mb-1">Ovulation Period: 14 days</p>
        <p className="text-black">Bleeding: Usually Heavy</p>
      </div></div>
    
        </Tilt>
    </div>
  );
};

export default Rewards;
