import { Route, Routes, Navigate } from 'react-router-dom';

import Inicio from '../pages/Inicio';

function AppRouter() {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/" replace />} />
      <Route path="/" element={<Inicio />} />
      <Route path="/inicio" element={<Inicio />} />
    </Routes>
  )
}

export default AppRouter;
