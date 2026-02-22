import { Routes, Route, Navigate } from 'react-router-dom';

import Inicio from '../pages/Inicio';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/" replace />} />
      <Route path="/" element={<Inicio />} />
      <Route path="/inicio" element={<Inicio />} />
    </Routes>
  )
};
