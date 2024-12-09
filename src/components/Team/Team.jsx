import React from 'react';
import "./Team.css";
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Team1 from "../../assets/team1i.jpg";
import Team2 from "../../assets/team4.png";
import Team3 from "../../assets/team3.png";
import { Link } from 'react-router-dom';

const Team = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Web Developer',
      img: Team1,
    },
    {
      name: 'Jane Smith',
      role: 'UI/UX Designer',
      img: Team2, 
    },
    {
      name: 'Michael Johnson',
      role: 'Project Manager',
      img: Team3,
    }
  ];

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
          {teamMembers.map((member, index) => (
            <Col lg={4} key={index}>
              <Link to="/teacherdetails" state={member}>
                <div className="team-member">
                  <img src={member.img} alt={member.name} className="team-image" />
                  <div className="team-hover">
                    <h5>{member.name}</h5>
                    <p>{member.role}</p>
                    <div className="social-icons">
                      <a href="#" className="social-icon"><FaFacebook /></a>
                      <a href="#" className="social-icon"><FaTwitter /></a>
                      <a href="#" className="social-icon"><FaLinkedin /></a>
                    </div>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Team;
