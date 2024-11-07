// src/App.jsx
import React from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Router>
      <div className="flex h-screen w-screen bg-[#F4F4F4]">
        <Sidebar />
        <div className="flex-1 ml-1 overflow-auto">
        <Routes>
            <Route path="/chats" element={<ChatPage />} />
            <Route path="/chats/:chatId" element={<ChatPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
