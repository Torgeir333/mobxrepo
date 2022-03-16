import logo from './logo.svg';
import './App.css';
import TimerDisplay from './TimerDisplay';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ny 16.03.22 MiddleMac: nå med roterende trippelsvusj.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          App kjøres av React
        </a>
        <br></br>
        <p>
          Bruker Mobx state i egen komponent
        </p>
        <div>
          <TimerDisplay />
        </div>

      </header>

    </div>
  );
}

export default App;
