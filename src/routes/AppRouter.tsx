import { Route, Routes, Navigate } from 'react-router-dom';

import Perfil from '../pages/Perfil';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/" replace />} />
      <Route path="/perfil" element={<Perfil />} />
    </Routes>
  )
};
