import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About, Home, Vans, VanDetail } from './routes';
import makeServer from "./server";

import Layout from './components/layout/Layout';
import './assets/css/app.css';

makeServer();

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
