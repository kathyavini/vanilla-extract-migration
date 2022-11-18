import { useState } from 'react';
import './styles/global.css';
import { lightTheme, darkTheme } from './styles/theme.css';
import { button, badge } from './styles/style.css';
import { stack, row } from './styles/recipes.css';
import {
  appContainer,
  welcomeScreen,
  pageTitle,
  pageSubtitle,
  scrollPrompt,
  main,
  pageElements,
} from './styles/App.css';

import { ShopItem } from './components/ShopItem';
import { RecipeForm } from './components/RecipeForm';
import { CartSummary } from './components/CartSummary';

import puer from './assets/puer.jpg';
import puer2 from './assets/puer2.jpg';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <div
      id="app"
      className={[isDarkTheme ? darkTheme : lightTheme, appContainer].join(
        ' '
      )}>
      <div className={welcomeScreen}>
        <div>
          <h1 className={pageTitle}>Chah</h1>
          <h2 className={pageSubtitle}>(once again)</h2>
        </div>

        <a href="#main">
          <button className={[button.filled, scrollPrompt].join(' ')}>
            Continue
          </button>
        </a>
      </div>

      <main
        id="main"
        className={[main, stack({ gap: 'lg', align: 'center' })].join(' ')}>
        <h1>Welcome to my Vanilla Extract Playground</h1>
        <p>
          Here I'll be migrating some component styling from a previous project{' '}
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
            to see how differently the React code ends up looking using these
            two libraries!
          </p>
        </div>

        <p>
          This page also contains some general page elements to play around with
          Vanila Extract themeing.
        </p>
        <button
          className={button.animated} //
          onClick={() => setIsDarkTheme((prev) => !prev)} //
        >
          Toggle Dark Mode / Light Mode
        </button>

        <ShopItem imageMain={puer} imageSecondary={puer2} />

        <CartSummary />

        <section className={pageElements}>
          <h2>Page Elements to Style:</h2>
          <div className={stack({ gap: 'lg' })}>
            <div>
              <h3>Stacks and Buttons:</h3>
              <p>
                The container for this section is a stack with gap set to "lg"
              </p>
            </div>

            <div className={stack()}>
              <p>
                This stack has gap default settings so gap "sm" and align
                "stretch".
              </p>
              <button className={button.primary}>Primary button</button>
            </div>
            <div className={stack({ gap: 'md', align: 'center' })}>
              <p>This stack has gap "md".</p>
              <p>
                This stack also has "centered: true" applied. Note how the
                button doesn't stretch to fill the container.
              </p>
              <button className={button.filled}>Filled button</button>
            </div>
            <div className={stack({ gap: 'xs', align: 'end' })}>
              <p>
                This stack has gap "xs" and align: "end". I'll supply some extra
                text so that alignment becomes visible.
              </p>
              <button className={button.animated}>Animated button</button>
            </div>
          </div>
          <h3>Some form styling:</h3>
          <RecipeForm />
        </section>
      </main>
    </div>
  );
}

export default App;
