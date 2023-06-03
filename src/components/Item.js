import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(false);

  const liClass = cart ? "in-cart" : "";

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={() => setCart(!cart)} className="add">
        {cart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
