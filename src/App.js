import { Header } from './componentc/Header';
import { Navbar } from './componentc/Navbar';
import { Profil } from './componentc/Profil';
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
