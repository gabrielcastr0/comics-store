import './App.css';
import {MainRoutes} from './routes/MainRoutes';

import { Footer } from './components/Footer';
import { Header } from './components/Header';

export const App = () => {
  return(
    <main>
      <Header />
      <MainRoutes />
      <Footer />
    </main>
  )
}
