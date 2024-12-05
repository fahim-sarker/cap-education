import React from 'react'
import "./Contactdetails.css"
import { Col, Container, Row } from 'react-bootstrap'
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";


const Contactdetails = () => {
  return (
    <section id='details'>
      <Container>
        <Row>
            <Col lg={4}>
                <div className="detailcard">
                    <i><BsFillTelephoneOutboundFill/></i>
                    <p>Have any question?</p>
                    <h4>Free + 23 (000)-8050</h4>
                </div>
            </Col>
            <Col lg={4}>
                <div className="detailcard">
                    <i><IoMailOutline/></i>
                    <p>Send Email</p>
                    <h4>Demo@gmail.com</h4>
                </div>
            </Col>
            <Col lg={4}>
                <div className="detailcard">
                    <i><IoLocationOutline/></i>
                    <p>Visit Anytime</p>
                    <h4>6391 Elgin St. Delaware 10299</h4>
                </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contactdetails
