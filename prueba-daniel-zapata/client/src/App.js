import logo from './logo.svg';
import './App.css';
import { AllCharacters } from './components/layouts/AllCharacters';
import { CharacterByHouse } from './components/layouts/CharactersByHouse';
function App() {
  return (
    <div className="App">
      <AllCharacters/>
    </div>
  );
}

export default App;
