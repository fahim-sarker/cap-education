import React from 'react'
import Reusable from "../components/reusable/Reusable"
import Aboutpages from '../components/Aboutpages/Aboutpages'
import Countarea from '../components/Countarea/Countarea'
import Course from '../components/Course/Course'
import Testimonial from '../components/Testimonial/Testimonial'
import Team from '../components/Team/Team'

const About = () => {
  return (
    <>
      <Reusable
        title="About"
        subtitle="Home  /  About "
        subtitleLink="/"
      />
      <Aboutpages/>
      <Countarea/>
      <Course/>
      <Testimonial/>
      <Team/>
    </>
  )
}

export default About
