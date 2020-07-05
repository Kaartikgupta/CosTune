import React from "react";
import "./about.css";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container>
      <div>
        <div className="heading">ABOUT</div>
        <Row className="completebox">
          <Col sm="12" md="12" lg="6" xs="12" className="left" id="left">
            <div className="imag" />
          </Col>
          <Col></Col>
          <Col sm="12" md="12" lg="5" xs="12" className="right" id="right">
            <div className="head" id="head">
              What it does.
            </div>

            <div className="maintext" id="maintext">
              "Costunes" is an ingenious music player build by a group of
              techies to provide a wholesum music experience to our users. From
              pop, jazz to groovy cou try side music, our Costunes provides your
              favorite music at your own choice. So, come give Costunes a try
              and we jump into the ocean of ad-free music
            </div>
          </Col>
        </Row>
        <Row className="completebox">
          <Col sm="12" md="12" lg="5" xs="12" className="left1" id="left1">
            <div className="head1" id="head1">
              How it works.
            </div>
            <div className="maintext1" id="maintext1">
              Type the name of your favorite album/artist and hit the search
              button to get a list of all the songs sung by your favorite
              artist.It can be used by anyone and everyone and we hope you find
              all your favorite music at one spot!
            </div>
          </Col>
          <Col></Col>
          <Col sm="12" md="12" lg="6" xs="12" className="right1" id="right1">
            <div className="imag1" />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default About;
