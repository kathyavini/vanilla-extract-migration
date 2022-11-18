import { useState } from 'react';
import { button, image, divider } from '../styles/style.css';
import { stack } from '../styles/recipes.css';
import { container } from './ShopItem.css';

interface ShopItemProps {
  imageMain: string;
  imageSecondary: string;
}

export function ShopItem({ imageMain, imageSecondary }: ShopItemProps) {
  const [imgAlt, setImgAlt] = useState(true);

  return (
    <div className={container}>
      <div
        className={stack({ gap: 'xs', align: 'center' })}
        onMouseEnter={() => setImgAlt(false)}
        onMouseLeave={() => setImgAlt(true)}>
        <img className={image} src={imgAlt ? imageSecondary : imageMain} />
        <h2>Item name</h2>
        <h3>Item description</h3>
        <div className={divider.small} />
        <p>$14.00 CAD</p>
        <button className={button.animated}>Add to Cart</button>
      </div>
    </div>
  );
}
