import './App.css';
import StartScreen from './components/StartScreen/StartScreen';
import Header from './components/Header/Header';
import About from './components/About/About';
import Pets from './components/Pets/Pets';
import pets from './data/pets.js';
import { useState } from 'react';

function App() {
  const [listPets, setListPets] = useState(pets);
  
  return (
    <div className='app-container'>
      <Header />
      <main>
        <StartScreen />
        <About />
        <Pets listPets={listPets}/>
      </main>
    </div>
  );
}

export default App;
