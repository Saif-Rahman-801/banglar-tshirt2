import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveCart }) => {
  let messages;
  if (cart.length === 0) {
    messages = <p>please add some products</p>;
  } else {
    messages = <p>Thanks for buying</p>;
  } // conditional rendaring
  return (
    <div>
      <h2 className={cart.length === 1 ? "blue" : "yellow"}>
        Order Summery:{cart.length}{" "}
      </h2>
      <p className={`bold ${cart.length === 3 ? "yellow" : "purple"}`}>
        Something
      </p>
      {messages}
      {cart.length < 2 ? (
        <span className="purple">kinte parbe</span>
      ) : (
        <span>Fokiraaa</span>
      )}
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}
          <button onClick={() => handleRemoveCart(tshirt._id)}>X</button>
        </p>
      ))}
      {cart.length === 2 && <p>Cashback available </p>}
      {cart.length === 3 || <h2>3 ta tw hoilw na </h2>}
    </div>
  );
};

export default Cart;
/*
 *conditional rendaring:-
 *ternary:- " 'condition' ? 'for true':'for false' "
 *Logical &&
 *Logical || (or)
 */

/*
 *Conditional Css class
 */
