import React from 'react'
import Reusable from "../components/reusable/Reusable"
import Contactform from '../components/Contactform/Contactform'
import Contactdetails from '../components/Contactdetails/Contactdetails'


const Contact = () => {
  return (
    <>
      <Reusable
        title="Contact us"
        subtitle="Home  /  Contact us "
        subtitleLink="/"
      />
      <Contactform/>
      <Contactdetails/>
    </>
  )
}

export default Contact