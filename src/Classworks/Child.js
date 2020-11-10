import React, { Component } from "react";

const Child = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}>
      <h1 style={{ backgroundColor: "#ffcc00" }}>UserName child</h1>
    </div>
  );
};

export default Child;
