import React from 'react'
import Reusable from "../components/reusable/Reusable"
import Bloglist from '../components/Bloglist/Bloglist'


const Blog = () => {
  return (
    <div>
      <Reusable
        title="Blog"
        subtitle="Home  /  Blog "
        subtitleLink="/"
      />
      <Bloglist/>
    </div>
  )
}

export default Blog
