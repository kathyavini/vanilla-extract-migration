import { useState } from 'react';
import { motion } from 'framer-motion';
import { button, badge, divider } from '../styles/style.css';
import { stack } from '../styles/recipes.css';
import {
  responsiveContainer,
  tableRow,
  expandable,
  textbox,
} from './CartSummary.css';

type ExpandableRowProps = {
  children?: JSX.Element;
};

function ExpandableRow({ children }: ExpandableRowProps) {
  const [expanded, setExpanded] = useState(false);
  const [textContent, setTextContent] = useState('');

  const toggleExpanded = () => {
    setExpanded((prev) => !prev);
  };

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setTextContent(event.target.value);
  }

  return (
    <motion.div layout>
      <motion.div layout className={expandable} onClick={toggleExpanded}>
        {children}
        <p>{expanded ? '-' : '+'}</p>
      </motion.div>
      {expanded && (
        <motion.textarea
          className={textbox}
          onChange={(event) => handleChange(event)}
          value={textContent}></motion.textarea>
      )}
    </motion.div>
  );
}

export function CartSummary() {
  return (
    <div className={responsiveContainer}>
      {/* Left section after breakpoint */}
      <div className={stack()}>
        <ExpandableRow>
          <p>Leave a note with your order</p>
        </ExpandableRow>
        <div className={badge}>
          <p>Your order qualifies for Free Domenstic Shipping!</p>
          <p>(Excludes International)</p>
        </div>
      </div>
      {/* Right section after breakpoint */}
      <div className={stack()}>
        <div className={stack()}>
          <div className={tableRow}>
            <p>subtotal</p>
            <p>$87.00</p>
          </div>
          <div className={tableRow}>
            <p>tax</p>
            <p>Calculated at checkout</p>
          </div>
          <div className={tableRow}>
            <p>shipping</p>
            <p>FREE</p>
          </div>
          <div className={divider.full} />
          <div className={tableRow}>
            <p>total</p>
            <h4 aria-label="cart-total">$87.00 CAD</h4>
          </div>
        </div>
        <nav className={stack({ gap: 'xs' })}>
          <button className={button.primary}>Continue Shopping</button>
          <button className={button.filled}>Checkout</button>
        </nav>
      </div>
    </div>
  );
}
