import React from "react";

const ChatBubble = ({ messages }) => {
  return (
    <div className="flex flex-col space-y-4 p-6">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`max-w-lg px-4 py-3 rounded-2xl text-sm leading-relaxed ${msg.role === "user" ? "bg-indigo-600 text-white rounded-br-sm" : "bg-slate-800 text-slate-200 rounded-bl-sm border border-white/5"}`}
          >
            {msg.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatBubble;
