import AppRouter from './routes/AppRouter';
import { Analytics } from '@vercel/analytics/react';

import "./assets/styles/global.scss";

export default function App() {
  return (
    <>
      <AppRouter />
      <Analytics />
    </>
  )
};
