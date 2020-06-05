import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Layout from "./components/common/Layout";
import NavigationBar from "./components/common/NavigationBar";
import Home from "./components/landing/Home";
import About from "./components/about/About";

import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/Footer";
document.body.style = "background: #1f2022;";
function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />

            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Redirect from="*" to="/"></Redirect>
          </Switch>
        </Layout>
      </Router>
    </React.Fragment>
  );
}

export default App;
