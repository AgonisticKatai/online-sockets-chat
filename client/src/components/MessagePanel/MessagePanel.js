import React from "react";

const MessagePanel = props => {
  return props.messages.map((message, index) => {
    return (
      <div key={index} className="d-flex justify-content-center">
        <div className="list-group">
          <a
            href="/"
            className="list-group-item list-group-item-action flex-column align-items-start"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{message.socket}</h5>
              <small>3 days ago</small>
            </div>
            <p className="mb-1">{message.message}</p>
            <small>Donec id elit non mi porta.</small>
          </a>
        </div>
      </div>
    );
  });
};

export default MessagePanel;
