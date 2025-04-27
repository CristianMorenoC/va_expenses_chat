// MainContent component 
import React, { useState } from 'react';
import ChatHeader from '../chat/ChatHeader';
import MessagesList from '../chat/MessagesList';
import ChatInputArea from '../chat/ChatInputArea';

export default function MainContent() {

    return (
        <div className="main-content">
            <div className="chat-area">
                <ChatHeader />
                
                <MessagesList />
                <ChatInputArea />
            </div>
        </div>
    );
}
