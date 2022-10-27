import React from "react";
import { useState } from "react";
import { BsFillCartPlusFill, BsFillCartDashFill } from "react-icons/bs";

function Product({ product, handleAdd, handleRemove }) {
  const { name, price, img } = product;
  const [added, setAdded] = useState(false);

  const handleClickAdd = () => {
    setAdded(true);
    handleAdd(price);
  };

  const handleClickRemove = () => {
    setAdded(false);
    handleRemove(price);
  };

  return (
    <div className="product-parent">
      <img className="product-img" src={img} alt="pro-img" />
      <h1 className="product-name">{name}</h1>
      <h2 className="product-price">{price}</h2>
      <div className="buttons">
        {added ? (
          <button className="btn btn-remove" onClick={handleClickRemove}>
            <BsFillCartDashFill />
          </button>
        ) : (
          <button className="btn btn-add" onClick={handleClickAdd}>
            <BsFillCartPlusFill />
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;
