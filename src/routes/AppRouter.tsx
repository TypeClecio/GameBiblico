import { Route, Routes, Navigate } from 'react-router-dom';

import Jogatina from '../pages/Jogatina';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/" replace />} />
      <Route path="/jogatina" element={<Jogatina />} />
    </Routes>
  )
};
