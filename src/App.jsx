import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import { About, Home, Vans, VanDetail } from './routes';
import makeServer from "./server";

import './assets/css/app.css';

makeServer();

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
