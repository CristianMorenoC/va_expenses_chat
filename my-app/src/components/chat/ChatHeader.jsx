import React from 'react';
import IconButton from '../common/IconButton';

export default function ChatHeader() {
    return (
        <div className="chat-header">
            <h2>Current Chat</h2>
            <div className="chat-actions">
                <IconButton label="Search">
                    {/* Search icon placeholder */}
                </IconButton>
                <IconButton label="More options">
                    {/* More options icon placeholder */}
                </IconButton>
            </div>
        </div>
    );
} 