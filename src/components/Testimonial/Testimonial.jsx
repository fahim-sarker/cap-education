import React from 'react'
import "./Testimonial.css"
import { Col, Container, Row } from 'react-bootstrap'

const Testimonial = () => {
  return (
    <section id='testi'>
      <Container>
        <Row>
            <Col lg={12}>
            <div className="testimonial-text">
              <h4>Testimonial</h4>
              <h3>What Our Student Feedback</h3>
            </div>
            </Col>
        </Row>
        <Row>
            <Col lg={12}>
                <div className="testimain">
                    
                </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Testimonial
