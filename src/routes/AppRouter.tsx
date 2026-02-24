import { Route, Routes, Navigate } from 'react-router-dom';

import Ranking from '../pages/Ranking';
import Jogatina from '../pages/Jogatina';
import Final from '../pages/Final';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/" replace />} />
      <Route path="/ranking" element={<Ranking />} />
      <Route path="/jogatina" element={<Jogatina />} />
      <Route path="/final" element={<Final />} />
    </Routes>
  )
};
