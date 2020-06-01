import React from "react";
import { Container } from "react-bootstrap";
import "../../style.css";
function Layout(props) {
  return <Container>{props.children}</Container>;
}

export default Layout;
