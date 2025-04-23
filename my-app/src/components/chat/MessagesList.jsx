import React from 'react';
import ChatUserMessage from './ChatUserMessage';
import ChatAIMessage from './ChatAIMessage';

export default function MessagesList() {
    // Sample conversation data
    const sampleMessages = [
        {
            id: 1,
            type: 'human',
            content: "Hello, I need information about the project budget.",
            input: "What's the budget?"
        },
        {
            id: 2,
            type: 'ai',
            content: "I've checked the budget information for the current project.",
            tool_output: "Fetched budget: $5,000"
        },
        {
            id: 3,
            type: 'human',
            content: "Thanks! And what about the timeline for completion?",
            input: "When is the project due?"
        },
        {
            id: 4,
            type: 'ai',
            content: "The project is scheduled to be completed by the end of next month. All deliverables should be submitted by that time."
        }
    ];

    return (
        <div className="messages-container">
            <div className="messages-list">
                {sampleMessages.map(message => (
                    message.type === 'human' ? (
                        <ChatUserMessage key={message.id} message={message} />
                    ) : (
                        <ChatAIMessage key={message.id} message={message} />
                    )
                ))}
            </div>
        </div>
    );
} 