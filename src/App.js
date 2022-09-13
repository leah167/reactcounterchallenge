import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  // const [heart, setHeart] = useState();

  const subtract = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const add = () => {
    if (count <= 4) {
      setCount(count + 1);
    }
  };

  const Hearts = () => {
    return Array.from({ length: count }, (element, index) => {
      return (
        <img
          key={index}
          style={{ width: "50px", height: "50px", marginRight: "10px" }}
          src="https://ih1.redbubble.net/image.1283444257.9427/st,small,845x845-pad,1000x1000,f8f8f8.jpg"
        ></img>
      );
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://cdn.vox-cdn.com/thumbor/kLPwG8t76jrMGEQT1Eul0w9h7XE=/0x0:787x334/1400x1400/filters:focal(463x64:587x188):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/52146425/mario2_running_copy.0.jpeg"
          className="App-logo"
          alt="logo"
        />
        <b>React Counter</b>
        <div>Menu</div>
      </header>
      <div className="main">
        <div className="counter">
          <button id="subtract" onClick={subtract}>
            -1 Health
          </button>
          <div id="counter">{count}</div>
          <button id="add" onClick={add}>
            +1 Health
          </button>
        </div>
        <div className="heart">
          <Hearts />
        </div>
      </div>
    </div>
  );
};

export default App;
