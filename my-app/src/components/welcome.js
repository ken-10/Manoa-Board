import React, { Component } from "react";
import {Container, Row, Col} from "react-bootstrap";

export default class Welcome extends Component {
    render() {
        return (
            <div className='inner'>
                <h1>Welcome to Manoa Board.</h1>
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