import React from 'react';

import './ChatTitle.css';

const ChatTitle = ({ selectedConversation }) => {
    return (
        <div id="chat-title">
            <span>{selectedConversation.title}</span>
            <img src={require("../../images/icons/trash-logo.svg")} alt="Delete Conversation" />
        </div>
    );
}

export default ChatTitle;