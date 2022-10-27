import React from "react";
import { useState } from "react";
import "./Cart.css";
import Dash from "./Dash";
import { products } from "./data";
import Product from "./Product";

function Cart() {
  const [total, setTotal] = useState(0);

  const handleAdd = (price) => {
    setTotal(total + price);
  };

  const handleRemove = (price) => {
    setTotal(total - price);
  };

  return (
    <>
      <Dash total={total} />
      <div className="parent">
        <h1 className="parent-header">Cart</h1>
        <div className="products">
          {products.map((product, i) => (
            <Product
              handleAdd={handleAdd}
              handleRemove={handleRemove}
              product={product}
              key={i}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Cart;
