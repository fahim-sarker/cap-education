import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./Pages/Home"
import Rootlayout from "./components/Root/Rootlayout"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Blog from "./Pages/Blog"
import Blogdetails from "./Pages/Blogdetails"
import Teacherdetails from "./Pages/Teacherdetails"
import Coursepage from "./Pages/Coursepage"




let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Rootlayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/blog" element={<Blog/>}></Route>
    <Route path="/blogdetails" element={<Blogdetails/>}></Route>
    <Route path="/teacherdetails" element={<Teacherdetails/>}></Route>
    <Route path="/course" element={<Coursepage/>}></Route>
  </Route>
))

function App() {

  return (
   <>
      <RouterProvider router={router}/>
   </>
  )
}

export default App
