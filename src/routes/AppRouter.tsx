import { Route, Routes, Navigate } from 'react-router-dom';

import Final from '../pages/Final';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/" replace />} />
      <Route path="/final" element={<Final />} />
    </Routes>
  )
};
