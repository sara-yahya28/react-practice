import { useState } from "react";
import './CartItem.css';
export default function CartItem({ price, productName }) {
  const [quantity, setCount] = useState(1);

  const increase = () => setCount(quantity + 1);

  const decrease = () => {
    if (quantity > 1) setCount(quantity - 1);
  };

  return (
    <div className="product">
      <h3>{productName}</h3>
      <p>السعر للوحدة: {price} دولار</p>
      <p>العدد: {quantity}</p>

      <button onClick={increase}>زيادة +</button>
      <button onClick={decrease}>إنقاص −</button>

      <p className="total">السعر الإجمالي: {price * quantity} دولار</p>
    </div>
  );
}