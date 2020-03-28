import React from "react";

function Jumbotron({ children }) {
  return (
    <h3>Google Maps Demo</h3>
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron" id="map"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
