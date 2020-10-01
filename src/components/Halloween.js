import React, { useEffect, useState } from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Background from "../img/halloween-background.jpg"
import { countdown } from "./helpers";

export default function Halloween() {
    const [timeLeft, setTimeLeft] = useState(countdown());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(countdown());
        }, 1000);
        // Clear timeout if the component is unmounted
        return () => clearTimeout(timer);
    });
 
    return (
        <Container fluid style={halloweenStyles}>
            <Container className="text-center">
                <Row>
                    <Col className="heading-text col-12 mt-5  mb-md-5">
                        <h4> - Countdown To - </h4>
                        <h1>Halloween</h1> 
                    </Col>
                </Row>
                <Row>
                    <Col className="time-container mx-sm-auto ml-md-4 mb-3 col-5 col-md">
                        <span id="days" className="display-1">{timeLeft.days}</span>
                        <span className="unit-text h3 d-block">days</span>
                    </Col>
                    <Col className="time-container mx-sm-auto ml-md-4 mb-3 col-5 col-md">
    <span id="hours" className="display-1">{timeLeft.hours}</span>
                        <span className="unit-text h3 d-block">hours</span>
                    </Col>
                    <Col className="time-container mx-sm-auto ml-md-4 mb-3 col-5 col-md">
    <span id="minutes" className="display-1">{timeLeft.mins}</span>
                        <span className="unit-text h3 d-block">minutes</span>
                    </Col>
                    <Col className="time-container mx-sm-auto ml-md-4 mb-3 col-5 col-md">
    <span id="seconds" className="display-1">{timeLeft.secs}</span>
                        <span className="unit-text h3 d-block">seconds</span>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

const halloweenStyles = {
    width: '100vw',
    height: '100vh',
    background: `#000 url(${Background}) no-repeat fixed center`,
    backgroundSize: "cover"
}
