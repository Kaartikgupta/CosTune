import React from "react";
import Background from "../../landing.jpg";
import { Nav, Navbar } from "react-bootstrap";
import "../../style.css";
import player from "../player/Player";

import { BrowserRouter as Router } from "react-router-dom";
var sectionStyle = {
  width: "auto",
  height: "600px",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundImage: `url(${Background})`,
};
var h3style = {
  color: "white",
  paddingTop: "250px",
};
function Home() {
  return (
    <section style={sectionStyle} className="bgphoto">
      <h3 style={h3style}>
        Love Music ?<br />
        We've got you covered...
      </h3>
      <br />

      <a href="player">
        <button id="play-btn">Play Now</button>
      </a>
    </section>
  );
}

export default Home;
