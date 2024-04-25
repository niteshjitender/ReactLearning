import './App.css';
import {Greet} from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
function App() {
  return (
    <div className="App">
      <Greet name="Diana" heroName="Wonderwoman"/>
      <Welcome name="Bruce" heroName="Batman"/>
    </div>
  );
  
}

export default App;
