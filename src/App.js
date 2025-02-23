import heart from './heart-breathing.gif';
import './App.css';
import React, {useState, useEffect} from 'react';
import quotes from './quotes.json';

function getRandomQuote(quotes){
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function App() {
  const [mode, setMode] = useState('calm');
  const [quote, setQuote] = useState(getRandomQuote(quotes));
  
  const backgroundcolor = mode === 'calm' ? 'lightblue' : 'pink';
  const textColor = mode === 'calm' ? 'black' : 'grey';

  const switchMode = () =>{
    if(mode === 'calm'){
      setMode('Excited');
    } else if(mode === 'Excited'){
      setMode('calm');
    }
  }
  
  const changeQuote = () => {
    setQuote(getRandomQuote(quotes));
  }

  useEffect(() => {
    console.log(mode)
  },[mode, quote])

  return (
    <div id="overall" style={{backgroundColor:backgroundcolor, color:textColor}}>
      <h1 class="text">Your Quote generator</h1>
      <img src={heart} alt='heart image'/>
      <p class="text">I know you're probably going through a tough time, and it's okay to be stressed. Don't be harsh to youself. These quotes are meant to help you stay calm. Click switchMode button to turn clam(blue) mode to excited(pink) mode </p>
      <div class="buttons">
      <button onClick={switchMode}>Switch mode</button>
      <button onClick={changeQuote}>Change quote</button>
      </div>
      <h2 class="text">
        {quote.quote} <br/>
        {quote.author}
      </h2>
    </div>
  );
}

export default App;
