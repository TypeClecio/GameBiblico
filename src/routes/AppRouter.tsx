import { Route, Routes, Navigate } from 'react-router-dom';
import Ranking from '../pages/Ranking';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/" replace />} />
      <Route path="/ranking" element={<Ranking />} />
    </Routes>
  )
};
