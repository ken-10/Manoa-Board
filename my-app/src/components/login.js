import React, {useRef} from "react";
import { auth } from "../firebase";

const Login = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const signUp = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user)
        }).catch(err => {
            console.log(err)
        })
    }
    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user)
        }).catch(err => {
            console.log(err)
        })
    }
        return (
            <form>

                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input ref={emailRef} type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group" style={{paddingBottom: "15px"}}>
                    <label>Password</label>
                    <input ref={passwordRef} type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button onClick={signIn} type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot text-right">
                    Not yet registered? <a onClick={signUp} href="#">Sign up</a>
                </p>
            </form>
        );
}

export default Login