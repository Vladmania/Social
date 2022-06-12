import { Header } from './componentc/Header/Header';
import { Navbar } from './componentc/Navbar/Navbar';
import { Profil } from './componentc/Profil/Profil';
import {Headers} from './Stule'


function App() {
  return (
   <Headers className="app-mein">
    <Header />
    <div className='fix'>
      <Navbar />
      <Profil />
      </div>
    
        </Headers>
  );
}

export default App
