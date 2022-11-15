import { useState } from 'react';
import './styles/global.css';
import { lightTheme, darkTheme } from './styles/theme.css';
import { button, badge } from './styles/style.css';

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

      <div className={badge} style={{ width: 'min(80vw, 40rem)' }}>
        <p>
          Make sure you{' '}
          <a href="https://github.com/kathyavini/vanilla-extract-migration/blob/main/src/App.tsx">
            view source on App.tsx
          </a>{' '}
          to see how differently the React code ends up looking using these two
          libraries!
        </p>
      </div>

      <button
        className={button.animated} //
        onClick={() => setIsDarkTheme((prev) => !prev)} //
      >
        Toggle Dark Mode / Light Mode
      </button>
    </div>
  );
}

export default App;
