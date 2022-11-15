import { useState } from 'react';
import './styles/global.css';
import { lightTheme, darkTheme } from './styles/theme.css';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <div id="app" className={isDarkTheme ? darkTheme : lightTheme}>
      <h1>Welcome to my Vanilla Extract Playground</h1>
      <p>
        Here I'll be mostly migrating my previous project{' '}
        <a href="https://kathyavini.github.io/shopping-cart/#/">
          Shopping Cart
        </a>
        , written with Styled-Components, into Vanilla Extract.
      </p>

      <button //
        onClick={() => setIsDarkTheme((prev) => !prev)} //
      >
        Toggle Dark Mode / Light Mode
      </button>
    </div>
  );
}

export default App;
