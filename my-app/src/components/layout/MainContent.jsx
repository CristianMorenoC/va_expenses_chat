// MainContent component 
import React from 'react';

export default function MainContent() {
    return (
        <div className="main-content">
            <div className="chat-area">
                {/* Chat Header Section */}
                <div className="chat-header">
                    <h2>Current Chat</h2>
                    <div className="chat-actions">
                        <button className="icon-button">
                            <span className="sr-only">Search</span>
                            {/* Search icon placeholder */}
                        </button>
                        <button className="icon-button">
                            <span className="sr-only">More options</span>
                            {/* More options icon placeholder */}
                        </button>
                    </div>
                </div>

                {/* Messages Area */}
                <div className="messages-container">
                    {/* Messages will be rendered here */}
                    <div className="messages-list">
                        {/* This will be populated with ChatMessage components */}
                    </div>
                </div>

                {/* Chat Input Area */}
                <div className="chat-input-area">
                    <button className="icon-button">
                        <span className="sr-only">Attach</span>
                        {/* Attachment icon placeholder */}
                    </button>
                    
                    <div className="input-container">
                        <input 
                            type="text" 
                            placeholder="Type a message..." 
                            className="message-input"
                        />
                    </div>
                    
                    <button className="send-button">
                        <span className="sr-only">Send</span>
                        {/* Send icon placeholder */}
                    </button>
                </div>
            </div>
        </div>
    );
}
