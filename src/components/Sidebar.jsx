import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate from React Router
import { v4 as uuidv4 } from "uuid";
import { FaCog, FaSignOutAlt, FaEdit, FaTrashAlt } from "react-icons/fa"; // Import the chat icon

const Sidebar = () => {
  const [chats, setChats] = useState(() => {
    const savedChats = localStorage.getItem("chats");
    return savedChats ? JSON.parse(savedChats) : [];
  });

  const navigate = useNavigate();

  const createNewChat = () => {
    const newChatId = uuidv4(); // Generate a unique ID for the new chat
    const updatedChats = [...chats, newChatId];
    setChats(updatedChats); // Add new chat ID to the list
    localStorage.setItem("chats", JSON.stringify(updatedChats)); // Save chats to localStorage
    navigate(`/chats/${newChatId}`); // Navigate to the new chat page
  };

  return (
    <div className="w-full max-w-[320px] h-full bg-white text-black flex flex-col rounded-tr-lg rounded-br-lg">
      <div className="flex items-center justify-start mt-[50px] ml-6 mb-[45px]">
        <img src="/logo.png" alt="Logo" />
      </div>

      <div className="flex flex-row space-x-4 mx-4 mb-4 ml-2">
        <button
          onClick={createNewChat}
          className="text-white text-sm font-light rounded-full w-[220px] h-[48px] ml-4  bg-gradient-to-r to-orange-600 from-orange-400"
        >
          + New Chat
        </button>
        <button className="bg-[#FDAE73] text-white font-light rounded-full p-0  w-[45px] h-[45px] flex items-center justify-center">
          {/* <FaSearch size={15} /> */}
          <img src="/search.png" alt="Bot" className="" />
        </button>
      </div>

      <div className="border-t border-gray-300 my-2"></div>

      <div className="flex flex-row justify-between mb-2 mx-5 items-center">
        <p className="font-light text-[#6A6969] mt-2 text-[12px] whitespace-nowrap">
          Your conversations
        </p>
        <p
          className="font-semibold text-[#FF6D00] mt-2 text-[12px] whitespace-nowrap cursor-pointer"
          onClick={() => {
            setChats([]); // Clear all chats
            localStorage.removeItem("chats"); // Clear from localStorage
            navigate(`/`); // Redirect to root
          }}
        >
          Clear all
        </p>
      </div>
      <div className="border-t border-gray-300 my-2"></div>
      <nav className="flex-1 space-y-2 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-orange">
        {chats.map((chatId) => (
          <div
            key={chatId}
            className="relative flex items-center space-x-2 p-3 rounded-3xl hover:bg-[#ffcfaa] text-left text-[#475569]"
          >
            {/* Chat content */}
            <Link
              to={`/chats/${chatId}`}
              className="flex items-center space-x-2 w-full hover:bg-[#ffcfaa] font-inter text-[16px] font-normal leading-[24px] text-left text-[#0d0e0f] hover:text-[#FF6D00] "
            >
              <img src="/message.png" alt="Chat Icon" className="w-5 h-5" />
              <span>Chat {chatId.slice(0, 8)}...</span>
            </Link>

            {/* Hover container for Edit and Delete icons */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity flex items-center gap-0">
              <div
                className="flex items-center justify-center bg-[#FDAE73] rounded-full h-12 w-32 space-x-2"
                style={{ opacity: 100 }}
              >
                {/* Edit Icon */}
                <img
                  src="/edit.png"
                  alt="Edit Icon"
                  className="w-4 h-4 hover:cursor-pointer"
                />
                {/* Delete Icon */}
                <img
                  src="/delete.png"
                  alt="Delete Icon"
                  className="w-4 h-4 hover:cursor-pointer"
                />
              </div>
            </div>
          </div>
        ))}
      </nav>

      {/* Divider */}
      <button
        className="flex items-center mb-4 ml-5 mr-0 border border-gray-300 rounded-full bg-transparent justify-start"
        style={{
          width: "256px",
          height: "48px",
          borderWidth: "1px",
        }}
      >
        <div
          className="bg-[#FFE5D1] flex justify-center items-center"
          style={{
            width: "34px",
            height: "34px",
            borderRadius: "50%",
            opacity: "1", // Set opacity as needed
          }}
        >
          <FaCog className="text-[#FF6D00]" size={16} /> {/* Settings icon */}
        </div>
        <p className="text-sm font-light text-[#6A6969] ml-1">Settings</p>{" "}
        {/* Reduced margin-left */}
      </button>
      <button
        className="flex items-center flex-row justify-between mb-4 ml-5 mr-0 border border-gray-300 rounded-full bg-transparent"
        style={{
          width: "256px",
          height: "48px",
          borderWidth: "1px",
        }}
      >
        <div className="flex items-center space-x-2">
          <img
            src="/profile-pic.png"
            alt="User Profile"
            className="w-8 h-8 rounded-full"
          />
          <p className="text-sm font-light text-[#6A6969]">John Doe</p>{" "}
        </div>

        <div className="flex items-center space-x-2 mt-0">
          <FaSignOutAlt className="text-[#FF6D00]" size={16} />{" "}
        </div>
        {/* Reduced margin-left */}
      </button>
    </div>
  );
};

export default Sidebar;
