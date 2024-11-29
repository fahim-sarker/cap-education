import React from "react";
import "./Banner.css";
import { Col, Container, Row } from "react-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";
import Banright from "../../assets/Slider.png"
import Banright1 from "../../assets/vector.png";
import Banright2 from "../../assets/vector1.png";
import Banright3 from "../../assets/star.png";
import Banright4 from "../../assets/vector2.png";

const Banner = () => {
  return (
    <section id="banner">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="banner-left">
              <h2>A Better Learning Journey Future Start Here</h2>
              <p>
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary,
              </p>
              <div className="button">
                <button className="btn">
                  Take Now
                  <FaArrowRightLong className="icon" />
                </button>
                <button className="btn1">
                  Find The Course
                  <FaArrowRightLong className="icon" />
                </button>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="banner-right">
              <img src={Banright} alt="Banright" />
              <div className="cart">
                <h6>Latest Work Shop</h6>
                <p>Latest Work Shop</p>
                <button className="btnright">
                  Take Now
                  <FaArrowRightLong className="icon" />
                </button>
              </div>
              <img src={Banright1} alt="Banright1" className="vector" />
              <img src={Banright2} alt="Banright2" className="vector1" />
              <img src={Banright3} alt="Banright3" className="vector2" />
              <img src={Banright4} alt="Banright4" className="vector3" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
