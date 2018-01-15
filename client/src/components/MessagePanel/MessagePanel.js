import React from "react";

const MessagePanel = props => {
  return props.messages.map((message, index) => {
    return (
      <div key={index} className="d-flex justify-content-center">
        <div className="list-group">
          <div className="d-flex w-100 justify-content-between">
            <p className="mb-1"><strong>{message.user}</strong>: {message.message}</p>
          </div>
        </div>
      </div>
    );
  });
};

export default MessagePanel;
