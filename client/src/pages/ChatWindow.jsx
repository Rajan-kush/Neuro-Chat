import React from "react";
import SideBar from "../components/chat/SideBar";
import { ChatArea } from "../components/chat/ChatArea";

const ChatWindow = () => {
  return (
    <div className="flex h-screen">
      <SideBar />
      <ChatArea />
    </div>
  );
};

export default ChatWindow;
