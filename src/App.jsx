import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./Pages/Home"
import Rootlayout from "./components/Root/Rootlayout"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Blog from "./Pages/Blog"



let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Rootlayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/blog" element={<Blog/>}></Route>
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
