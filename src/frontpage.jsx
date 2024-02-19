import React from "react";
import { Link } from "react-router-dom";

function FrontPage() {
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-gray-400">
        <Link to="/page1">
          <button className="bg-red-500 hover:bg-blue-400 text-white font-bold py-6 px-20 border-b-4 border-blue-700 hover:border-blue-500 rounded text-2xl">
            Click here to get Started
          </button>
        </Link>
      </div>
    </>
  );
}
export default FrontPage;