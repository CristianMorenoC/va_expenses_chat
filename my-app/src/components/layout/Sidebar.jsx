// Sidebar component
import React from 'react';
import SidebarHeader from './SidebarHeader';
import SearchBar from '../common/SearchBar';
import ChatList from '../chat/ChatList';

export default function Sidebar() {
    // Sample data for chat list
    const chatList = [
        { id: 1, conversationName: 'Project Planning', time: '10:30 AM' },
        { id: 2, conversationName: 'Marketing Strategy', time: 'Yesterday' },
        { id: 3, conversationName: 'Product Launch', time: 'Yesterday' },
        { id: 4, conversationName: 'Technical Issues', time: 'Mon' },
    ];

    return (
        <div className="sidebar">
            <SidebarHeader />
            <SearchBar placeholder="Search chats..." />
            <ChatList chats={chatList} />
        </div>
    );
} 