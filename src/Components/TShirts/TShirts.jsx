import React from "react";
import "./TShirts.css";

const TShirts = ({ tshirt, handleAddToCart }) => {
  const { picture, name, price } = tshirt;

  return (
    <div className="t-shirts">
      <img src={picture} alt="" />
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <button onClick={() => handleAddToCart(tshirt)}>Buy Now </button>
    </div>
  );
};

export default TShirts;
