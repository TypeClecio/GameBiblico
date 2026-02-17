import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

import "./assets/styles/global.scss";

import Inicio from './pages/Inicio/Inicio';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Navigate to="/" replace />} />
          <Route path="/" element={<>Início</>} />
          <Route path="/inicio" element={<>Início</>} />
        </Routes>
      </BrowserRouter>

      <Analytics />
    </>
  )
}

export default App;
