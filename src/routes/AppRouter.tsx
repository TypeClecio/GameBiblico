import { Route, Routes, Navigate } from 'react-router-dom';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/" replace />} />
      <Route path="/" element={<>Página inicial</>} />
    </Routes>
  )
};
