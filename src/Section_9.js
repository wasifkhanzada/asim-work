import React from 'react';
import './Section_9.css';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import FooterLogo from './Assests/Logo.png';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { faFacebookF ,faInstagram , faTwitter} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Section_9() {
    return (
        <>
        <div className="sub-footer">
            <Container>
                <Row>

                    <Col lg={6}>
                        <div className="footer-logo">
                            <img src={FooterLogo} alt="" className='main-logo'/>
                            <div className='parent-link'>
                                <div className='facebook'>
                                    <a href="#"><FontAwesomeIcon icon={faFacebookF}  style={{color: "#000000",}} /></a>
                                </div>
                                <div className='facebook'>
                                    <a href="#"><FontAwesomeIcon icon={faInstagram}  style={{color: "#000000",}} /></a>
                                </div>
                                <div className='facebook'>
                                    <a href="#"><FontAwesomeIcon icon={faTwitter}  style={{color: "#000000",}} /></a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2}>
                        <div className='sub-footer-lable'>
                            <ul>
                                <li><h4>Community</h4></li>
                                <li><a href="#">Discord</a></li>
                                <li><a href="#">Software</a></li>
                            </ul>

                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className='sub-footer-lable'>
                            <ul>
                                <li><h4>Subscribe to Newsletter</h4></li>
                                <li><p>Sign up today for our exclusive newsletter giving helpful knowledge, tips, and more for your trading journey.</p></li>
                                <li>
                                    <InputGroup className="mb-3">
                                        <Form.Control placeholder="Email address"aria-label="Recipient's username"aria-describedby="basic-addon2"className='sub-footer-input'/>
                                        <Button variant="outline-secondary" id="button-addon2 " className='input-button'>Subscribe</Button>
                                    </InputGroup>
                                </li>
                            </ul>

                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
        <div className='footer-top'>
            <div className='footer'>
            <Container>
               <Row>
                   <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                       <p className='m-0'>© 2023.All Rights Reserved</p>
                   </Col>
                   <Col xs={12} sm={6} md={6} lg={6} xl={6} className="d-flex justify-content-end">
                       <div className="foter-main">
                           <p> <a href="#"> Terms & Conditions</a></p>
                           <span className='sub'>•</span>
                           <p> <a href="#">Privacy Policy</a> </p>
                       </div>
                   </Col>

               </Row>
            </Container>
        </div>
        </div>

</>
)
}

export default Section_9
