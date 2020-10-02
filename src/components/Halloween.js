import React, { useEffect, useState } from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { countdown } from "./helpers";

export default function Halloween(props) {
    const holidayStyles = {
        width: '100vw',
        height: '100vh',
        background: `#000 url(${props.holidayImg}) no-repeat fixed center`,
        backgroundSize: "cover"
    }
    const h1FontStyle = {
        fontFamily: `${props.holidayBigFont}`
    }

    const h4FontStyle = {
        fontFamily: `${props.holidaySmallFont}`
    }

    const [timeLeft, setTimeLeft] = useState(countdown(props.holidayDate));

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(countdown(props.holidayDate));
        }, 1000);
        // Clear timeout if the component is unmounted
        return () => clearTimeout(timer);
    });
 
    return (
        <Container fluid style={holidayStyles}>
            <Container className="text-center">
                <Row>
                    <Col className="heading-text col-12 mt-5  mb-md-5">
                        <h4 style={h4FontStyle}> - Countdown To - </h4>
                        <h1 style={h1FontStyle}>{props.holidayName}</h1> 
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
