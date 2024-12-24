import React from "react";
import "./About.css";
import { Col, Container, Row } from "react-bootstrap";
import Aboutbg from "../../assets/aboutbg.png";
import Aboutbg1 from "../../assets/dot.png";
import Aboutbg2 from "../../assets/avector.png";
import Coach2 from "../../assets/mind.png";
import Coach3 from "../../assets/ashape.png";
import { motion } from "framer-motion";
import { fadein } from "../../Variants";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg={6}>
            <motion.div 
              variants={fadein("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.5}}
            className="about-left">
              <img src={Aboutbg} alt="Aboutbg" className="Aboutbg" />
              <img src={Aboutbg1} alt="Aboutbg1" className="Aboutbg1" />
              <img src={Aboutbg2} alt="Aboutbg1" className="Aboutbg2" />
              <div className="about-card">
                <div className="abcard-img">
                  <img src={Coach2} alt="Coach" />
                </div>
                <div className="abcard-text">
                  <p>Need to Know More Details?</p>
                  <a href="#">+(684) 555-0102</a>
                </div>
              </div>
            </motion.div>
          </Col>
          <Col lg={5} className="offset-lg-1">
            <div 
            className="about-right">
              <a href="#">About Us</a>
              <h2>Creating a Lifelong Learning Best Community </h2>
              <p>
                It uses a dictionary of over 200 Latin words, combined with a
                handful of model sentence structures, to generate Lorem Ipsum
                which looks{" "}
              </p>
              <img src={Coach3} alt="Coach3" />
              <div className="aboutright-card">
                <div className="rightabcard-img">
                  <img src={Coach2} alt="Coach" />
                </div>
                <div className="rightcard-text">
                  <h5>Flexible Classes</h5>
                  <p>
                    The generated Lorem Ipsum is therefore always free from
                    repetition, injected humour, or non-characteristic words
                    etc.
                  </p>
                </div>
              </div>
              <div className="aboutright-card">
                <div className="rightabcard-img">
                  <img src={Coach2} alt="Coach" />
                </div>
                <div className="rightcard-text">
                  <h5>Live Class From anywhere</h5>
                  <p>
                    The generated Lorem Ipsum is therefore always free from
                    repetition, injected humour, or non-characteristic words
                    etc.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
