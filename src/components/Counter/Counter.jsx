import React, { useState, useEffect } from 'react';
import "./Counter.css";
import Count from "../../assets/count.png";
import Count1 from "../../assets/dot1.png";
import { Col, Container, Row } from 'react-bootstrap';
import { FaArrowRightLong } from "react-icons/fa6";

const Counter = () => {
  let [minutes1, setMinutes1] = useState(38);
  let [seconds1, setSeconds1] = useState(59);
  let [minutes2, setMinutes2] = useState(38);
  let [seconds2, setSeconds2] = useState(59);

  useEffect(() => {
    let timer1 = setInterval(() => {
      if (seconds1 === 0 && minutes1 === 0) {
        clearInterval(timer1); 
      } else {
        if (seconds1 === 0) {
          setSeconds1(59);
          setMinutes1((prevMinutes) => prevMinutes - 1);
        } else {
          setSeconds1((prevSeconds) => prevSeconds - 1); 
        }
      }
    }, 500);

    return () => clearInterval(timer1); 
  }, [seconds1, minutes1]); 

  useEffect(() => {
    let timer2 = setInterval(() => {
      if (seconds2 === 0 && minutes2 === 0) {
        clearInterval(timer2); 
      } else {
        if (seconds2 === 0) {
          setSeconds2(59);
          setMinutes2((prevMinutes) => prevMinutes - 1);
        } else {
          setSeconds2((prevSeconds) => prevSeconds - 1);
        }
      }
    }, 500); 

    return () => clearInterval(timer2); 
  }, [seconds2, minutes2]); 

  return (
    <section id='counter'>
      <img src={Count} alt="Count" className='Count' />
      <Container>
        <Row>
          <Col lg={5}>
            <div className="countleft">
              <h3>Create Your Free Account</h3>
              <p>The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic.</p>
              <div className="count-left1">
                <button className="btn">
                  Join Now
                  <FaArrowRightLong className="icon" />
                </button>
                <img src={Count1} alt="Count1" />
              </div>
            </div>
          </Col>
          <Col lg={6} className='offset-lg-1'>
            <div className="count-right">
              <div className="countright">
                <h3>Register Now and</h3>
                <h4>Get a 50% Discount</h4>
                <div className="counting">
                  <div className="counter1">
                    <h5 className='ctxt'>{String(seconds1).padStart(2, '0')}</h5>
                    <h6>Secs</h6>
                  </div>
                  <div className="counter2">
                    <h5 className='ctxt'>{String(minutes1).padStart(2, '0')}</h5>
                    <h6>Min</h6>
                  </div>
                </div>
                <div className="counting-1">
                  <div className="counter3">
                    <h5 className='ctxt'>{String(seconds2).padStart(2, '0')}</h5>
                    <h6>Secs</h6>
                  </div>
                  <div className="counter4">
                    <h5 className='ctxt'>{String(minutes2).padStart(2, '0')}</h5>
                    <h6>Min</h6>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Counter;
