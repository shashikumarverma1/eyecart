import { useContext, useState } from "react";
import { CartInFo } from "../context/cart";
import "./Card.css"; 

function Card({ data }) {
  const [id, setId] = useState('');
  const { cartData, setCartData } = useContext(CartInFo);

  return (
    <div
      className="card"
      onMouseEnter={() => setId(data._id)}
      onMouseLeave={() => setId('')}
    >
      <img
        src="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYIZuxWur1W4fAT6z3ejk?alt=media&token=7dca264f-c345-4cfc-93a8-60217a53f66a"
        alt="Logo"
      />
      <div className="card-content">
        <p className="card-title">{data.title}</p>
        <p className="card-description">{data?.description.slice(0, 25)}</p>
        <p className="card-price">$ {data.price}</p>
        {id === data._id && (
          <h1 onClick={() => setCartData([...cartData, data])} className="card-add-to-cart">
            {cartData.filter((e) => e._id === id).length === 0 ? (
              <span>Add to cart</span>
            ) : (
              <span>Remove from cart</span>
            )}
          </h1>
        )}
      </div>
    </div>
  );
}

export default Card;
