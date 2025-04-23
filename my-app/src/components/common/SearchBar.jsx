import React from 'react';

export default function SearchBar({ placeholder = "Search..." }) {
    return (
        <div className="search-container">
            <input 
                type="text" 
                placeholder={placeholder} 
                className="search-input"
            />
        </div>
    );
} 