import './App.css';
import Featured from './components/Featured';
import Hero from './components/Hero';
import Marketing from './components/Marketing';
import SatisfiedClients from './components/SatisfiedClients';
function App() {
  return (
    <div>
      <Hero/>
      <Featured/>
      <SatisfiedClients/>
      <Marketing/>
    </div>
  );
}

export default App;
