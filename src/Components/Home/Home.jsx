import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TShirts from "../TShirts/TShirts";
import Cart from "../Cart/Cart";
import "./Home.css";
import { toast } from "react-hot-toast";

const Home = () => {
  const tshirts = useLoaderData();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (tshirt) => {
    const exists = cart.find((ts) => ts._id === tshirt._id);
    if (exists) {
      toast('you have already added one')
    } else {
      const newCart = [...cart, tshirt];
      setCart(newCart);
    }
    /* const newCart = [...cart, tshirt];
    setCart(newCart); */
  };

  const handleRemoveCart = (idRemove) => {
    // console.log(idRemove);
    const remaining = cart.filter((tshirt) => tshirt._id !== idRemove);
    setCart(remaining);
  };

  return (
    <div className="home-container">
      <div className="tshirts-container">
        {tshirts.map((tshirt) => (
          <TShirts
            key={tshirt._id}
            tshirt={tshirt}
            handleAddToCart={handleAddToCart}
          ></TShirts>
        ))}
      </div>
      <div className="cart-contaier">
        <Cart cart={cart} handleRemoveCart={handleRemoveCart} />
      </div>
    </div>
  );
};

export default Home;
