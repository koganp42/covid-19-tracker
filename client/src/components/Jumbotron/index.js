import React from "react";

function Jumbotron({ children }) {
  return (
    <div
    style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
    className="jumbotron"
    >
    <h3>Google Maps Demo</h3>
      {children}
    </div>
  );
}

export default Jumbotron;
