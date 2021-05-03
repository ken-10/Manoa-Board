import logo from './logo.svg';
import './App.css';
import Login from "./components/login.js";
import SignUp from "./components/signup.js";
import Welcome from "./components/welcome.js";
import { auth } from "./firebase";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import FileUpload from './components/upload';
import Profile from './components/profile';
import Dashboard from "./components/dashboard.js";


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
        {/* nav bar*/}
        {/*if user is logged in, show certain nav links */}
        {user ? <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/"}>Manoa Board</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/upload"} className="nav-link">Add Post</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/dashboard"}>Public Posts</Link>
                </li>
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">Your Posts</Link>
                </li>
                <li className="nav-item">
                  <Link onClick={() => auth.signOut()} className="nav-link" >Sign out</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
          :
          // else no user logged in (so show sign in and up options)
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

        {/* webpage body*/}
        <div className="outer">
          {user ?
            // paths allowed when users are logged in
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route path="/upload" >
                <FileUpload user={user}/>
              </Route>
              <Route path="/profile" >
                <Profile user={user}/>
              </Route>
              <Route path="/dashboard" component={Dashboard}/>
            </Switch>
            :
            //paths allowed when users are not logged in
            <Switch>
              <Route exact path='/' component={Welcome} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
            </Switch>
          }
        </div>
      </div></Router>
  );
}

export default App;
