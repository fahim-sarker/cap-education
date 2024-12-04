import React from 'react'
import "./Team.css"
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Team1 from "../../assets/team1i.jpg"

const Team = () => {
  return (
    <section id='team'>
      <Container>
        <Row>
            <Col lg={12}>
            <div className="team-text">
              <h4>Team Member</h4>
              <h3>Meet Our Professional Team Members</h3>
            </div>
            </Col>
        </Row>
        <Row className='team-members'>
        <Col lg={4}>
            <div className="team-member">
              <img src={Team1} alt="Team Member 1" className="team-image" />
              <div className="team-hover">
                <h5>John Doe</h5>
                <p>Web Developer</p>
                <div className="social-icons">
                  <a href="#" className="social-icon"><FaFacebook /></a>
                  <a href="#" className="social-icon"><FaTwitter /></a>
                  <a href="#" className="social-icon"><FaLinkedin /></a>
                </div>
              </div>
            </div>
          </Col>
        <Col lg={4}>
            <div className="team-member">
              <img src={Team1} alt="Team Member 1" className="team-image" />
              <div className="team-hover">
                <h5>John Doe</h5>
                <p>Web Developer</p>
                <div className="social-icons">
                  <a href="#" className="social-icon"><FaFacebook /></a>
                  <a href="#" className="social-icon"><FaTwitter /></a>
                  <a href="#" className="social-icon"><FaLinkedin /></a>
                </div>
              </div>
            </div>
          </Col>
        <Col lg={4}>
            <div className="team-member">
              <img src={Team1} alt="Team Member 1" className="team-image" />
              <div className="team-hover">
                <h5>John Doe</h5>
                <p>Web Developer</p>
                <div className="social-icons">
                  <a href="#" className="social-icon"><FaFacebook /></a>
                  <a href="#" className="social-icon"><FaTwitter /></a>
                  <a href="#" className="social-icon"><FaLinkedin /></a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Team
