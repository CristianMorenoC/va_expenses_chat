// Sidebar component
import React from 'react';

export default function Sidebar() {
    // Sample data for chat list
    const chatList = [
        { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?', time: '10:30 AM', unread: 2 },
        { id: 2, name: 'Jane Smith', lastMessage: 'Meeting at 3pm', time: 'Yesterday', unread: 0 },
        { id: 3, name: 'Team Alpha', lastMessage: 'New project discussion', time: 'Yesterday', unread: 5 },
        { id: 4, name: 'Support', lastMessage: 'Your ticket has been resolved', time: 'Mon', unread: 0 },
    ];

    return (
        <div className="sidebar">
            {/* Sidebar Header */}
            <div className="sidebar-header">
                <h1>Chats</h1>
                <button className="icon-button">
                    <span className="sr-only">New chat</span>
                    {/* New chat icon placeholder */}
                </button>
            </div>

            {/* Search Bar */}
            <div className="search-container">
                <input 
                    type="text" 
                    placeholder="Search chats..." 
                    className="search-input"
                />
            </div>

            {/* Chat List */}
            <div className="chat-list">
                {chatList.map(chat => (
                    <div key={chat.id} className="chat-item">
                        <div className="avatar-container">
                            {/* Avatar placeholder */}
                            <div className="avatar">{chat.name.charAt(0)}</div>
                        </div>
                        <div className="chat-item-content">
                            <div className="chat-item-header">
                                <h3 className="chat-item-name">{chat.name}</h3>
                                <span className="chat-item-time">{chat.time}</span>
                            </div>
                            <div className="chat-item-footer">
                                <p className="chat-item-last-message">{chat.lastMessage}</p>
                                {chat.unread > 0 && (
                                    <span className="unread-badge">{chat.unread}</span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
} 