import React, { useState } from 'react';

export default function ChatItem({ chat, onRemove, onUpdateName }) {
    const { id, conversationName, time } = chat;
    const [isEditing, setIsEditing] = useState(false);
    const [editableName, setEditableName] = useState(conversationName);
    
    const handleRemoveClick = (e) => {
        e.stopPropagation();
        onRemove(id);
    };

    const handleNameClick = () => {
        setIsEditing(true);
    };

    const handleNameChange = (e) => {
        setEditableName(e.target.value);
    };

    const handleNameBlur = () => {
        if (editableName.trim() && editableName !== conversationName) {
            onUpdateName(id, editableName.trim());
        }
        setIsEditing(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleNameBlur();
        }
        else if (e.key === 'Escape') {
            setEditableName(conversationName);
            setIsEditing(false);
        }
    };

    return (
        <div className="chat-item">
            <div className="chat-item-content">
                <div className="chat-item-header">
                    <span className="chat-item-time">{time}</span>
                </div>
                <div className="chat-item-footer">
                    {isEditing ? (
                        <input
                            type="text"
                            value={editableName}
                            onChange={handleNameChange}
                            onBlur={handleNameBlur}
                            onKeyDown={handleKeyDown}
                            autoFocus
                            onClick={(e) => e.stopPropagation()}
                            className="chat-item-edit-input"
                        />
                    ) : (
                        <p 
                            className="chat-item-last-message" 
                            onClick={handleNameClick}
                            title="Click to rename"
                        >
                            {conversationName}
                        </p>
                    )}
                    <button 
                        className='remove-chat-btn'
                        onClick={handleRemoveClick} 
                        aria-label={`Remove ${conversationName} chat`}
                    >
                        X
                    </button>
                </div>
            </div>
        </div>
    );
} 