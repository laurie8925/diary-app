import React, { useState, useEffect } from 'react';
import Prompt from "./datas/prompts.json"
import './App.css';
import Flower from "./components/flower"

function App() {
  const [text, setText] = useState('');
  const [savedText, setSavedText] = useState('');
  const [savedLists, setSavedLists] = useState([]);
  const [promptState, setPromptState] = useState({
    currentPrompt: '',
    remainingPrompts: [],
  });

  useEffect(() => {
    const shuffledPrompt = shuffleArray([...Prompt]); 
    setPromptState({
      currentPrompt: shuffledPrompt[0],
      remainingPrompts: shuffledPrompt.slice(1),
    }); 
  },[]); 
  const shuffleArray = (array) => { //randomized array 
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSaveText = () => {
    const { remainingPrompts } = promptState;
    let nextPrompt = '';
    let newRemainingPrompts = [];

    if (remainingPrompts.length > 0) {
      nextPrompt = remainingPrompts[0];
      newRemainingPrompts = remainingPrompts.slice(1);
    } else {
      const reshuffledPrompts = shuffleArray([...Prompt]);
      nextPrompt = reshuffledPrompts[0];
      newRemainingPrompts = reshuffledPrompts.slice(1);
    }

    setPromptState({
      currentPrompt: nextPrompt,
      remainingPrompts: newRemainingPrompts,
    });
    setSavedText(text);
    setSavedLists([...savedLists, text]);
    setText('');
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Mossy Memos</h1>
      </header>
      
      <main>
    
          <h2 className="prompt">{promptState.currentPrompt}</h2>
          <textarea
            className="textarea"
            rows="4"
            cols="50"
            placeholder="Write your thoughts here..."
            value={text}
            onChange={handleTextChange}
          ></textarea>
          <button className="button" onClick={handleSaveText}>Enter</button>
          {savedText && (
            <div>
              <h3>Saved Text:</h3>
              <p>{savedText}</p>
            </div>
          )}

        </section>
        <section>
          {savedLists.map((answer,index)=> (
            <Flower key={index} savedText={answer} flowerIndex={index}/>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;