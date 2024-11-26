import React, { useState } from 'react';

const Chat = () => {
  const [message, setMessage] = useState('');

  return (
    <div className="chat-main">
      <div className="chat-messages">
        {/* Messages will go here */}
      </div>

      <div className="chat-input-container">
        <textarea
          className="feedback-sec-txt"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="btn-process">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;