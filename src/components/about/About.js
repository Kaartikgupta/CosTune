import React from "react";
import "./about.css";
import {Container} from "react-bootstrap"


function About() {
  return (
    <div>
      <div className="heading">
        ABOUT
      </div>
      <div className="completebox">
        <div className="left" id="left">
          <div className="imag" />
        </div>
        <div className="right" id="right">
          <div className="head" id="head">
            What it does.
          </div>
          <div className="maintext" id="maintext">
            "Costunes" is an ingenious music player build by a group of techies to provide a wholesum music experience to our users. From pop, jazz to groovy cou try side music, our Costunes provides your favorite music at your own choice.It will recommendroup of techies to provide a wholesum music experience to our users. From poproup of techies to provide a wholesum music experience to our users. From pop 
          </div>
        </div>
      </div>
      <div className="completebox">
        <div className="right1" id="right1">
          <div className="red1" />
          <div className="imag1" />
        </div>
        <div className="left1" id="left1">
          <div className="head1" id="head1">
            How it works.
          </div>
          <div className="maintext1" id="maintext1">
            Type the name of your favorite album/artist and hit the search button to get a list of all the songs sung by your favorite artist.roup of techies to provide a wholesum music experience to our users. From poproup of techies to provide a wholesum music experience to our users. From pop
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
