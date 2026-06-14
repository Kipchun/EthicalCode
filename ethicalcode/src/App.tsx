import React from 'react';
import logo from './logo.svg';
import './App.css';
import Iframe from './components/Iframe';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <main style={{ padding: 20 }}>
        {/* <h2>Embedded App (iframe)</h2> */}
        <Iframe src="http://localhost:8080" title="Ethical App" height={600} />
      </main>
    </div>
  );
}

export default App;
