import './App.css';
import StartScreen from './components/StartScreen/StartScreen';
import Header from './components/Header/Header';
import About from './components/About/About';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <main>
        <StartScreen />
        <About />
      </main>
    </div>
    
  );
}

export default App;
