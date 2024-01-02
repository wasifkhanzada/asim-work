import React from 'react';
import './Section_7.css'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Massage from './Assests/massage.png';

function Section_7() {
  return (
    <div className='section-7-two'>
<Container>

    <Row className='d-fl'> 
   
        <Col md={6}>
            <div className="section-7-image">
                <img src={Massage} alt=""  className='massage-image'/>
            </div>
        </Col>
        <Col md={6}>
          
            <div className='Inquiry'>
                <h1>Want an Inquiry? </h1>
            </div>
        <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail" className='email col-12 col-lg-6 col-md-12 col-sm-12'>
          <Form.Label >Email*</Form.Label>
          <Form.Control type="email" placeholder="Enter email" className='placeholder'/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword" className='col-12 col-lg-6 col-md-12 col-sm-12'> 
          <Form.Label className='email '>Last Name*</Form.Label>
          <Form.Control type="last name" placeholder="Last Name" className='placeholder'/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label className='email'>Your Email*</Form.Label>
        <Form.Control placeholder="Asimqasim@gmail.com" className='placeholder'/>
      </Form.Group>

      <Row className="mb-3">

        <Form.Group as={Col} controlId="formGridState" className='col-12 col-md-6 col-sm-12'>
          <Form.Label className='email'>Country*</Form.Label>
          <Form.Select defaultValue="Choose..." className='placeholder'>
            <option>Select Country</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState" className='col-12 col-md-6 col-sm-12'>
          <Form.Label  className='email'>Interested In*</Form.Label>
          <Form.Select defaultValue="Choose..." className='placeholder'>
            <option>Discord</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
        <label className='massage-lable'>Massage</label>
        <textarea className='massage-box placeholder' placeholder='Write message here...'></textarea>

      </Row>

          <div class="section-7-btn">
            <a href="#">Submit</a>
          </div>
    </Form>
 
        </Col>
        
        
    </Row>
</Container>
</div>
  )
}

export default Section_7
