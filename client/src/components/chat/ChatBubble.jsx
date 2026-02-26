import React from "react";

const ChatBubble = () => {
  const messages = [
    {
      id: 1,
      role: "assistant",
      content: "Hey Rajan 👋 What are we building today?",
    },
    { id: 2, role: "user", content: "I'm working on the chat bubble UI." },
    {
      id: 3,
      role: "assistant",
      content:
        "Nice. Are you going for a minimal SaaS look or something cinematic?",
    },
    { id: 4, role: "user", content: "Minimal but still premium." },
    {
      id: 5,
      role: "assistant",
      content:
        "Good choice. Keep it clean. Focus on spacing and subtle contrast.",
    },
  ];
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
