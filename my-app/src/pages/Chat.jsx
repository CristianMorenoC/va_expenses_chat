// Chat page component
import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import MainContent from '../components/layout/MainContent';
import '../styles/global.css';

export default function Chat() {
    return (
        <div className="app-container">
            <Sidebar />
            <MainContent />
        </div>
    );
};
