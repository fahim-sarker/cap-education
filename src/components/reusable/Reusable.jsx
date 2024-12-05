import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Reusable.css"
import { Link } from 'react-router-dom'

const Reusable = ({ title, subtitle,subtitleLink  }) => {
  return (
    <div id='reusablemain'>
      <Container>
        <Row>
            <Col lg={12}>
            <div className="workusable">
                <h2>{title}</h2>
                <h3><Link to={subtitleLink}>{subtitle}</Link></h3>
            </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Reusable
