import React, { Component } from "react";
export default class Login extends Component {
    render() {
        return (
            <form>

                <h3>Log in</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="username" className="form-control" placeholder="Enter username" />
                </div>

                <div className="form-group" style={{paddingBottom: "15px"}}>
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot text-right">
                    <a href="#">Forgot password?</a>
                </p>
            </form>
        );
    }
}