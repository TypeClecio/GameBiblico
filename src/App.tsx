import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>Início</>} />
        </Routes>
      </BrowserRouter>

      <Analytics />
    </>
  )
}

export default App
