import React from "react";
import { FaBrain, FaTelegramPlane } from "react-icons/fa"; // Import Telegram and brain icons

const ChatPage = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-end bg-[#F0F0F0]">
      {/* Chat container */}
      <div className="flex-1 overflow-y-auto py-4 px-3">
        {/* User's Message Bubble */}

        {/* Chatbot's Message Bubble */}
        <div className="flex items-start justify-start mb-4 mt-5 ">
          <div className="flex items-center space-x-2">
            <img src="/send.png" alt="Bot" className="w-8 h-8 rounded-full" />
            <div className="bg-white text-[#333] p-3 pl-4 rounded-tl-xl rounded-tr-xl rounded-bl-xl max-w-[95%] min-w-[100px]">
              <p className="text-sm whitespace-pre-wrap break-words justify-center">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}</p>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-end mb-4 mr-3 ml-3  ">
          <div className="flex items-center space-x-2">
            <div className="bg-[#E6E6E6] text-[#333] p-3 rounded-tl-xl rounded-tr-xl rounded-br-xl max-w-[95%] min-w-[100px]">
              <p className="text-sm whitespace-pre-wrap break-words">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}</p>
            </div>
            <img src="/user.png" alt="User" className="w-8 h-8 rounded-full" />
          </div>
        </div>
      </div>

      {/* Text Field for new messages */}
            <div className="relative w-full max-w-[1214px] h-[70px] bg-[#F8F8F8] rounded-[30px] mx-auto mt-2 p-2 flex items-center justify-between shadow-lg mb-7">
        {/* Brain icon */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <img src="/brain.png" alt="Bot" className="text-gray-500 w-6 h-6 md:w-8 md:h-8" />
        </div>
      
        {/* Textarea for input */}
        <textarea
          className="w-full h-full p-3 pl-14 pr-13 text-gray-700 rounded-lg border-none outline-none bg-[#F8F8F8] resize-none"
          placeholder="Type a message"
        />
      
        {/* Send icon */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <img src="/sendB.png" alt="Send" className="text-[#0088cc] w-12 h-12 md:w-12 md:h-12 mt-2" />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
