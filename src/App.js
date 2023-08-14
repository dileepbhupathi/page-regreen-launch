import React from "react";
import { Button } from "antd";
import "./App.css";

function App() {
  return (
    <div className="launch-container">
      <div className="regreen-logo-container">
        <img
          src="/images/regreen-logo-image.png"
          alt="regreen_logo"
          className="regreen-logo"
        />
      </div>
      <div className="launch-image-container">
        <img
          src="/images/launch-image.png"
          alt="launch_image"
          className="launch-image"
        />
      </div>
      <a
        href="http://regreen.co.in/"
        target="_blank"
        rel="noreferrer"
        className="launch-anchor"
      >
        <Button className="launch-website-button">Launch Website</Button>
      </a>
    </div>
  );
}

export default App;
