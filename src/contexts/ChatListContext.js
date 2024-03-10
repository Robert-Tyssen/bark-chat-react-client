import React from 'react';

// Page size for loading new chats
const pageSize = 25;


// Context for chats
export const ChatListContext = React.createContext(null);

// Provider for chat states and actions
export const ChatListProvider = ({ children }) => {

  // States for chat list fetching
  const [chats, setChats] = React.useState([]);         // Loaded chats
  const [loading, setLoading] = React.useState(false);  // Loading indicator
  const [error, setError] = React.useState('');         // Load error
  const [hasMore, setHasMore] = React.useState(true);   // Whether there are more items to load

  // Currently selected chat
  const [selectedChat, setSelectedChat] = React.useState('');

  // TODO - replace with actual page load implementation
  const loadPage = async () => {

    setLoading(true);
    setError('');

    await new Promise(r => setTimeout(r, 1000));
    let data = Array.from({ length: pageSize });
    let updatedChats = chats.concat(data);

    setChats(updatedChats);
    setLoading(false);

    setHasMore(updatedChats.length < 100);
  }

  // Action to select a chat
  const selectChat = (id) => {
    setSelectedChat(id);
  };

  return (
    <ChatListContext.Provider value={{ chats, loading, error, hasMore, selectedChat, selectChat, loadPage }}>
      {children}
    </ChatListContext.Provider>
  );

}