import { isEqual } from 'lodash';
import {memo} from 'react';

import ProductItem from "../ProductItem";

const ProductList = ({ items }) => {
  console.log("list", items);
  return (
    <>
      {items.map((item, key) => (
        <ProductItem item={item} key={key} />
      ))}
    </>
  );
};

// export default memo(ProductList, isEqual);
export default ProductList;
