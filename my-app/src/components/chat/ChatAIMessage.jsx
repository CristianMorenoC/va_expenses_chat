import React from 'react';

export default function ChatAIMessage({ message }) {
    return (
        <div className="chat-message ai-message">
            <div className="message-content">
                <p>{message.content}</p>
            </div>
        </div>
    );
}
