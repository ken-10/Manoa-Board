import React, { Component } from "react";
import {Container, Row, Col} from "react-bootstrap";

export default class Welcome extends Component {
    render() {
        return (
            <div className='inner'>
                <h1>
                    Welcome to Manoa Board. 
                    <span aria-label="city sunrise" role="img"> 🍃</span>
                </h1>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p>.</p>
                <p style={{fontSize: "20px"}}>
                    <span aria-label="city sunrise" role="img">🌇  </span>
                    We inspire to connect students through pictures.
                </p>
                <p className="text-right">.</p>
                <p className="text-right">.</p>
                <p className="text-right">.</p>
                <p className="text-right">.</p>
                <p className="text-right" style={{fontSize: "20px"}}>
                    <a href="/sign-in">Join today</a>
                    , it's free! 
                    <span aria-label="a rocket blasting off" role="img"> 🚀</span>
                </p>
            </div>

            // <Container>
            //     <Row>
            //         <Col>
            //             <h1>Welcome to Manoa Board.</h1>
            //         </Col>
            //     </Row>
            // </Container>
        );
    }
}