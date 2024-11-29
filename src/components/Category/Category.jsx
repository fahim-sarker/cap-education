import React from "react";
import "./Category.css";
import { Col, Container, Row } from "react-bootstrap";
import Cat from "../../assets/cat.png"
import Slider from "react-slick";

const Category = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <section id="category">
      <div className="cat-bg">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="cat-text">
                <h4>Category</h4>
                <h3>Favorite Topics To Learn</h3>
              </div>
            </Col>
          </Row>
          <Row className="catcard">
          <Slider {...settings}>
              <Col lg={3}>
                  <div className="catcard-1">
                      <div className="catimg">
                          <img src={Cat} alt="Cat" />
                      </div>
                          <h4 className="catext">Business Analysis</h4>
                          <h6 className="catext1">8 Courses</h6>
                  </div>
              </Col>
              <Col lg={3}>
                  <div className="catcard-1">
                      <div className="catimg">
                          <img src={Cat} alt="Cat" />
                      </div>
                          <h4 className="catext">Data Science</h4>
                          <h6 className="catext1">6 Courses</h6>
                  </div>
              </Col>
              <Col lg={3}>
                  <div className="catcard-1">
                      <div className="catimg">
                          <img src={Cat} alt="Cat" />
                      </div>
                          <h4 className="catext">Digital Marketing</h4>
                          <h6 className="catext1">5 Courses</h6>
                  </div>
              </Col>
              <Col lg={3}>
                  <div className="catcard-1">
                      <div className="catimg">
                          <img src={Cat} alt="Cat" />
                      </div>
                          <h4 className="catext">Business Ideas</h4>
                          <h6 className="catext1">9 Courses</h6>
                  </div>
              </Col>
          </Slider>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Category;
