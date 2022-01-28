import {Routes, Route} from 'react-router-dom';

import './App.css';

import { Footer } from './components/Footer';
import { Header } from './components/Header';

import {Home} from './pages/Home';

export const App = () => {
  return(
    <main>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />}/>
        {/* <Route path="*" element={<NotFound />}/> */}
      </Routes>

      <Footer />
    </main>
  )
}
