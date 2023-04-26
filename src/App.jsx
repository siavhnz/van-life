import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import { About, Home } from './routes';
import './assets/css/app.css';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
