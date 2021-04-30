import logo from './logo.svg';
import './App.css';
import Login from "./components/login.js";
import SignUp from "./components/signup.js";
import Welcome from "./components/welcome.js";
import { auth } from "./firebase";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react';


function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email
      }
      if (userAuth) {
        console.log(userAuth)
        setUser(user)
      } else {
        setUser(null)
      }
    })
    return unsubscribe
  }, [])
  return (
    <Router>
      <div className="App">
        {user ? <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/"}>Manoa Board</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link onClick={() => auth.signOut()} className="nav-link" >Sign out</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
          :
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
                </ul>
              </div>
            </div>
          </nav>
        }
        <div className="outer">
          {user ?
            <Switch>
              <Route exact path='/' component={Welcome} />
            </Switch>
            :
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
            </Switch>
          }

        </div>
      </div></Router>
  );
}

export default App;
