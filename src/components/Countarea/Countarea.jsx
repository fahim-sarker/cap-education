import React from 'react'
import "./Countarea.css"
import { Col, Container, Row } from 'react-bootstrap'

const Countarea = () => {
  return (
    <section id='areea'>
      <Container>
        <Row>
            <Col lg={3}>
                <div className="counarea1">
                    <h3>30.3k</h3>
                    <h5>Student Enrolled</h5>
                </div>
            </Col>
            <Col lg={3}>
                <div className="counarea1">
                    <h3>40.5k</h3>
                    <h5>Class completed</h5>
                </div>
            </Col>
            <Col lg={3}>
                <div className="counarea1">
                    <h3>88.9%</h3>
                    <h5>satisfaction rate</h5>
                </div>
            </Col>
            <Col lg={3}>
                <div className="counarea1">
                    <h3>6.30+</h3>
                    <h5>Top instructors</h5>
                </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Countarea
