import logo from './logo.svg';
import './App.css';
import Login from "./components/login.js";
import SignUp from "./components/signup.js";
import Welcome from "./components/welcome.js";
import makePost from "./components/makePost.js";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'


function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/"}>Manoa Board</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/make-post"}>Make Post</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="outer">
          <div className="inner">
            <Switch>
              <Route exact path='/' component={Welcome} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/make-post" component={makePost}/>
            </Switch>
          </div>
        </div>
      </div></Router>
  );
}

export default App;
