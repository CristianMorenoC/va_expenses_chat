import React from 'react';

export default function ChatUserMessage({ message }) {
    return (
        <div className="chat-message user-message">
            <div className="message-content">
                <p>{message.content}</p>
            </div>
        </div>
    );
} 