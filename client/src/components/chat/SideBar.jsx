import React from "react";
import {
  MagnifyingGlassIcon,
  HomeIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";

const SideBar = () => {
  const conversations = [
    { id: 1, title: "AI and Human Emotions" },
    { id: 2, title: "Building NeuroChat UI" },
    { id: 3, title: "Startup Ideas Discussion" },
    { id: 4, title: "Deep Talk – Midnight Thoughts" },
    { id: 5, title: "Product Strategy Planning" },
  ];

  return (
    <div className="w-80 h-screen bg-slate-900 flex flex-col shadow-[10px_0_30px_rgba(0,0,0,0.4)] shrink-0 z-1">
      <div>
        <div className="flex items-center w-80 h-15 ">
          <img
            src="../public/dark-mode-logo.png"
            alt=""
            className="w-15 h-15"
          />
          <p className="mt-1 text-slate-100 font-light font-sans">
            Neuro <span className="text-indigo-600">Chat</span>
          </p>
        </div>
        <div className="h-px w-80 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent"></div>
      </div>
      <div className="flex flex-col items-center mt-6">
        <div className="border border-slate-100/20 h-10 w-60 flex items-center rounded-xl bg-gradient-to-r from-transparent via-slate-800 to-transparent relative overflow-hidden group hover:bg-gradient-to-r hover:from-indigo-700 hover:to-transparent hover:border-transparent">
          <MagnifyingGlassIcon className="absolute left-2 w-5 h-5 text-slate-400 group-focus-within:text-indigo-500" />
          <input
            type="text"
            placeholder="Search here..."
            className="w-full pl-8 focus:outline-none text-slate-100 font-light"
          />
        </div>
        <div className="relative flex mt-4 items-center h-10 w-60 border border-slate-100/20 rounded-xl bg-gradient-to-r from-slate-950 to-slate-800/50 hover:bg-gradient-to-r hover:from-indigo-700 hover:to-transparent hover:border-transparent">
          <HomeIcon className="absolute left-2 w-5 h-5 text-slate-400 " />
          <a href="#" className="pl-8 text-slate-400 font-light">
            Home
          </a>
        </div>
        <div className="relative flex mt-4 items-center h-10 w-60 border border-slate-100/20 rounded-lg bg-gradient-to-r from-slate-950 to-slate-800/50 hover:bg-gradient-to-r hover:from-indigo-700 hover:to-transparent hover:border-transparent">
          <ChatBubbleBottomCenterTextIcon className="absolute left-2 w-5 h-5 text-slate-400 " />
          <a href="#" className="pl-8 text-slate-400 font-light">
            New Chat
          </a>
        </div>
        <div className="h-px w-80 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent mt-6"></div>
      </div>
      <div className="flex flex-col items-center">
        {conversations.map((convo) => (
          <div
            key={convo.id}
            className="mt-2 w-70 h-8 flex items-center pl-2 text-slate-300 text-sm font-light hover:bg-gradient-to-r hover:from-indigo-700 hover:to-transparent hover:border-transparent border-transparent rounded-xl"
          >
            <p>{convo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
