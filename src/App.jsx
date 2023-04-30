import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About, Home, Vans, VanDetail, Host, HostDashboard, HostIncome, HostReviews } from './routes';
import makeServer from "./server";

import Layout from './components/layout/Layout';
import './assets/css/app.css';

makeServer();

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="/host" element={<Host />} >
            <Route index element={<HostDashboard />} />
            <Route path="income" element={<HostIncome />} />
            <Route path="reviews" element={<HostReviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
