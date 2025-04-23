import React from 'react';

export default function IconButton({ label, onClick, children }) {
    return (
        <button className="icon-button" onClick={onClick}>
            <span className="sr-only">{label}</span>
            {children}
        </button>
    );
} 