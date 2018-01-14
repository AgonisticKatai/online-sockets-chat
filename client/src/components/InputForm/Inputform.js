import React from "react";

const InputForm = props => {
  const handleSubmit = e => {
    e.preventDefault();
    const message = this.messageInput.value;
    props.sendMessage(message);
    this.messageInput.value = "";
  };

  return (
    <div className="d-flex justify-content-center my-5">
      <form className="form-row align-items-center" onSubmit={handleSubmit}>
        <div className="col-auto">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Enter new message..."
            name="taskInput"
            autoFocus
            required={true}
            ref={node => {
              this.messageInput = node;
            }}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-2">
            Send message
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
