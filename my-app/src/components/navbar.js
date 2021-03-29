import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
} from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

class BootstrapNavbar extends React.Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar className="justify-content-center" bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="#home">Manoa Board</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="m-auto">
                                        <Form inline>
                                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                            <Button variant="outline-success">Search</Button>
                                        </Form>
                                    </Nav>
                                    <Nav>
                                        <Nav.Link className="ml-auto">Add</Nav.Link>
                                        <Nav.Link>Explore</Nav.Link>
                                        <Nav.Link>Profile</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                            <Switch>
                                <Route exact path="/">
                                </Route>
                                <Route path="/about-us">
                                </Route>
                                <Route path="/contact-us">
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )
    }
}

export default BootstrapNavbar;