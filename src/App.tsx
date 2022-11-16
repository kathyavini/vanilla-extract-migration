import { useState } from 'react';
import './styles/global.css';
import { lightTheme, darkTheme } from './styles/theme.css';
import { button, badge } from './styles/style.css';
import { stack, row } from './styles/recipes.css';

import { ShopItem } from './components/ShopItem';
import { RecipeForm } from './components/RecipeForm';
import { CartSummary } from './components/CartSummary';

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
            view the source of App.tsx
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

      <CartSummary />

      <ShopItem />

      <div className={stack({ gap: 'lg', align: 'center' })}>
        <div>
          <h2>Different Kinds of Stack elements:</h2>
          <p>
            Note: The container for this whole section is a stack with gap set
            to "lg"
          </p>
        </div>

        <div className={stack()}>
          <p>
            This stack has gap default settings so gap "sm" and align "stretch".
          </p>
          <button className={button.primary}>
            Primary button inside stack
          </button>
        </div>
        <div className={stack({ gap: 'md', align: 'center' })}>
          <p>This stack has gap "md".</p>
          <p>
            This stack also has "centered: true" applied. Note how the button
            doesn't stretch to fill the container.
          </p>
          <button className={button.filled}>Filled button inside stack</button>
        </div>
        <div className={stack({ gap: 'xs', align: 'end' })}>
          <p>
            This stack has gap "xs" and align: "end". But I'll need to supply
            some extra text for that alignment to become visible.
          </p>
          <button className={button.animated}>
            Animated button inside stack
          </button>
        </div>
      </div>

      <RecipeForm />
    </div>
  );
}

export default App;
