import { Route, Routes, Navigate } from 'react-router-dom';

import Inicio from '../pages/Inicio';
import Perfil from '../pages/Perfil';
import Ranking from '../pages/Ranking';
import Jogatina from '../pages/Jogatina';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/" replace />} />
      <Route path="/" element={<Inicio />} />
      <Route path="/inicio" element={<Inicio />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/ranking" element={<Ranking />} />
      <Route path="/jogatina" element={<Jogatina />} />
    </Routes>
  )
};
