import React from 'react';
import ChatItem from './ChatItem';

export default function ChatList({ chats }) {
    return (
        <div className="chat-list">
            {chats.map(chat => (
                <ChatItem key={chat.id} chat={chat} />
            ))}
        </div>
    );
} 