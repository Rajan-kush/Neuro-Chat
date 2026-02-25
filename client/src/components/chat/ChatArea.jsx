import React from "react";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

export const ChatArea = () => {
  return (
    <div className="flex-1 flex flex-col bg-gradient-to-b from-slate-700 to-slate-900">
      <div className="flex-1 overflow-y-auto"></div>
      <div className="w-full h-20 flex justify-center items-center">
        <div className="flex w-[80%] justify-center items-center bg-slate-950 border rounded-4xl">
          <input
            type="text"
            placeholder="Ask anything here..."
            className="focus:outline-none h-15 flex-1 border-transparent  bg-transparent placeholder:text-slate-500 text-slate-300 pl-6"
          />
          <div className="w-10 h-10 bg-indigo-700 border rounded-[50%] flex justify-center items-center hover:border-slate-100 hover:border-2 hover:bg-slate-100 hover:border-indigo-700 hover:text-indigo-700 cursor-pointer  mr-6">
            <ChevronDoubleRightIcon className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};
