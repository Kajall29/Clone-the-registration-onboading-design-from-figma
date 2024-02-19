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


      <section className="section2 w-1/2 h-screen float-left overflow-hidden">
        <div className="container p-10 h-full flex flex-col justify-center relative">
         <Link to="/page1" className="back-option absolute top-5 left-5 text-gray-400 font-bold hover:underline">Back </Link>
          <div className="already-text absolute top-5 right-5">
            <p className="already">SEPT 01/03</p>
            <p className="already"><b>Personal Info.</b></p>
          </div>
          <div className="join-text"> <br />
            <h2 className="font-bold text-2xl mb-">Register Individual Account!</h2>
            <p className="journey mb-6 text-gray-400">For the purpose of industry regulation, your details are required.</p>
            <p className="journey mb-4 text-gray-500"><b>Your fullname*</b></p>
            <input className="text w-1/2 rounded border border-blue-600 px-3 py-2 mb-4" name="" id="blue" placeholder="Invictus Innocent" />
            <p className="journey mb-4 text-gray-500"><b>Email address*</b></p>
            <input className="text w-1/2 rounded border border-gray-300 px-3 py-2 mb-4" name="" id="" placeholder="Enter email address" />
            <p className="journey mb-4 text-gray-500"><b>Create password*</b></p>
            <input className="text w-1/2 rounded border border-gray-300 px-3 py-2 mb-4" placeholder="Enter email address" />
            <label className="flex items-center text-sm mb-4">
              <input type="checkbox" name="" id="" checked className="mr-2" />
              I agree to terms & conditions
            </label>
            <button className="btn bg-blue-500 w-1/2 text-white font-bold py-2 px-4 rounded mb-4"><Link to="/page3">Register Account</Link></button> <br />
            <button className="btn2 bg-white w-1/2 border border-blue-100 text-black font-bold py-2 px-4 rounded">Register with Google</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sections;
