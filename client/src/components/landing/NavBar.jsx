import React from "react";

const NavBar = () => {
  return (
    <div className="flex h-12 w-full justify-between items-center">
      <div className="h-8 w-40 flex justify-center items-center font-[Geist] text-2xl font-bold text-[#F8FAFC] ml-20">
        Neuro<span className="text-[#22D3EE]">Chat</span>
      </div>
      <div className="h-8 w-48 flex items-center justify-around mr-20 mt-2">
        <button className="h-8 w-18 font-[Geist] text-[#F8FAFC] border-1 border-[#94A3B8] rounded-lg">
          Login
        </button>
        <button className="h-8 w-20 rounded-lg bg-[#2563EB] text-[#F8FAFC] font-[Geist]">
          Register
        </button>
      </div>
    </div>
  );
};

export default NavBar;
