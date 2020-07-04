import React from "react";
import Background from "../../landing.jpg";
import { Nav, Navbar } from "react-bootstrap";
import "../../style.css";
import player from "../player/Player";
import { LinkContainer } from "react-router-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
var sectionStyle = {
  width: "100%",
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
    <section style={sectionStyle}>
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
