import React from 'react'
import Reusable from "../components/reusable/Reusable"
import Blogdetailscom from '../components/Blogdetails/Blogdetailscom'


const Blogdetails = () => {
  return (
    <>
      <Reusable
        title="Blog details"
        subtitle="Home  /  Blog details "
        subtitleLink="/"
      />
      <Blogdetailscom/>
    </>
  )
}

export default Blogdetails
