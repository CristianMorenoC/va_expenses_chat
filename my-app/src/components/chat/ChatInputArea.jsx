import React from 'react';
import IconButton from '../common/IconButton';
import ChatInput from './ChatInput';
export default function ChatInputArea() {
    return (
        <div className="chat-input-area">
            <IconButton label="Attach">
                {/* Attachment icon placeholder */}
            </IconButton>
            <ChatInput />
        </div>
    );
} 