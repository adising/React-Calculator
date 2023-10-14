// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
  background: linear-gradient(to right, #3498db, #2ecc71);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0; /* Remove default margin */
  padding: 0; /* Remove default padding */
`;

const Calculator = styled.div`
  background: #343a40;
  border-radius: 20px;
  padding: 20px;
  width: 200px; /* Adjust the width to maintain 2:3 ratio */
  height: 300px; /* Adjust the height for a 2:3 ratio */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: white;
  margin: 0; /* Remove default margin */
  padding: 0; /* Remove default padding */
`;

const Display = styled.div`
  background: #6610f2;
  border-radius: 20px 20px 0 0; /* Rounded top corners */
  padding: 10px;
  width: 100%;
  text-align: right;
  font-size: 24px;
  height: 60px; /* Set a fixed height for the blue region */
  overflow: hidden; /* Hide overflow text if it's too long */
`;

const Buttons = styled.div`
  background: #000;
  border-radius: 0 0 20px 20px; /* Rounded bottom corners */
  padding: 10px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const Button = styled.button`
  background: #000;
  border: none;
  border-radius: 10px;
  padding: 15px;
  font-size: 18px;
  color: white; /* White text */
  cursor: pointer;
`;

function App() {
  const [display, setDisplay] = useState('');
  const operators = ['+', '-', '*', '/'];

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setDisplay(eval(display).toString());
      } catch (error) {
        setDisplay('Error');
      }
    } else if (value === '⌫') { // Replace "C" with backspace icon
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <Container>
      <Calculator>
        <Display>{display}</Display>
        <Buttons>
          {[7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '+', '⌫', 0, '=', '-'].map((btn) => (
            <Button key={btn} onClick={() => handleButtonClick(btn)}>
              {btn}
            </Button>
          ))}
        </Buttons>
      </Calculator>
    </Container>
  );
}

export default App;

