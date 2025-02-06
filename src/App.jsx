import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./About"
import Home from "./Home"
import Contact from "./Contact"
import Navigate from "./Navigate"
import Shop from "./Shop"


function App() {

  return (
    <>

    <BrowserRouter>
    <Navigate/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Shop" element={<Shop/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
