// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import { bankOne, bankTwo } from './soundBank';

function App() {
  const [display, setDisplay] = useState('Wave');
  const [currentBank, setCurrentBank] = useState('bankOne');
  const [bankName, setBankName] = useState('bankOne');
  

  

  const playSound = (key, id) => {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
    setDisplay(id);
  };

  const handleKeyPress = (event) => {
    const pad = currentBank.find(d => d.key === event.key.toUpperCase());
    if (pad) {
      playSound(pad.key, pad.id);
    }
  };

  const switchBank = () => {
    if (currentBank === bankOne) {
      setCurrentBank(bankTwo);
      setBankName('Bank Two');
    } else {
      setCurrentBank(bankOne);
      setBankName('Bank One');
      
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentBank]);

  return (
    <div className="container container-main">
      

    <div id="drum-machine" className="container text-center">
   
    <div className="row ">
    <div className='bankName alert alert-secondary col-md-6'>
      <h3>Active Bank</h3>
       {bankName};
       <div id="display">{display}</div>
       </div>
       <div className='col-md-6'>
       <button onClick={switchBank}>Switch Bank</button>
       </div>
       </div>

       <div className="drum-pads">
        {currentBank.map(pad => (
          <div
            key={pad.key}
            id={pad.id}
            className="drum-pad btn btn-dark"
            onClick={() => playSound(pad.key, pad.id)}
          >
            {pad.key}
            <audio className="clip" id={pad.key} src={pad.url}></audio>
          </div>
          
        ))}

</div>

</div>
 
</div>
      

 
        
        
        
        
      

     
     
    
    
  );
}

export default App;
