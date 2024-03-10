import React, { createContext, useState } from 'react'

// Context for chats
export const ChatContext = createContext();

// Provider for chat states and actions
export const ChatProvider = ({children}) => {

  // Currently selected chat
  const [selectedChat, setSelectedChat] = useState(null);

  // Action to select a chat
  const selectChat = (id) => {
    setSelectedChat(id);
  }

  return (
    <ChatContext.Provider value={{selectedChat, selectChat}}>
      {children}
    </ChatContext.Provider>
  )

}