import { useContext } from "react";
import { ChatListContext } from "../contexts/ChatListContext";

export const useChatList = () => {
  return useContext(ChatListContext);
}