import { isEqual } from 'lodash';
import {memo} from 'react';
import { Link } from "react-router-dom";
//context api

import AddToCartButton from "../AddToCartButton";

const ProductItem = ({ item }) => {
  console.log("Product Item", item)
  return (
    <>
      <section className="col-sm-3">
        <div className="border p10 center m10">
          <img
            src={`assest/img/${item.img}`}
            className="img-responsive height250"
            alt="pro"
          />
          <h2>{item.name}</h2>
          <p>Price: Rs.{item.price}</p>
          <div>
            <Link to={`/detail/${item.id}`}>
              <button type="button" className="btn btn-outline-primary mr10">
                View
              </button>
            </Link>

            <AddToCartButton id={item.id} />
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(ProductItem, isEqual);
// export default ProductItem;
