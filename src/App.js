import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {  HeaderContainers } from './componentc/Header/HeaderContainer';
import { Navbar } from './componentc/Navbar/Navbar';
import {  ProfilConteiners } from './componentc/Profil/ProfilConteiners';
import {Headers} from './Stule'
import { DialogConteiners } from './componentc/Dialogs/DialogConteiners'
import { UsersConteiner } from './componentc/Users/UsersContainer';


function App() {
  return (
    <BrowserRouter>
   <Headers className="app-mein">
   
    <HeaderContainers />
    <div className='fix'>
      <Navbar />
      <div>
        <Routes>
        <Route path='/:userId' element={< ProfilConteiners />} />                             
        <Route path='/dialogs/*' element={<DialogConteiners />} />
        <Route path='/users/*' element={<UsersConteiner/>}/>
        
        </Routes>
        
      </div>
      </div>
        </Headers>
        </BrowserRouter>
  );
}

export default App
