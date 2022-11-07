import React from "react";
import "../index.scss";

function Button() {
  return (
    <div className="buttons">
      <button type="submit" className="btn outlined">
        Login
      </button>
      <button type="submit" className="btn contained">
        Signin
      </button>
    </div>
  );
}

export default Button;
