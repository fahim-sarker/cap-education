import React from 'react'
import "./Service.css"
import Outer from "../../assets/outer.png"
import { Col, Container, Row } from 'react-bootstrap'
import Coach from "../../assets/coach.png"
import Coach2 from "../../assets/mind.png"
import Coach3 from "../../assets/record.png"
import Coach4 from "../../assets/cvideo.png"
import { IoIosArrowForward } from "react-icons/io";
import {motion} from "framer-motion"
import { fadein } from '../../Variants'


const Service = () => {
  return (
    <section id='service'>
      <div className="bg-outer">
        <img src={Outer} alt="Outer"/>
      </div>
        <Container>
            <Row>
                <Col lg={3}>
                    <motion.div 
                    variants={fadein("left", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false, amount: 0.7}}
                    
                    className="card">
                        <div className="card-img">
                            <img src={Coach3} alt="Coach" />
                        </div>
                        <h3>Exclusive Coach</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit diam. Mauris cursus suscipit </p>
                        <a href="#">Read More<IoIosArrowForward className='icons'/></a>
                    </motion.div>
                </Col>
                <Col lg={3}>
                    <motion.div 
                    variants={fadein("left", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false, amount: 0.7}}
                    
                    className="card">
                        <div className="card-img">
                            <img src={Coach3} alt="Coach" />
                        </div>
                        <h3>Exclusive Coach</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit diam. Mauris cursus suscipit </p>
                        <a href="#">Read More<IoIosArrowForward className='icons'/></a>
                    </motion.div>
                </Col>
                <Col lg={3}>
                    <motion.div 
                    variants={fadein("left", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false, amount: 0.7}}
                    
                    className="card">
                        <div className="card-img">
                            <img src={Coach3} alt="Coach" />
                        </div>
                        <h3>Exclusive Coach</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit diam. Mauris cursus suscipit </p>
                        <a href="#">Read More<IoIosArrowForward className='icons'/></a>
                    </motion.div>
                </Col>
                <Col lg={3}>
                    <motion.div 
                    variants={fadein("left", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false, amount: 0.7}}
                    className="card">
                        <div className="card-img">
                            <img src={Coach3} alt="Coach" />
                        </div>
                        <h3>Exclusive Coach</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit diam. Mauris cursus suscipit </p>
                        <a href="#">Read More<IoIosArrowForward className='icons'/></a>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Service
