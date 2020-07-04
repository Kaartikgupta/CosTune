import React from "react";
import Background from "../../landing.jpg";
import "../../style.css";
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
      <button id="play-btn">Play Now</button>
    </section>
  );
}

export default Home;
