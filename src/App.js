import React, { useState, useEffect } from 'react';
import Prompt from "./datas/prompts.json"
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [savedText, setSavedText] = useState('');
  const [currentPrompt, setCurrentPrompt] = useState('');


  useEffect(() => {
    const randomPrompt = Prompt[Math.floor(Math.random() * Prompt.length)];
    setCurrentPrompt(randomPrompt);
  }, []);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSaveText = () => {
    setSavedText(text);
    setText('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mossy Memos</h1>
      </header>
      
      <main>
        <section>
          <h2>{currentPrompt}</h2>
          <textarea
            rows="4"
            cols="50"
            placeholder="Write your thoughts here..."
            value={text}
            onChange={handleTextChange}
          ></textarea>
          <button onClick={handleSaveText}>Enter</button>
          {savedText && (
            <div>
              <h3>Saved Text:</h3>
              <p>{savedText}</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;