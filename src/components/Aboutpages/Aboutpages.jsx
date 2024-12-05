import React from 'react'
import "./Aboutpages.css"
import { Col, Container, Row } from 'react-bootstrap'
import Pages1 from "../../assets/pages2.jpg"
import { TbTargetArrow } from "react-icons/tb";
import { HiLightBulb } from "react-icons/hi";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";



const Aboutpages = () => {
  return (
    <section id='aboutpages'>
      <Container>
        <Row>
            <Col lg={6}>
                <div className="aboutright">
                    <img src={Pages1} alt="Pages1" />
                </div>
            </Col>
            <Col lg={6}>
                <div className="aboutleft">
                    <a href="#">About Us<MdOutlineKeyboardDoubleArrowRight className='doublearr'/></a>
                    <h3>Establishing a community that encourages lifelong learning</h3>
                    <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks  The generated Lorem Ipsum is therefore always free from repetition</p>
                    <div className="part1">
                    <h2><TbTargetArrow className='mison'/>Our Mission</h2>
                    <h6>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks  The generated Lorem Ipsum is therefore always free from repetition</h6>
                    </div>
                    <div className="part2">
                    <h2><HiLightBulb className='mison'/>Our Vision</h2>
                    <h6>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks  The generated Lorem Ipsum is therefore always free from repetition</h6>
                    </div>
                </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Aboutpages
