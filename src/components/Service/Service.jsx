import React from 'react'
import "./Service.css"
import Outer from "../../assets/outer.png"
import { Col, Container, Row } from 'react-bootstrap'
import Coach from "../../assets/coach.png"
import Coach2 from "../../assets/mind.png"
import Coach3 from "../../assets/record.png"
import Coach4 from "../../assets/cvideo.png"
import { IoIosArrowForward } from "react-icons/io";


const Service = () => {
  return (
    <section id='service'>
      <div className="bg-outer">
        <img src={Outer} alt="Outer"/>
      </div>
        <Container>
            <Row>
                <Col lg={3}>
                    <div className="card">
                        <div className="card-img">
                            <img src={Coach3} alt="Coach" />
                        </div>
                        <h3>Exclusive Coach</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit diam. Mauris cursus suscipit </p>
                        <a href="#">Read More<IoIosArrowForward className='icons'/></a>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className="card">
                        <div className="card-img">
                            <img src={Coach4} alt="Coach" />
                        </div>
                        <h3>Creative Minds</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit diam. Mauris cursus suscipit </p>
                        <a href="#">Read More<IoIosArrowForward className='icons'/></a>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className="card">
                        <div className="card-img">
                            <img src={Coach2} alt="Coach" />
                        </div>
                        <h3>Video Tutorials</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit diam. Mauris cursus suscipit </p>
                        <a href="#">Read More<IoIosArrowForward className='icons'/></a>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className="card">
                        <div className="card-img">
                            <img src={Coach} alt="Coach" />
                        </div>
                        <h3>Worlds Record</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit diam. Mauris cursus suscipit </p>
                        <a href="#">Read More<IoIosArrowForward className='icons'/></a>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Service
