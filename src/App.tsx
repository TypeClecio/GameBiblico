import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

import "./assets/styles/global.scss";

import Inicio from './pages/Inicio/Inicio';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>
      </BrowserRouter>

      <Analytics />
    </>
  )
}

export default App;
