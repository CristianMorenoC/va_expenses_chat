// Sidebar component
import React, { useState } from 'react';
import SidebarHeader from './SidebarHeader';
import SearchBar from '../common/SearchBar';
import ChatList from '../chat/ChatList';
import NewChatBtn from '../chat/NewChatBtn';

// Initial hardcoded chats
const initialChats = [
    { id: 1, conversationName: 'Project Planning', time: '10:30 AM' },
    { id: 2, conversationName: 'Marketing Strategy', time: 'Yesterday' },
    { id: 3, conversationName: 'Product Launch', time: 'Yesterday' },
    { id: 4, conversationName: 'Technical Issues', time: 'Mon' },
];

export default function Sidebar() {
    const [chats, setChats] = useState(initialChats);
    const [conversationName, setConversationName] = useState('');
    const [selectedChat, setSelectedChat] = useState(null);
    // Sample data for chat list

    const chatList = [
        { id: 1, conversationName: 'Project Planning', time: '10:30 AM' },
        { id: 2, conversationName: 'Marketing Strategy', time: 'Yesterday' },
        { id: 3, conversationName: 'Product Launch', time: 'Yesterday' },
        { id: 4, conversationName: 'Technical Issues', time: 'Monday' },
    ];

    const handleAddChat = () => {
        const newChat = {
            id: Date.now(), // Temporary unique ID
            conversationName: 'New Chat',
            time: 'Now'
        };
        setChats(prevChats => [newChat, ...prevChats]); // Add to the beginning
    };

    const handleRemoveChat = (idToRemove) => {
        setChats(prevChats => prevChats.filter(chat => chat.id !== idToRemove));
    };

    const handleUpdateChatName = (chatId, newName) => {
        setChats(prevChats => 
            prevChats.map(chat => 
                chat.id === chatId ? { ...chat, conversationName: newName } : chat
            )
        );
        console.log(`Updated chat ${chatId} name to: ${newName}`);
    };

    return (
        <div className="sidebar">
            <SidebarHeader />
            <SearchBar placeholder="Search chats..." />
            <NewChatBtn onNewChatClick={handleAddChat} />
            <ChatList 
                chats={chats} 
                onRemoveChat={handleRemoveChat} 
                onUpdateName={handleUpdateChatName}
            />
        </div>
    );
} 