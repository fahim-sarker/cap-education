import React from 'react'
import Banner from "../components/Banner/Banner"
import Category from "../components/Category/Category"
import About from "../components/About/About"
import Service from "../components/Service/Service"
import Course from "../components/Course/Course"
import Counter from "../components/Counter/Counter"
import Testimonial from "../components/Testimonial/Testimonial"
import Team from "../components/Team/Team"
import Cta from "../components/CTA/Cta"

const Home = () => {
  return (
    <>
      <Banner/>
      <Service/>
      <About/>
      <Category/>
      <Course/>
      <Counter/>
      <Testimonial/>
      <Team/>
      <Cta/>
    </>
  )
}

export default Home
