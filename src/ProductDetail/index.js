import { useContext, useEffect, useState } from "react";
import axios from '../config/axios.config';
import ProductListContext from "../context/productListContext";
import AddToCartButton from "../components/AddToCartButton";

const ProductDetail = (props) => {
  const { id } = props.match.params;
  const [item, setItem] = useState({});
  const { products } = useContext(ProductListContext);

  useEffect(() => {
    let proDetail = products.find((im) => Number(im.id) === Number(id));
    if (proDetail) {
      setItem(proDetail);
    } else {
      axios.get(`/products/${id}`).then((res) => {
        console.log("resss", res);
        if (res.data) {
          setItem(res.data);
        }
      });
    }
  },[products,id]);

  const { name, price, img, feature } = item;
  const { color, screenSize, os, ram, storage, modelNumber } = feature || {};
  const imgUrl = `/assest/img/${img}`;
  const colorStr = color ? color.join(", ") : '';
  return (
    <>
      <div className="row mt30">
        <div className="col-sm-3">
          <img src={imgUrl} className="img-responsive max-width" alt="pro" />
        </div>
        <div className="col-sm-3">
          <h4>{name}</h4>
          <p>
            <span>Price</span> <span>{price}</span>
          </p>
          <p>
            <span>Model Number: </span>
            <span>{modelNumber}</span>
          </p>
          <p>
            <span>Color: </span>
            <span>{colorStr}</span>
          </p>
          <p>
            <span>Screen Size: </span>
            <span>{screenSize}</span>
          </p>
          <p>
            <span>Operating System: </span>
            <span>{os}</span>
          </p>
          <p>
            <span>RAM: </span>
            <span>{ram}</span>
          </p>
          <p>
            <span>Storage: </span>
            <span>{storage}</span>
          </p>
        </div>
        <div className="col-sm-3">
          <AddToCartButton id={id} />
        </div>
      </div>
    </>
  );
};
export default ProductDetail;
