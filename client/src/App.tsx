import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const setFormData = () => {
    let formData = new FormData();
    formData.append('name', 'kevin')
    console.log(formData);

    for (const [key, value] of formData.entries()) {
      console.log('data: ', key, value);
    }
  }

  useEffect(() => {
    setFormData()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
