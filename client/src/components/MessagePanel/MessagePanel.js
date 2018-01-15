import React from "react";

import "./MessagePanel.css"

const MessagePanel = props => {
  return (
    <div className="chat-container" >
      {props.messages.map((message, index) => {
        return (
          <div key={index} className="d-flex justify-content-center">
            <div className="list-group">
              <div className="d-flex justify-content-between">
                <p className="mb-1"><strong>{message.user}</strong>: {message.message}</p>
              </div>
            </div>
          </div>
        );
      })};
    </div>
  )
};

export default MessagePanel;
