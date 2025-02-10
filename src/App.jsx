/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Header from './components/Header';

function App() {
  const [numbers, setNumbers] = useState(0);
  const [message, setMessage] = useState("");

  function plusClick() {
      if (numbers < 10) {
          setNumbers(numbers + 1);
          setMessage(""); // Reset pesan jika masih dalam batas
      } else {
          setMessage("Done!");
      }
  }

  function minusClick() {
      if (numbers > 0) {
          setNumbers(numbers - 1);
          setMessage(""); // Reset pesan jika masih dalam batas
      } else {
          setMessage("Done!");
      }
  }

  function resetClick() {
      setNumbers(0);
      setMessage(""); // Reset pesan ke kosong
  }

  return (
      <div className="container">
          <h1>Counter App</h1>

          <div className="button-container">

              <button 
                  className="minus-btn" 
                  onClick={minusClick}
                  disabled={message === "Done!"}>
                  -
              </button>

              <span className="counter-number">{message || numbers}</span>

              <button 
                  className="plus-btn" 
                  onClick={plusClick}
                  disabled={message === "Done!"}>
                  +
              </button><br/>

              <button 
                  className="reset-btn" 
                  onClick={resetClick} 
                  disabled={message !== "Done!"}>
                  Reset
              </button>
          </div>
      </div>
  );
}

export default App
