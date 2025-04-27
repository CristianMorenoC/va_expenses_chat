import React from 'react';

function NewChatBtn({ onNewChatClick }) {
  // Basic styling to mimic the image. Consider moving to CSS for better management.

  const handleClick = () => {
    // console.log('New chat button clicked'); // Can remove or keep for debugging
    if (onNewChatClick) {
      onNewChatClick(); // Call the handler passed from Sidebar
    }
  };

  return (
    <button className='new-chat-btn' onClick={handleClick} aria-label="Start a new chat">
      {/* Consider using an actual SVG icon for '+' */}
      <span style={{ fontSize: '1.2rem', marginRight: '8px' }}>+</span>
      <span>New chat</span>
    </button>
  );
}

export default NewChatBtn;
