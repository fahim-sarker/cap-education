import React from 'react'
import "./Copyright.css"
import { Container, Row ,Col} from 'react-bootstrap'

const Copyright = () => {
  return (
    <section id='cprt'>
      <Container>
        <Row>
            <Col lg={12}>
                <div className="cprtext">
                    <p>© Copyright 2023 by Company.com</p>
                </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Copyright
