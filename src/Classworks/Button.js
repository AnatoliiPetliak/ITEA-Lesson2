import React, { Component } from "react";

const Btn = ({ style, title, user, changeUserInterviewed }) => {
  return (
    <button
      onClick={changeUserInterviewed(user.post._id)}
      title={title}
      style={style}>
      {title}
    </button>
  );
};

Btn.defaultProps = {
  style: "default style",
  tittle: "default title",
};

export default Btn;
