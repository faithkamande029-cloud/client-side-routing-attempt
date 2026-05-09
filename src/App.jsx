import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Login from "./pages/login"
import About from "./pages/about"
import UserProfile from "./pages/userProfile"
import ErrorPage from "./components/error-page"


function App() { 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<ErrorPage/>}/>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/profile:id" element={<UserProfile/>} />        
      </Routes>
    </BrowserRouter>
  )
}

export default App
