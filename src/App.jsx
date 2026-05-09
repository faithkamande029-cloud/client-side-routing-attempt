import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Login from "./components/login"
import About from "./components/about"

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
