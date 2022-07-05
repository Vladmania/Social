import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './componentc/Header/Header';
import { Navbar } from './componentc/Navbar/Navbar';
import {  ProfilConteiners } from './componentc/Profil/ProfilConteiners';
import {Headers} from './Stule'
import { DialogConteiners } from './componentc/Dialogs/DialogConteiners'


function App(props) {
  return (
    <BrowserRouter>
   <Headers className="app-mein">
    <Header />
    <div className='fix'>
      <Navbar />
      <div>
        <Routes>
        <Route path='/' element={< ProfilConteiners />} />
                                         
        <Route path='/dialogs/*' element={<DialogConteiners />} />
        
        </Routes>
        
      </div>
      </div>
        </Headers>
        </BrowserRouter>
  );
}

export default App
