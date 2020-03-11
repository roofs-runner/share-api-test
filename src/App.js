import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const shareData = {
    title: 'This is a custom title',
    text: 'This is a custom text entered by Sergiy',
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  };

  useEffect(() => {
    const btn = document.querySelector('button');
    const resultPara = document.querySelector('.result');
    // Must be triggered some kind of "user activation"
    btn.addEventListener('click', async () => {
      try {
        await navigator.share(shareData);
        resultPara.textContent = 'MDN shared successfully'
      } catch(err) {
        resultPara.textContent = 'Error: ' + err
      }
    });
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button>Share file</button>
        <div className="result">

        </div>
      </header>
    </div>
  );
}

export default App;
