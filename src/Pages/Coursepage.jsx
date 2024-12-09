import React from 'react'
import Reusable from "../components/reusable/Reusable"
import Coursemore from '../Coursemore/Coursemore'


const Coursepage = () => {
  return (
    <>
      <Reusable
        title="Course"
        subtitle="Home  /  Course "
        subtitleLink="/"
      />
      <Coursemore/>
    </>
  )
}

export default Coursepage
