import React from 'react';
import ChatItem from './ChatItem';

export default function ChatList({ chats, onRemoveChat, onUpdateName }) {
    return (
        <div className="chat-list">
            {chats.map(chat => (
                <ChatItem 
                    key={chat.id} 
                    chat={chat} 
                    onRemove={onRemoveChat}
                    onUpdateName={onUpdateName}
                />
            ))}
        </div>
    );
} 