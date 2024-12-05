import React from 'react'
import "./Cts.css"
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRightLong } from "react-icons/fa6";
import Ct from "../../assets/ctaman.png"

const Cta = () => {
  return (
    <section id='cta'>
      <Container>
        <Row className='ctamain'>
            <Col lg={4}>
                <div className="firstcol">
                <h4>Get your quality</h4>
                <h5>Skills certificate
                from the edulerns</h5>
                <button className="btncta">
                Get Started Now
                  <FaArrowRightLong className="icon" />
                </button>
                </div>
            </Col>
            <Col lg={3}>
                <div className="secondcol">
                    <img src={Ct} alt="Ct" />
                </div>
            </Col>
            <Col lg={5}>
                <div className="thirdcol">
                    <div className="round"></div>
                </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Cta
