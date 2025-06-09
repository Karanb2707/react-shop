import Navbar from "./components/Navbar"
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Cart from "./pages/Cart"

function App() {

  return (
    <div>
      <div>
        <Navbar />
      </div>
      {/* 35 min */}

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  )
}

export default App
