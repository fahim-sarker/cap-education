import React from 'react'
import "./Contactform.css"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Col, Container, Row } from 'react-bootstrap';
import { FaArrowRightLong } from "react-icons/fa6";



const Contactform = () => {
  return (
    <section id='ctform'>
      <Container>
        <Row>
            <Col lg={12}>
                <div className="colhead">
                <a href="#">Contact with  Us<MdOutlineKeyboardDoubleArrowRight className='doublearr'/></a>
                <h4>Feel free to write us anytime</h4>
                </div>
            </Col>
        </Row>
        <Row className='forminpu'>
            <Col lg={4} className='offset-2'>
                <input type="text" placeholder='Your Name' className='nameinput'/>
            </Col>
            <Col lg={4}>
                <input type="text" placeholder='Email Address' className='nameinput'/>
            </Col>
            <Col lg={4} className='offset-2'>
                <input type="text" placeholder='Phone' className='nameinput'/>
            </Col>
            <Col lg={4}>
                <input type="text" placeholder='Subject' className='nameinput'/>
            </Col>
            <Col lg={8} className='offset-2'>
                <textarea name="" id="" placeholder='Message' className='mesage'></textarea>
            </Col>
            <button className="formbtn1">
            Send a Message
                  <FaArrowRightLong className="icon" />
                </button>
        </Row>
      </Container>
    </section>
  )
}

export default Contactform
