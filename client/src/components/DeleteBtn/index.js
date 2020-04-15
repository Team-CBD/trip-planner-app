import React from "react";
import "./style.css";

function DeleteBtn(props) {
  return (
    <span className="btn delete-btn" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default DeleteBtn;