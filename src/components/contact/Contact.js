import React from "react";
import "./contact.css";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div>
      <div class="hero-text" id="content">
        <h2>Meet the Doers & Builders</h2>
      </div>

      <div className="team">
        <CardDeck className="pad">
          <Card className="cardcolor">
            <CardImg top width="100%" className="card1" />
            <CardBody>
              <CardTitle className="first_name">Kaartik</CardTitle>
              <CardTitle className="last_name">Gupta</CardTitle>
              <CardSubtitle className="designation">
                Front-End Developer
              </CardSubtitle>
              <CardText className="quote">
                A user interface is like a joke. If you have to explain it, it’s
                not that good to explain.
              </CardText>
              <hr className="hrcolor" />
              <div className="sites">
                <ul className="list">
                  <li className="item">
                    <a href="https://github.com/Kaartikgupta" className="link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          class="sparkboxer-sites__icon"
                          fill-rule="evenodd"
                          d="M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.4 1 .2-.8.5-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.1-.4-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.2 2.8.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.9 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 0"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="https://thesiswhisperer.home.blog/"
                      className="link"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="21"
                        viewBox="0 0 24 21"
                      >
                        <path
                          class="sparkboxer-sites__icon"
                          fill-rule="nonzero"
                          d="M12 0a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm12 21H0v-1.5a6 6 0 0 1 6-6h12a6 6 0 0 1 6 6V21z"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="https://twitter.com/gupta_kaartik"
                      className="link"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="20"
                        viewBox="0 0 24 20"
                      >
                        <path
                          class="sparkboxer-sites__icon"
                          fill-rule="nonzero"
                          d="M21.5 4.9v.6A14 14 0 0 1 0 17.3h1.2c2.3 0 4.4-.7 6-2a5 5 0 0 1-4.5-3.5 5 5 0 0 0 2.2 0 5 5 0 0 1-4-4.9 5 5 0 0 0 2.3.6A5 5 0 0 1 1.7.9c2.4 3 6 5 10.1 5.1a5 5 0 0 1 8.4-4.5c1.1-.2 2.2-.6 3.1-1.1A5 5 0 0 1 21.2 3c1-.1 2-.4 2.8-.8A10 10 0 0 1 21.5 5z"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="https://www.linkedin.com/in/kaartik-gupta/"
                      className="link"
                    >
                      <FontAwesomeIcon
                        size="2x"
                        color="black"
                        icon={faLinkedin}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </CardBody>
          </Card>
          <Card className="cardcolor">
            <CardImg top width="100%" className="card2" />
            <CardBody>
              <CardTitle className="first_name">Himanshu</CardTitle>
              <CardTitle className="last_name">Parvanda</CardTitle>
              <CardSubtitle className="designation">
                Front-End Developer
              </CardSubtitle>
              <CardText className="quote">
                I don’t care if it works on your machine! We are not shipping
                your machine!
              </CardText>
              <hr className="hrcolor" />
              <div className="sites">
                <ul className="list">
                  <li className="item">
                    <a href="https://github.com/himanshu20005" className="link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          class="sparkboxer-sites__icon"
                          fill-rule="evenodd"
                          d="M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.4 1 .2-.8.5-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.1-.4-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.2 2.8.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.9 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 0"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="https://thesiswhisperer.home.blog/"
                      className="link"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="21"
                        viewBox="0 0 24 21"
                      >
                        <path
                          class="sparkboxer-sites__icon"
                          fill-rule="nonzero"
                          d="M12 0a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm12 21H0v-1.5a6 6 0 0 1 6-6h12a6 6 0 0 1 6 6V21z"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li className="item">
                    <a href="https://twitter.com/himanshu_p10" className="link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="20"
                        viewBox="0 0 24 20"
                      >
                        <path
                          class="sparkboxer-sites__icon"
                          fill-rule="nonzero"
                          d="M21.5 4.9v.6A14 14 0 0 1 0 17.3h1.2c2.3 0 4.4-.7 6-2a5 5 0 0 1-4.5-3.5 5 5 0 0 0 2.2 0 5 5 0 0 1-4-4.9 5 5 0 0 0 2.3.6A5 5 0 0 1 1.7.9c2.4 3 6 5 10.1 5.1a5 5 0 0 1 8.4-4.5c1.1-.2 2.2-.6 3.1-1.1A5 5 0 0 1 21.2 3c1-.1 2-.4 2.8-.8A10 10 0 0 1 21.5 5z"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="https://www.linkedin.com/in/himanshu-parvanda/"
                      className="link"
                    >
                      <FontAwesomeIcon
                        size="2x"
                        color="black"
                        icon={faLinkedin}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </CardBody>
          </Card>
          <Card className="cardcolor">
            <CardImg top width="100%" className="card3" />
            <CardBody>
              <CardTitle className="first_name">Nikhil</CardTitle>
              <CardTitle className="last_name">Bhatnagar</CardTitle>
              <CardSubtitle className="designation">
                Back-End Developer
              </CardSubtitle>
              <CardText className="quote">
                My code DOESN’T work, I have no idea why. My code WORKS, I have
                no idea why.
              </CardText>
              <hr className="hrcolor" />
              <div className="sites">
                <ul className="list">
                  <li className="item">
                    <a href="https://github.com/nblar" className="link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          class="sparkboxer-sites__icon"
                          fill-rule="evenodd"
                          d="M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.4 1 .2-.8.5-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.1-.4-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.2 2.8.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.9 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 0"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="https://medium.com/@nikhilbhatnagar"
                      className="link"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="21"
                        viewBox="0 0 24 21"
                      >
                        <path
                          class="sparkboxer-sites__icon"
                          fill-rule="nonzero"
                          d="M12 0a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm12 21H0v-1.5a6 6 0 0 1 6-6h12a6 6 0 0 1 6 6V21z"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href=" https://twitter.com/nikhilb2899?s=09"
                      className="link"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="20"
                        viewBox="0 0 24 20"
                      >
                        <path
                          class="sparkboxer-sites__icon"
                          fill-rule="nonzero"
                          d="M21.5 4.9v.6A14 14 0 0 1 0 17.3h1.2c2.3 0 4.4-.7 6-2a5 5 0 0 1-4.5-3.5 5 5 0 0 0 2.2 0 5 5 0 0 1-4-4.9 5 5 0 0 0 2.3.6A5 5 0 0 1 1.7.9c2.4 3 6 5 10.1 5.1a5 5 0 0 1 8.4-4.5c1.1-.2 2.2-.6 3.1-1.1A5 5 0 0 1 21.2 3c1-.1 2-.4 2.8-.8A10 10 0 0 1 21.5 5z"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="https://www.linkedin.com/in/nikhil-bhatnagar-04231b17b"
                      className="link"
                    >
                      <FontAwesomeIcon
                        size="2x"
                        color="black"
                        icon={faLinkedin}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </CardBody>
          </Card>
        </CardDeck>
      </div>
    </div>
  );
}

export default Contact;
