import {Routes, Route} from 'react-router-dom';

import './App.css';

import { Footer } from './components/Footer';
import { Header } from './components/Header';

import {Home} from './pages/Home';
import {HQs} from './pages/HQs';

export const App = () => {
  return(
    <main>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/hqs" element={<HQs />}/>
      </Routes>

      <Footer />
    </main>
  )
}
