import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dialogs } from './componentc/Dialogs/Dialogs';
import { Header } from './componentc/Header/Header';
import { Navbar } from './componentc/Navbar/Navbar';
import { Profil } from './componentc/Profil/Profil';
import {Headers} from './Stule'


function App() {
  return (
    <BrowserRouter>
   <Headers className="app-mein">
    <Header />
    <div className='fix'>
      <Navbar />
      <div>
        <Routes>
        <Route path='/dialogs' element={<Dialogs/>} />
        <Route path='/profil' element={<Profil/>} />
        </Routes>
      </div>
      </div>
        </Headers>
        </BrowserRouter>
  );
}

export default App
