import React from "react";
import TJMadLogo from "@/assets/tjmad_logo_letters.png";

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div 
        className="bg-white w-60 min-h-[80vh] rounded-[2rem] shadow-lg border-8 border-t-[25px] border-b-[40px] border-black flex flex-col items-center justify-center p-6"
      >
        <img
          src={TJMadLogo}
          alt="TJ MAD Logo"
          className="w-64 h-auto mb-8"
        />

        <a
          href="https://ion.tjhsst.edu/eighth"
          className="px-6 py-2 text-base text-white bg-[#15214b] hover:bg-[#080d1f] rounded-lg transition duration-300"
        >
          Sign up on Ion
        </a>
      </div>
    </div>
  );
};

export default App;