import "./App.css";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MainRoutes } from "./routes/MainRoutes";

export function App() {
  return (
    <main>
      <Header />
      <MainRoutes />
      <Footer />
    </main>
  );
}
