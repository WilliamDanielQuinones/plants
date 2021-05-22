/** @jsxImportSource theme-ui */
import React from 'react';
import { Button } from 'rebass';
import logo from '../../assets/plant.svg';
import './styles.scss';

function App() {
  return (
    <div className="App" 
      sx={{
        fontWeight: 'bold',
        fontSize: 4, // picks up value from `theme.fontSizes[4]`
        backgroundColor: 'primary', // picks up value from `theme.colors.primary`
      }}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the plant zone
        </p>
        <Button sx={{variant: 'buttons.primary'}}>Push</Button>
      </header>
    </div>
  );
}

export default App;
