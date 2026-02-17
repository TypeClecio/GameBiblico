import AppRouter from "./routes/AppRouter";
import { Analytics } from "@vercel/analytics/react";

import "./assets/styles/global.scss";

function App() {
  return (
    <>
      <AppRouter />
      <Analytics />
    </>
  )
}

export default App;
