// ChatInput component 
import React, { useState } from 'react';
import { IoSend } from "react-icons/io5";

export default function ChatInput() {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            console.log('Message submitted:', message);
            setMessage('');
        }
    };

    return (
        <>
        <div className="input-container">
            <input 
                type="text" 
                placeholder="Type a message..." 
                className="message-input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
        </div>
        
        <div className="send-button" onClick={(e)=> handleSubmit(e)}>
            <IoSend width={24} height={24} />
        </div>
        </>
    );
}

