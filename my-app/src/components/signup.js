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
        ).then(userCredential => {
            console.log(userCredential.user)
        }).catch(err => {
            console.log(err)
        })
    }
    // const signIn = e => {
    //     e.preventDefault();
    //     auth.signInWithEmailAndPassword(
    //         emailRef.current.value,
    //         passwordRef.current.value
    //     ).then(user => {
    //         console.log(user)
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // }
        return (
            <form className="inner">

                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input ref={emailRef} type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group" style={{paddingBottom: "15px"}}>
                    <label>Password</label>
                    <input ref={passwordRef} type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button onClick={signUp} type="submit" className="btn btn-dark btn-lg btn-block">Sign up</button>
                <p className="forgot text-right">
                    Already registered? <a href="/sign-in">Log in</a>
                </p>
            </form>
        );
}

export default Login