import React from 'react';

export default function ChatItem({ chat }) {
    const { id, conversationName, time } = chat;
    
    return (
        <div className="chat-item">
            <div className="chat-item-content">
                <div className="chat-item-header">
                    <span className="chat-item-time">{time}</span>
                </div>
                <div className="chat-item-footer">
                    <p className="chat-item-last-message">{conversationName}</p>
                </div>
            </div>
        </div>
    );
} 