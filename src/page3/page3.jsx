// Sections.jsx
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
                <div className="container flex flex-col justify-center items-center p-10 relative">
                    <Link to="/page2"  className="back-option absolute top-5 left-5 font-bold hover:underline text-gray-400">Back</Link> 
                    <div className="already-text absolute top-5 right-5">
                        <p className="already text-gray-400">SEPT 02/03</p>
                        <p className="already text-gray-500"><b>Residency Info.</b></p>
                    </div>
                    <br /> <br /> <br /> <br />
                    <div className="text-left mt-8 mr-10">
                        <h2 className="font-bold text-2xl mb-4">Complete your profile!</h2>
                        <p className="journey">For the purpose of industry regulation, your details are required.</p> <br />
                        <p className="journey text-gray-500"><b>Phone nnumber</b></p>
                        <div className="input-group flex items-center mb-4 w-2/3 border border-blue-500 rounded-sm mt-3">
                            <select className="dropdown mr-2 border border-none rounded">
                                <option className="tel" value="+234">+234</option>
                            </select>
                            <input type="tel" className="tel border border-none rounded px-3 w-1/2 py-2" placeholder="   090912345567" />
                        </div>
                        <p className="journey text-gray-500"><b>Your address</b></p> 
                        <input className="text border w-2/3 border-gray-300 rounded px-3 py-2 mb-4 mt-3" name="" id="" placeholder="Please enter address" />
                        <p className="journey text-gray-500"><b>Country of Residence</b></p>
                        <input className="text border w-2/3 border-gray-300 rounded px-3 py-2 mb-4 mt-3" placeholder="Please select" /> <br />
                        <button className="btn bg-blue-500 text-white font-bold py-2 px-4 rounded mb-4 mt-5 w-2/3"><Link to="/page4">Save & Continue</Link></button>
                        <p className="align text-sm text-gray-400 ml-14">Your Info is safely secured</p>
                    </div>
                </div>
            </section>
        </div>
    );
}export default Sections;
