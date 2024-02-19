 import React from 'react';
import buildingImage from '../assets/building.jpg'; 
import { Link } from 'react-router-dom';

function Sections() {
  return (
    <div className="font-sans">
      <section className="section1 w-1/2 h-screen float-left">
        <div className="blue-background relative h-full overflow-hidden">
          <img src={buildingImage} alt="Building Background" className="w-full" />
          <div className="blue-overlay absolute top-0 left-0 w-full h-full bg-blue-500 opacity-90"></div>
          <div className="random-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <p className="oasis text-4xl font-bold mb-10 text-left">Oasis.</p>
            <p className="text text-left leading-8">The passage experienced a surge in popularity during the 1960s when Letraset used it on
              their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with
              their software.</p>
            <p className="text-18 text-left mt-7">Vincent Obi ✅</p>
          </div>
        </div>
      </section>

      <section className="section2 w-1/2 h-screen float-left">
        <div className="container flex flex-col justify-center items-center p-10 relative">
         <Link to="/page3" className="back-option absolute top-5 left-5 text-gray-300 font-bold hover:underline"> Back</Link>
          <div className="already-text absolute top-5 right-5">
            <p className="already text-gray-300">STEP 03/03</p>
            <p className="already text-gray-400"><b>Bank verification</b></p>
          </div>
          <br /> <br /> <br />
          <div className="join-text text-text mt-20">
            <h2 className="font-bold text-2xl mb-4">Complete your profile!</h2>
            <p className="journey text-gray-400">For the purpose of industry regulation, your details are required.</p> <br />
            <p className="journey mb-3">Bank verification number (BVN)</p>
            <input className="text border border-blue-500 rounded px-3 py-2 mb-4 w-2/3" name="" id="blue" placeholder="090912345567                                  ✅" /> <br /> <br /> <br />
            <button className="btn bg-blue-500 text-white font-bold py-2 px-4 rounded mb-4 w-2/3">Save & Continue</button>
            <p className="align text-sm text-gray-400 mr-8 ml-14">Your Info is safely secured</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sections;