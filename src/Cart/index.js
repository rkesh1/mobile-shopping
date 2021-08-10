import { useContext } from "react";
import ProductListContext from "../context/productListContext";
import "./style.scss";
const Cart = (props) => {
  const { cart, setCart } = useContext(ProductListContext);
  const xyz = "Cart page";

  const addItem = (id) => {
    const updatedCart = cart.map((item) => {
      if (id === item.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCart(updatedCart);
  };
  const decreseItem = (id) => {
    let updatedCart = cart.map((item) => {
      if (id === item.id && item.quantity) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    updatedCart = updatedCart.filter((item) => item.quantity > 0);
    setCart(updatedCart);
  };
  const grandTotal = cart.reduce(
    (sum = 0, obj) => Number(sum) + Number(obj.price) * Number(obj.quantity),
    0
  );
  return (
    <section>
      <h3>{xyz}</h3>
      {cart.map((item, key) => (
        <div className="row m20 pt20 pb20 border-bottom" key={key}>
          <div className="col-sm-2 center">
            <img
              src={`/assest/img/${item.img}`}
              alt="imag"
              className="max-width"
              height="150"
            />
          </div>
          <div className="col-sm-10">
            <h4>{item.name}</h4>
            <h5>
              <span>Price: Rs.</span>
              {item.price}
            </h5>
            <button
              type="button"
              className="btn btn-outline-success mr10"
              onClick={() => addItem(item.id)}
            >
              {" "}
              +{" "}
            </button>
            <span>{item.quantity}</span>
            <button
              type="button"
              className="btn btn-outline-success ml10"
              onClick={() => decreseItem(item.id)}
            >
              {" "}
              -{" "}
            </button>
            <div>
              <h5 className="right">
                Sub Total: Rs.{item.price * item.quantity}
              </h5>
            </div>
          </div>
        </div>
      ))}
      {cart.length ? (
        <div className="row">
          <h5 className="right">Grand Total: Rs.{grandTotal}</h5>
        </div>
      ) : (
        <div className="center">
          <h3>No Item in Cart</h3>
        </div>
      )}
    </section>
  );
};
export default Cart;
