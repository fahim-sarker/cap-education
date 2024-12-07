import React from 'react'
import "./Blogdetailscom.css"
import { Col, Container, Row } from 'react-bootstrap'
import { MdAlarm } from "react-icons/md";
import { FaFacebookF,FaLinkedinIn ,FaTwitter ,FaYoutube } from "react-icons/fa";



const Blogdetailscom = () => {
  return (
    <section id='detail'>
      <Container>
        <Row>
          <Col lg={8}>
            <div className="blogdetailleft">
              <div className="blogdetailleftblue"></div>
              <div className="detailflex">
                <p>Development</p>
                <h6><MdAlarm className='alarm'/>26 Mar, 2023</h6>
              </div>
                <h3>The Complete Web Developer Guideline 2023</h3>
                <p className='ppara'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sollicitudin varius mauris non dignissim. Sed quis iaculis est. Nulla quam neque, interdum vitae fermentum lacinia, interdum eu magna. Mauris non posuere tellus. Donec quis euismod tellus. Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor</p>
                <h6 className='ppara1'>Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. Mauris gravida lacus metus, ac sagittis tortor hendrerit sit amet. Aenean dictum eget nulla in pharetra. Vestibulum vulputate vehicula mattis. Vivamus dictum nec dui porta rutrum. Nam erat felis, mattis ac massa </h6>
                <div className="blogdetailtags">
                    <ul className='blogmenu'>
                      <li className='headtag'>Tags</li>
                      <li className='head1'>Marketing</li>
                      <li className='head1'>Development</li>
                      <li className='head1'>Design</li>
                    </ul>
                  <ul className="blogdetailicons">
                    <li><FaFacebookF/></li>
                    <li><FaLinkedinIn/></li>
                    <li><FaTwitter/></li>
                    <li><FaYoutube/></li>
                  </ul>
                </div>
                <div className="commentsdetail">
                  <h4>2 Comments</h4>
                  <div className="comments1">
                      <div className="commentball"></div>
                      <div className="commenttext">
                        <h4>David Shon</h4>
                        <p>Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. </p>
                        <h5>Reply</h5>
                      </div>
                  </div>
                  <div className="comments1">
                      <div className="commentball"></div>
                      <div className="commenttext">
                        <h4>Jhon Watchson</h4>
                        <p>Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor. </p>
                        <h5>Reply</h5>
                      </div>
                  </div>
                </div>
                <div className="commentform">
                <h4>Leave a Comment</h4>
                <form action="">
                  <input type="text" placeholder='Your Name' className='nameinputblog'/>
                  <input type="text" placeholder='Your Email' className='emailinputblog'/>
                  <textarea name="message" placeholder='Write a Message' className="messagearea" id=""></textarea>
                </form>
                <button className='blogdetailbtn'>Submit Comment</button>
                </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="blogdetailright">
              <input type="text" placeholder='Type here' className='blogdetailsearch'/>
              <div className="latestpost">
                <h4 className='latesttext'>Latest Post</h4>
                <div className="latesetcon1">
                  <div className="conbox"></div>
                  <div className="">
                    <h6><MdAlarm className='alarm'/>26 Mar, 2023</h6>
                    <h5 className='context'>The Complete Web Developer Guideline 2023</h5>
                  </div>
                </div>
                <div className="latesetcon1">
                  <div className="conbox"></div>
                  <div className="">
                    <h6><MdAlarm className='alarm'/>26 Mar, 2023</h6>
                    <h5 className='context'>The Complete Web Developer Guideline 2023</h5>
                  </div>
                </div>
                <div className="latesetcon1">
                  <div className="conbox"></div>
                  <div className="">
                    <h6><MdAlarm className='alarm'/>26 Mar, 2023</h6>
                    <h5 className='context'>The Complete Web Developer Guideline 2023</h5>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Blogdetailscom
