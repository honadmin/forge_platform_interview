import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <p>Welcome to Forge Platform Interview</p>
      </header>
      <form>
        <label>
        Search
        <input type="text" name="search" />
        </label>
      </form>
      <table>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>Interview</td>
            <td>Do interview</td>
          </tr>
      </table>
    </div>
  );
}

export default App;
