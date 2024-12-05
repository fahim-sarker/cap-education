import React from 'react'
import  Navbar  from "../menu/Menu"
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Copyright from '../Copyright/Copyright'

const Rootlayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
      <Copyright/>
    </>
  )
}

export default Rootlayout
