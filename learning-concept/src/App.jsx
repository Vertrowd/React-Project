import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Cart />
    </div>
  );
}

function Cart() {
  const [items, setItems] = useState(0);

  return (
    <div className="cart">
      <CartDisplay items={items} />
      <CartControls setItems={setItems} />
    </div>
  );
}

function CartDisplay({ items }) {
  return <h2>🛒 Items in Cart: {items}</h2>;
}

function CartControls({ setItems }) {
  return (
    <div className="controls">
      <button onClick={() => setItems(i => i + 1)}>Add Item</button>
      <button onClick={() => setItems(i => Math.max(0, i - 1))}>
        Remove Item
      </button>
    </div>
  );
}

export default App;
