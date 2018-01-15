import React from "react";

const LoginForm = props => {
  const handleSubmit = e => {
    e.preventDefault();
    const user = this.loginInput.value;
    props.login(user);
    this.loginInput.value = "";
  };

  return (
    <div className="d-flex justify-content-center my-5">
      <form className="form-row align-items-center" onSubmit={handleSubmit}>
        <div className="col-auto">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Enter your username..."
            autoFocus
            required={true}
            ref={node => {
              this.loginInput = node;
            }}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-2">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
