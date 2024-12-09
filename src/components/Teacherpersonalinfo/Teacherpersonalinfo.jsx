import React from "react";
import "./Teacherpersonalinfo.css";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";


const Teacherpersonalinfo = () => {
  let location = useLocation();
  let { name, role, img } = location.state || {};
  return (
    <section id="teacherpersonalinfo">
      <Container>
        <Row>
          <Col lg={5}>
            <img src={img} alt="img" className="teacherimage" />
          </Col>
          <Col lg={6} className="offset-1">
            <div className="teacherinfo">
              <h4>Hello, I’m {name}</h4>
              <h5>{role}</h5>
              <h6>
                There are many variations of passages of Lorem Ipsum
                avagtilable, but the majority have suffered alteration in some
                form, by injected hudfdfmour, or randomised words which don't
                look even slightly believable. If you are going to use a passage
                of Lorem Ipsum. Class aptent taciti sociosqu ad litora torquent
                pe
              </h6>
              <p>
                Himenaeos. Vestibulum sollicitudin varius mauris non dignissim.
                Sed quis iaculis est. Nulla quam neque, interdum vitae fermentum
                lacinia, interdum eu magna. Mauris non posuere tellus. Donec
                quis euismod tellus. Nam vel lacus eu nisl bibendum accumsan
                vitae vitae nibh. Nam nec eros id magna hendrerit sagittis.
                Nullam sed mi non odio feugiat volutpat sit amet nec elit.
                Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus
                dolo
              </p>
              <div className="percentflex">
                <h2 className="percent">{role}</h2>
                <h6 className="parcent">80%</h6>
              </div>
              <div className="percentline">
                <div className="uxpercent"></div>
              </div>
              <div className="info-icon">
                <i className="infoicon">
                  <FaFacebook />
                </i>
                <i className="infoicon">
                  <FaLinkedin />
                </i>
                <i className="infoicon">
                  <FaYoutube />
                </i>
                <i className="infoicon">
                  <FaTwitter />
                </i>
              </div>
              <button className="infobtn">
              Get In Touch
                  <FaArrowRightLong className="icon" />
                </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Teacherpersonalinfo;
