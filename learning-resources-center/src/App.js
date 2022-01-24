import logo from './bookMuseum.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-headeßr">
        <img style={{width:"100%",height:"100%"}} src={logo}  alt="logo" />
        <p>
          Hi, Mingxiao. Welcome to Your Resources Center!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
