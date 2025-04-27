// ChatInput component 
import React, { useState } from 'react';
import { IoSend } from "react-icons/io5";
import { sendMessage } from '../../services/messageService';



export default function ChatInput() {
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (message.trim()) {
            try {
                const response = await sendMessage(message);
                console.log('Response:', response);
                setMessage('');
            } catch (error) {
                console.error('Error sending message:', error);
            }
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

